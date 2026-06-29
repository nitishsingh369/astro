import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import hero from "@/assets/hero-cosmic.jpg";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lunara — Marketing for Astrologers" },
      { name: "description", content: "Cinematic video, social strategy and performance marketing built exclusively for astrologers, tarot readers and spiritual creators." },
      { property: "og:title", content: "Lunara — Marketing for Astrologers" },
      { property: "og:description", content: "We grow spiritual brands with cosmic creative." },
    ],
  }),
  component: Home,
});

const marqueeWords = ["video editing", "social media", "performance ads", "content strategy", "profile management", "brand identity"];

function Sticker({ children, color, rotate = -4, className = "" }: { children: React.ReactNode; color: string; rotate?: number; className?: string }) {
  return (
    <span
      className={`inline-block px-4 py-2 rounded-full text-sm font-medium text-ink ${className}`}
      style={{ background: color, transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </span>
  );
}

function Squiggle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 40" className={className} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" aria-hidden>
      <path d="M5 20 Q 30 0, 55 20 T 105 20 T 155 20 T 195 20" />
    </svg>
  );
}

function Smiley({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden>
      <circle cx="50" cy="50" r="48" fill="var(--blue)" stroke="var(--ink)" strokeWidth="3"/>
      <circle cx="35" cy="42" r="5" fill="var(--ink)"/>
      <circle cx="65" cy="42" r="5" fill="var(--ink)"/>
      <path d="M30 60 Q 50 80 70 60" stroke="var(--ink)" strokeWidth="4" fill="none" strokeLinecap="round"/>
    </svg>
  );
}

function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative px-6 md:px-10 pt-10 pb-16">
        <div className="relative">
          <h1 className="text-display text-[18vw] md:text-[14vw] text-ink leading-[0.85]">
            we make <span className="text-serif-italic">advertising</span>
            <br/>
            for the new <span className="relative inline-block">
              <Smiley className="absolute -left-4 -top-4 md:-left-6 md:-top-6 w-14 h-14 md:w-20 md:h-20 float" />
              cosmos
              <svg viewBox="0 0 400 60" className="absolute -bottom-3 left-0 w-full" fill="none" stroke="var(--ink)" strokeWidth="3" aria-hidden>
                <ellipse cx="200" cy="30" rx="195" ry="22" />
              </svg>
            </span>
          </h1>
          <div className="absolute top-0 right-4 md:right-10 w-40 md:w-56 wiggle">
            <div className="relative">
              <img src={hero} alt="astrologer" width={1600} height={1200} className="w-full aspect-[4/5] object-cover rounded-md border-2 border-ink shadow-[8px_8px_0_0_var(--ink)]" />
              <Sticker color="var(--lime)" rotate={-8} className="absolute -bottom-3 -left-3">we make ads ✦</Sticker>
            </div>
          </div>
        </div>
      </section>

      {/* WANNA BE */}
      <section className="relative px-6 md:px-10 py-24 overflow-hidden">
        <div className="relative max-w-6xl mx-auto text-center">
          <Squiggle className="mx-auto w-64 text-ink mb-6" />
          <h2 className="text-display text-[16vw] md:text-[10vw] leading-[0.9]">
            we wanna be<br/>
            <span className="text-serif-italic">where the stars are</span>
          </h2>
          <p className="mt-12 max-w-2xl mx-auto text-lg md:text-xl">
            Audiences are more scattered <span className="text-serif-italic">and</span> more reachable than ever.
            We help astrologers, tarot readers and spiritual brands become leaders on the channels of the new mainstream.
          </p>
          <Sticker color="var(--lime)" rotate={-6} className="absolute -left-2 top-20 hidden md:inline-block">✦ thumbs up</Sticker>
          <Sticker color="var(--pink)" rotate={8} className="absolute right-0 bottom-20 hidden md:inline-block">★ magic dust</Sticker>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y-2 border-ink overflow-hidden bg-lime py-5">
        <div className="flex marquee whitespace-nowrap text-display text-5xl md:text-7xl text-ink">
          {[...marqueeWords, ...marqueeWords].map((w, i) => (
            <span key={i} className="mx-6 flex items-center gap-6">
              {w}<span className="text-coral">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* AGENCY BUILT */}
      <section className="px-6 md:px-10 py-28 text-center">
        <h2 className="text-display text-[14vw] md:text-[9vw]">
          an agency built<br/>
          for the future. <span className="text-serif-italic">from TV<br/>to TikTok.</span>
        </h2>
        <div className="relative mx-auto mt-4 w-fit">
          <Squiggle className="w-80 md:w-[28rem] text-ink" />
        </div>

        {/* polaroid stack */}
        <div className="relative mt-20 max-w-5xl mx-auto h-[420px] md:h-[520px]">
          {[
            { img: hero, rot: -8, x: "0%", label: "girls just wanna read charts!", color: "var(--pink)" },
            { img: work1, rot: 4, x: "22%", label: "moonlit & magical", color: "var(--lime)" },
            { img: work2, rot: -3, x: "44%", label: "tarot tuesday vibes", color: "var(--coral)" },
            { img: work4, rot: 6, x: "66%", label: "reels of the seer", color: "var(--blue)" },
          ].map((p, i) => (
            <div key={i}
              className="absolute top-0 w-44 md:w-64 hover:z-10 hover:scale-105 transition"
              style={{ left: p.x, transform: `rotate(${p.rot}deg)` }}>
              <img src={p.img} alt={p.label} loading="lazy" width={1024} height={1280} className="w-full aspect-[3/4] object-cover rounded-md border-2 border-ink shadow-[6px_6px_0_0_var(--ink)]"/>
              <Sticker color={p.color} rotate={-p.rot} className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap">{p.label}</Sticker>
            </div>
          ))}
        </div>

        <p className="mt-32 max-w-3xl mx-auto text-lg md:text-xl">
          To reach the new generation you need to know where they are. We are a true 360° spiritual agency, working the whole spectrum — from TikTok content to YouTube series and from creator collabs to performance ads.
        </p>
      </section>

      {/* SERVICES */}
      <section className="bg-ink text-cream px-6 md:px-10 py-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <h2 className="text-display text-[14vw] md:text-[8vw]">
            what we<br/>
            <span className="text-serif-italic text-lime">actually do.</span>
          </h2>
          <Link to="/services" className="inline-flex items-center gap-2 rounded-full bg-lime text-ink px-6 py-3 text-sm uppercase font-semibold hover:bg-cream transition">
            All services <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { n: "01", t: "Video Editing", d: "Cinematic reels, YouTube shorts and long-form readings — cut to keep viewers spellbound.", color: "var(--coral)" },
            { n: "02", t: "Social Media", d: "Daily content, community building and aesthetic feeds that turn followers into believers.", color: "var(--lime)" },
            { n: "03", t: "Performance Ads", d: "Meta and Google campaigns engineered for consultations, course sales and bookings.", color: "var(--blue)" },
            { n: "04", t: "Content Strategy", d: "Story pillars, content calendars and hooks tuned to your zodiac niche.", color: "var(--pink)" },
            { n: "05", t: "Profile Management", d: "We run the whole show — DMs, posts, comments — so you can focus on the stars.", color: "var(--lilac)" },
            { n: "06", t: "Brand Identity", d: "Logo, palette, type and motion systems with a celestial soul.", color: "var(--teal)" },
          ].map(s => (
            <div key={s.n} className="rounded-2xl border-2 border-cream/15 p-8 hover:border-lime transition group">
              <div className="flex items-center justify-between">
                <span className="text-xs opacity-60">{s.n}</span>
                <span className="h-3 w-3 rounded-full" style={{ background: s.color }} />
              </div>
              <h3 className="text-display text-4xl mt-8">{s.t}</h3>
              <p className="mt-3 text-sm opacity-75">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RECENT WORK */}
      <section className="px-6 md:px-10 py-28">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <h2 className="text-display text-[14vw] md:text-[9vw]">
            recent <span className="text-serif-italic">work</span>
          </h2>
          <Link to="/work" className="rounded-full bg-ink text-cream px-6 py-3 text-sm uppercase font-semibold hover:bg-coral transition inline-flex items-center gap-2">
            Open archive <ArrowUpRight size={16}/>
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-12">
          {[
            { img: work1, span: "md:col-span-7", title: "the keeper of orbits", year: "2026", color: "var(--lime)", rot: -3 },
            { img: work2, span: "md:col-span-5", title: "midnight tarot", year: "2026", color: "var(--coral)", rot: 2 },
            { img: work3, span: "md:col-span-5", title: "celestial atlas", year: "2025", color: "var(--blue)", rot: -2 },
            { img: work4, span: "md:col-span-7", title: "reels of the seer", year: "2025", color: "var(--pink)", rot: 3 },
          ].map((p, i) => (
            <figure key={i} className={`${p.span} group relative`}>
              <div className="overflow-hidden rounded-2xl border-2 border-ink">
                <img src={p.img} alt={p.title} loading="lazy" width={1024} height={1280} className="aspect-[5/6] w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <Sticker color={p.color} rotate={p.rot} className="absolute -bottom-3 left-6">{p.title}</Sticker>
              <span className="absolute top-4 right-4 bg-ink text-cream text-xs px-3 py-1 rounded-full">{p.year}</span>
            </figure>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="bg-lime border-y-2 border-ink px-6 md:px-10 py-20">
        <div className="grid gap-10 md:grid-cols-4 text-ink">
          {[
            { k: "80+", v: "astrologer brands" },
            { k: "120M", v: "organic views" },
            { k: "4.2x", v: "average ROAS" },
            { k: "∞", v: "cosmic curiosity" },
          ].map(s => (
            <div key={s.v}>
              <div className="text-display text-7xl md:text-8xl">{s.k}</div>
              <p className="mt-2 text-sm uppercase tracking-widest">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-10 py-28 text-center relative">
        <Sticker color="var(--coral)" rotate={-6} className="mb-6">your next chapter ✦</Sticker>
        <h2 className="text-display text-[14vw] md:text-[10vw]">
          let's read<br/>your <span className="text-serif-italic">chart.</span>
        </h2>
        <Link to="/contact" className="mt-10 inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 text-cream font-medium hover:bg-coral transition">
          book a discovery call <ArrowUpRight size={18} />
        </Link>
      </section>
    </div>
  );
}
