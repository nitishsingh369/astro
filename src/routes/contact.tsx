import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Instagram, Youtube, Facebook, Linkedin, Twitter, Mail, Phone, MapPin, ArrowUpRight, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Astrology Marketing" },
      { name: "description", content: "Tell us about your astrology brand. We'll respond within one moon cycle (24 hours)." },
      { property: "og:title", content: "Contact — Astrology Marketing" },
      { property: "og:description", content: "Start a project with Astrology Marketing." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <div>
      <section className="px-6 md:px-10 pt-10 pb-12 text-center">
        <span className="inline-block bg-lime border-2 border-ink rounded-full px-4 py-1 text-sm rotate-[-3deg] mb-6">say hi ✦</span>
        <h1 className="text-display text-[16vw] md:text-[11vw] leading-[0.88]">
          let's align<br/>
          our <span className="text-serif-italic">orbits.</span>
        </h1>
      </section>

      <section className="px-6 md:px-10 pb-28 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5 space-y-10">
          <div className="rounded-2xl border-2 border-ink p-8 bg-pink">
            <p className="text-xs uppercase tracking-widest mb-4">Studio</p>
            <ul className="space-y-3 text-lg text-ink">
              <li className="flex gap-3 items-center"><Mail size={18}/> info@astrologymarketing.in</li>
              <li className="flex gap-3 items-center"><MessageCircle size={18}/> WhatsApp us</li>
              <li className="flex gap-3 items-center"><MapPin size={18}/> Bandra West, Mumbai</li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest mb-4">Follow the studio</p>
            <div className="flex flex-wrap gap-3">
              {[
                { I: Instagram, l: "Instagram", c: "var(--pink)" },
                { I: Youtube, l: "YouTube", c: "var(--coral)" },
                { I: Facebook, l: "Facebook", c: "var(--blue)" },
                { I: Linkedin, l: "LinkedIn", c: "var(--lilac)" },
                { I: Twitter, l: "Twitter / X", c: "var(--lime)" },
              ].map(({ I, l, c }) => (
                <a key={l} href="#" aria-label={l} className="grid h-14 w-14 place-items-center rounded-full border-2 border-ink hover:rotate-12 transition" style={{ background: c }}>
                  <I size={20} className="text-ink"/>
                </a>
              ))}
            </div>
          </div>
          <div className="border-l-4 border-ink pl-6 text-serif-italic text-2xl">
            we respond within one moon cycle — usually under 24 hours.
          </div>
        </div>

        <form className="md:col-span-7 rounded-2xl border-2 border-ink p-8 md:p-10 bg-cream" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
          {sent ? (
            <div className="text-center py-16">
              <div className="text-display text-6xl">message <span className="text-serif-italic">received ✦</span></div>
              <p className="mt-6 text-lg">Thank you. We'll be in touch before the next full moon.</p>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Field label="Your name" name="name" />
                <Field label="Email" name="email" type="email" />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <Field label="Brand / Handle" name="brand" />
                <SelectField label="Zodiac sun sign" name="sign" />
              </div>
              <SelectField label="What do you need?" name="service" options={["Video Editing", "Social Media", "Performance Ads", "Content Strategy", "Profile Management", "Brand Identity", "Everything"]} />
              <div>
                <label className="text-xs uppercase tracking-widest">Tell us your story</label>
                <textarea name="msg" rows={5} className="mt-2 w-full bg-transparent border-b-2 border-ink focus:border-coral outline-none py-3 resize-none" placeholder="What are you building?"/>
              </div>
              <button className="inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 text-cream font-medium hover:bg-coral transition">
                send transmission <ArrowUpRight size={18}/>
              </button>
            </div>
          )}
        </form>
      </section>
    </div>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest">{label}</label>
      <input type={type} name={name} className="mt-2 w-full bg-transparent border-b-2 border-ink focus:border-coral outline-none py-3"/>
    </div>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options?: string[] }) {
  const opts = options ?? ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
  return (
    <div>
      <label className="text-xs uppercase tracking-widest">{label}</label>
      <select name={name} className="mt-2 w-full bg-transparent border-b-2 border-ink focus:border-coral outline-none py-3">
        <option value="">Select…</option>
        {opts.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}
