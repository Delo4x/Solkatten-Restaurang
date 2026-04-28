# Solkatten — Projektdokumentation

## Projektöversikt

**Solkatten** är en modern, lyxig restaurang- och barwebbplats för restaurangen Solkatten i Borgholm, Öland, Sverige. Webbplatsen är byggd med ren HTML, CSS och JavaScript — inga ramverk, inga byggsystem.

- **Typ:** Statisk webbplats
- **Språk:** Svenska
- **Plats:** Borgholm, Öland, Sverige
- **Adress:** Storgatan 11, Borgholm, Öland
- **Telefon:** 073-441 12 41

---

## Teknikstack

| Teknik | Användning |
|---|---|
| HTML5 | Struktur och innehåll |
| CSS3 | Stilar, animationer, responsiv layout |
| Vanilla JavaScript | Interaktivitet och DOM-manipulation |
| Leaflet.js (CDN) | Interaktiv karta |
| Google Fonts (CDN) | Typsnitt: Playfair Display, Lato, Cinzel |
| OpenStreetMap + Esri | Kartlager |

Inga pakethanterare, inga byggverktyg, inga backend-tjänster. Allt körs direkt i webbläsaren.

---

## Filstruktur

```
Solkatten/
├── index.html          # Huvudfil — all HTML och innehåll (753 rader)
├── css/
│   └── style.css       # All styling (1013 rader)
├── js/
│   └── main.js         # All interaktivitet (276 rader)
└── images/
    ├── img1.jpeg       # Restaurangbild 1
    ├── img2.jpeg       # Restaurangbild 2
    ├── img3.jpeg       # Restaurangbild 3
    ├── img4.jpeg       # Restaurangbild 4
    ├── img5.jpeg       # Restaurangbild 5
    ├── img6.jpeg       # Restaurangbild 6
    ├── img7.jpeg       # Restaurangbild 7
    ├── logo.jpeg       # Logotyp (JPEG-version)
    └── logo.png        # Logotyp (PNG-version)
```

---

## Sidans Sektioner

Webbplatsen är en single-page application med fem huvudsektioner, navigerbara via navbar:

### 1. HEM (Hero)
- Logotyp centrerat
- Knapp "SE MENYN" som scrollar till menysektionen
- Karusell med 7 restaurangbilder (byter automatiskt var 3,8:e sekund, klickbara prickar)
- Animerade guldpartiklar som stiger upp
- Radiell glow-effekt i bakgrunden

### 2. MENY
Innehåller fem menyblock med suddig bakgrundsbild per block:

#### Dagens Rätter (169–209 kr)
| Rätt | Pris |
|---|---|
| Räkmacka | 179 kr |
| Kroppkakor | 169 kr |
| Smashburger | 189 kr |
| Crispy Chicken | 189 kr |
| Tagliatelle al Oxfilé | 209 kr |
| Tagliatelle al Fläskfilé | 189 kr |
| Halloumi Burger | 179 kr |
| Fish and Chips | 189 kr |
| Wiener Schnitzel | 189 kr |

#### Sallader (169–189 kr)
| Rätt | Pris |
|---|---|
| Halloumisallad | 169 kr |
| Caesarsallad | 169 kr |
| Räksallad | 189 kr |
| Varmrökt Lax | 189 kr |

#### Barnmeny (89 kr)
| Rätt | Pris |
|---|---|
| Nuggets med pommes och grönsaker | 89 kr |
| Pasta med köttfärssås | 89 kr |
| Pannkakor med sylt och grädde | 89 kr |

#### Kvällsmeny — serveras från 16:00 (229–289 kr)
| Rätt | Pris |
|---|---|
| Grillad kycklingfilé | 229 kr |
| Grillad fläskfilé | 229 kr |
| Grillad ryggbiff | 249 kr |
| Tigerräkor | 269 kr |
| Planka Lax | 249 kr |
| Planka Varmrökt Lax | 259 kr |
| Planka Kycklingfilé | 239 kr |
| Planka Fläskfilé | 239 kr |
| Planka Ryggbiff | 269 kr |

#### Pizzameny (129–169 kr)
| Pizza | Pris |
|---|---|
| Margarita | 129 kr |
| Vesuvio | 139 kr |
| Bolognese | 149 kr |
| Hawaii | 149 kr |
| Salami | 149 kr |
| Capricciosa | 149 kr |
| Quattro | 149 kr |
| Formaggio | 149 kr |
| Kebab | 159 kr |
| Gyros | 159 kr |
| Vegetarisk | 149 kr |
| Italiano | 159 kr |
| Fläskfilé | 159 kr |
| Kyckling | 159 kr |
| Borgholm | 169 kr |
| Oxfilé | 169 kr |
| Solkatten (signaturpizza) | 169 kr |

### 3. HAPPY HOUR
- Tid: Dagligen 15:00–17:00
- Stor öl: 69 kr
- Cider: 69 kr
- Valfri drink: 99 kr
- Roterande solstråleanimation (40s loop)

### 4. DRYCKER
#### Drinkar (119–139 kr)
- Aperol Spritz, Hugo, Mojito, Cosmopolitan, Gin & Tonic, Long Island Ice Tea, Sex on the Beach
- Shotbricka: 4 shots för 169 kr / 6 shots för 249 kr

#### Öl & Cider (79–89 kr)
- Fatöl stor / liten, Somersby Cider, Rekorderlig Cider, Lager (flaska), alkoholfria alternativ

#### Vin
- Rött, vitt, rosé — glas och flaska
- Prosecco

#### Läsk
- Cola, Fanta, Sprite, Loka, Smakis

### 5. KONTAKT
- Interaktiv Leaflet-karta centrerad på Borgholm (56.8795, 16.6565)
- Flikar för att växla mellan karta och satellitvy
- Anpassad guldmarkör med glow-effekt
- Tre-kolumns infopanel: Logotyp | Adress & öppettider | Kontaktinfo
- Knappar till Facebook och Instagram
- Adress: Storgatan 11, Borgholm, Öland

---

## Designsystem

### Färgpalett
| Namn | Hexkod | Användning |
|---|---|---|
| Guld | `#c9a55a` | Primär accent, glow-effekter, knappar |
| Mörkbakgrund | `#0d0d0d` | Sidans bakgrund |
| Alternativ mörk | `#111111` | Navbar, sektioner |
| Kortbakgrund | `#161616` | Menykort, block |
| Ljus text | `#e8e8e8` | Brödtext |
| Dämpad text | `#9a9a9a` | Beskrivningar, sekundär info |

### Typsnitt
| Typsnitt | Stil | Användning |
|---|---|---|
| Playfair Display | Serif | Rubriker |
| Cinzel | Display | Knappar, etiketter |
| Lato | Sans-serif | Brödtext |

### Responsiva brytpunkter
| Brytpunkt | Beteende |
|---|---|
| > 768px | Desktop-layout, horisontell navbar |
| ≤ 768px | Mobilmeny (hamburger), en-kolumns layout |
| ≤ 480px | Justerade padding och storlekar för små skärmar |

---

## JavaScript-funktionalitet

### Navbar
- Lägger till klassen `scrolled` (backdrop-blur + bakgrundsfärg) när sidan scrollats > 40px
- Hamburger-toggle för mobilmeny
- Stänger mobilmeny automatiskt när länk klickas
- Markerar aktiv sektion i navbaren baserat på scroll-position

### Smooth Scroll
- Fångar alla ankarlänkar (`#sektion`)
- Scrollar mjukt med hänsyn till navbarens höjd

### Scroll Reveal
- Använder `IntersectionObserver` API
- Element med klassen `.reveal` tonar in när 8% av elementet är synligt

### Hero-karusell
- 7 bilder, byter automatiskt var 3,8:e sekund
- Klickbara prickindikator för manuell navigation
- Återställer timern vid manuell klick
- ARIA-etiketter för tillgänglighet

### Partiklar
- Skapar 18–35 partiklar dynamiskt beroende på skärmbredd
- Varje partikel: slumpmässig x-position, storlek (0,8–3,3px), animationsduration (12–30s) och fördröjning (0–14s)

### Floating Action Button (FAB)
- Fast knapp längst ned till höger
- Öppnar/stänger sociala medie-knappar (Facebook, Instagram, telefon)
- Stängs av klick utanför eller Escape-tangenten
- Ikonen ändras (telefon → stäng)

### Interaktiv Karta
- Leaflet.js initierar karta vid Borgholm
- Två kartlager: OpenStreetMap och Esri World Imagery (satellit)
- Flikar för att växla vy
- `map.invalidateSize()` anropas vid laddning och scroll för korrekt rendering
- Popup med restaurangens namn och adress

### Menybakgrunder
- Itererar igenom alla `.menu-block`-element
- Skapar suddiga bakgrundsbilder som cyklar igenom de 7 restaurangbilderna

---

## Animationer

| Animation | Duration | Effekt |
|---|---|---|
| `glowPulse` | 2,6s loop | Gulddividers pulserar |
| `particleRise` | 12–30s loop | Partiklar stiger underifrån |
| `heroFadeIn` | 1,4s | Innehåll tonar in vid sidladdning |
| `spinRays` | 40s loop | Happy Hour-solstrålar roterar |
| Hover-övergångar | 0,3–0,9s | Mjuka hover-effekter på länkar/knappar |

---

## Git-historik (senaste commits)

| Hash | Meddelande |
|---|---|
| `6c094fe` | Lägg till Planka varmrökt Lax i kvällsmenyn |
| `84c8a71` | added a section |
| `2e5acb7` | Delete CNAME |
| `3df3dbf` | Create CNAME |
| `9ec052e` | Delete CNAME |

---

## Viktig Information för Underhåll

- **Menypriserna** är hårdkodade i `index.html` — uppdatera direkt i HTML-filen
- **Öppettider** finns i kontaktsektionen i `index.html`
- **Bilder** läggs till i `images/`-mappen och refereras i HTML/JS
- **Kartan** är centrerad på koordinater `56.8795, 16.6565` i `main.js`
- **Happy Hour-tider** är hårdkodade i `index.html`
- Inga beroenden att installera — öppna `index.html` direkt i webbläsaren
