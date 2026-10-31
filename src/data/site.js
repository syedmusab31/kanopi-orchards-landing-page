// Single source of truth for all landing-page copy and company data.
// Kanopi Orchards is a fictional company; every figure below is placeholder data.

const u = (id, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const company = {
  name: "Kanopi Orchards",
  short: "Kanopi",
  tagline: "Export-grade Hass avocados from West Africa",
  founded: 2016,
  email: "trade@kanopiorchards.com",
  phone: "+231 (555) 014-2290",
  address: "Kanopi Valley Estate, Ridge Road, Western Highlands",
  hours: "Mon–Fri, 08:00–18:00 GMT",
  // Set to an international number (digits only, e.g. "231555014229") to enable WhatsApp.
  whatsapp: null,
  socials: {
    linkedin: "#",
    instagram: "#",
    x: "#",
  },
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Markets", href: "#markets" },
  { label: "Team", href: "#team" },
  { label: "Gallery", href: "#gallery" },
];

export const hero = {
  badge: "New",
  announcement: "Live cold-chain tracking: follow every pallet from orchard to port.",
  // Heading pieces: plain text + italic emphasis, mirroring the reference style.
  title: [
    { text: "Avocados for " },
    { text: "buyers", em: true },
    { text: " who can't afford " },
    { text: "surprises", em: true },
  ],
  sub: [
    "Export-grade Hass, grown on 340 hectares and packed to your spec.",
    "Priced per container, not per promise.",
  ],
  image: u("1470071459604-3b5ec3a7fe05", 360),
  prompt:
    "Reserve 3 reefers of Hass, size 18–22, landing Rotterdam in week 12.",
  cards: [
    {
      label: "Fresh Hass",
      text: "Dry matter tested before every harvest, so fruit ripens evenly on your shelf.",
      cta: "Specs",
      href: "#process",
    },
    {
      label: "Orchard program",
      text: "Grafted seedlings and agronomy support for 180 partner grower families.",
      cta: "About",
      href: "#about",
    },
    {
      label: "traceability.log",
      text: "Block, pick date and reefer temperature for every single carton.",
      cta: "Markets",
      href: "#markets",
    },
  ],
};

export const clients = [
  "Noordhaven Fresh",
  "Atlas Produce Co.",
  "Marée Primeurs",
  "Greenline Imports",
  "Sahel Fruit Hub",
  "Baltic Harvest",
];

export const about = {
  eyebrow: "01 — About",
  title: [{ text: "Grown " }, { text: "slowly", em: true }, { text: ". Shipped fast." }],
  body: [
    "Kanopi Orchards started in 2016 with 12 hectares, one borrowed tractor and a simple belief: West African avocados could compete with anyone's, if growers were paid fairly and fruit was handled properly.",
    "Today we farm 340 hectares and work with 180 smallholder families who share our agronomists, our packhouse and our buyers. Every season they earn more, and every season our importers get fruit they can plan around.",
  ],
  image: u("1523049673857-eb18f1d7b578", 1100),
  stats: [
    { value: "340 ha", label: "Under cultivation" },
    { value: "4,800 t", label: "Exported per year" },
    { value: "180", label: "Partner families" },
    { value: "12", label: "Import countries" },
  ],
};

export const process = {
  eyebrow: "02 — Process",
  title: [{ text: "From seedling to " }, { text: "reefer", em: true }],
  intro:
    "Four stages, one team responsible for all of them. That's how we keep quality from slipping between handoffs.",
  steps: [
    {
      n: "01",
      label: "nursery",
      title: "Grafted on site",
      text: "Hass scions grafted onto disease-resistant rootstock in our own nursery, about 60,000 seedlings a year.",
    },
    {
      n: "02",
      label: "orchard",
      title: "Farmed by the block",
      text: "Drip irrigation, soil tests every quarter and dry matter checks before a single fruit is picked.",
    },
    {
      n: "03",
      label: "packhouse",
      title: "Sorted to spec",
      text: "Graded by size and finish, hydro-cooled within 6 hours of harvest and packed in 4 kg or 10 kg cartons.",
    },
    {
      n: "04",
      label: "port",
      title: "Shipped cold",
      text: "Controlled-atmosphere reefers at 5.5 °C, monitored live until the container reaches your dock.",
    },
  ],
};

export const benefits = {
  eyebrow: "03 — Why Kanopi",
  title: [{ text: "Built for the " }, { text: "procurement", em: true }, { text: " meeting" }],
  intro:
    "The questions your team asks before signing a supplier are the ones we designed our business around.",
  items: [
    {
      label: "Consistency",
      title: "Same fruit, every week",
      text: "Staggered planting across three altitudes gives us a harvest window of 9 months a year.",
    },
    {
      label: "Compliance",
      title: "Paperwork that clears",
      text: "Phytosanitary certificates, residue reports and GAP audits shared before the vessel sails.",
    },
    {
      label: "Visibility",
      title: "No black boxes",
      text: "A shared dashboard with temperature logs, ETAs and QC photos for every container.",
    },
    {
      label: "Pricing",
      title: "Quoted per container",
      text: "Fixed seasonal contracts or spot pricing. You pick the model, we hold the price.",
    },
    {
      label: "Impact",
      title: "Farmers paid first",
      text: "Partner families are paid within 14 days of harvest, at a guaranteed floor price.",
    },
    {
      label: "Support",
      title: "A person, not a portal",
      text: "One account manager from your first sample to your hundredth container.",
    },
  ],
};

export const markets = {
  eyebrow: "04 — Markets",
  title: [{ text: "Landing on " }, { text: "three", em: true }, { text: " continents" }],
  intro:
    "Fruit leaves our packhouse for these regions every week of the season. Transit times are door to port.",
  rows: [
    { region: "Northern Europe", ports: "Rotterdam · Antwerp · Felixstowe", transit: "14–16 days", share: "46%" },
    { region: "Southern Europe", ports: "Valencia · Marseille · Genoa", transit: "11–13 days", share: "21%" },
    { region: "Middle East", ports: "Jebel Ali · Dammam", transit: "22–25 days", share: "17%" },
    { region: "West Africa", ports: "Tema · Abidjan · Dakar", transit: "3–6 days", share: "11%" },
    { region: "North America", ports: "Philadelphia · Montreal", transit: "19–21 days", share: "5%" },
  ],
};

const portrait = (id) => u(id, 600);

export const team = {
  eyebrow: "05 — Team",
  title: [{ text: "The people behind " }, { text: "every carton", em: true }],
  intro:
    "Agronomists, logisticians and former buyers who know what a late container costs.",
  members: [
    { name: "Amara Kollie", role: "Founder & CEO", image: portrait("1531123897727-8f129e1688ce") },
    { name: "Daniel Mensah", role: "Head of Agronomy", image: portrait("1507003211169-0a1dd7228f2d") },
    { name: "Hawa Sesay", role: "Export Operations", image: portrait("1494790108377-be9c29b29330") },
    { name: "Tomás Okafor", role: "Quality & Compliance", image: portrait("1500648767791-00dcc994a43e") },
    { name: "Grace Tubman", role: "Grower Partnerships", image: portrait("1438761681033-6461ffad8d80") },
  ],
};

export const gallery = {
  eyebrow: "06 — Gallery",
  title: [{ text: "A season at " }, { text: "Kanopi", em: true }],
  images: [
    { src: u("1523049673857-eb18f1d7b578"), alt: "Halved Hass avocados", caption: "Harvest sample" },
    { src: u("1464226184884-fa280b87c399"), alt: "Rows of crops in an open field", caption: "Lower blocks" },
    { src: u("1416879595882-3373a0480b5b"), alt: "Seedlings being potted by hand", caption: "Nursery" },
    { src: u("1500382017468-9049fed747ef"), alt: "Farmland at sunset", caption: "Western Highlands" },
    { src: u("1494412574643-ff11b0a5c1c3"), alt: "Shipping containers stacked at port", caption: "Port of loading" },
    { src: u("1610832958506-aa56368176cf"), alt: "Fresh fruit and vegetables", caption: "Packhouse QC" },
    { src: u("1574943320219-553eb213f72d"), alt: "Tractor working a field", caption: "Land prep" },
  ],
};

export const testimonials = {
  eyebrow: "07 — Buyers",
  title: [{ text: "What our " }, { text: "importers", em: true }, { text: " say" }],
  items: [
    {
      quote:
        "We moved 30% of our winter volume to Kanopi in our first year with them. Rejection rate on arrival was under 1%.",
      name: "Lieke van Dam",
      role: "Category Buyer, Noordhaven Fresh",
      country: "Netherlands",
    },
    {
      quote:
        "The temperature logs land in my inbox before the container does. That alone saves my team a day a week.",
      name: "Karim Haddad",
      role: "Supply Lead, Atlas Produce Co.",
      country: "UAE",
    },
    {
      quote:
        "Ripening is predictable, the paperwork is clean, and when something goes wrong they call us first.",
      name: "Claire Moreau",
      role: "Import Manager, Marée Primeurs",
      country: "France",
    },
  ],
};

export const faq = {
  eyebrow: "08 — FAQ",
  title: [{ text: "Questions buyers " }, { text: "ask first", em: true }],
  items: [
    {
      q: "What is your minimum order?",
      a: "One 40 ft reefer, roughly 20 tonnes. For first orders we can also consolidate a half load with another buyer on the same route.",
    },
    {
      q: "Which sizes and pack formats do you offer?",
      a: "Counts 12 to 32, packed in 4 kg single-layer or 10 kg double-layer cartons. Private-label packaging is available from 5 containers per season.",
    },
    {
      q: "When is your season?",
      a: "Our main harvest runs from March to November, with peak volumes between May and August.",
    },
    {
      q: "Can we visit the orchards?",
      a: "Yes. We host buyer visits year round and arrange transport from the nearest international airport.",
    },
    {
      q: "Do you send samples?",
      a: "We ship a 4 kg sample box by air freight, usually within 5 working days of your request.",
    },
  ],
};

export const cta = {
  title: [{ text: "Your next season, " }, { text: "sorted", em: true }],
  text: "Tell us your volumes and your calendar. We'll come back within one business day with a quote and a sample date.",
  image: u("1441974231531-c6227db76b6e", 320),
};

export const contact = {
  eyebrow: "09 — Contact",
  title: [{ text: "Let's talk " }, { text: "containers", em: true }],
  intro:
    "Request a quote, book an orchard visit, or ask for a sample box. A real person replies within 24 hours.",
};
