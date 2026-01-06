# Specialty Coffee RAG Agent - Project Scope

A Q Grader-vetted AI agent for specialty coffee knowledge, encompassing cupping, sensory analysis, green coffee evaluation, brewing science, and origin expertise.

---

## 1. Q Grader Knowledge Domains

The agent should cover all topics a certified Q Grader would know:

### Sensory Analysis
- Cupping protocols (SCA standard, Coffee Value Assessment)
- Flavor wheel navigation (110 attributes)
- Aroma identification (Le Nez du Café)
- Taste identification (sweet, sour, salty, bitter, umami)
- Organic acid recognition (citric, malic, acetic, phosphoric)
- Mouthfeel/body evaluation
- Defect identification in the cup

### Green Coffee Evaluation
- Visual defect identification (Category 1 & 2 defects)
- Green grading protocols (350g sample method)
- Moisture content standards (10-12%)
- Water activity measurement
- Screen size grading
- Density evaluation

### Coffee Origins & Terroir
- Growing regions (Bean Belt geography)
- Altitude impact (600-2000+ masl)
- Varietals (Bourbon, Typica, Geisha, SL28, Caturra, etc.)
- Processing methods (Washed, Natural, Honey, Anaerobic)
- Harvest seasons by region
- Flavor profiles by origin

### Roasting Fundamentals
- Roast levels and their impact
- First crack / second crack
- Development time ratio
- Roast defects (baked, scorched, underdeveloped)

### Brewing Science (Expanded)

#### Extraction Fundamentals
- Extraction theory (18-22% target)
- Contact time vs grind size relationship
- Temperature impact (90-96°C optimal)
- Agitation and turbulence effects

#### Water Chemistry (SCA Standards)
- TDS: Target 150 mg/L (range 75-250)
- Calcium Hardness: 50-175 ppm
- Total Alkalinity: 40-70 ppm
- pH: 6.5-7.5 (target 7.0)
- Magnesium vs Calcium effects on flavor
- Chlorine: 0 mg/L

#### Pour Over Methods
| Method | Ratio | Grind | Time | Notes |
|--------|-------|-------|------|-------|
| V60 | 1:15-1:17 | Medium-fine | 2:30-3:30 | Spiral pour, single pour or pulse |
| Chemex | 1:15-1:17 | Medium-coarse | 4:00-5:00 | Thick filter, clean cup |
| Kalita Wave | 1:15-1:17 | Medium | 3:00-4:00 | Flat bottom, forgiving |
| Origami | 1:15-1:17 | Medium | 2:30-3:30 | Versatile, accepts multiple filters |

#### Immersion Methods
| Method | Ratio | Grind | Time | Notes |
|--------|-------|-------|------|-------|
| French Press | 1:15-1:17 | Coarse | 4:00 + 5:00 settle | Hoffmann method recommended |
| AeroPress | 1:12-1:16 | Fine-medium | 1:00-2:00 | Inverted or standard |
| Clever Dripper | 1:15-1:17 | Medium | 2:00-3:00 steep | Hybrid immersion/percolation |
| Siphon | 1:15 | Medium | 1:00-1:30 | Theatrical, clean cup |

#### Espresso Parameters
| Style | Ratio | Dose | Yield | Time |
|-------|-------|------|-------|------|
| Ristretto | 1:1-1:1.5 | 18g | 18-27g | 25-30s |
| Traditional | 1:2-1:2.5 | 18g | 36-45g | 25-30s |
| Lungo | 1:3-1:4 | 18g | 54-72g | 35-45s |
| Turbo Shot | 1:2.5-1:3 | 18g | 45-54g | 15-20s |

#### Cold Brew
- **Concentrate ratio**: 1:4 to 1:5 (dilute before drinking)
- **Ready-to-drink ratio**: 1:10 to 1:14
- **Steep time**: 12-18 hours (refrigerated), 7-8 hours (room temp)
- **Grind**: Medium-coarse (kosher salt)
- **Dilution**: 1:1 to 2:1 concentrate to water
- **Storage**: Up to 2 weeks refrigerated

#### Troubleshooting Guide
| Problem | Cause | Fix |
|---------|-------|-----|
| Sour/acidic | Under-extraction | Grind finer, increase temp, extend time |
| Bitter/harsh | Over-extraction | Grind coarser, reduce temp, shorten time |
| Weak/watery | Low dose or ratio | Increase coffee, reduce water |
| Muddy/silty | Too fine grind | Coarsen grind, check filter |
| Channeling | Uneven puck | Better distribution, WDT tool |

---

## 2. Google Custom Search - Recommended Sites

### Tier 1: Primary Authority Sites (Must Include)
| Site | Domain | Content Type |
|------|--------|--------------|
| Specialty Coffee Association | sca.coffee | Standards, protocols, research |
| Coffee Quality Institute | coffeeinstitute.org | Q Grader resources, grading |
| World Coffee Research | worldcoffeeresearch.org | Varietals, sensory lexicon |
| Perfect Daily Grind | perfectdailygrind.com | Industry news, guides |
| Barista Hustle | baristahustle.com | Professional education |

### Tier 2: Quality Publications
| Site | Domain | Content Type |
|------|--------|--------------|
| Sprudge | sprudge.com | Coffee culture, news |
| Daily Coffee News | dailycoffeenews.com | Industry news |
| Coffee Review | coffeereview.com | Reviews, ratings |
| Barista Magazine | baristamagazine.com | Professional content |
| Roast Magazine | roastmagazine.com | Roasting industry |

### Tier 3: Educational Resources
| Site | Domain | Content Type |
|------|--------|--------------|
| Sweet Maria's Library | library.sweetmarias.com | Green coffee, home roasting |
| Cafe Imports Blog | cafeimports.com/blog | Origin info, sourcing |
| Royal Coffee | royalcoffee.com | Green grading, origins |
| Coffee Research | coffeeresearch.org | Scientific data |
| James Hoffmann (YouTube) | youtube.com/@jameshoffmann | Video guides |

### Tier 4: Scientific/Academic
| Site | Domain | Content Type |
|------|--------|--------------|
| ScienceDirect (coffee) | sciencedirect.com | Peer-reviewed research |
| PubMed (coffee) | pubmed.ncbi.nlm.nih.gov | Health/chemistry research |
| Coffee ad Astra | coffeeadastra.com | Scientific brewing research |

### Tier 5: Hong Kong & Asia-Pacific (Priority for Chart Coffee)
| Site | Domain | Content Type |
|------|--------|--------------|
| **Chart Coffee** | chart.coffee | Your brand, HK specialty |
| The Honeycombers HK | thehoneycombers.com/hong-kong | HK cafe guides, lifestyle |
| Zolima CityMag | zolimacitymag.com | HK coffee culture |
| SCMP Food & Drink | scmp.com/lifestyle/food-drink | HK coffee news |
| Time Out Hong Kong | timeout.com/hong-kong | Cafe reviews |
| Filtru Coffee Asia | discover.filtru.coffee/asia | Asian roaster database |
| Common Man Coffee | commonmancoffeeroasters.com | Singapore/HK roaster |
| European Coffee Trip | europeancoffeetrip.com | Global cafe guides (incl. Asia) |

### Tier 6: Brewing-Focused Sites
| Site | Domain | Content Type |
|------|--------|--------------|
| Prima Coffee | prima-coffee.com | Equipment guides, brewing |
| Home-Barista | home-barista.com | Espresso community |
| Coffee ad Astra | coffeeadastra.com | Brewing science |
| Hoffmann YouTube | youtube.com/@jameshoffmann | Video guides |
| Lance Hedrick | youtube.com/@LanceHedrick | Brewing tutorials |
| Timer.Coffee | timer.coffee | Open-source recipes |
| Third Wave Water | thirdwavewater.com | Water chemistry |

### HK-Specific Roasters to Reference
| Roaster | Notes |
|---------|-------|
| Chart Coffee | Your brand |
| Cupping Room | Pioneer, multiple locations |
| Urban Coffee Roasters | Direct sourcing |
| Craft Coffee Roaster | Ethiopia/Latin America focus |
| 18 Grams | Local staple |
| Sensory Zero | Specialty pioneer |
| Colour Brown | Roastery + cafe |

---

## 3. Free APIs Available

### Coffee-Specific APIs

| API | URL | Data Type | Auth |
|-----|-----|-----------|------|
| **CQI Coffee Database** | github.com/jldbc/coffee-quality-database | 1,312 arabica reviews with scores | None |
| **ThirdWaveCoffeeBase** | github.com/sanjananatraj/thirdwavecoffeebase | 50+ roasters, origins, beans | None |
| **Fake Coffee API** | fake-coffee-api.vercel.app | Product data for prototyping | None |
| **SampleAPIs Coffee** | sampleapis.com/api-list/coffee | Hot/iced coffee drinks | None |
| **Coffee-API** | github.com/fernandohg97/coffee-api | Beverage types, recipes | None |

### Brewing Recipe APIs
| API | URL | Data Type | Auth |
|-----|-----|-----------|------|
| **Timer.Coffee** | github.com/timercoffee | Open-source recipes, 14+ methods | None |
| Filtru Recipes | filtru.coffee | Community brewing guides | None |

### Commodity/Market APIs
| API | URL | Data Type |
|-----|-----|-----------|
| Commodities-API | commodities-api.com | Arabica/Robusta prices |

### Useful General APIs
| API | Use Case |
|-----|----------|
| Google Custom Search | Web search fallback |
| Wikipedia API | General coffee knowledge |

---

## 4. Scrapable Data Sources

### High-Value Datasets to Build Knowledge Base

#### A. Coffee Quality Institute Database (Priority)
- **Source**: [github.com/jldbc/coffee-quality-database](https://github.com/jldbc/coffee-quality-database)
- **Content**: 1,312 arabica + 28 robusta professional reviews
- **Fields**: Origin, variety, processing, altitude, scores (aroma, flavor, aftertaste, acidity, body, balance, uniformity, clean cup, sweetness, overall)
- **Format**: CSV, ready to use
- **License**: Open

#### B. World Coffee Research Sensory Lexicon
- **Source**: [worldcoffeeresearch.org/resources/sensory-lexicon](https://worldcoffeeresearch.org/resources/sensory-lexicon)
- **Content**: 110 flavor attributes with reference standards and intensity scores
- **Format**: PDF (needs extraction)
- **License**: Free download

#### C. SCA Cupping Protocols
- **Source**: [SCA Protocols PDF](https://www.scith.coffee/wp-content/uploads/2021/03/SCA-Protocols-_-Best-Practices.pdf)
- **Content**: Official cupping procedures, water standards, scoring
- **Format**: PDF
- **License**: Educational use

#### D. Coffee Review Archive
- **Source**: coffeereview.com
- **Content**: 17+ years of reviews, 2,451 coffees scored 94+
- **Fields**: Roaster, origin, score, tasting notes
- **Scraping**: Requires ethical scraping or partnership
- **Note**: Rich tasting note vocabulary

#### E. Sweet Maria's Coffee Library
- **Source**: [library.sweetmarias.com](https://library.sweetmarias.com)
- **Content**: Green coffee guides, origin profiles, processing methods
- **Format**: Web articles
- **License**: Educational reference

#### F. Cafe Imports Origin Maps & Guides
- **Source**: [cafeimports.com/blog/maps](https://www.cafeimports.com/north-america/blog/maps/)
- **Content**: Detailed origin maps, regional guides
- **Format**: PDFs, articles
- **License**: Free educational use

---

## 5. Knowledge Base Content Structure

### Recommended Document Categories

```
/knowledge-base
├── /sensory
│   ├── flavor-wheel-guide.md
│   ├── sensory-lexicon.md
│   ├── cupping-protocol.md
│   ├── organic-acids.md
│   └── defect-identification.md
├── /origins
│   ├── africa/
│   │   ├── ethiopia.md
│   │   ├── kenya.md
│   │   └── rwanda.md
│   ├── central-america/
│   │   ├── guatemala.md
│   │   ├── costa-rica.md
│   │   └── panama.md
│   ├── south-america/
│   │   ├── brazil.md
│   │   ├── colombia.md
│   │   └── peru.md
│   └── asia-pacific/
│       ├── indonesia.md
│       └── papua-new-guinea.md
├── /processing
│   ├── washed-process.md
│   ├── natural-process.md
│   ├── honey-process.md
│   └── experimental-fermentation.md
├── /green-coffee
│   ├── grading-standards.md
│   ├── defects-guide.md
│   ├── varietals-guide.md
│   └── storage-handling.md
├── /brewing
│   ├── extraction-theory.md
│   ├── water-chemistry.md
│   ├── grind-size-guide.md
│   ├── troubleshooting.md
│   ├── /espresso
│   │   ├── espresso-fundamentals.md
│   │   ├── dialing-in.md
│   │   ├── ristretto-lungo-turbo.md
│   │   ├── milk-steaming.md
│   │   └── latte-art-basics.md
│   ├── /pour-over
│   │   ├── v60-guide.md
│   │   ├── chemex-guide.md
│   │   ├── kalita-wave-guide.md
│   │   ├── origami-guide.md
│   │   └── hoffmann-v60-method.md
│   ├── /immersion
│   │   ├── french-press-guide.md
│   │   ├── hoffmann-french-press.md
│   │   ├── aeropress-guide.md
│   │   ├── aeropress-recipes.md
│   │   ├── clever-dripper.md
│   │   └── siphon-guide.md
│   ├── /cold
│   │   ├── cold-brew-guide.md
│   │   ├── cold-brew-concentrate.md
│   │   ├── japanese-iced-coffee.md
│   │   └── flash-brew.md
│   └── /other
│       ├── moka-pot.md
│       ├── turkish-coffee.md
│       └── vietnamese-phin.md
├── /roasting
│   ├── roast-profiles.md
│   ├── roast-defects.md
│   └── development-curves.md
└── /hong-kong-asia
    ├── hk-coffee-scene.md
    ├── hk-roasters-guide.md
    ├── asia-pacific-origins.md
    ├── tea-to-coffee-culture.md
    └── local-competitions.md
```

---

## 6. Agent System Prompt (Draft)

```
You are a Q Grader-certified Specialty Coffee Expert, trained to SCA and CQI standards.

## EXPERTISE AREAS
- Sensory Analysis: Cupping, flavor identification, defect detection
- Green Coffee: Grading, defects, varietals, origins
- Processing: Washed, Natural, Honey, Experimental methods
- Brewing: Extraction science, ratios, grind calibration
- Roasting: Profiles, development, defect identification

## TOOL PRIORITY
1. Use Coffee_Knowledge_Base FIRST for all questions
2. Use web_search ONLY for current news or unavailable info

## RESPONSE GUIDELINES
- Use precise sensory vocabulary (SCA Flavor Wheel terms)
- Reference intensity on 1-15 scale when describing attributes
- Cite specific origins, varietals, and processing methods
- Provide actionable advice for brewing/roasting questions
- Distinguish between specialty grade (80+) and commercial coffee

## CITATION RULES
- Knowledge Base: "According to [source]..." or state directly
- Web Search: Add "Source: [domain]" at end

## EXAMPLE RESPONSES

Q: "What does a Kenya AA taste like?"
A: "Kenya AA coffees are known for their bright, wine-like acidity with
   blackcurrant and tomato notes. The SL28 and SL34 varietals grown at
   1,400-2,000 masl produce complex cups with citric and phosphoric acid
   profiles. Expect intensity levels of 7-9 for acidity and 5-7 for body
   on the SCA scale."

Q: "My espresso is sour, what should I do?"
A: "Sourness indicates under-extraction. Try these adjustments:
   1. Grind finer (increases extraction)
   2. Increase brew ratio (e.g., 1:2 to 1:2.5)
   3. Extend shot time to 28-32 seconds
   4. Check water temperature (target 92-96°C)
   5. Ensure coffee is 2-4 weeks post-roast"
```

---

## 7. Implementation Phases

### Phase 1: Foundation
- [ ] Set up Google Custom Search with Tier 1 sites
- [ ] Download and clean CQI database
- [ ] Extract WCR Sensory Lexicon to markdown
- [ ] Create core knowledge base documents (10-15 files)
- [ ] Set up n8n workflow (mirror Seneca architecture)

### Phase 2: Expansion
- [ ] Add Tier 2 & 3 sites to search
- [ ] Build origin profile documents (20+ countries)
- [ ] Add brewing method guides
- [ ] Integrate CQI database for example queries

### Phase 3: Enhancement
- [ ] Add image recognition for defects (future)
- [ ] Cupping score calculator tool
- [ ] Brew ratio calculator tool
- [ ] Integration with roaster databases

---

## 8. Technical Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    Chat Interface                        │
│              (Same as Seneca - index.html)              │
└─────────────────────┬───────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────┐
│                   n8n Webhook                            │
│                 /webhook/coffee-chat                     │
└─────────────────────┬───────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────┐
│               Coffee Expert Agent (LLM)                  │
│                    Groq / Gemini                         │
├─────────────────────┬───────────────────────────────────┤
│                     │                                    │
│    ┌────────────────┴────────────────┐                  │
│    ▼                                 ▼                  │
│ ┌──────────────────┐    ┌──────────────────────┐       │
│ │ Coffee_Knowledge │    │    Web_Search        │       │
│ │      _Base       │    │ (Google Custom)      │       │
│ │                  │    │                      │       │
│ │ Gemini File      │    │ Sites: sca.coffee,   │       │
│ │ Search Store     │    │ perfectdailygrind,   │       │
│ │                  │    │ baristahustle, etc.  │       │
│ └──────────────────┘    └──────────────────────┘       │
└─────────────────────────────────────────────────────────┘
```

---

## 9. Estimated Effort

| Task | Effort | Priority |
|------|--------|----------|
| Google Custom Search setup | 1 hour | P0 |
| CQI database processing | 2 hours | P0 |
| Core KB documents (15 files) | 8-10 hours | P0 |
| n8n workflow setup | 2 hours | P0 |
| Chat UI customization | 1 hour | P1 |
| Origin profiles (20 countries) | 10-15 hours | P1 |
| Brewing guides | 4-6 hours | P2 |

**Total MVP: ~15-20 hours**

---

## 10. Sources & References

### Official Standards
- [SCA Q Grader Program](https://education.sca.coffee/q-grader)
- [Coffee Quality Institute](https://www.coffeeinstitute.org)
- [SCA Coffee Taster's Flavor Wheel](https://sca.coffee/research/coffee-tasters-flavor-wheel)
- [World Coffee Research Sensory Lexicon](https://worldcoffeeresearch.org/resources/sensory-lexicon)
- [SCA Water Standards](https://sca.coffee/research/water-standards)

### Publications
- [Perfect Daily Grind](https://perfectdailygrind.com)
- [Barista Hustle](https://baristahustle.com)
- [Daily Coffee News](https://dailycoffeenews.com)
- [Coffee Review](https://www.coffeereview.com)
- [Sprudge](https://sprudge.com)

### Brewing Resources
- [James Hoffmann YouTube](https://youtube.com/@jameshoffmann) - Ultimate V60, French Press methods
- [Lance Hedrick YouTube](https://youtube.com/@LanceHedrick) - Brewing tutorials
- [Timer.Coffee](https://timer.coffee) - Open-source recipe database
- [Coffee ad Astra](https://coffeeadastra.com) - Brewing science research
- [Prima Coffee Guides](https://prima-coffee.com/learn)
- [Home-Barista Forum](https://home-barista.com)

### Hong Kong & Asia-Pacific
- [Chart Coffee](https://chart.coffee) - HK specialty roaster
- [The Honeycombers HK](https://thehoneycombers.com/hong-kong) - HK cafe guides
- [Zolima CityMag](https://zolimacitymag.com) - HK coffee culture
- [SCMP Food & Drink](https://scmp.com/lifestyle/food-drink) - HK coffee news
- [Filtru Coffee Asia](https://discover.filtru.coffee/asia) - Asian roaster database
- [Common Man Coffee Roasters](https://commonmancoffeeroasters.com) - Singapore/HK

### Data Sources
- [CQI Coffee Quality Database (GitHub)](https://github.com/jldbc/coffee-quality-database)
- [ThirdWaveCoffeeBase API](https://github.com/sanjananatraj/thirdwavecoffeebase)
- [Sweet Maria's Library](https://library.sweetmarias.com)
- [Cafe Imports Resources](https://www.cafeimports.com/north-america/blog/)
- [Timer.Coffee GitHub](https://github.com/timercoffee) - Open-source recipes

### Technical Resources
- [SCA Protocols & Best Practices (PDF)](https://www.scith.coffee/wp-content/uploads/2021/03/SCA-Protocols-_-Best-Practices.pdf)
- [SCAA Green Coffee Classification](http://www.coffeeresearch.org/coffee/scaaclass.htm)
- [Interactive Flavor Wheel](https://notbadcoffee.com/flavor-wheel-en/)
- [Third Wave Water Guide](https://thirdwavewater.com/pages/water-chemistry)
