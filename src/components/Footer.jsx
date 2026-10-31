import { Instagram, Linkedin, Twitter } from "lucide-react";
import Logo from "./Logo";
import { company, nav } from "../data/site";

const columns = [
  { title: "Company", links: nav },
  {
    title: "Produce",
    links: [
      { label: "Hass avocados", href: "#process" },
      { label: "Private label", href: "#faq" },
      { label: "Sample boxes", href: "#contact" },
      { label: "Orchard visits", href: "#contact" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: company.email, href: `mailto:${company.email}` },
      { label: company.phone, href: `tel:${company.phone.replace(/[^+\d]/g, "")}` },
      { label: "Request a quote", href: "#contact" },
    ],
  },
];

const Footer = () => {
  // Computed at render time so the copyright year is always current.
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-card">
      <div className="mx-auto max-w-[1180px] px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              {company.tagline}. Grown by 180 partner families, shipped cold to 12 countries.
            </p>
            <div className="mt-6 flex gap-2">
              {[
                { Icon: Linkedin, href: company.socials.linkedin, label: "LinkedIn" },
                { Icon: Instagram, href: company.socials.instagram, label: "Instagram" },
                { Icon: Twitter, href: company.socials.x, label: "X" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-lg border border-line text-ink/70 transition hover:border-ink/30 hover:text-ink"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="mono-label text-[10px] text-muted">{col.title}</p>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="break-words text-sm text-ink/80 transition hover:text-ink">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mono-label mt-16 flex flex-col gap-3 border-t border-line pt-6 text-[10px] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {company.name}. All rights reserved.
          </p>
          <p>Grown in West Africa · Est. {company.founded}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
