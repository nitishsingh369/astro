import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Instagram, Youtube, Facebook, Linkedin, Twitter, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Lunara Studio" },
      { name: "description", content: "Tell us about your astrology brand. We'll respond within one moon cycle (24 hours)." },
      { property: "og:title", content: "Contact — Lunara Studio" },
      { property: "og:description", content: "Start a project with Lunara." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <div>
      <section className="mx-auto max-w-[1600px] px-6 md:px-10 pt-16 pb-12">
        <p className="text-xs uppercase tracking-[0.3em] text-gold/80">get in touch</p>
        <h1 className="text-display text-6xl md:text-[9vw] mt-6 leading-[0.9]">
          Let's align our<br/>
          <span className="text-italic-serif text-gold">orbits.</span>
        </h1>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 md:px-10 pb-28 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5 space-y-10">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold/80 mb-4">Studio</p>
            <ul className="space-y-3 text-lg">
              <li className="flex gap-3 items-center"><Mail size={18} className="text-gold"/> hello@lunara.studio</li>
              <li className="flex gap-3 items-center"><Phone size={18} className="text-gold"/> +91 98765 43210</li>
              <li className="flex gap-3 items-center"><MapPin size={18} className="text-gold"/> Bandra West, Mumbai</li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold/80 mb-4">Follow the studio</p>
            <div className="flex gap-3">
              {[
                { I: Instagram, l: "Instagram" },
                { I: Youtube, l: "YouTube" },
                { I: Facebook, l: "Facebook" },
                { I: Linkedin, l: "LinkedIn" },
                { I: Twitter, l: "Twitter / X" },
              ].map(({ I, l }) => (
                <a key={l} href="#" aria-label={l} className="grid h-12 w-12 place-items-center rounded-full border border-border hover:border-gold hover:text-gold hover:bg-gold/10 transition">
                  <I size={18}/>
                </a>
              ))}
            </div>
          </div>
          <div className="border-l-2 border-gold/40 pl-6 text-italic-serif text-2xl text-cream/80">
            "We respond within one moon cycle — usually under 24 hours."
          </div>
        </div>

        <form className="md:col-span-7 space-y-6" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
          {sent ? (
            <div className="border border-gold/40 rounded-sm p-10 text-center bg-violet/10">
              <h3 className="text-display text-4xl text-gold">✦ message received</h3>
              <p className="mt-4 text-cream/80">Thank you. We'll be in touch before the next full moon.</p>
            </div>
          ) : (
            <>
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
                <label className="text-xs uppercase tracking-widest text-gold/80">Tell us your story</label>
                <textarea name="msg" rows={5} className="mt-2 w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-cream resize-none" placeholder="What are you building?"/>
              </div>
              <button className="inline-flex items-center gap-3 rounded-full bg-gold px-8 py-4 text-ink font-medium hover:bg-cream transition">
                Send transmission <ArrowUpRight size={18}/>
              </button>
            </>
          )}
        </form>
      </section>
    </div>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-gold/80">{label}</label>
      <input type={type} name={name} className="mt-2 w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-cream"/>
    </div>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options?: string[] }) {
  const opts = options ?? ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-gold/80">{label}</label>
      <select name={name} className="mt-2 w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-cream">
        <option value="" className="bg-background">Select…</option>
        {opts.map(o => <option key={o} value={o} className="bg-background">{o}</option>)}
      </select>
    </div>
  );
}
