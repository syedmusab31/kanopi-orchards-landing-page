import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { company, contact } from "../data/site";
import { Reveal, Section, SectionHead } from "./ui";

const empty = { name: "", email: "", company: "", country: "", volume: "", message: "" };

const field =
  "w-full rounded-lg border border-line bg-paper px-4 py-3 text-[15px] text-ink placeholder:text-muted/70 transition focus:border-accent focus:bg-card focus:outline-none focus:ring-2 focus:ring-accent/20";

const Contact = ({ draft }) => {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState("idle");

  // Prefill the message when a visitor sends an order from the hero box.
  useEffect(() => {
    if (draft) setForm((f) => ({ ...f, message: draft }));
  }, [draft]);

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(
        import.meta.env.VITE_SERVICE_KEY,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          full_name: form.name,
          email_address: form.email,
          company: form.company,
          country_region: form.country,
          volume: form.volume,
          message: form.message,
        },
        import.meta.env.VITE_API_KEY
      );
      setStatus("success");
      setForm(empty);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  const details = [
    { icon: Mail, label: "Email", value: company.email, href: `mailto:${company.email}` },
    { icon: Phone, label: "Phone", value: company.phone, href: `tel:${company.phone.replace(/[^+\d]/g, "")}` },
    { icon: MapPin, label: "Estate", value: company.address },
    { icon: Clock, label: "Hours", value: company.hours },
  ];

  return (
    <Section id="contact">
      <SectionHead eyebrow={contact.eyebrow} title={contact.title} intro={contact.intro} />

      <div className="grid border border-line bg-card lg:grid-cols-[1.5fr_1fr]">
        <Reveal className="p-6 md:p-10">
          <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="mono-label mb-2 block text-[10px] text-muted">Full name *</span>
              <input name="name" required value={form.name} onChange={onChange} className={field} placeholder="Jane Doe" />
            </label>
            <label className="block">
              <span className="mono-label mb-2 block text-[10px] text-muted">Work email *</span>
              <input name="email" type="email" required value={form.email} onChange={onChange} className={field} placeholder="jane@importer.com" />
            </label>
            <label className="block">
              <span className="mono-label mb-2 block text-[10px] text-muted">Company</span>
              <input name="company" value={form.company} onChange={onChange} className={field} placeholder="Importer Ltd." />
            </label>
            <label className="block">
              <span className="mono-label mb-2 block text-[10px] text-muted">Destination country</span>
              <input name="country" value={form.country} onChange={onChange} className={field} placeholder="Netherlands" />
            </label>
            <label className="block sm:col-span-2">
              <span className="mono-label mb-2 block text-[10px] text-muted">Estimated volume</span>
              <select name="volume" value={form.volume} onChange={onChange} className={field}>
                <option value="">Select a range</option>
                <option>Sample box only</option>
                <option>1–5 containers / season</option>
                <option>6–20 containers / season</option>
                <option>20+ containers / season</option>
              </select>
            </label>
            <label className="block sm:col-span-2">
              <span className="mono-label mb-2 block text-[10px] text-muted">Message *</span>
              <textarea
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={onChange}
                className={`${field} resize-none`}
                placeholder="Sizes, pack format, target ports and delivery weeks…"
              />
            </label>

            <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-muted" aria-live="polite">
                {status === "success" && <span className="text-leaf">Thanks! A trade manager will reply within one business day.</span>}
                {status === "error" && (
                  <span className="text-ember">
                    Something went wrong. Please email us at {company.email}.
                  </span>
                )}
                {status !== "success" && status !== "error" && "We never share your details."}
              </p>
              <button type="submit" disabled={status === "sending"} className="btn-primary disabled:opacity-60">
                {status === "sending" ? "Sending…" : "Send request"}
              </button>
            </div>
          </form>
        </Reveal>

        <Reveal delay={0.1} className="border-t border-line bg-paper p-6 md:p-10 lg:border-l lg:border-t-0">
          <p className="font-mono text-sm text-ink">contact.info</p>
          <ul className="mt-8 space-y-6">
            {details.map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="flex gap-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-line bg-card">
                  <Icon className="h-4 w-4 text-ink" aria-hidden="true" />
                </span>
                <span>
                  <span className="mono-label block text-[10px] text-muted">{label}</span>
                  {href ? (
                    <a href={href} className="text-[15px] text-ink hover:text-accent">{value}</a>
                  ) : (
                    <span className="text-[15px] text-ink">{value}</span>
                  )}
                </span>
              </li>
            ))}
            <li className="flex gap-4">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-line bg-card">
                <MessageCircle className="h-4 w-4 text-ink" aria-hidden="true" />
              </span>
              <span>
                <span className="mono-label block text-[10px] text-muted">WhatsApp</span>
                {company.whatsapp ? (
                  <a href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-[15px] text-ink hover:text-accent">
                    Chat with our trade desk
                  </a>
                ) : (
                  <span className="text-[15px] text-muted">Coming soon</span>
                )}
              </span>
            </li>
          </ul>
        </Reveal>
      </div>
    </Section>
  );
};

export default Contact;
