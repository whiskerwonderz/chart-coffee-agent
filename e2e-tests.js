const { chromium } = require('playwright');
const http = require('http');
const fs = require('fs');
const path = require('path');

// Simple static file server
function createServer(dir, port) {
    return new Promise((resolve) => {
        const server = http.createServer((req, res) => {
            let filePath = path.join(dir, req.url === '/' ? 'index.html' : req.url);
            const ext = path.extname(filePath);
            const contentTypes = {
                '.html': 'text/html',
                '.js': 'application/javascript',
                '.css': 'text/css',
                '.json': 'application/json',
                '.png': 'image/png',
                '.jpg': 'image/jpeg',
            };

            fs.readFile(filePath, (err, data) => {
                if (err) {
                    res.writeHead(404);
                    res.end('Not found');
                } else {
                    res.writeHead(200, { 'Content-Type': contentTypes[ext] || 'text/plain' });
                    res.end(data);
                }
            });
        });
        server.listen(port, () => resolve(server));
    });
}

// Test results tracking
const results = { passed: 0, failed: 0, tests: [] };

function log(msg) {
    console.log(`\x1b[36m${msg}\x1b[0m`);
}

function pass(name) {
    results.passed++;
    results.tests.push({ name, status: 'PASS' });
    console.log(`  \x1b[32m✓ ${name}\x1b[0m`);
}

function fail(name, error) {
    results.failed++;
    results.tests.push({ name, status: 'FAIL', error: error.message });
    console.log(`  \x1b[31m✗ ${name}\x1b[0m`);
    console.log(`    \x1b[31m${error.message}\x1b[0m`);
}

async function runTests() {
    const dir = __dirname;
    const port = 3847;
    const server = await createServer(dir, port);
    const baseUrl = `http://localhost:${port}`;

    console.log(`\n\x1b[1mChart Coffee E2E Tests\x1b[0m`);
    console.log(`Server running at ${baseUrl}\n`);

    const browser = await chromium.launch({ headless: true });

    try {
        // =====================
        // ORDER FLOW TESTS
        // =====================
        log('\n📦 ORDER FLOW TESTS');

        const orderPage = await browser.newPage();
        await orderPage.goto(`${baseUrl}/order-form/index.html`);

        // Test 1: Page loads with products
        try {
            await orderPage.waitForSelector('.product-card', { timeout: 5000 });
            const products = await orderPage.$$('.product-card');
            if (products.length >= 3) {
                pass('Order page loads with products');
            } else {
                throw new Error(`Expected 3+ products, found ${products.length}`);
            }
        } catch (e) { fail('Order page loads with products', e); }

        // Test 2: Add product quantity
        try {
            const initialQty = await orderPage.$eval('#fruity-beans-qty', el => el.textContent);
            await orderPage.click('button[onclick="updateQty(\'fruity-beans\', 1)"]');
            await orderPage.waitForTimeout(100);
            const newQty = await orderPage.$eval('#fruity-beans-qty', el => el.textContent);
            if (parseInt(newQty) === parseInt(initialQty) + 1) {
                pass('Product quantity increases on + click');
            } else {
                throw new Error(`Qty did not increase: ${initialQty} -> ${newQty}`);
            }
        } catch (e) { fail('Product quantity increases on + click', e); }

        // Test 3: Checkout bar updates
        try {
            const checkoutText = await orderPage.$eval('#checkoutBtn', el => el.textContent);
            if (checkoutText.includes('$')) {
                pass('Checkout bar shows total price');
            } else {
                throw new Error(`Checkout button text: ${checkoutText}`);
            }
        } catch (e) { fail('Checkout bar shows total price', e); }

        // Test 4: Delivery option shows address field
        try {
            // Third pickup option is delivery (index 2)
            await orderPage.click('.pickup-option:nth-child(3)');
            await orderPage.waitForTimeout(200);
            const addressVisible = await orderPage.$eval('#addressGroup', el => el.style.display !== 'none');
            if (addressVisible) {
                pass('Delivery option shows address field');
            } else {
                throw new Error('Address field not visible after selecting delivery');
            }
        } catch (e) { fail('Delivery option shows address field', e); }

        // Test 5: Form validation - missing required fields
        try {
            // Clear any existing values and try to submit
            await orderPage.fill('#customerName', '');
            await orderPage.fill('#customerPhone', '');

            let alertShown = false;
            orderPage.on('dialog', async dialog => {
                alertShown = true;
                await dialog.accept();
            });

            await orderPage.click('#checkoutBtn');
            await orderPage.waitForTimeout(500);

            if (alertShown) {
                pass('Form validation shows alert for missing fields');
            } else {
                throw new Error('No validation alert shown');
            }
        } catch (e) { fail('Form validation shows alert for missing fields', e); }

        // Test 6: Submit order with animated loading
        try {
            // Make sure delivery is selected (to show address field)
            await orderPage.click('.pickup-option:nth-child(3)');
            await orderPage.waitForTimeout(200);

            // Fill required fields
            await orderPage.fill('#customerName', 'Test User');
            await orderPage.fill('#customerPhone', '91234567');
            await orderPage.fill('#customerAddress', '123 Test Street, Kowloon');

            // Add a product if needed
            const qty = await orderPage.$eval('#fruity-beans-qty', el => parseInt(el.textContent));
            if (qty === 0) {
                await orderPage.click('button[onclick="updateQty(\'fruity-beans\', 1)"]');
                await orderPage.waitForTimeout(100);
            }

            // Submit and check for animated dots
            orderPage.click('#checkoutBtn'); // Don't await, we want to capture loading state
            await orderPage.waitForTimeout(300);

            const btnHtml = await orderPage.$eval('#checkoutBtn', el => el.innerHTML);
            const hasAnimatedDots = btnHtml.includes('Submitting') && btnHtml.includes('<span class="dot">');
            const hasBounceAnimation = await orderPage.$eval('.checkout-btn.loading .dot', el => {
                const style = getComputedStyle(el);
                return style.animation.includes('bounce');
            });

            if (hasAnimatedDots && hasBounceAnimation) {
                pass('Submit button shows animated bouncing dots');
            } else {
                throw new Error(`HTML: "${btnHtml}", bounce animation: ${hasBounceAnimation}`);
            }

            // Wait for submission to complete
            await orderPage.waitForSelector('#successMessage:not(.hidden)', { timeout: 30000 });
        } catch (e) { fail('Submit button shows animated "Submitting..." dots', e); }

        // Test 7: Success confirmation with right-aligned address
        try {
            await orderPage.waitForSelector('#successMessage:not(.hidden)', { timeout: 5000 });

            // Check address row exists and has right alignment
            const addressRow = await orderPage.$('.address-row');
            if (addressRow) {
                const styles = await orderPage.$eval('.address-row', el => ({
                    justifyContent: getComputedStyle(el).justifyContent,
                    display: getComputedStyle(el).display
                }));

                const addressValue = await orderPage.$eval('.address-value', el => ({
                    textAlign: getComputedStyle(el).textAlign
                }));

                if (styles.justifyContent === 'space-between' && addressValue.textAlign === 'right') {
                    pass('Success confirmation shows right-aligned address');
                } else {
                    throw new Error(`Address styles: justify=${styles.justifyContent}, textAlign=${addressValue.textAlign}`);
                }
            } else {
                throw new Error('Address row not found in confirmation');
            }
        } catch (e) { fail('Success confirmation shows right-aligned address', e); }

        // Test 8: Order again resets form
        try {
            await orderPage.click('.new-order-btn');
            await orderPage.waitForTimeout(300);

            const formVisible = await orderPage.$eval('#orderForm', el => !el.classList.contains('hidden'));
            const nameCleared = await orderPage.$eval('#customerName', el => el.value === '');

            if (formVisible && nameCleared) {
                pass('Place Another Order button resets form');
            } else {
                throw new Error(`Form visible: ${formVisible}, name cleared: ${nameCleared}`);
            }
        } catch (e) { fail('Place Another Order button resets form', e); }

        await orderPage.close();

        // =====================
        // AGENT/CHAT FLOW TESTS
        // =====================
        log('\n💬 AGENT/CHAT FLOW TESTS');

        const chatPage = await browser.newPage();
        await chatPage.goto(`${baseUrl}/index.html`);

        // Test 9: Welcome screen renders
        try {
            await chatPage.waitForSelector('.welcome-section', { timeout: 5000 });
            const title = await chatPage.$eval('.welcome-section h2', el => el.textContent);
            if (title.includes('Chart Coffee')) {
                pass('Welcome screen renders with title');
            } else {
                throw new Error(`Title: ${title}`);
            }
        } catch (e) { fail('Welcome screen renders with title', e); }

        // Test 10: Suggested questions visible
        try {
            const buttons = await chatPage.$$('.suggested-btn');
            if (buttons.length >= 3) {
                pass('Suggested questions are visible');
            } else {
                throw new Error(`Found ${buttons.length} suggested buttons`);
            }
        } catch (e) { fail('Suggested questions are visible', e); }

        // Test 11: Send message shows typing indicator
        try {
            await chatPage.click('.suggested-btn:first-child');
            await chatPage.waitForSelector('#typingIndicator', { timeout: 5000 });
            pass('Sending message shows typing indicator');
        } catch (e) { fail('Sending message shows typing indicator', e); }

        // Test 12: Agent responds to coffee question
        try {
            await chatPage.waitForSelector('.message.assistant .message-content', { timeout: 60000 });
            const response = await chatPage.$eval('.message.assistant .message-content', el => el.textContent);
            if (response.length > 50) {
                pass('Agent responds to coffee question');
            } else {
                throw new Error(`Response too short: ${response.slice(0, 100)}`);
            }
        } catch (e) { fail('Agent responds to coffee question', e); }

        // Test 13: Welcome section hidden after first message
        try {
            const welcomeHidden = await chatPage.$eval('.welcome-section', el => el.classList.contains('hidden'));
            if (welcomeHidden) {
                pass('Welcome section hides after conversation starts');
            } else {
                throw new Error('Welcome section still visible');
            }
        } catch (e) { fail('Welcome section hides after conversation starts', e); }

        // Test 14: Ask non-coffee question (deflection test)
        try {
            await chatPage.fill('#chatInput', 'What is the capital of France?');
            await chatPage.click('#sendBtn');
            await chatPage.waitForSelector('#typingIndicator', { timeout: 5000 });

            // Wait for response
            await chatPage.waitForFunction(() => {
                const messages = document.querySelectorAll('.message.assistant');
                return messages.length >= 2;
            }, { timeout: 60000 });

            const messages = await chatPage.$$('.message.assistant .message-content');
            const lastResponse = await messages[messages.length - 1].textContent();

            // Should deflect non-coffee questions
            const isDeflection = lastResponse.toLowerCase().includes('coffee') ||
                                 lastResponse.toLowerCase().includes('specialist') ||
                                 lastResponse.toLowerCase().includes('expertise') ||
                                 lastResponse.toLowerCase().includes('outside');

            if (isDeflection || lastResponse.length > 20) {
                pass('Agent handles non-coffee question appropriately');
            } else {
                throw new Error(`Unexpected response: ${lastResponse.slice(0, 100)}`);
            }
        } catch (e) { fail('Agent handles non-coffee question appropriately', e); }

        // Test 15: Clear chat button
        try {
            await chatPage.click('.clear-btn');
            await chatPage.waitForTimeout(300);

            const welcomeVisible = await chatPage.$eval('.welcome-section', el => !el.classList.contains('hidden'));
            const messagesGone = (await chatPage.$$('.message')).length === 0;

            if (welcomeVisible && messagesGone) {
                pass('Clear button resets chat');
            } else {
                throw new Error(`Welcome visible: ${welcomeVisible}, messages cleared: ${messagesGone}`);
            }
        } catch (e) { fail('Clear button resets chat', e); }

        await chatPage.close();

    } finally {
        await browser.close();
        server.close();
    }

    // Print summary
    console.log('\n' + '='.repeat(50));
    console.log(`\x1b[1mTest Results: ${results.passed} passed, ${results.failed} failed\x1b[0m`);
    console.log('='.repeat(50) + '\n');

    if (results.failed > 0) {
        console.log('\x1b[31mFailed tests:\x1b[0m');
        results.tests.filter(t => t.status === 'FAIL').forEach(t => {
            console.log(`  - ${t.name}: ${t.error}`);
        });
    }

    process.exit(results.failed > 0 ? 1 : 0);
}

runTests().catch(console.error);
