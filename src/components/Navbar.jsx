import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { ArrowUpRight } from "./ui";
import { nav } from "../data/site";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-line bg-paper/85 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1180px] items-center justify-between px-4 sm:px-6">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="mono-label text-ink/80 transition-colors hover:text-ink">
              {item.label}
            </a>
          ))}
          <a href="#faq" className="mono-label inline-flex items-center gap-1 text-ink/80 hover:text-ink">
            FAQ <ArrowUpRight />
          </a>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="#contact" className="btn-ghost">Contact</a>
          <a href="#contact" className="btn-primary">Get a quote</a>
        </div>

        <button
          className="rounded-md p-2 text-ink lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-line bg-paper lg:hidden"
            aria-label="Mobile"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {[...nav, { label: "FAQ", href: "#faq" }].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="mono-label rounded-md px-2 py-3 text-ink/80 hover:bg-card"
                >
                  {item.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-3">
                Get a quote
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
