import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import hero from "@/assets/hero-cosmic.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Lunara Studio" },
      { name: "description", content: "Lunara is a niche creative studio of strategists, editors and storytellers serving the global astrology community." },
      { property: "og:title", content: "About — Lunara Studio" },
      { property: "og:description", content: "We exist where commerce meets the cosmos." },
    ],
  }),
  component: About,
});

const values = [
  { t: "Niche obsession", d: "We don't take on fitness brands or fintechs. Astrology is the only universe we orbit." },
  { t: "Craft first", d: "Every reel, ad and headline is hand-crafted. No templates, no AI slop, no shortcuts." },
  { t: "Data with soul", d: "We respect intuition, but we also love a good dashboard. Both move the brand forward." },
  { t: "Long-term alignment", d: "We work with a small roster so we can be your team, not your vendor." },
];

const team = [
  { n: "Anaya Sethi", r: "Founder · Creative Director", sign: "Scorpio ☉" },
  { n: "Rohan Mehta", r: "Head of Performance", sign: "Capricorn ☉" },
  { n: "Mira Kapoor", r: "Lead Editor", sign: "Pisces ☉" },
  { n: "Vikram Joshi", r: "Brand Strategist", sign: "Aquarius ☉" },
];

function About() {
  return (
    <div>
      <section className="mx-auto max-w-[1600px] px-6 md:px-10 pt-16 pb-24 grid md:grid-cols-12 gap-10 items-end">
        <div className="md:col-span-7">
          <p className="text-xs uppercase tracking-[0.3em] text-gold/80">about the studio</p>
          <h1 className="text-display text-6xl md:text-[8vw] mt-6 leading-[0.9]">
            We exist where<br/>
            <span className="text-italic-serif text-gold">commerce</span> meets<br/>
            the cosmos.
          </h1>
        </div>
        <div className="md:col-span-5">
          <img src={hero} alt="studio portrait" loading="lazy" width={1600} height={1200} className="aspect-[4/5] w-full object-cover" />
        </div>
      </section>

      <section className="border-y border-border/40 bg-card">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-24 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.3em] text-gold/80">manifesto</p>
          </div>
          <div className="md:col-span-8 space-y-6 text-lg md:text-xl text-cream/85">
            <p>The astrology industry is exploding. Millions search their birth chart every day, yet most astrologer brands still look — and sound — the same.</p>
            <p>Lunara was founded to change that. We bring the rigour of a performance agency, the eye of a fashion editorial, and the empathy of a longtime believer.</p>
            <p className="text-italic-serif text-gold text-3xl">Our mission: make spiritual practitioners impossible to ignore.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 md:px-10 py-28">
        <h2 className="text-display text-5xl md:text-7xl mb-12">What we <span className="text-italic-serif text-gold">believe</span></h2>
        <div className="grid md:grid-cols-2 gap-px bg-border">
          {values.map(v => (
            <div key={v.t} className="bg-background p-10">
              <h3 className="text-display text-3xl">{v.t}</h3>
              <p className="mt-3 text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-card">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-28">
          <h2 className="text-display text-5xl md:text-7xl mb-12">The <span className="text-italic-serif text-gold">constellation</span></h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-px bg-border">
            {team.map(t => (
              <div key={t.n} className="bg-card p-8">
                <div className="aspect-square bg-violet/20 mb-6 grid place-items-center text-display text-6xl text-gold">
                  {t.n.split(" ").map(w => w[0]).join("")}
                </div>
                <h3 className="text-display text-2xl">{t.n}</h3>
                <p className="text-sm text-muted-foreground">{t.r}</p>
                <p className="text-xs text-gold mt-2">{t.sign}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 md:px-10 py-28 text-center">
        <h2 className="text-display text-5xl md:text-7xl">Let's make magic, on a deadline.</h2>
        <Link to="/contact" className="mt-10 inline-flex items-center gap-3 rounded-full bg-gold px-8 py-4 text-ink font-medium hover:bg-cream transition">
          Get in touch <ArrowUpRight size={18}/>
        </Link>
      </section>
    </div>
  );
}
