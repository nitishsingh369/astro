import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import hero from "@/assets/hero-cosmic.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Astrology Marketing" },
      { name: "description", content: "Astrology Marketing is a niche creative studio of strategists, editors and storytellers serving the global astrology community." },
      { property: "og:title", content: "About — Astrology Marketing" },
      { property: "og:description", content: "We exist where commerce meets the cosmos." },
    ],
  }),
  component: About,
});

const values = [
  { t: "Niche obsession", d: "We don't take on fitness brands or fintechs. Astrology is the only universe we orbit.", color: "var(--lime)" },
  { t: "Craft first", d: "Every reel, ad and headline is hand-crafted. No templates, no AI slop, no shortcuts.", color: "var(--coral)" },
  { t: "Data with soul", d: "We respect intuition, but we also love a good dashboard. Both move the brand forward.", color: "var(--blue)" },
  { t: "Long-term alignment", d: "We work with a small roster so we can be your team, not your vendor.", color: "var(--pink)" },
];

const team = [
  { n: "Anaya Sethi", r: "Founder · Creative Director", sign: "Scorpio", color: "var(--coral)" },
  { n: "Rohan Mehta", r: "Head of Performance", sign: "Capricorn", color: "var(--lime)" },
  { n: "Mira Kapoor", r: "Lead Editor", sign: "Pisces", color: "var(--blue)" },
  { n: "Vikram Joshi", r: "Brand Strategist", sign: "Aquarius", color: "var(--pink)" },
];

function About() {
  return (
    <div>
      <section className="bg-ink text-cream px-6 md:px-10 py-28 text-center">
        <h1 className="text-display text-[14vw] md:text-[9vw]">
          we are a <span className="text-serif-italic">young,</span><br/>
          future-proof team of<br/>
          12 digitally native<br/>
          <span className="text-serif-italic text-lime">wunderkinder.</span> not to brag!
        </h1>
      </section>

      <section className="px-6 md:px-10 py-24 grid md:grid-cols-12 gap-10 items-end">
        <div className="md:col-span-7">
          <span className="inline-block bg-pink border-2 border-ink rounded-full px-4 py-1 text-sm rotate-[-3deg] mb-6">about the studio</span>
          <h2 className="text-display text-[12vw] md:text-[7vw]">
            we exist where<br/>
            <span className="text-serif-italic">commerce</span> meets<br/>
            the cosmos.
          </h2>
        </div>
        <div className="md:col-span-5">
          <div className="relative wiggle">
            <img src={hero} alt="studio" loading="lazy" width={1600} height={1200} className="aspect-[4/5] w-full object-cover rounded-2xl border-2 border-ink shadow-[8px_8px_0_0_var(--ink)]" />
          </div>
        </div>
      </section>

      <section className="bg-lime border-y-2 border-ink">
        <div className="px-6 md:px-10 py-24 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <span className="text-xs uppercase tracking-widest opacity-70">manifesto</span>
          </div>
          <div className="md:col-span-8 space-y-6 text-xl md:text-2xl">
            <p>The astrology industry is exploding. Millions search their birth chart every day, yet most astrologer brands still look — and sound — the same.</p>
            <p>Astrology Marketing was founded to change that. We bring the rigour of a performance agency, the eye of a fashion editorial, and the empathy of a longtime believer.</p>
            <p className="text-serif-italic text-3xl md:text-4xl">our mission: make spiritual practitioners impossible to ignore.</p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-28">
        <h2 className="text-display text-[12vw] md:text-[8vw] mb-12">what we <span className="text-serif-italic">believe</span></h2>
        <div className="grid md:grid-cols-2 gap-6">
          {values.map((v, i) => (
            <Reveal key={v.t} variant={i % 2 === 0 ? "left" : "right"} delay={i * 80} className="rounded-2xl border-2 border-ink p-10 hover:-translate-y-1 transition-transform duration-300" >
              <div style={{ background: v.color }} className="-m-10 p-10 rounded-2xl">
                <h3 className="text-display text-4xl text-ink">{v.t}</h3>
                <p className="mt-3 text-ink/80">{v.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-ink text-cream px-6 md:px-10 py-28">
        <h2 className="text-display text-[12vw] md:text-[8vw] mb-12">the <span className="text-serif-italic text-lime">constellation</span></h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {team.map((t, i) => (
            <Reveal key={t.n} variant="up" delay={i * 100} className="rounded-2xl border-2 border-cream/20 p-6 hover:border-lime hover:-translate-y-2 transition-all duration-300">
              <div className="aspect-square rounded-xl mb-4 grid place-items-center text-display text-7xl text-ink" style={{ background: t.color }}>
                {t.n.split(" ").map(w => w[0]).join("")}
              </div>
              <h3 className="text-display text-2xl">{t.n}</h3>
              <p className="text-sm opacity-70">{t.r}</p>
              <p className="text-serif-italic text-lime mt-2">{t.sign} ☉</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-10 py-28 text-center">
        <h2 className="text-display text-[14vw] md:text-[8vw]">let's make magic,<br/><span className="text-serif-italic">on a deadline.</span></h2>
        <Link to="/contact" className="mt-10 inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 text-cream font-medium hover:bg-coral transition">
          get in touch <ArrowUpRight size={18}/>
        </Link>
      </section>
    </div>
  );
}
