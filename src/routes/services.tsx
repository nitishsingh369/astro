import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Video, Share2, TrendingUp, PenLine, UserCog, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";

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

const colors = ["var(--coral)", "var(--lime)", "var(--blue)", "var(--pink)", "var(--lilac)", "var(--teal)"];

const services = [
  { icon: Video, n: "01", t: "Video Editing", d: "From raw tarot pulls to polished cinematic reels. We cut, colour and score every frame so your readings stop the scroll.", items: ["Reels & Shorts (3–60s)", "Long-form YouTube edits", "Captions, sound design, motion graphics", "Zodiac-themed visual templates"] },
  { icon: Share2, n: "02", t: "Social Media Marketing", d: "A coordinated presence across Instagram, TikTok, YouTube and Facebook — engineered to grow followers who actually book you.", items: ["Content calendars by moon phase", "Reels strategy & hooks", "Community management", "Collab and creator outreach"] },
  { icon: TrendingUp, n: "03", t: "Performance Marketing", d: "Meta and Google Ads built for spiritual offers — readings, courses, memberships. We obsess over CAC, ROAS and LTV.", items: ["Funnel design & landing pages", "Creative testing at scale", "Retargeting & lookalikes", "Weekly reporting dashboards"] },
  { icon: PenLine, n: "04", t: "Content Marketing", d: "Long-form storytelling that turns curious wanderers into lifelong clients — blogs, newsletters, podcasts, SEO.", items: ["Editorial strategy & calendar", "SEO-optimised articles", "Newsletter design & automation", "Podcast packaging"] },
  { icon: UserCog, n: "05", t: "Profile Management", d: "Hand us your handles. We run posting, DMs, comments, lives and reputation so you can focus on the work that matters.", items: ["Daily posting & stories", "DM and inquiry response", "Live stream production", "Reputation & review management"] },
  { icon: Sparkles, n: "06", t: "Brand Identity", d: "A celestial visual system — logo, palette, type, motion — that feels unmistakably yours and unmistakably cosmic.", items: ["Logo & wordmark", "Colour & typography systems", "Brand guidelines", "Templates for socials & decks"] },
];

function Services() {
  return (
    <div>
      <section className="px-6 md:px-10 pt-10 pb-20 text-center">
        <span className="inline-block bg-lime border-2 border-ink rounded-full px-4 py-1 text-sm rotate-[-3deg] mb-8">our services ✦</span>
        <h1 className="text-display text-[16vw] md:text-[11vw] leading-[0.88]">
          six disciplines.<br/>
          <span className="text-serif-italic">one cosmic engine.</span>
        </h1>
        <p className="mt-10 max-w-2xl mx-auto text-lg">
          Every service is delivered by a team that lives, breathes and obsesses over the astrology niche. We don't dabble — we specialise.
        </p>
      </section>

      <section>
        {services.map((s, i) => {
          const color = colors[i % colors.length];
          const flip = i % 2 === 1;
          return (
            <div key={s.n} className={`border-t-2 border-ink ${flip ? "bg-ink text-cream" : ""}`}>
              <div className="px-6 md:px-10 py-20 grid md:grid-cols-12 gap-10 items-start">
                <Reveal variant="zoom" className="md:col-span-2">
                  <div className="grid h-20 w-20 place-items-center rounded-full border-2 wiggle" style={{ background: color, borderColor: flip ? "var(--cream)" : "var(--ink)" }}>
                    <s.icon size={32} className="text-ink"/>
                  </div>
                  <div className="text-display text-5xl mt-4">{s.n}</div>
                </Reveal>
                <Reveal variant="left" delay={100} className="md:col-span-6">
                  <h2 className="text-display text-6xl md:text-8xl">{s.t}</h2>
                  <p className="mt-6 text-lg max-w-xl opacity-90">{s.d}</p>
                </Reveal>
                <Reveal as="ul" variant="right" delay={200} className="md:col-span-4 space-y-3">
                  {s.items.map(it => (
                    <li key={it} className="flex gap-3 border-b border-current/20 pb-3">
                      <span style={{ color }}>✦</span>{it}
                    </li>
                  ))}
                </Reveal>
              </div>
            </div>
          );
        })}
      </section>

      <section className="px-6 md:px-10 py-28 text-center bg-lime border-t-2 border-ink">
        <h2 className="text-display text-[14vw] md:text-[9vw]">ready to <span className="text-serif-italic">align?</span></h2>
        <Link to="/contact" className="mt-10 inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 text-cream font-medium hover:bg-coral transition">
          start a project <ArrowUpRight size={18} />
        </Link>
      </section>
    </div>
  );
}
