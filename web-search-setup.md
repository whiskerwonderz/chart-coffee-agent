# Google Custom Search - Chart Coffee Agent Setup

## Overview

This document lists all recommended sites for the Chart Coffee specialty coffee RAG agent's Google Custom Search Engine.

---

## 1. Sites to Include in Custom Search Engine

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
| Cafe Imports Blog | cafeimports.com | Origin info, sourcing |
| Royal Coffee | royalcoffee.com | Green grading, origins |
| Coffee Research | coffeeresearch.org | Scientific data |

### Tier 4: Scientific/Academic

| Site | Domain | Content Type |
|------|--------|--------------|
| Coffee ad Astra | coffeeadastra.com | Scientific brewing research |
| ScienceDirect (coffee) | sciencedirect.com | Peer-reviewed research |

### Tier 5: Hong Kong & Asia-Pacific (Priority for Chart Coffee)

| Site | Domain | Content Type |
|------|--------|--------------|
| **Chart Coffee** | chart.coffee | Your brand, HK specialty |
| The Honeycombers HK | thehoneycombers.com | HK cafe guides, lifestyle |
| Zolima CityMag | zolimacitymag.com | HK coffee culture |
| SCMP Food & Drink | scmp.com | HK coffee news |
| Time Out Hong Kong | timeout.com | Cafe reviews |
| Filtru Coffee Asia | discover.filtru.coffee | Asian roaster database |
| Common Man Coffee | commonmancoffeeroasters.com | Singapore/HK roaster |
| European Coffee Trip | europeancoffeetrip.com | Global cafe guides |

### Tier 6: Brewing-Focused Sites

| Site | Domain | Content Type |
|------|--------|--------------|
| Prima Coffee | prima-coffee.com | Equipment guides, brewing |
| Home-Barista | home-barista.com | Espresso community |
| Timer.Coffee | timer.coffee | Open-source recipes |
| Third Wave Water | thirdwavewater.com | Water chemistry |

---

## 2. Complete Domain List (Copy-Paste Ready)

For adding to Google Custom Search Engine "Sites to search":

```
sca.coffee
coffeeinstitute.org
worldcoffeeresearch.org
perfectdailygrind.com
baristahustle.com
sprudge.com
dailycoffeenews.com
coffeereview.com
baristamagazine.com
roastmagazine.com
library.sweetmarias.com
cafeimports.com
royalcoffee.com
coffeeresearch.org
coffeeadastra.com
chart.coffee
thehoneycombers.com
zolimacitymag.com
scmp.com
timeout.com
discover.filtru.coffee
commonmancoffeeroasters.com
europeancoffeetrip.com
prima-coffee.com
home-barista.com
timer.coffee
thirdwavewater.com
```

---

## 3. n8n HTTP Request Tool Configuration

### Node Type
`n8n-nodes-base.httpRequestTool`

### Settings

```json
{
  "toolDescription": "SECONDARY TOOL - Only use for current news, recent events, or information NOT found in the Coffee_Knowledge_Base. Do NOT use for questions about brewing methods, origins, or sensory analysis that should be in the knowledge base.",
  "url": "https://www.googleapis.com/customsearch/v1",
  "sendQuery": true,
  "queryParameters": {
    "parameters": [
      {
        "name": "key",
        "value": "YOUR_GOOGLE_API_KEY"
      },
      {
        "name": "cx",
        "value": "YOUR_COFFEE_SEARCH_ENGINE_ID"
      },
      {
        "name": "q",
        "value": "={{ $fromAI('query', 'the search term for specialty coffee topics') }}"
      }
    ]
  }
}
```

---

## 4. HK-Specific Roasters (Reference)

These Hong Kong roasters can be mentioned in responses:

| Roaster | Website | Notes |
|---------|---------|-------|
| Chart Coffee | chart.coffee | Your brand |
| Cupping Room | cuppingroom.com.hk | Pioneer, multiple locations |
| Urban Coffee Roasters | urbancoffee.com.hk | Direct sourcing |
| Craft Coffee Roaster | craftcoffeeroaster.com | Ethiopia/Latin America |
| 18 Grams | 18grams.com.hk | Local staple |
| Sensory Zero | sensoryzero.co | Specialty pioneer |
| Colour Brown | colourbrown.com.hk | Roastery + cafe |
| Common Man Coffee | commonmancoffeeroasters.com.hk | Singapore/HK |

---

## 5. YouTube Channels (Not in Custom Search, but for Reference)

These channels provide excellent brewing content but can't be added to Google Custom Search:

| Channel | URL | Content |
|---------|-----|---------|
| James Hoffmann | youtube.com/@jameshoffmann | Ultimate V60, French Press, reviews |
| Lance Hedrick | youtube.com/@LanceHedrick | Brewing tutorials, latte art |
| European Coffee Trip | youtube.com/@europeancoffeetrip | Cafe tours, guides |

---

## 6. Setup Steps

### Step 1: Create Custom Search Engine
1. Go to https://programmablesearchengine.google.com/
2. Click "Add" or "New Search Engine"
3. Choose "Search specific sites"
4. Paste domains from Section 2 above
5. Name it "Chart Coffee Specialty Search"
6. Click "Create"

### Step 2: Get Search Engine ID
1. Go to "Edit search engine"
2. Copy the **Search engine ID** (cx)
3. Save for n8n configuration

### Step 3: Get API Key (if not already done)
1. Go to https://console.cloud.google.com/
2. Enable "Custom Search API"
3. Create API Key in Credentials
4. (Optional) Restrict to Custom Search API only

---

## 7. Pricing Reminder

- **Free**: 100 queries/day (resets midnight Pacific)
- **Paid**: $5 per 1,000 queries after free tier

---

## 8. Links

- Programmable Search Engine: https://programmablesearchengine.google.com/
- Google Cloud Console: https://console.cloud.google.com/
- Custom Search API Docs: https://developers.google.com/custom-search/v1/overview
