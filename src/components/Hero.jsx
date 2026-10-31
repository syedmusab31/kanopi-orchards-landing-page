import { motion } from "framer-motion";
import { Check, Ship } from "lucide-react";
import { hero } from "../data/site";
import { ArrowUpRight, Img, Title } from "./ui";

const ease = [0.22, 1, 0.36, 1];

const fade = (delay) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease },
});

/** Live reefer tracking card: a preview of what buyers see in the Kanopi dashboard. */
const ShipmentCard = () => {
  const s = hero.shipment;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.8, ease }}
      className="w-full max-w-[560px] overflow-hidden rounded-xl border border-ink/10 bg-card shadow-[0_24px_70px_-24px_rgba(0,0,0,.55)]"
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-4 border-b border-line px-5 py-3.5">
        <div className="flex min-w-0 items-center gap-3">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-ink text-white">
            <Ship className="h-4 w-4" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <p className="font-mono text-sm text-ink">Reefer {s.id}</p>
            <p className="truncate text-xs text-muted">{s.product}</p>
          </div>
        </div>
        <span className="mono-label inline-flex shrink-0 items-center gap-1.5 rounded-full bg-leaf/10 px-2.5 py-1 text-[10px] text-leaf">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-leaf opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-leaf" />
          </span>
          Live
        </span>
      </div>

      {/* Route */}
      <div className="px-5 pt-5">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-serif text-3xl leading-none text-ink">{s.from.code}</p>
            <p className="mt-1 text-xs text-muted">{s.from.name}</p>
          </div>
          <p className="mono-label whitespace-nowrap pb-5 text-[10px] text-muted">{s.eta}</p>
          <div className="text-right">
            <p className="font-serif text-3xl leading-none text-ink">{s.to.code}</p>
            <p className="mt-1 text-xs text-muted">{s.to.name}</p>
          </div>
        </div>

        <div className="relative mt-4 h-1.5 rounded-full bg-line">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${s.progress * 100}%` }}
            transition={{ duration: 1.6, delay: 1.1, ease }}
            className="absolute inset-y-0 left-0 rounded-full bg-accent"
          />
          <motion.span
            initial={{ left: 0 }}
            animate={{ left: `${s.progress * 100}%` }}
            transition={{ duration: 1.6, delay: 1.1, ease }}
            className="absolute top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-card bg-accent shadow"
          />
        </div>

        <ol className="mt-3 grid grid-cols-4">
          {s.stages.map((stage, i) => (
            <li
              key={stage}
              className={`mono-label flex items-center gap-1 text-[9px] sm:text-[10px] ${
                i === 0 ? "" : i === s.stages.length - 1 ? "justify-end" : "justify-center"
              } ${i <= s.stage ? "text-ink" : "text-muted/70"}`}
            >
              {i < s.stage && <Check className="h-3 w-3 text-leaf" aria-hidden="true" />}
              {stage}
            </li>
          ))}
        </ol>
      </div>

      {/* Sensor readings */}
      <dl className="mt-5 grid grid-cols-3 border-t border-line bg-paper">
        {s.stats.map((st, i) => (
          <div key={st.label} className={`px-5 py-3.5 ${i ? "border-l border-line" : ""}`}>
            <dt className="mono-label text-[9px] text-muted sm:text-[10px]">{st.label}</dt>
            <dd className="mt-1 font-mono text-sm text-ink sm:text-base">{st.value}</dd>
          </div>
        ))}
      </dl>
    </motion.div>
  );
};

const Chip = ({ chip, className, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: [0, -6, 0] }}
    transition={{
      opacity: { duration: 0.6, delay },
      y: { duration: 6, delay, repeat: Infinity, ease: "easeInOut" },
    }}
    className={`absolute hidden rounded-lg border border-ink/10 bg-card/95 px-4 py-2.5 shadow-lg backdrop-blur md:block ${className}`}
  >
    <p className="mono-label text-[10px] text-muted">{chip.label}</p>
    <p className="font-serif text-2xl leading-tight text-ink">{chip.value}</p>
  </motion.div>
);

const Hero = () => (
  <section id="top" className="pt-32 md:pt-40">
    <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
      <div className="mx-auto max-w-3xl text-center">
        <motion.a
          href="#markets"
          {...fade(0)}
          className="inline-flex max-w-full items-center overflow-hidden rounded-md border border-ink/80 bg-card text-left text-[13px] shadow-sm transition-shadow hover:shadow"
        >
          <span className="mono-label shrink-0 self-stretch bg-ink px-3 py-1.5 text-[11px] text-white">{hero.badge}</span>
          <span className="truncate px-3 py-1.5 text-ink/90">{hero.announcement}</span>
        </motion.a>

        <motion.div {...fade(0.1)}>
          <Title as="h1" parts={hero.title} className="mt-10 text-[44px] leading-[1.04] sm:text-6xl md:text-[78px]" />
        </motion.div>

        <motion.p {...fade(0.2)} className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-muted">
          {hero.sub[0]}
          <br className="hidden sm:block" /> {hero.sub[1]}
        </motion.p>

        <motion.div {...fade(0.3)} className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a href="#contact" className="btn-ghost">Book a call</a>
          <a href="#contact" className="btn-primary">Request samples</a>
        </motion.div>
      </div>

      {/* Pixel-art landscape with a live shipment preview on top */}
      <motion.div {...fade(0.45)} className="mt-20 md:mt-24">
        <div className="relative">
          <Img
            src={hero.image}
            alt="Pixelated illustration of green highland hills"
            className="h-[440px] w-full sm:h-[480px] md:h-[560px]"
            imgClassName="pixelated"
          />
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <ShipmentCard />
          </div>
          <Chip chip={hero.chips[0]} delay={1.6} className="left-8 top-10 lg:left-14" />
          <Chip chip={hero.chips[1]} delay={1.9} className="bottom-10 right-8 lg:right-14" />
        </div>

        <div className="grid border-x border-b border-line bg-card md:grid-cols-3">
          {hero.cards.map((card, i) => (
            <a
              key={card.label}
              href={card.href}
              className={`group flex flex-col ${i > 0 ? "border-t border-line md:border-l md:border-t-0" : ""}`}
            >
              <div className="flex-1 p-6">
                <p className="font-mono text-sm text-ink">{card.label}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{card.text}</p>
              </div>
              <div className="mono-label flex items-center justify-between border-t border-line bg-paper px-6 py-3 text-[10px] text-ink/70 group-hover:text-ink">
                {card.cta}
                <ArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
