import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { Instagram, Linkedin, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { sendContactMessage } from "@/lib/contact.functions";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Kumar Neepu | Astrology Marketing" },
      { name: "description", content: "Tell me about your practice. I reply the same day." },
      { property: "og:title", content: "Contact — Kumar Neepu" },
      { property: "og:description", content: "Tell me about your practice." },
    ],
  }),
  component: Contact,
});

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.5 14.4c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.7.2-.2.3-.7 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.5-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5s-.7-1.7-1-2.3c-.3-.6-.5-.5-.7-.5H7.7c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1.1 2.8 1.2 3c.1.2 2.1 3.2 5 4.5 1.7.7 2.4.8 3.3.7.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.3c1.4.8 3.1 1.3 4.8 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3.3.9.9-3.2-.2-.3C3.8 15 3.3 13.5 3.3 12c0-4.8 3.9-8.7 8.7-8.7s8.7 3.9 8.7 8.7-3.9 8-8.7 8z"/>
    </svg>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const send = useServerFn(sendContactMessage);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setLoading(true);
    setError(null);
    try {
      const res = await send({
        data: {
          name: String(fd.get("name") ?? ""),
          whatsapp: String(fd.get("whatsapp") ?? ""),
          handle: String(fd.get("handle") ?? ""),
          msg: String(fd.get("msg") ?? ""),
        },
      });
      if (res.ok) setSent(true);
      else setError(res.error ?? "Something went wrong. Please message me directly on WhatsApp.");
    } catch {
      setError("Something went wrong. Please message me directly on WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <section className="px-6 md:px-10 pt-10 pb-12 text-center">
        <span className="inline-block bg-lime border-2 border-ink rounded-full px-4 py-1 text-sm font-medium rotate-[-2deg] mb-6">
          Direct Contact ✦
        </span>
        <h1 className="text-display text-[15vw] md:text-[9vw] leading-[0.88]">
          Tell me about<br/>
          <span className="text-serif-italic text-coral">your practice.</span>
        </h1>
      </section>

      <section className="px-6 md:px-10 pb-28 max-w-6xl mx-auto grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5 space-y-8">
          {/* WHATSAPP MAIN BUTTON */}
          <div className="rounded-2xl border-2 border-ink p-8 bg-lime shadow-[6px_6px_0_0_var(--ink)]">
            <p className="text-xs uppercase tracking-widest text-ink font-semibold mb-2">Fastest Response</p>
            <h3 className="text-display text-3xl text-ink">WhatsApp Direct</h3>
            <p className="mt-2 text-sm text-ink/80">
              Message me directly to discuss your content and consultation goals.
            </p>
            <a
              href="https://wa.link/nmlzuz"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center justify-center gap-2 rounded-full bg-[#25D366] text-white px-6 py-4 font-bold border-2 border-ink shadow-[2px_2px_0_0_var(--ink)] hover:scale-105 transition"
            >
              <WhatsAppIcon size={20} /> Message on WhatsApp
            </a>
          </div>

          <div className="rounded-2xl border-2 border-ink p-8 bg-cream shadow-[4px_4px_0_0_var(--ink)]">
            <p className="text-xs uppercase tracking-widest text-ink/70 font-semibold mb-4">Location &amp; Direct Email</p>
            <ul className="space-y-4 text-base text-ink">
              <li className="flex gap-3 items-center font-medium">
                <Mail size={18} className="text-coral" /> info@astrologymarketing.in
              </li>
              <li className="flex gap-3 items-center font-medium">
                <MapPin size={18} className="text-coral" /> Delhi &amp; Varanasi
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-coral pl-6 text-serif-italic text-2xl text-ink font-medium">
            "I reply to every inquiry the same day."
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-ink/70 font-semibold mb-4">Socials</p>
            <div className="flex gap-3">
              {[
                { label: "Instagram", href: "https://www.instagram.com/astro.marketingg?igsh=aG8wZXB2dHhsM3ds", Icon: Instagram, color: "var(--pink)" },
                { label: "LinkedIn", href: "https://www.linkedin.com/in/kumarneepu?utm_source=share_via&utm_content=profile&utm_medium=member_android", Icon: Linkedin, color: "var(--lime)" },
              ].map(({ label, href, Icon, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-12 w-12 place-items-center rounded-full border-2 border-ink hover:scale-110 transition"
                  style={{ background: color }}
                >
                  <Icon size={20} className="text-ink"/>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* 4-FIELD FORM */}
        <form className="md:col-span-7 rounded-2xl border-2 border-ink p-8 md:p-10 bg-cream shadow-[6px_6px_0_0_var(--ink)]" onSubmit={onSubmit}>
          {sent ? (
            <div className="text-center py-16">
              <div className="text-display text-5xl text-ink">thank you <span className="text-serif-italic text-coral">✦</span></div>
              <p className="mt-6 text-lg text-ink/80">Your message has been received. I'll reply to you <strong>the same day</strong>.</p>
            </div>
          ) : (
            <div className="space-y-6">
              <h2 className="text-display text-3xl text-ink mb-2">Send a Message</h2>
              
              <div>
                <label className="text-xs uppercase tracking-widest font-semibold text-ink/80">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  maxLength={100}
                  className="mt-2 w-full bg-transparent border-b-2 border-ink focus:border-coral outline-none py-3 text-ink font-medium"
                  placeholder="e.g. Maya Sharma"
                />
              </div>

              <div>
                <label className="text-xs uppercase tracking-widest font-semibold text-ink/80">WhatsApp Number</label>
                <input
                  type="text"
                  name="whatsapp"
                  required
                  maxLength={50}
                  className="mt-2 w-full bg-transparent border-b-2 border-ink focus:border-coral outline-none py-3 text-ink font-medium"
                  placeholder="e.g. +91 98765 43210"
                />
              </div>

              <div>
                <label className="text-xs uppercase tracking-widest font-semibold text-ink/80">Instagram Handle</label>
                <input
                  type="text"
                  name="handle"
                  maxLength={100}
                  className="mt-2 w-full bg-transparent border-b-2 border-ink focus:border-coral outline-none py-3 text-ink font-medium"
                  placeholder="e.g. @astrologer_maya"
                />
              </div>

              <div>
                <label className="text-xs uppercase tracking-widest font-semibold text-ink/80">Tell me about your practice</label>
                <textarea
                  name="msg"
                  rows={5}
                  required
                  maxLength={2000}
                  className="mt-2 w-full bg-transparent border-b-2 border-ink focus:border-coral outline-none py-3 resize-none text-ink font-medium"
                  placeholder="What is your focus (Vedic, Tarot, Numerology)? What is your current booking challenge?"
                />
              </div>

              {error && <p className="text-sm text-coral font-medium">{error}</p>}

              <button
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-3 rounded-full bg-ink px-8 py-4 text-cream font-semibold hover:bg-coral transition disabled:opacity-60"
              >
                {loading ? "Sending…" : "Send"} <ArrowUpRight size={18}/>
              </button>
            </div>
          )}
        </form>
      </section>
    </div>
  );
}
