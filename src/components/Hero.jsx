import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUp, Plus } from "lucide-react";
import { hero } from "../data/site";
import { ArrowUpRight, Img, Title } from "./ui";

const fade = (delay) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

/** Types the sample order into the box once, then hands control to the visitor. */
const useTypewriter = (text, start = 900, speed = 32) => {
  const [value, setValue] = useState("");
  const [done, setDone] = useState(false);
  useEffect(() => {
    let i = 0;
    let timer;
    const tick = () => {
      i += 1;
      setValue(text.slice(0, i));
      if (i < text.length) timer = setTimeout(tick, speed);
      else setDone(true);
    };
    timer = setTimeout(tick, start);
    return () => clearTimeout(timer);
  }, [text, start, speed]);
  return [value, setValue, done];
};

const Hero = ({ onDraft }) => {
  const [value, setValue, typed] = useTypewriter(hero.prompt);
  const inputRef = useRef(null);

  const submit = (e) => {
    e.preventDefault();
    if (!value.trim()) return inputRef.current?.focus();
    onDraft(value.trim());
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
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
            <Title
              as="h1"
              parts={hero.title}
              className="mt-10 text-[44px] leading-[1.04] sm:text-6xl md:text-[78px]"
            />
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

        {/* Pixel-art landscape with the order box floating on top */}
        <motion.div {...fade(0.45)} className="mt-20 md:mt-24">
          <div className="relative">
            <Img
              src={hero.image}
              alt="Pixelated illustration of green highland hills"
              className="h-[380px] w-full sm:h-[460px] md:h-[560px]"
              imgClassName="pixelated"
            />
            <div className="absolute inset-0 flex items-center justify-center px-4">
              <form
                onSubmit={submit}
                className="w-full max-w-[620px] rounded-xl border-2 border-ember/70 bg-card p-4 shadow-[0_20px_60px_-20px_rgba(0,0,0,.45)]"
              >
                <label htmlFor="hero-order" className="sr-only">Describe your order</label>
                <textarea
                  id="hero-order"
                  ref={inputRef}
                  rows={2}
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder="Describe your order: volume, size, port, week…"
                  className="w-full resize-none bg-transparent text-[15px] leading-relaxed text-ink placeholder:text-muted focus:outline-none"
                />
                <div className="mt-2 flex items-center justify-between">
                  <span className="flex items-center gap-2 text-muted">
                    <Plus className="h-5 w-5" aria-hidden="true" />
                    <span className={`mono-label text-[10px] transition-opacity ${typed ? "opacity-100" : "opacity-0"}`}>
                      Press send to start a quote
                    </span>
                  </span>
                  <button
                    type="submit"
                    className="grid h-9 w-9 place-items-center rounded-full bg-ember text-white transition-transform hover:scale-105"
                    aria-label="Send order request"
                  >
                    <ArrowUp className="h-4 w-4" />
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="grid border-x border-b border-line bg-card md:grid-cols-3">
            {hero.cards.map((card, i) => (
              <a
                key={card.label}
                href={card.href}
                className={`group flex flex-col ${i > 0 ? "border-t border-line md:border-t-0 md:border-l" : ""}`}
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
};

export default Hero;
