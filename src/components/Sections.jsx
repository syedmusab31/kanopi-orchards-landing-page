import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, X } from "lucide-react";
import {
  about,
  benefits,
  clients,
  cta,
  faq,
  gallery,
  markets,
  process,
  team,
  testimonials,
} from "../data/site";
import { ArrowUpRight, Eyebrow, Img, Reveal, Section, SectionHead, Title } from "./ui";

export const Clients = () => (
  <section className="py-16">
    <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
      <Eyebrow className="text-center">Shipping weekly to importers in 12 countries</Eyebrow>
      <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
        {clients.map((c) => (
          <p key={c} className="text-center font-serif text-xl italic text-ink/45">
            {c}
          </p>
        ))}
      </div>
    </div>
  </section>
);

export const About = () => (
  <Section id="about">
    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
      <div>
        <SectionHead eyebrow={about.eyebrow} title={about.title} />
        <Reveal delay={0.1} className="-mt-6 space-y-5 text-lg leading-relaxed text-muted">
          {about.body.map((p) => (
            <p key={p.slice(0, 20)}>{p}</p>
          ))}
        </Reveal>
      </div>
      <Reveal delay={0.15}>
        <Img src={about.image} alt="Freshly halved Hass avocados" className="aspect-[4/3] w-full border border-line" />
      </Reveal>
    </div>

    <div className="mt-16 grid grid-cols-2 border border-line bg-card md:grid-cols-4">
      {about.stats.map((s, i) => (
        <Reveal
          key={s.label}
          delay={i * 0.08}
          className={`p-6 md:p-8 ${i % 2 ? "border-l border-line" : ""} ${i > 1 ? "border-t border-line md:border-t-0" : ""} ${i === 2 ? "md:border-l" : ""}`}
        >
          <p className="font-serif text-4xl text-ink md:text-5xl">{s.value}</p>
          <p className="mono-label mt-3 text-[10px] text-muted">{s.label}</p>
        </Reveal>
      ))}
    </div>
  </Section>
);

export const Process = () => (
  <Section id="process">
    <SectionHead eyebrow={process.eyebrow} title={process.title} intro={process.intro} />
    <div className="grid border border-line bg-card sm:grid-cols-2 lg:grid-cols-4">
      {process.steps.map((s, i) => (
        <Reveal
          key={s.n}
          delay={i * 0.08}
          className={`flex flex-col p-6 md:p-8 ${i > 0 ? "border-t border-line sm:border-t-0" : ""} ${i % 2 ? "sm:border-l" : ""} ${i > 1 ? "sm:border-t lg:border-t-0" : ""} ${i === 2 ? "lg:border-l" : ""}`}
        >
          <div className="flex items-center justify-between">
            <span className="font-mono text-sm text-ink">{s.label}</span>
            <span className="mono-label text-[10px] text-muted">{s.n}</span>
          </div>
          <h3 className="mt-10 font-serif text-2xl text-ink">{s.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">{s.text}</p>
        </Reveal>
      ))}
    </div>
  </Section>
);

export const Benefits = () => (
  <Section id="why">
    <SectionHead eyebrow={benefits.eyebrow} title={benefits.title} intro={benefits.intro} />
    <div className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
      {benefits.items.map((b, i) => (
        <Reveal key={b.title} delay={(i % 3) * 0.08} y={16} className="flex flex-col bg-card">
          <div className="flex-1 p-6 md:p-8">
            <p className="font-mono text-sm text-ink">{b.label}</p>
            <h3 className="mt-6 font-serif text-2xl text-ink">{b.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{b.text}</p>
          </div>
        </Reveal>
      ))}
    </div>
  </Section>
);

export const Markets = () => (
  <Section id="markets">
    <SectionHead eyebrow={markets.eyebrow} title={markets.title} intro={markets.intro} />
    <Reveal className="overflow-hidden border border-line bg-card">
      <div className="mono-label hidden grid-cols-12 border-b border-line bg-paper px-6 py-3 text-[10px] text-muted md:grid">
        <span className="col-span-3">Region</span>
        <span className="col-span-5">Destination ports</span>
        <span className="col-span-2">Transit</span>
        <span className="col-span-2 text-right">Share of volume</span>
      </div>
      {markets.rows.map((r, i) => (
        <div
          key={r.region}
          className={`grid grid-cols-2 gap-y-2 px-6 py-5 md:grid-cols-12 md:items-center ${i ? "border-t border-line" : ""}`}
        >
          <span className="col-span-2 font-serif text-xl text-ink md:col-span-3">{r.region}</span>
          <span className="col-span-2 text-sm text-muted md:col-span-5">{r.ports}</span>
          <span className="font-mono text-sm text-ink md:col-span-2">{r.transit}</span>
          <span className="flex items-center justify-end gap-3 md:col-span-2">
            <span className="hidden h-1.5 w-20 overflow-hidden rounded-full bg-line sm:block">
              <span className="block h-full bg-accent" style={{ width: r.share }} />
            </span>
            <span className="font-mono text-sm text-ink">{r.share}</span>
          </span>
        </div>
      ))}
    </Reveal>
  </Section>
);

export const Team = () => (
  <Section id="team">
    <SectionHead eyebrow={team.eyebrow} title={team.title} intro={team.intro} />
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
      {team.members.map((m, i) => (
        <Reveal key={m.name} delay={i * 0.06} className="group border border-line bg-card">
          <Img
            src={m.image}
            alt={`Portrait of ${m.name}`}
            className="aspect-[4/5] w-full"
            imgClassName="grayscale transition duration-500 group-hover:grayscale-0 group-hover:scale-[1.03]"
          />
          <div className="border-t border-line p-4">
            <p className="font-serif text-lg leading-tight text-ink">{m.name}</p>
            <p className="mono-label mt-1.5 text-[10px] text-muted">{m.role}</p>
          </div>
        </Reveal>
      ))}
    </div>
  </Section>
);

export const Gallery = () => {
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((a) => (a + 1) % gallery.images.length);
      if (e.key === "ArrowLeft") setActive((a) => (a - 1 + gallery.images.length) % gallery.images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  // 4-column mosaic: one hero tile, four squares, then two wide tiles.
  const spans = ["col-span-2 md:row-span-2", "", "", "", "", "col-span-2", "col-span-2"];

  return (
    <Section id="gallery">
      <SectionHead eyebrow={gallery.eyebrow} title={gallery.title} />
      <div className="grid auto-rows-[200px] grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-4">
        {gallery.images.map((img, i) => (
          <Reveal key={img.src} delay={(i % 4) * 0.06} className={`${spans[i]} h-full`}>
            <button
              onClick={() => setActive(i)}
              className="group relative block h-full w-full overflow-hidden border border-line text-left"
              aria-label={`Open image: ${img.caption}`}
            >
              <Img src={img.src} alt={img.alt} className="h-full w-full" imgClassName="transition duration-700 group-hover:scale-105" />
              <span className="mono-label absolute bottom-3 left-3 rounded bg-card/90 px-2 py-1 text-[10px] text-ink backdrop-blur">
                {img.caption}
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/85 p-4"
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
          >
            <button className="absolute right-4 top-4 rounded-full bg-card p-2 text-ink" aria-label="Close">
              <X className="h-5 w-5" />
            </button>
            <motion.figure
              key={active}
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="max-h-full w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Img src={gallery.images[active].src} alt={gallery.images[active].alt} className="aspect-[3/2] w-full" />
              <figcaption className="mono-label mt-3 flex justify-between text-[11px] text-white/80">
                <span>{gallery.images[active].caption}</span>
                <span>
                  {active + 1} / {gallery.images.length}
                </span>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
};

export const Testimonials = () => (
  <Section id="buyers">
    <SectionHead eyebrow={testimonials.eyebrow} title={testimonials.title} />
    <div className="grid gap-4 md:grid-cols-3">
      {testimonials.items.map((t, i) => (
        <Reveal key={t.name} delay={i * 0.08} className="flex flex-col border border-line bg-card">
          <blockquote className="flex-1 p-6 font-serif text-xl leading-snug text-ink md:p-8">
            &ldquo;{t.quote}&rdquo;
          </blockquote>
          <div className="flex items-center justify-between border-t border-line bg-paper px-6 py-4 md:px-8">
            <div>
              <p className="text-sm font-medium text-ink">{t.name}</p>
              <p className="text-xs text-muted">{t.role}</p>
            </div>
            <span className="mono-label text-[10px] text-muted">{t.country}</span>
          </div>
        </Reveal>
      ))}
    </div>
  </Section>
);

export const Faq = () => {
  const [open, setOpen] = useState(0);
  return (
    <Section id="faq">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <SectionHead eyebrow={faq.eyebrow} title={faq.title} />
        <div className="border-t border-line">
          {faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="border-b border-line">
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-xl text-ink">{item.q}</span>
                  {isOpen ? <Minus className="h-4 w-4 shrink-0" /> : <Plus className="h-4 w-4 shrink-0" />}
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden pr-10 text-muted"
                    >
                      <span className="block pb-5 leading-relaxed">{item.a}</span>
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export const Cta = () => (
  <section className="border-t border-line py-20 md:py-28">
    <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
      <Reveal className="relative overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <Img src={cta.image} alt="" className="h-full w-full" imgClassName="pixelated" />
        </div>
        <div className="absolute inset-0 bg-ink/35" />
        <div className="relative px-6 py-20 text-center md:py-28">
          <Title parts={cta.title} className="text-4xl !text-white md:text-6xl" />
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/85">{cta.text}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#contact" className="btn-ghost">Book an orchard visit</a>
            <a href="#contact" className="btn-primary">
              Get a quote <ArrowUpRight />
            </a>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);
