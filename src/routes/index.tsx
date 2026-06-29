import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Sparkles, Moon, Star } from "lucide-react";
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

const marqueeWords = ["✦ video editing", "✦ social media", "✦ performance ads", "✦ content strategy", "✦ profile management", "✦ brand identity"];

function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative grain overflow-hidden">
        <div className="relative mx-auto max-w-[1600px] px-6 md:px-10 pt-10 pb-24">
          <div className="grid gap-10 md:grid-cols-12 items-end">
            <div className="md:col-span-7">
              <p className="text-xs uppercase tracking-[0.3em] text-gold/80 mb-6">est. 2024 · cosmic creative studio</p>
              <h1 className="text-display text-[14vw] md:text-[8.5vw] leading-[0.88]">
                we make<br/>
                <span className="text-italic-serif text-gold">advertising</span><br/>
                for the<br/>
                <span className="relative inline-block">
                  cosmos
                  <Sparkles className="absolute -right-10 -top-4 text-gold animate-pulse" size={32} />
                </span>
              </h1>
            </div>
            <div className="md:col-span-5 relative">
              <img src={hero} alt="cosmic portrait" width={1600} height={1200} className="aspect-[4/5] w-full object-cover rounded-sm" />
              <div className="absolute -bottom-6 -left-6 bg-gold text-ink px-4 py-3 rotate-[-4deg] shadow-lg">
                <p className="text-xs uppercase tracking-widest">trusted by 80+ astrologers</p>
              </div>
            </div>
          </div>
          <p className="mt-16 max-w-2xl text-lg md:text-xl text-cream/80">
            Audiences are scattered across reels, shorts and stories — yet hungrier than ever for meaning.
            We help astrologers, tarot readers and spiritual guides become <span className="text-italic-serif text-gold">leaders</span> of the new mainstream.
          </p>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-border/40 overflow-hidden bg-violet/10 py-6">
        <div className="flex marquee whitespace-nowrap text-display text-4xl md:text-6xl text-cream">
          {[...marqueeWords, ...marqueeWords].map((w, i) => (
            <span key={i} className="mx-8 text-italic-serif">{w}</span>
          ))}
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="mx-auto max-w-[1600px] px-6 md:px-10 py-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold/80">what we do</p>
            <h2 className="text-display text-5xl md:text-7xl mt-4">A studio built for <span className="text-italic-serif text-gold">spiritual brands.</span></h2>
          </div>
          <Link to="/services" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest hover:text-gold">
            All services <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="grid gap-px bg-border md:grid-cols-3">
          {[
            { n: "01", t: "Video Editing", d: "Cinematic reels, YouTube shorts and long-form readings — cut to keep viewers spellbound." },
            { n: "02", t: "Social Media", d: "Daily content, community building and aesthetic feeds that turn followers into believers." },
            { n: "03", t: "Performance Ads", d: "Meta and Google campaigns engineered for consultations, course sales and bookings." },
            { n: "04", t: "Content Strategy", d: "Story pillars, content calendars and hooks tuned to your zodiac niche." },
            { n: "05", t: "Profile Management", d: "We run the whole show — DMs, posts, comments — so you can focus on the stars." },
            { n: "06", t: "Brand Identity", d: "Logo, palette, type and motion systems with a celestial soul." },
          ].map(s => (
            <div key={s.n} className="bg-background p-8 md:p-10 hover:bg-card transition group">
              <div className="flex items-baseline justify-between">
                <span className="text-xs text-gold/70">{s.n}</span>
                <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition" size={20} />
              </div>
              <h3 className="text-display text-3xl mt-8">{s.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WORK GRID */}
      <section className="bg-card">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-28">
          <div className="flex items-end justify-between mb-12">
            <h2 className="text-display text-5xl md:text-7xl">Recent <span className="text-italic-serif text-gold">work</span></h2>
            <Link to="/work" className="text-sm uppercase tracking-widest hover:text-gold inline-flex items-center gap-2">Open archive <ArrowUpRight size={16}/></Link>
          </div>
          <div className="grid gap-4 md:grid-cols-12">
            <figure className="md:col-span-7 group relative overflow-hidden">
              <img src={work1} alt="zodiac campaign" width={1024} height={1280} loading="lazy" className="aspect-[5/6] w-full object-cover transition duration-700 group-hover:scale-105" />
              <figcaption className="absolute bottom-4 left-4 right-4 flex justify-between text-sm">
                <span className="text-italic-serif text-2xl">the keeper of orbits</span>
                <span className="text-gold">2026</span>
              </figcaption>
            </figure>
            <figure className="md:col-span-5 group relative overflow-hidden">
              <img src={work2} alt="tarot ritual" width={1024} height={1280} loading="lazy" className="aspect-[5/6] w-full object-cover transition duration-700 group-hover:scale-105" />
              <figcaption className="absolute bottom-4 left-4 right-4 flex justify-between text-sm">
                <span className="text-italic-serif text-2xl">midnight tarot</span>
                <span className="text-gold">2026</span>
              </figcaption>
            </figure>
            <figure className="md:col-span-5 group relative overflow-hidden">
              <img src={work3} alt="zodiac wheel" width={1024} height={1280} loading="lazy" className="aspect-[5/6] w-full object-cover transition duration-700 group-hover:scale-105" />
              <figcaption className="absolute bottom-4 left-4 right-4 flex justify-between text-sm">
                <span className="text-italic-serif text-2xl">celestial atlas</span>
                <span className="text-gold">2025</span>
              </figcaption>
            </figure>
            <figure className="md:col-span-7 group relative overflow-hidden">
              <img src={work4} alt="social media astrology" width={1024} height={1280} loading="lazy" className="aspect-[5/6] w-full object-cover transition duration-700 group-hover:scale-105" />
              <figcaption className="absolute bottom-4 left-4 right-4 flex justify-between text-sm">
                <span className="text-italic-serif text-2xl">reels of the seer</span>
                <span className="text-gold">2025</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-[1600px] px-6 md:px-10 py-28">
        <div className="grid gap-12 md:grid-cols-4">
          {[
            { k: "80+", v: "astrologer brands grown" },
            { k: "120M", v: "organic views generated" },
            { k: "4.2x", v: "average ROAS on ads" },
            { k: "∞", v: "cosmic curiosity" },
          ].map(s => (
            <div key={s.v} className="border-t border-gold/40 pt-6">
              <div className="text-display text-6xl md:text-7xl text-gold">{s.k}</div>
              <p className="mt-3 text-sm text-muted-foreground uppercase tracking-widest">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[1600px] px-6 md:px-10 pb-28">
        <div className="relative grain rounded-sm bg-violet/20 border border-gold/30 px-8 md:px-16 py-20 md:py-28 text-center overflow-hidden">
          <Moon className="absolute top-8 left-8 text-gold/40" size={40} />
          <Star className="absolute bottom-8 right-8 text-gold/40" size={32} />
          <p className="text-xs uppercase tracking-[0.3em] text-gold/80">your next chapter</p>
          <h2 className="text-display text-5xl md:text-8xl mt-6">Let's read your <span className="text-italic-serif text-gold">chart</span>.</h2>
          <p className="mt-6 max-w-xl mx-auto text-cream/70">A 30-minute discovery call to map your brand's cosmic potential — no charge, no pressure.</p>
          <Link to="/contact" className="mt-10 inline-flex items-center gap-3 rounded-full bg-gold px-8 py-4 text-ink font-medium hover:bg-cream transition">
            Book a discovery call <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
