import { company } from "../data/site";

/** Kanopi mark: four leaves around a seed, drawn as a single-colour glyph. */
export const LogoMark = ({ className = "h-6 w-6" }) => (
  <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
    <g stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round">
      <path d="M16 15C16 9.5 12.8 5.5 16 2.5c3.2 3 0 7 0 12.5Z" />
      <path d="M16 17c0 5.5 3.2 9.5 0 12.5-3.2-3 0-7 0-12.5Z" />
      <path d="M15 16c-5.5 0-9.5 3.2-12.5 0 3-3.2 7 0 12.5 0Z" />
      <path d="M17 16c5.5 0 9.5-3.2 12.5 0-3 3.2-7 0-12.5 0Z" />
    </g>
    <circle cx="16" cy="16" r="2.4" fill="currentColor" />
  </svg>
);

const Logo = ({ className = "" }) => (
  <a href="/#top" className={`inline-flex items-center gap-2.5 text-ink ${className}`} aria-label={`${company.name} home`}>
    <LogoMark className="h-6 w-6" />
    <span className="font-sans text-[15px] font-medium tracking-[0.22em] uppercase">{company.short}</span>
  </a>
);

export default Logo;
