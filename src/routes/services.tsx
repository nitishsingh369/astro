import { createFileRoute, Link } from "@tanstack/react-router";
import { Video, Share2, TrendingUp, PenLine, UserCog, Sparkles, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Lunara Studio" },
      { name: "description", content: "Video editing, social media, performance marketing, content strategy and profile management — purpose-built for astrologers." },
      { property: "og:title", content: "Services — Lunara Studio" },
      { property: "og:description", content: "Six disciplines, one cosmic marketing engine for spiritual brands." },
    ],
  }),
  component: Services,
});

const services = [
  {
    icon: Video, n: "01", t: "Video Editing",
    d: "From raw tarot pulls to polished cinematic reels. We cut, colour and score every frame so your readings stop the scroll.",
    items: ["Reels & Shorts (3–60s)", "Long-form YouTube edits", "Captions, sound design, motion graphics", "Zodiac-themed visual templates"],
  },
  {
    icon: Share2, n: "02", t: "Social Media Marketing",
    d: "A coordinated presence across Instagram, TikTok, YouTube and Facebook — engineered to grow followers who actually book you.",
    items: ["Content calendars by moon phase", "Reels strategy & hooks", "Community management", "Collab and creator outreach"],
  },
  {
    icon: TrendingUp, n: "03", t: "Performance Marketing",
    d: "Meta and Google Ads built for spiritual offers — readings, courses, memberships. We obsess over CAC, ROAS and LTV.",
    items: ["Funnel design & landing pages", "Creative testing at scale", "Retargeting & lookalikes", "Weekly reporting dashboards"],
  },
  {
    icon: PenLine, n: "04", t: "Content Marketing",
    d: "Long-form storytelling that turns curious wanderers into lifelong clients — blogs, newsletters, podcasts, SEO.",
    items: ["Editorial strategy & calendar", "SEO-optimised articles", "Newsletter design & automation", "Podcast packaging"],
  },
  {
    icon: UserCog, n: "05", t: "Profile Management",
    d: "Hand us your handles. We run posting, DMs, comments, lives and reputation so you can focus on the work that matters.",
    items: ["Daily posting & stories", "DM and inquiry response", "Live stream production", "Reputation & review management"],
  },
  {
    icon: Sparkles, n: "06", t: "Brand Identity",
    d: "A celestial visual system — logo, palette, type, motion — that feels unmistakably yours and unmistakably cosmic.",
    items: ["Logo & wordmark", "Colour & typography systems", "Brand guidelines", "Templates for socials & decks"],
  },
];

function Services() {
  return (
    <div>
      <section className="mx-auto max-w-[1600px] px-6 md:px-10 pt-16 pb-20">
        <p className="text-xs uppercase tracking-[0.3em] text-gold/80">services</p>
        <h1 className="text-display text-6xl md:text-[9vw] mt-6 leading-[0.9]">
          Six disciplines.<br/>
          <span className="text-italic-serif text-gold">One cosmic engine.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-cream/80">
          Every service is delivered by a team that lives, breathes and obsesses over the astrology niche. We don't dabble — we specialise.
        </p>
      </section>

      <section className="border-t border-border/40">
        {services.map((s, i) => (
          <div key={s.n} className="border-b border-border/40">
            <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-16 grid md:grid-cols-12 gap-10 items-start">
              <div className="md:col-span-2 flex items-baseline gap-3">
                <span className="text-gold text-sm">{s.n}</span>
                <s.icon className="text-gold" size={28} />
              </div>
              <div className="md:col-span-6">
                <h2 className="text-display text-5xl md:text-7xl">{s.t}</h2>
                <p className="mt-6 text-lg text-cream/80 max-w-xl">{s.d}</p>
              </div>
              <ul className="md:col-span-4 space-y-3 text-sm">
                {s.items.map(it => (
                  <li key={it} className="flex gap-3 border-b border-border/40 pb-3">
                    <span className="text-gold">✦</span>{it}
                  </li>
                ))}
              </ul>
            </div>
            {i === 2 && (
              <div className="bg-violet/10 py-8 text-center text-italic-serif text-3xl md:text-5xl text-gold">
                "the medium is the moon"
              </div>
            )}
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-[1600px] px-6 md:px-10 py-28 text-center">
        <h2 className="text-display text-5xl md:text-7xl">Ready to align?</h2>
        <Link to="/contact" className="mt-10 inline-flex items-center gap-3 rounded-full bg-gold px-8 py-4 text-ink font-medium hover:bg-cream transition">
          Start a project <ArrowUpRight size={18} />
        </Link>
      </section>
    </div>
  );
}
