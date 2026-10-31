import { useState } from "react";
import { motion } from "framer-motion";

/** Renders [{ text, em }] pieces as a serif headline with italic emphasis. */
export const Title = ({ parts, as: Tag = "h2", className = "" }) => (
  <Tag className={`font-serif font-normal tracking-tight text-ink ${className}`}>
    {parts.map((p, i) =>
      p.em ? (
        <em key={i} className="italic">
          {p.text}
        </em>
      ) : (
        <span key={i}>{p.text}</span>
      )
    )}
  </Tag>
);

export const Eyebrow = ({ children, className = "" }) => (
  <p className={`mono-label text-muted ${className}`}>{children}</p>
);

export const Reveal = ({ children, delay = 0, className = "", y = 24 }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

/** Standard section header: eyebrow, serif title, optional intro. */
export const SectionHead = ({ eyebrow, title, intro, center = false }) => (
  <Reveal className={`mb-12 md:mb-16 ${center ? "mx-auto text-center" : ""} max-w-2xl`}>
    <Eyebrow className="mb-4">{eyebrow}</Eyebrow>
    <Title parts={title} className="text-4xl leading-[1.08] md:text-5xl" />
    {intro && <p className="mt-5 text-lg leading-relaxed text-muted">{intro}</p>}
  </Reveal>
);

export const Section = ({ id, children, className = "" }) => (
  <section id={id} className={`border-t border-line py-20 md:py-28 ${className}`}>
    <div className="mx-auto max-w-[1180px] px-4 sm:px-6">{children}</div>
  </section>
);

export const ArrowUpRight = ({ className = "h-3 w-3" }) => (
  <svg viewBox="0 0 12 12" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
    <path d="M3.5 8.5l5-5M4.5 3.5h4v4" strokeLinecap="square" />
  </svg>
);

/**
 * Remote image with a graceful fallback: if the URL fails, a soft
 * pixel-grid pattern in brand colours is shown instead of a broken icon.
 */
export const Img = ({ src, alt, className = "", imgClassName = "", ...rest }) => {
  const [failed, setFailed] = useState(false);
  return (
    <div className={`relative overflow-hidden bg-[#e9efe2] ${className}`}>
      {failed ? (
        <div
          role="img"
          aria-label={alt}
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(135deg,#b7cf9a 0%,#6f9a4a 45%,#3f6b2e 100%), repeating-linear-gradient(0deg,transparent 0 11px,rgba(255,255,255,.12) 11px 12px)",
            backgroundBlendMode: "overlay",
          }}
        />
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
          className={`h-full w-full object-cover ${imgClassName}`}
          {...rest}
        />
      )}
    </div>
  );
};
