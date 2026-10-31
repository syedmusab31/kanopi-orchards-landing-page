<div align="center">

# Kanopi Orchards: Marketing Website

**The official landing page for Kanopi Orchards, an exporter of export-grade Hass avocados from West Africa.**

Designed and built to turn international produce buyers into qualified quote requests.

![React](https://img.shields.io/badge/React-19-1c1917?logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-7-1c1917?logo=vite&logoColor=FFD62E)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-1c1917?logo=tailwindcss&logoColor=38BDF8)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-1c1917?logo=framer&logoColor=white)

</div>

---

## About the project

Kanopi Orchards farms 340 hectares, works with 180 partner grower families and ships around 4,800 tonnes of avocados a year to importers in 12 countries. Their old web presence didn't reflect any of that. It read like a brochure, and procurement teams had no clear way to request a quote.

I was brought in to design and build a new landing page around one goal: **get a buyer from "who are these people?" to "send me a quote" in a single scroll.**

### What I delivered

- **Brand-aligned visual direction.** Editorial serif headlines with italic emphasis, monospace UI labels, hairline borders and a pixel-art landscape hero, so an agricultural business reads as modern and precise.
- **Rewritten copy end to end.** Every section answers a question a procurement team actually asks: consistency, compliance, transit times, pricing model, minimum order.
- **Proof-first hero.** A live reefer-tracking card (route progress, temperature, humidity, carton count) and quality stats float over the landscape, so buyers see the product experience before reading a word of sales copy.
- **Content in one file.** All copy, stats, team, markets, gallery and contact details live in `src/data/site.js`, so the Kanopi team can update the site without touching components.
- **Production details.** Responsive from 360px up, accessible markup (labels, `aria-*`, keyboard-navigable lightbox), reduced-motion support, an automatic current-year footer, image fallbacks and SEO/Open Graph meta.

## Page sections

| # | Section | Purpose |
|---|---------|---------|
| — | Hero | Value proposition, live shipment preview, three product entry points |
| — | Client strip | Social proof from importers |
| 01 | About | Company story and key figures |
| 02 | Process | Nursery → orchard → packhouse → port |
| 03 | Why Kanopi | Six buyer-focused benefits |
| 04 | Markets | Regions, ports, transit times and volume share |
| 05 | Team | Leadership with roles |
| 06 | Gallery | Mosaic grid with keyboard-friendly lightbox |
| 07 | Testimonials | Quotes from importers |
| 08 | FAQ | Minimum order, sizes, season, visits, samples |
| 09 | Contact | Quote request form (EmailJS) and contact details |

## Tech stack

- **React 19** with **Vite 7**
- **Tailwind CSS 4**, with design tokens defined via `@theme` in `src/index.css`
- **Framer Motion** for scroll reveals and transitions
- **Lucide** icons
- **EmailJS** for serverless form delivery
- Deployed on **Vercel**

## Getting started

```bash
npm install
```

```bash
cp .env.example .env
```

```bash
npm run dev
```

Other scripts: `npm run build`, `npm run preview` and `npm run lint`.

### Environment variables

| Variable | Description |
|----------|-------------|
| `VITE_SERVICE_KEY` | EmailJS service ID |
| `VITE_TEMPLATE_ID` | EmailJS template ID |
| `VITE_API_KEY` | EmailJS public key |

## Project structure

```
src/
├── data/site.js            # All copy & company data (edit here)
├── components/
│   ├── ui.jsx              # Title, Section, Reveal, Img (with fallback) primitives
│   ├── Logo.jsx            # Kanopi mark + wordmark
│   ├── Navbar.jsx
│   ├── Hero.jsx            # Live shipment tracker preview
│   ├── Sections.jsx        # About, Process, Benefits, Markets, Team, Gallery, FAQ…
│   ├── Contact.jsx
│   ├── Footer.jsx          # Year is always current
│   └── FloatingActions.jsx # Back-to-top + optional WhatsApp button
├── pages/                  # LandingPage, NotFound
└── index.css               # Theme tokens & utilities
```

### Enabling WhatsApp

WhatsApp is turned off for now. To enable the floating button and the contact link, set `company.whatsapp` in `src/data/site.js` to an international number with digits only (e.g. `"231555014229"`).

## Credits

Photography from [Unsplash](https://unsplash.com). Fonts: Newsreader, Inter and JetBrains Mono from Google Fonts.

---

<div align="center">
Designed & developed for <strong>Kanopi Orchards</strong> · © Kanopi Orchards
</div>
