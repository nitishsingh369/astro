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
  { img: hero, title: "the keeper of orbits", client: "Astrologer Maya R.", tag: "Brand Film · Reels", year: "2026", res: "3.2M views in 30 days", color: "var(--lime)" },
  { img: work1, title: "circle of twelve", client: "Cosmic Co.", tag: "Performance Ads", year: "2026", res: "4.8x ROAS on Meta", color: "var(--coral)" },
  { img: work2, title: "midnight tarot", client: "Sage & Cinder", tag: "YouTube Series", year: "2025", res: "120k subs in 6 months", color: "var(--pink)" },
  { img: work3, title: "celestial atlas", client: "Vedic Vault", tag: "Brand Identity", year: "2025", res: "Full rebrand", color: "var(--blue)" },
  { img: work4, title: "reels of the seer", client: "Indigo Path", tag: "Social Management", year: "2025", res: "0 → 250k followers", color: "var(--lilac)" },
  { img: hero, title: "house of mercury", client: "Mercurial", tag: "Content Strategy", year: "2024", res: "10x newsletter growth", color: "var(--teal)" },
];

function Work() {
  return (
    <div>
      <section className="px-6 md:px-10 pt-10 pb-16 text-center">
        <span className="inline-block bg-coral border-2 border-ink rounded-full px-4 py-1 text-sm text-cream rotate-[2deg] mb-8">selected work · 24–26</span>
        <h1 className="text-display text-[16vw] md:text-[11vw] leading-[0.88]">
          brands written<br/>
          <span className="text-serif-italic">in the stars.</span>
        </h1>
      </section>

      <section className="px-6 md:px-10 pb-28">
        <div className="grid gap-x-6 gap-y-20 md:grid-cols-2">
          {projects.map((p, i) => (
            <a key={p.title} href="#" className={`group block ${i % 3 === 0 ? "md:translate-y-12" : ""}`}>
              <div className="relative overflow-hidden rounded-2xl border-2 border-ink">
                <img src={p.img} alt={p.title} loading="lazy" width={1024} height={1280} className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105" />
                <span className="absolute top-4 right-4 bg-ink text-cream text-xs px-3 py-1 rounded-full">{p.year}</span>
              </div>
              <div className="relative -mt-4 ml-4">
                <span className="inline-block px-4 py-2 rounded-full text-sm font-medium text-ink rotate-[-2deg]" style={{ background: p.color }}>
                  {p.title}
                </span>
              </div>
              <div className="mt-6 flex justify-between items-start px-2">
                <div>
                  <p className="text-display text-2xl">{p.client}</p>
                  <p className="text-sm opacity-70">{p.tag}</p>
                </div>
                <p className="text-serif-italic text-xl">{p.res}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-10 pb-28 text-center">
        <p className="text-serif-italic text-4xl md:text-6xl">your story belongs here.</p>
        <Link to="/contact" className="mt-8 inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 text-cream hover:bg-coral transition">
          start a project <ArrowUpRight size={18}/>
        </Link>
      </section>
    </div>
  );
}
