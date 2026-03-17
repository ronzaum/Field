# FIELD — Product Specification
### Version 1.0 · March 2026 · Exploration to date

---

## SINGLE LINERS

**It is...**
- A centralised reference retrieval platform for creative professionals
- A production intelligence layer that aggregates atomised signals into one searchable archive
- A data infrastructure tool with a human interface
- The only place where provenance survives alongside the image
- A live feed of what's actually being published, in order, with no ranking
- A geographic browse tool for creative research
- A serious archival research tool that happens to be easy to use
- Anti-curation by design

**It is not...**
- Pinterest. Not a mood board. Not a re-pin machine.
- A publication. It does not create editorial content.
- A collaboration tool. There are no shared boards, no comments, no social layer.
- An LLM that generates answers. It retrieves real, indexed, sourced material.
- A recommendation engine. Nothing is ranked by popularity or engagement.
- Monetised. This is an experiment.
- Curated by an algorithm or an editor. Everything surfaces on equal terms.
- A tool that stores images. It stores links and provenance.

---

## 1. PRODUCT OVERVIEW

Field is a centralised reference retrieval platform built for creative professionals — architects, set designers, art directors, fashion researchers — who spend significant time searching for references across fragmented sources and consistently arrive at the same overexposed images everyone else has.

The core problem: the most valuable creative references are atomised across dozens of heterogeneous sources — specialist publications, institutional archives, practitioner Instagram accounts, production credits, show tags, niche blogs — none of which talk to each other. The result is that professionals either waste hours manually searching each source or default to Pinterest, which only contains what other people have already decided was worth saving, ranked by how many times it has been re-pinned.

Field aggregates those sources into one retrieval layer. It preserves provenance on every result. It surfaces results in strict chronological or query order with no engagement weighting. It lets you browse by geography, source, material, and typology simultaneously. And it indexes the weak signals — the crew member's Instagram caption, the production credit in paragraph four of a niche blog, the show tag from a lighting technician who was there — that no other platform bothers to collect.

**The thesis:** Pinterest unified the popular. Field unifies the complete.

---

## 2. THE PROBLEM

### 2.1 Fragmentation

Creative references live across:
- Major architecture and design publications (ArchDaily, Dezeen, Domus, Wallpaper\*, Architectural Review, Pin-Up)
- Institutional archives (RIBA, CCA, Getty Research Institute, MoMA, Bauhaus-Archiv, SALT Research)
- Fashion and production publications (ShowStudio, Dazed Digital, Business of Fashion, i-D, CR Fashion Book)
- Editorial Instagram and X accounts
- Individual practitioner accounts (set designers, lighting designers, carpenters, stylists)
- Show and event tags (#pfw, #balenciagafw23, location tags at the Grand Palais)
- Portfolio sites and studio websites
- Academic and trade databases

None of these talk to each other. A single production — say, a Balenciaga fashion show — generates content across all of the above simultaneously. The full picture of who designed it, what it looked like, what materials were used, which studio built it, exists. It is just never in one place.

### 2.2 Provenance loss

When an image enters Pinterest, its provenance dies. The source, the architect, the year, the location — stripped. The image exists as a visual object with no context. For creative professionals, context is the entire point. A concrete housing estate matters differently if it was built in 1962 in Belgrade versus 2018 in Tokyo. A set design reference matters differently if it was built by Bureau Betak for a 2,000-person show versus a student installation.

### 2.3 Homogeneity

Pinterest ranks by engagement. The most re-pinned images surface the most. This means everyone searching for "brutalist concrete housing" sees the same 50 images. The professional's nightmare: you present a reference to a client and they say they've seen it before. Because they have. Everyone has. It's been re-pinned 40,000 times.

The obscure 1974 eastern European housing estate, the RIBA archival drawing from a demolished building, the CCA document scan, the set designer's BTS post from a show three years ago — these don't get pinned. They don't exist in Pinterest's world. They are precisely the references that matter most.

### 2.4 The atomised signal problem — the Balenciaga case study

You want to know who designed the set for the Balenciaga AW23 show. That information exists. Here is where it lives:

- The set designer's own Instagram, posted once during show week, now buried under 3 years of content
- A crew member who tagged the brand and the location in a caption
- A niche production blog that credited the studio in paragraph four of a show recap
- A behind-the-scenes post from a lighting technician
- A ShowStudio frame grab with a caption nobody reads past the first line
- A portfolio PDF on a studio's website that Google does not surface
- A comment in a fashion forum thread from someone who attended
- Individual posts from carpenters, prop makers, and set dressers who worked the job

None of these are individually findable at speed. Together they are the complete picture. Google cannot aggregate them with attribution intact. An LLM will hallucinate the answer or give a vague non-response. Pinterest has none of it. ArchDaily has none of it.

**This is not a search problem. It is an indexing problem.** The information exists but nobody has built the infrastructure to aggregate it with provenance intact.

Field's job is to be that infrastructure.

---

## 3. WHO THIS IS FOR

**The user:** A creative professional doing reference research. They work alone but eventually share outputs — printed boards, exported decks, presentation slides — with a team or client.

### 3.1 The architect

In early-to-mid project phase. Looking for precedent — what has been built in this material, at this scale, in this typology, in this geography. The pain: spending 3 hours across ArchDaily, Dezeen, RIBA, Google Images, Pinterest, and a private archive, never feeling like they've found everything that exists. Ending up with the same 10 buildings everyone else references.

**Their specific workflow:**
1. Open multiple tabs across publications and archives
2. Search different keywords in each
3. Screenshot or save to personal folders
4. Print or drop into a deck for team review
5. Lose track of where things came from

**Where Field replaces this:** Steps 1–3 collapse into a single query. Step 4 becomes a one-click save with source intact. Step 5 is eliminated because provenance is always visible.

### 3.2 The set designer

Building visual language for a production — a fashion show, a film set, a brand event, a retail installation. The pain: set design is the hardest creative field to research because the production credits are the most atomised. The set designer for a major fashion show is rarely credited prominently anywhere. The information exists in fragments across niche sources that require insider knowledge to find.

**Their specific workflow:**
1. Follow key Instagram accounts manually
2. Search hashtags and location tags during show seasons
3. Ask colleagues who know who did what
4. Search niche production blogs individually
5. Hope that the studio's own website has a case study up

**Where Field replaces this:** A query for "Balenciaga AW23 set" should surface the production credits, the studio, the behind-the-scenes posts, the practitioner tags — aggregated from every indexed source, with each result's origin intact.

### 3.3 The art director / fashion researcher

Building seasonal references, visual territory for a brand, a campaign, a collection. Looking for work they haven't seen before. The pain: everyone on the team has Pinterest. Every mood board starts to look the same. The references are overexposed before the project begins.

**Their specific workflow:**
1. Pinterest for broad visual territory
2. Publications for specific editorial references
3. Instagram accounts they personally follow for current work
4. Inevitably: the same 50 images everyone else is using

**Where Field replaces this:** A feed of what's actually been published today, across every indexed source, in order. No re-runs. No engagement ranking. First access to new references before they become the standard mood board.

---

## 4. PRODUCT PHILOSOPHY

**Data infrastructure first, human interface second.** The product is closer to Palantir (aggregate, cross-reference, retrieve) than to a magazine or a mood board app. The interface should feel like it has more data than you could ever exhaust, presented cleanly enough that you can navigate it in 30 seconds.

**Nothing gets prioritised.** No editorial curation. No algorithmic ranking. No promoted content. Sources surface on equal terms. A SALT Research archive from 1968 and a Dezeen article from this morning appear in the same results.

**Provenance is non-negotiable.** Every result carries its source, creator, location, and year. This survives from ingestion through to display. It is never stripped.

**The obscure is the product.** The value is not in aggregating ArchDaily — users can find that already. The value is in aggregating the sources nobody has bothered to collect: the niche production blog, the practitioner's personal account, the show tag from the lighting technician. The long tail is the differentiator.

**No noise, no colour.** The UI does not compete with the references. The images and the provenance data are the dominant visual. The interface is monochrome, typographically precise, and gets out of the way.

---

## 5. THE FOUR DIFFERENTIATING ACTIONS

These are the only actions that matter. Each one is irreplicable by any existing competitor.

---

### ACTION 01 — Cross-source retrieval

**What it is:** A single query that runs simultaneously across every indexed source.

**What happens:** User types a query. Field returns results from ArchDaily + Dezeen + RIBA + CCA + Getty + ShowStudio + indexed practitioner accounts + all other indexed sources, in one grid.

**The workflow:**
```
User enters query
↓
Field queries all indexed sources in parallel
↓
Results returned with full provenance intact
↓
User sees unified grid — source visible on every card
↓
User clicks through to original source
```

**Value generated:** The complete picture of what exists on a topic, in one pass. Not one publication's editorial selection. Not what other users have pinned. Everything that has been published or posted on the topic across every indexed source, with full context.

**The moment it matters:** You are designing a residential project in concrete. You do not want ArchDaily's top 10 most popular concrete houses. You want every serious reference that exists — from institutional archives, from publications, from practitioner accounts — in one place, right now.

**Why no competitor has it:** Pinterest aggregates what users pin — only the popular, provenance stripped. ArchDaily is one publication. Are.na requires manual addition. Instagram is filtered by who you follow. Nobody has built the ingestion infrastructure to unify heterogeneous sources with provenance intact.

**The Pinterest distinction:** Pinterest unified the popular. Every image in Pinterest exists because a human decided it was worth saving. Field ingests directly from the source regardless of any human curation decision. The long tail — the obscure, the archival, the uncirculated — is in Field and nowhere else.

---

### ACTION 02 — Provenance on every result

**What it is:** Every result displays its source, creator name, location, and year, always visible, without clicking.

**What happens:** Results render as cards. Every card shows: `[SOURCE]` / Creator or studio name / Location / Year. This is metadata that survives ingestion. It is displayed on the card face. It is never stripped.

**The workflow:**
```
Result appears in grid
↓
Source tag visible immediately: [RIBA] / [DEZEEN] / [ARCHDAILY]
↓
Creator name visible: Ernő Goldfinger / Bureau Betak / Es Devlin Studio
↓
Location + year visible: London · 1972
↓
User saves → link saved with full metadata attached
↓
User opens saved item in a client meeting → knows exactly what it is
```

**Optional extended view — specs toggle:**
Where available from the source, a toggle reveals extended specifications: material, structural system, programme, client, photographer credit, exhibition context. This is available when the source indexes it.

**Value generated:** You can brief your team from a saved reference. You can cite it. You know if it is a RIBA archival drawing from 1962 or an Instagram repost from 2019. You can stand in a client meeting and say exactly what you are looking at. Pinterest cannot give you this. Field always can.

**The moment it matters:** You found a reference three months ago. You saved it. You open it in a presentation. You know exactly what it is, who made it, where it came from, when. No ambiguity.

**Why no competitor has it:** Pinterest strips provenance at ingestion. ArchDaily has it but only within its own platform. Instagram shows caption text only. Field treats provenance as the primary data object — the image is secondary.

---

### ACTION 03 — Chronological live feed, zero ranking

**What it is:** A real-time stream of everything published across all indexed sources, in strict chronological order, filterable by period.

**What happens:** User opens Feed. Sees everything published today (or this week) across all connected sources. Ordered by time published. No engagement weighting. No re-runs of popular content. No algorithm.

**The workflow:**
```
User opens Feed tab
↓
Selects: Today / This week
↓
Feed populates in strict chronological order
↓
Results show: time published · source · creator · image
↓
User sees what Dezeen, ArchDaily, Domus, ShowStudio, 
and 12 Instagram accounts published this morning
↓
One scroll replaces 15 separate platform checks
```

**Filter axes on Feed:**
- Time: Today / This week
- Source: specific publications or accounts
- Typology: architecture / set design / installation / fashion
- Geography: country or city

**Value generated:** First-mover access to new references before they circulate. You see what's actually new today, not what's trending. Professional intelligence that is currently impossible without manually checking every source individually.

**The moment it matters:** It is Monday morning. You want to know what happened across architecture and set design publishing over the weekend. Right now that is 15 separate platform checks. This is one scroll.

**Why no competitor has it:** This is a product philosophy decision, not a technical barrier. Pinterest will never do this because their model requires engagement ranking. ArchDaily's feed is one publication. Instagram's feed is filtered by who you follow and ranked by an algorithm. Field has no engagement signal — by design.

---

### ACTION 04 — Multi-axis geographic browse

**What it is:** Browse the full indexed archive by place — city, country, or proximity to a location — combined with any other filter axis.

**What happens:** User opens Map. Selects a city or country. The right panel populates with every reference tagged to that location across all sources and all indexed time periods. Alternatively, user queries "near Belgrade" and sees everything within a defined radius.

**The workflow:**
```
User opens Map tab
↓
Selects city: Tokyo
     OR selects country: Japan
     OR draws radius around a location: 200km from Belgrade
↓
Right panel: all indexed references tagged to that geography
Across all sources · All time periods · No recency bias
↓
User combines with additional filters:
     + Material: concrete
     + Typology: residential
     + Source: institutional archives only
↓
Result: every serious concrete residential reference 
from Tokyo, across all indexed sources, ever published
```

**Filter axes available simultaneously:**
- **Place:** City · Country · Radius from coordinates
- **Source:** Specific publications or account categories
- **Material:** Concrete · Steel · Timber · Fabric · Glass
- **Typology:** Residential · Institutional · Installation · Pop-up · Set design · Landscape

**Value generated:** Spatial discovery that keyword search cannot replicate. You are designing a project in a city you do not know architecturally. You want to understand its built DNA before you begin. The map gives you everything that has ever been published about that place, from every serious source, in one view.

**The proximity use case:** You are travelling to a city for a site visit. You want to see what is architecturally significant within 50km of your site. Field surfaces it. No other tool does this for creative references.

**The moment it matters:** You are working on a project in Belgrade. You have never worked there before. You need to understand the architectural context. You do not know what to search for. The map tells you what exists.

**Why no competitor has it:** Requires location tagging to survive ingestion from every source. No competitor has built this because no competitor has unified the sources in the first place.

---

## 6. COMPETITIVE POSITIONING

### Pinterest

| Action | Output | Limitation |
|---|---|---|
| Search by keyword | Image grid ranked by engagement | Only contains what users have pinned. Provenance stripped. Same 50 images always surface. |
| Pin an image | Saves to personal board | No metadata. No source. No year. |
| Create a board | Grouped collection | Manual only. Nothing automatic. |
| Follow an account | Feed updates | Algorithmic ranking. Not chronological. |
| Get recommendations | "More like this" | Feeds homogeneity. Same images everyone else has. |

**What Pinterest cannot do:** Search across publications directly. Filter by geography, year, or typology. Surface obscure or archival content. Preserve provenance. Show you anything that hasn't already been widely circulated.

### ArchDaily

| Action | Output | Limitation |
|---|---|---|
| Browse by typology or country | Filtered project list | One publication only. |
| Search by keyword | Articles and projects | Editorial selection only — what ArchDaily chose to publish. |
| Save a project | Personal bookmarks | ArchDaily content only. |
| Follow a tag | Email digest | One publication. No cross-source aggregation. |

**What ArchDaily cannot do:** Query across multiple publications. Surface archival or institutional content. Show what's published across the field today. It is a magazine, not a retrieval tool.

### Instagram (editorial accounts)

| Action | Output | Limitation |
|---|---|---|
| Follow an account | Feed updates | Filtered by who you follow. Algorithmically ranked. |
| Save a post | Private collection | No metadata. Buried in platform. |
| Search a hashtag | Posts tagged with that word | Incomplete. Recency-biased. No provenance. |
| Explore | Algorithmically served content | Feeds you more of what you already engage with. |

**What Instagram cannot do:** Search across multiple accounts. Filter by geography, year, material. Preserve provenance. Function as a research tool at all. It is consumption, not retrieval.

### Are.na

| Action | Output | Limitation |
|---|---|---|
| Create a channel | Grouped blocks | Entirely manual. Nothing automatic. |
| Add a block | Saves content | Human must add every item. |
| Connect channels | Cross-references | Beautiful but labour-intensive. |
| Search channels | Other users' collections | Quality depends entirely on who has made channels. |

**What Are.na cannot do:** Pull from sources automatically. Run a query against live indexed data. Surface what's new today. Scale beyond what humans have manually curated.

---

### Positioning statement

> Pinterest tells you what's popular. ArchDaily tells you what's new in one publication. Are.na stores what you already found. **Field retrieves what nobody else has surfaced yet, from everywhere at once, and tells you exactly where it came from.**

---

### The two tiers of search

**Tier 1 — Broad discovery** (V1)
"Show me raw concrete installations, eastern Europe, 1970–1985"
→ Grid of results across all indexed sources, provenance intact.
This is buildable now with a defined source list.

**Tier 2 — Specific attribution** (V2 / the moat)
"Who designed the Balenciaga AW23 set and what did it look like"
→ Requires indexing practitioner accounts, show tags, production credits from niche sources, and parsing attribution from Instagram captions and magazine footers.
This is harder. It is also where no competitor exists. Tier 2 is the reason Field becomes irreplaceable.

---

## 7. SOURCE ARCHITECTURE

Sources are divided into three tiers by buildability and by how much competitive value they add.

### Tier A — V1 sources (buildable now)

**Publications — link-out, preview only**
- ArchDaily
- Dezeen
- Domus
- Architectural Review
- Wallpaper\*
- Pin-Up Magazine
- ShowStudio
- Dazed Digital
- Business of Fashion (show coverage)

**Institutional archives — open access**
- RIBA Collections
- Canadian Centre for Architecture (CCA)
- Getty Research Institute open content
- MoMA Architecture & Design collection
- Bauhaus-Archiv
- SALT Research (Turkish architecture — underused, high value)

**Editorial social accounts — curated list**
- Instagram: 15–20 serious editorial accounts, not individual designers
- X/Twitter: same logic, accounts not hashtags

### Tier B — V2 sources (the differentiation)

**Practitioner accounts — individuals not studios**
- Set designers' personal accounts
- Lighting designers, prop makers, carpenters who tag their work
- Stylists and art directors who post behind-the-scenes
- These are the most granular and most valuable signals. They exist nowhere else.

**Show and event tags**
- Fashion show hashtags: #pfw, #mfw, #lfw, #nyfw
- Brand-specific show tags: #balenciagafw23 etc.
- Location tags at show venues
- These are queryable on Instagram but never aggregated with attribution intact.

**Niche production sources**
- Set design and production blogs
- Fashion industry trade publications that credit production
- Exhibition documentation sites
- Theatre and performance design archives

### Tier C — V3 sources (the long-term moat)

**Credit databases — to be built or licensed**
Nothing equivalent to IMDB exists for fashion shows, set design, or installation art. This is a gap Field could own. A structured database of: show name → set designer → studio → materials → reference images. Even partial coverage would be more useful than anything currently available.

**Portfolio aggregation**
Studio websites and individual practitioner portfolios. Currently ungoogleable at speed. Requires crawling and indexing with structured metadata extraction.

---

### Why obscure sources are the product

The obvious sources (ArchDaily, Dezeen) are table stakes. Users can find those already. The value is in the sources nobody else has indexed: the niche production blog, the practitioner's personal account, the show tag, the archival scan. These are the references that don't exist on Pinterest, that are not on any competitor platform, that currently require insider knowledge or hours of manual searching to find. The obscure long tail is the product. The famous publications are just the interface that makes it approachable.

---

## 8. THE SIGNAL AGGREGATION LAYER

Underneath the image grid is a relationship network. This is where the long-term moat lives.

### The entity graph

```
Show / Project
    ↓
Set Designer / Architect
    ↓
Studio / Practice
    ↓
Collaborators (lighting, fabrication, materials)
    ↓
Past projects
    ↓
Related shows / buildings with same aesthetic
    ↓
Materials and suppliers
    ↓
Geographic cluster (other work in same city)
```

Today Field surfaces images. Eventually Field surfaces relationships. "Who else works like Bureau Betak" becomes answerable not by LLM inference but by indexed production credits.

### What makes the Balenciaga query answerable

The answer to "who designed the Balenciaga AW23 set" is currently distributed across:
- 1 practitioner Instagram post
- 3 crew member posts with brand tags
- 2 niche blog mentions
- 1 ShowStudio caption
- 1 forum comment

Field's ingestion layer collects all of these. The entity extraction layer identifies "Balenciaga AW23" as the event, "Bureau Betak" or whoever as the studio, and links them. The result is: one query → complete production picture, with every source cited.

This is not an LLM generating an answer. It is structured data retrieved from indexed sources. The distinction matters enormously. LLMs hallucinate. Field cites.

---

## 9. UI DEFINITION

### 9.1 Philosophy

The interface does not compete with the references. Monochrome. No decorative colour. Images and provenance metadata are the dominant visual elements. Typographically precise. Feels like a serious archival research tool. Night mode and day mode — both are achromatic.

**Aesthetic references provided:**

| Reference | What it informs |
|---|---|
| GMT Weltzeit chart | Map typography, coordinate-style data display |
| Palantir Gotham | Dark data tool aesthetic, serious retrieval interface |
| OMA/archival contents page | Typography hierarchy, monospace + serif mix |
| Jean Dawson tracklist | Monospace list density, production credit format |
| La Raza Archive interface | Dense image scatter, archival mass |
| Palantir Foundry diagrams | Data infrastructure visual language |
| Correspondence Storage diagram | Filing/indexing as visual metaphor |
| Variadex filing system | Classification, tab system |

![OMA archival typography](Screenshot_2026-03-17_at_10_14_13.png)
*OMA-style archival contents page — typography hierarchy reference*

![GMT Weltzeit](Screenshot_2026-03-17_at_10_17_47.png)
*GMT Weltzeit — map and coordinate display reference*

![Palantir map interface](Screenshot_2026-03-17_at_10_18_18.png)
*Palantir Gotham — dark data tool aesthetic reference*

![Palantir Foundry](Screenshot_2026-03-17_at_10_18_36.png)
*Palantir Foundry — data infrastructure visual language*

![Jean Dawson tracklist](Screenshot_2026-03-17_at_10_18_55.png)
*Jean Dawson Pixel Bath — monospace production credit format*

![La Raza Archive](Screenshot_2026-03-17_at_10_19_02.png)
*La Raza Archive — dense image archive interface reference*

![Correspondence storage](Screenshot_2026-03-17_at_10_15_38.png)
*Correspondence Storage diagram — filing and indexing as visual metaphor*

![Variadex filing system](Screenshot_2026-03-17_at_10_15_50.png)
*Variadex system — classification and tab organisation reference*

![3.11 Labs branding](Screenshot_2026-03-17_at_10_18_42.png)
*3.11 Labs — data labelling and technical text layout reference*

![Post Digital Publishing Archive](Screenshot_2026-03-17_at_10_15_04.png)
*Post Digital Publishing Archive — archival card format reference*

![S4AD interface](Screenshot_2026-03-17_at_10_15_27.png)
*S4AD — monospace terminal UI reference*

![Rize dashboard](Screenshot_2026-03-17_at_10_18_13.png)
*Rize — dark dashboard data density reference*

![Isometric book shelf data viz](Screenshot_2026-03-17_at_10_15_57.png)
*Shelfie / isometric data visualisation — archival organisation reference*

![Architecture scenario text](Screenshot_2026-03-17_at_10_18_08.png)
*Architectural scenario document — editorial text density reference*

![Planting calendar map](Screenshot_2026-03-17_at_10_16_07.png)
*Planting calendar map — data overlay and geographic grid reference*

![Saint bakery menu](Screenshot_2026-03-17_at_10_14_36.png)
*Saint bakery — typographic list layout reference*

![Blumenbach classification](Screenshot_2026-03-17_at_10_14_42.png)
*Blumenbach classification — tabular data presentation reference*

![Citroen colours](Screenshot_2026-03-17_at_10_15_45.png)
*Citroën spec sheet — technical specification layout reference*

![Bedroom interior reference](Screenshot_2026-03-17_at_10_15_14.png)
*Interior reference — material and spatial reference example*

![Interactive archive folders](Screenshot_2026-03-17_at_10_19_14.png)
*Interactive archive folders — tab and filing UI reference*

![Unveil projects layered](Screenshot_2026-03-17_at_10_20_26.png)
*Unveil Projects — layered image browse reference*

### 9.2 Typography system

Three typefaces. Three functions. Never substituted.

| Typeface | Function | Inspired by |
|---|---|---|
| Barlow Condensed Bold / 700, all caps | Project titles, surface names, primary labels | OMA publications, IKEA communication, Apple product naming |
| EB Garamond Italic | Creator names, architect names, studio names | Classical architecture papers, editorial writing, academic journals |
| IBM Plex Mono Light / Regular | All metadata, source tags, dates, locations, counts, system labels | Palantir data tools, production credit lists, archival databases |

**Hierarchy in practice:**
```
[ARCHDAILY]                    ← Mono, 8px, muted, source tag
TRELLICK TOWER                 ← Condensed Bold, 15px, primary
Ernő Goldfinger                ← Garamond Italic, 11.5px, muted
LONDON · 1972                  ← Mono, 7.5px, muted
```

### 9.3 Colour

**Night mode (default):** `#070707` background. `#edeae4` primary text. Zero UI colour. Images are the only colour on screen.

**Day mode:** `#f4f3ef` background. `#0a0908` primary text. Same principle — no UI colour. Images carry all warmth and visual weight.

No colour is used to encode information in the interface. No badges, no pills, no accent colours. Source tags use brackets `[ARCHDAILY]` not coloured chips.

### 9.4 Shape language

No border radius anywhere. Every element is hard-edged and square. This is a deliberate aesthetic statement: this is a data tool, not a consumer product.

### 9.5 The three surfaces

#### Surface 1 — Search

**Layout:** Full-width search input at top. Filter row beneath. Results meta bar. 3-column card grid.

**Search input:** Prompt-style, not keyword-style. Placeholder: *"raw concrete housing, eastern europe, 1970s"* — communicates that natural language queries are valid.

**Filter row:** Four combinable axes displayed as bracketed monospace toggles:
```
[ALL PERIODS]  [EUROPE]  [RESIDENTIAL]  [BRUTALIST]  [ARCHDAILY]  [RIBA]  [CONCRETE]
```
Active state: underlined. No colour change.

**Card format:**
```
┌──────────────────────┐
│                      │
│    [IMAGE]           │ ← 4:3 aspect ratio
│                      │
│    [ARCHDAILY]       │ ← Mono, source tag
│    TRELLICK TOWER    │ ← Condensed Bold
│    Ernő Goldfinger   │ ← Garamond Italic
│    LONDON · 1972     │ ← Mono metadata
└──────────────────────┘
```

**Save action:** Hover reveals a square bookmark button, top-right of card. One click. Saves link + metadata. No friction.

**Specs toggle (where available):** A secondary expand on the card reveals extended specifications — material, structural system, programme, client, photographer. Sourced directly from the original publication's metadata where available.

#### Surface 2 — Feed

**Layout:** Header bar with source label and Today / This week toggle. 4-column card grid.

**Feed logic:** Strict chronological order. No ranking. No re-runs. Everything published across all indexed sources in the selected period.

**Card format:** Square (1:1). Time published visible. Same source + title + metadata.

**Filter on Feed:** Source, typology, geography — same axes as Search but applied to the time-bounded feed.

#### Surface 3 — Map

**Layout:** Dark canvas (full width minus right panel). Right panel: 230px, populates on location selection.

**Map display:** Minimal. Thin continental outline, square markers at city/country positions, monospace city labels in lowercase. No satellite imagery. No decorative cartography. Coordinate-grid feel — referencing GMT Weltzeit.

**Interaction:** Click a marker → right panel populates with all indexed references from that location.

**Scope toggle:** Country / City — switches between country-level and city-level marker density.

**Geographic query modes:**
- Click a city: all references tagged to that city
- Click a country: all references tagged to that country
- Near a location: radius browse (V2)

**Right panel:** Monospace header showing city name + reference count. Thumbnail list with title, source, year.

#### Mode toggle

**Night / Day:** Single button in the nav bar. Switches between `#070707` and `#f4f3ef` base. Both modes are achromatic. The toggle label shows what mode you will switch TO, not the current mode.

#### Saved references

**Access:** Counter in nav bar, always visible: `Saved [0]`. Click opens a full-screen overlay.

**Display:** Same 4-column card grid as Feed. All saved items with full provenance. Click through to original source.

**What is saved:** The link + thumbnail + full metadata. Not the image. The tool never stores images.

---

## 9.6 UI PROGRESSION — Development record

The following UI iterations were developed in this conversation. Both were built as interactive prototypes.

### Version 1 — Initial concept

Three-surface model (Search / Feed / Map) established. Card format defined. Filter chips introduced. Saved counter in nav. Map with city dots and right panel. Colour scheme: light/neutral. Circular save buttons.

**What was wrong:** Too consumer. Rounded elements. Colourful filter chips. Fonts generic. Map too decorative. Not serious enough for the tool's actual purpose.

### Version 2 — Full redesign

Complete rebuild from the reference images. Key changes:

- Background: `#070707` pure black by default
- Typography: Barlow Condensed + EB Garamond + IBM Plex Mono — three-way system
- All border radius removed — hard edges only
- Source tags: bracketed monospace `[ARCHDAILY]` not colour pills
- Filter row: bracketed text toggles, not chips
- Map: dark field, thin outline, square markers, coordinate-grid aesthetic
- Night/Day toggle added to nav
- Card metadata hierarchy established: source / title / creator / location+year
- Image placeholders: near-black tones — images will carry all colour
- Save: square button, no border radius

This version was approved as the correct visual direction for Lovable development.

---

## 10. VERTICAL ROADMAP

The same underlying infrastructure problem exists across three creative verticals. The source lists are different. The metadata schema is similar. The product logic is identical.

### V1 — Architecture

**Sources:** Publications (ArchDaily, Dezeen, Domus, Wallpaper\*, AR, Pin-Up), institutional archives (RIBA, CCA, Getty, MoMA, Bauhaus-Archiv, SALT), editorial social accounts.

**Metadata:** Architect / studio / location / year / typology / material / structural system

**Pain level:** High. Multiple publications, good but fragmented institutional archives, no cross-source retrieval.

**Buildability:** High. Many sources have RSS or structured feeds. Institutional archives have open APIs.

### V2 — Set design / fashion production

**Sources:** ShowStudio, Dazed, BoF, i-D, practitioner Instagram accounts, show tags, niche production blogs, studio portfolio sites.

**Metadata:** Show name / season / designer / studio / collaborators / brand / venue / materials

**Pain level:** Extreme. The Balenciaga problem. Information maximally atomised. No aggregated source exists anywhere.

**Buildability:** Medium-hard. Requires practitioner account ingestion and caption parsing for attribution extraction.

**Why this vertical matters most:** The pain is the worst. No competitor is anywhere near it. First to solve it owns the market.

### V3 — Art / interiors / product design

**Sources:** Frieze, Artsy, Wallpaper\* (interiors), Dezeen (product), museum collection APIs, gallery exhibition archives.

**Metadata:** Artist / gallery / medium / exhibition history / collection

**Pain level:** Medium. Artsy exists for art but has no cross-source retrieval or production credit layer.

---

## 11. WHAT THIS IS NOT

These are explicit product decisions, not omissions.

- **Not a collaboration tool.** No shared boards. No comments. No social layer. The save function is personal only.
- **Not a mood board tool.** References are stored as links, not assembled into visual compositions.
- **Not a publication.** Field does not create, commission, or editorially select content.
- **Not an LLM answer generator.** Field does not generate responses to queries. It retrieves indexed, sourced, real material. The distinction: LLMs hallucinate. Field cites.
- **Not a recommendation engine.** No "you might also like." No "trending." No "because you saved this."
- **Not monetised.** This is an experiment. No subscriptions, no freemium tiers, no ads, no promoted content.
- **Not an image storage tool.** Field stores links and metadata. Not images.
- **Not a competitor to the sources it indexes.** Field drives traffic to original sources. The model is link-out and preview only.

---

## 12. OPEN QUESTIONS

These are unresolved as of this document. They need answers before V1 launch.

**Legal:**
- Instagram's API terms restrict third-party aggregation of public posts at scale. The practitioner account layer (Tier B sources) may require a different technical approach or a terms-of-service relationship. Needs legal review.
- Link-out + preview model is defensible under fair use precedent. Needs confirmation from a media lawyer before launch.

**Technical:**
- Instagram's API does not expose public post content freely. Options: official API partnership, limited scraping within ToS, or manual curation of practitioner accounts for V1.
- X/Twitter API access is now paid and restricted. Needs cost assessment.
- Location tagging extraction from Instagram posts is inconsistent. Many posts tag a venue not a city. Normalisation logic required.

**Product:**
- The name FIELD is a placeholder. To be decided.
- The "near my site" geographic proximity feature requires coordinates input — how does the user enter this? Map click? Address input? Coordinates?
- Specs toggle data availability varies wildly by source. How do we display partial metadata without creating an inconsistent experience?
- Credit database for Tier C — build it or license it? Nobody to license from means it needs to be built. Scope unclear.

**Scope:**
- How many sources constitute a useful V1? Recommendation: 8–12 curated sources where the metadata can be cleanly extracted, rather than 30 sources with degraded metadata.
- Set design as V2 requires a completely different source list. Should it be a separate product mode or integrated from the start?

---

## 13. CRUCIX REFERENCE — THE INSPIRATION

The technical architecture of this project was inspired by Crucix (github.com/calesthio/Crucix) — a personal intelligence agent that pulls from 27 open-source intelligence feeds simultaneously, cross-correlates the data, and renders everything on a single dashboard, updated every 15 minutes.

What Crucix does for OSINT intelligence, Field does for creative production intelligence. The architecture is identical: multiple heterogeneous sources → unified ingestion layer → normalised metadata → single retrieval interface → LLM-enhanced querying optional.

The key philosophical borrowing: **aggregation without curation.** Crucix does not editorially select which fires or flights or conflict events to show you. It shows you everything from every source it indexes. Field applies this same principle to creative references.

---

---

## 14. BUILD PLAN

### Infrastructure

**Lives locally and on Git from day one.** No cloud hosting required until you are ready to share with other users. Local development → GitHub repo → deploy when ready (Vercel or Railway for the web app, simple enough for this stack).

**Recommended stack:**
- Frontend: Next.js (React) — works well with Lovable export, easy to deploy
- Database: PostgreSQL — simple, structured, handles the metadata schema cleanly
- Ingestion: Node.js scripts run locally or on a cron
- Hosting when ready: Vercel (frontend) + Railway or Supabase (database)

---

### Phase 0 — Confirm the data before writing any production code
**Duration: 3–5 days**
**Do this before Lovable. Before anything.**

Pick one source. ArchDaily has an RSS feed. RIBA Collections has an open API. CCA has a public digital archive.

Write a script — 50 lines of Node — that:
1. Pulls from that source
2. Extracts: title / creator / location / year / image URL / source link
3. Writes it to a JSON file

If you can get clean, structured data out of one source with provenance intact, the product is buildable. If you cannot, you need to know that before you spend weeks on the UI.

**This phase gates everything else. Do not skip it.**

---

### Phase 1 — Lovable UI prototype
**Duration: 3–5 days**
**Purpose: feel only. Throwaway.**

Build in Lovable:
- Search surface with dummy data (hardcoded JSON, not real ingestion)
- Feed surface with dummy data
- Map surface with hardcoded city dots
- Night/dark mode toggle
- Card format: source tag / title / creator / location / year

**Rules for Lovable:**
- Stop at 20–30 prompts maximum. Past that it becomes unmaintainable.
- Do not fix bugs in Lovable. If something breaks, work around it or accept it.
- Do not connect real data in Lovable. Dummy data only.
- Export the repo at the end. Use it as visual reference only, not as a foundation.

**What you are validating:** Does the three-surface model feel right to navigate? Does the card format give enough context? Does the save flow feel frictionless? Is the typographic hierarchy clear?

---

### Phase 2 — Data model and ingestion foundation
**Duration: 1 week**
**Tools: Claude Code in terminal**

Define the metadata schema. Every source maps to this:

```
{
  id:          uuid
  title:       string
  creator:     string          // architect, studio, set designer
  location:    string          // city name
  country:     string          // ISO country code
  year:        integer
  source:      string          // "archdaily" | "riba" | "dezeen" etc.
  source_url:  string          // original URL — this is the product
  image_url:   string          // preview thumbnail only
  typology:    string[]        // ["residential", "brutalist"]
  material:    string[]        // ["concrete", "steel"]
  ingested_at: timestamp
  specs:       json            // extended metadata where available
}
```

Build ingestion scripts for 3 sources:
1. ArchDaily RSS → parse → normalise → store
2. RIBA Collections API → parse → normalise → store
3. One Instagram editorial account → parse → normalise → store (manual or API)

Stand up a local Postgres database. Run the scripts. Confirm you have 200–500 real records with clean metadata.

---

### Phase 3 — Core build in Cursor + Claude Code
**Duration: 3–4 weeks**
**Build feature by feature. Ship nothing until each feature works end-to-end.**

Build order:

```
Week 1
  ├── Database schema (Postgres)
  ├── Ingestion scripts for 3 sources running on cron
  └── Basic search API endpoint (query → returns results)

Week 2
  ├── Search surface connected to real data
  ├── Card component with full metadata display
  └── Save function (stores link + metadata locally)

Week 3
  ├── Feed surface connected to real data (chronological, no ranking)
  ├── Feed filters: today / this week / by source
  └── Night / day mode

Week 4
  ├── Map surface with real location data
  ├── City/country click → filtered results panel
  └── Add 5 more sources to ingestion
```

Each week ends with something that works end-to-end. No half-built features.

---

### Phase 4 — Source expansion
**Duration: ongoing**

Add sources incrementally in this order:

**Week 5–6 (complete the V1 source list):**
- Dezeen RSS
- CCA digital archive API
- Getty open content API
- 5 more editorial Instagram accounts
- Domus (RSS or scrape)

**Month 2–3 (begin Tier B — the differentiation):**
- 10–15 individual set designer / practitioner Instagram accounts
- ShowStudio
- Dazed Digital
- Business of Fashion show coverage

**Month 3+ (Tier C — the moat):**
- Begin structured credit extraction from show tags
- Build the show → designer → studio relationship graph
- SALT Research archive

---

### Git workflow

```
main          → stable, working code only
dev           → active development
feature/xxx   → one branch per feature

Commit on every working state.
Never commit broken code to main.
Use Claude Code for commit messages — it writes good ones.
```

**CLAUDE.md is mandatory.** Create this file in the root of the repo on day one. It is Claude Code's memory for the project. Include:
- Project description (copy the one-liner from this spec)
- Tech stack
- Folder structure
- Data schema
- Naming conventions
- Which sources are currently ingested
- Any gotchas discovered during build

Without CLAUDE.md, Claude Code makes wrong assumptions about the codebase every session. With it, it behaves like a team member who was there from the start.

---

## 15. TOOLING — HOW TO USE CURSOR AND CLAUDE CODE CORRECTLY

Based on real-world usage data from developers who have run both tools on production codebases.

---

### The division of labour

Do not pick one tool. Use both for what each is good at.

| Task | Use |
|---|---|
| Architecture decisions, multi-file changes, ingestion scripts, database schema, debugging complex errors | **Claude Code** (terminal) |
| Single-file UI components, CSS, inline edits, quick fixes, regex patterns | **Cursor** |
| Commit messages, README and CLAUDE.md updates, code review | **Claude Code** |
| Visual diff review, accepting/rejecting changes | **Cursor** |
| Running and iterating on shell scripts, API testing | **Claude Code** |

The rule: if a task requires more than 3 terminal commands, stay in Claude Code for the whole task. Switching mid-task costs more time than it saves.

---

### Claude Code — specific tips

**CLAUDE.md is your most important file.**
Run `claude init` to bootstrap it. Then curate it aggressively. Every time you establish a convention, a naming pattern, a folder structure decision — add it to CLAUDE.md. This is Claude Code's persistent memory. Without it, every new session starts from zero.

**Use Plan mode before any large change.**
Before telling Claude Code to build something non-trivial, ask it to plan first:
`"Plan how you would build the ingestion script for the ArchDaily RSS feed. Don't write any code yet."`
Review the plan. Add comments inline. Then approve and let it execute. This catches wrong assumptions before they become wrong code.

**Run `claude --dangerously-skip-permissions` for flow state.**
Normal mode asks permission before every action — correct for production, annoying during fast iteration. Skip-permissions mode is Cursor's yolo mode. Use it when you know what you're asking for. The risk in practice is very low.

**Escape to stop, not Ctrl+C.**
Ctrl+C exits Claude Code entirely. Escape stops the current task cleanly.

**Hold Shift when dragging files into Claude Code.**
Drag without Shift opens them as editor tabs. Drag with Shift references them in the prompt — what you actually want.

**Use `Control+V` not `Command+V` to paste images.**
This is not obvious and wastes time the first time.

**Install the GitHub app: `/install-github-app`.**
Claude Code will review your PRs automatically. It finds logic errors, not just style issues. Worth setting up early.

**Context costs money. Be deliberate.**
Claude Code gets expensive quickly if you keep adding large context files. Cursor indexes the repo locally so there is no token cost. Claude Code burns tokens for every file it reads. Be intentional about what context you give it. CLAUDE.md reduces this problem because Claude doesn't need to re-read the codebase to understand conventions.

---

### Cursor — specific tips

**Use Project Rules for persistent context.**
Settings → AI → Prompt Recommendations. Add your tech stack, component conventions, and any architectural rules. This is Cursor's equivalent of CLAUDE.md — it applies to every session automatically.

**Add a `.cursorignore` file immediately.**
Exclude `node_modules`, `.git`, build folders, and any large generated files. These directories confuse Cursor's context and slow it down with useless noise.

**Use Plan mode for structural changes.**
Cursor's Plan mode creates a markdown document in the centre panel and updates it as you discuss the approach. Use this before touching anything architectural. Add inline comments to steer it before it starts executing.

**For UI work: describe intent not implementation.**
Instead of "write a CSS class that does X", say "the card component needs to feel like a serious archival tool — hard edges, monospace metadata, no border radius." The model translates intent to code better than it translates technical specifications.

**Switch models for different tasks within Cursor.**
Cursor lets you switch models mid-session. Use Claude Sonnet for most work. Switch to a larger model for complex debugging or architecture. Switch to a cheaper model for simple boilerplate.

---

### What actually determines output quality

The output quality is mostly determined by how clearly and structurally you plan the task, not which tool you use.

The tool is not the variable. The spec is. A vague prompt produces vague code in both Cursor and Claude Code. The FIELD product spec you are reading right now is the most valuable input you will bring to any AI coding session. Reference it constantly. Paste relevant sections as context. The more precisely you can describe what you want, the better both tools perform.

---

### The honest cost picture

- **Cursor Pro:** ~$20/month base. Can reach $60–80/month if you consistently select premium models manually. Use Auto mode to manage this.
- **Claude Code:** $125/user/month for team tier. Cheaper on individual Max plan. Token costs add up fast on large codebases. Manage context deliberately.
- **For a solo experiment like Field V1:** Cursor Pro is sufficient for most of the build. Use Claude Code (via Claude.ai Max plan) for the complex architectural work and ingestion scripts.

---

*Document compiled: March 17, 2026*
*Status: Exploration complete. Ready for Lovable prototype development.*
*Next step: Lovable prompt (separate document)*
