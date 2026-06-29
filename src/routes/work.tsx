import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import hero from "@/assets/hero-cosmic.jpg";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Lunara Studio" },
      { name: "description", content: "Selected campaigns, brand films and social systems we've built for astrologers and spiritual creators." },
      { property: "og:title", content: "Work — Lunara Studio" },
      { property: "og:description", content: "Selected campaigns for the modern mystic." },
    ],
  }),
  component: Work,
});

const projects = [
  { img: hero, title: "the keeper of orbits", client: "Astrologer Maya R.", tag: "Brand Film · Reels", year: "2026", res: "3.2M views in 30 days" },
  { img: work1, title: "circle of twelve", client: "Cosmic Co.", tag: "Performance Ads", year: "2026", res: "4.8x ROAS on Meta" },
  { img: work2, title: "midnight tarot", client: "Sage & Cinder", tag: "YouTube Series", year: "2025", res: "120k subs in 6 months" },
  { img: work3, title: "celestial atlas", client: "Vedic Vault", tag: "Brand Identity", year: "2025", res: "Full rebrand" },
  { img: work4, title: "reels of the seer", client: "Indigo Path", tag: "Social Management", year: "2025", res: "0 → 250k followers" },
  { img: hero, title: "house of mercury", client: "Mercurial", tag: "Content Strategy", year: "2024", res: "10x newsletter growth" },
];

function Work() {
  return (
    <div>
      <section className="mx-auto max-w-[1600px] px-6 md:px-10 pt-16 pb-16">
        <p className="text-xs uppercase tracking-[0.3em] text-gold/80">selected work · 2024 – 2026</p>
        <h1 className="text-display text-6xl md:text-[9vw] mt-6 leading-[0.9]">
          Brands written<br/>
          <span className="text-italic-serif text-gold">in the stars.</span>
        </h1>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 md:px-10 pb-28">
        <div className="grid gap-x-6 gap-y-16 md:grid-cols-2">
          {projects.map((p, i) => (
            <a key={p.title} href="#" className={`group block ${i % 3 === 0 ? "md:translate-y-12" : ""}`}>
              <div className="overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" width={1024} height={1280} className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="mt-5 flex justify-between items-start">
                <div>
                  <h3 className="text-display text-3xl md:text-4xl">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{p.client} · {p.tag}</p>
                </div>
                <div className="text-right text-sm">
                  <p className="text-gold">{p.year}</p>
                  <p className="text-muted-foreground italic">{p.res}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 md:px-10 pb-28 text-center">
        <p className="text-italic-serif text-3xl md:text-5xl text-cream/80">your story belongs here.</p>
        <Link to="/contact" className="mt-8 inline-flex items-center gap-3 rounded-full border border-gold/60 px-8 py-4 text-gold hover:bg-gold hover:text-ink transition">
          Start a project <ArrowUpRight size={18}/>
        </Link>
      </section>
    </div>
  );
}
