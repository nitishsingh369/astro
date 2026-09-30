import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Sparkles, Video, Calendar, HelpCircle, CheckCircle2, BookOpen } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const tarotFaqs = [
  {
    q: "How do Pick-A-Card reels convert into paid private readings?",
    a: "Pick-A-Card reels act as top-of-funnel hooks. At the end of the reel, invite viewers who resonate with Pile 1 or Pile 2 to book a personalized 1-on-1 reading for exact timelines.",
  },
  {
    q: "Should I run Meta Facebook ads for my tarot reading practice?",
    a: "Yes. Targeted Meta ads aiming at love, career, and relationship demographics in India and NRI markets can bring highly qualified client inquiries directly to WhatsApp.",
  },
  {
    q: "What booking platform works best for tarot readers?",
    a: "Direct WhatsApp chat links are the fastest and highest-converting channel in India, avoiding abandoned website carts.",
  },
];

const tarotFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": tarotFaqs.map(f => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": f.a,
    },
  })),
};

export const Route = createFileRoute("/marketing-for-tarot-readers")({
  head: () => ({
    meta: [
      { title: "Marketing for Tarot Readers | Get Paid Readings" },
      { name: "description", content: "Social media and digital marketing for tarot card readers: Instagram, WhatsApp bookings and ads that turn followers into paid readings." },
      { property: "og:title", content: "Marketing for Tarot Readers | Get Paid Readings" },
      { property: "og:description", content: "Social media and digital marketing for tarot card readers: Instagram, WhatsApp bookings and ads that turn followers into paid readings." },
      { property: "og:url", content: "https://astrologymarketing.in/marketing-for-tarot-readers" },
      { property: "og:image", content: "https://astrologymarketing.in/og-image.png" },
      { name: "twitter:title", content: "Marketing for Tarot Readers | Get Paid Readings" },
      { name: "twitter:description", content: "Turn Pick-A-Card reels into daily paid tarot reading bookings." },
      { name: "twitter:image", content: "https://astrologymarketing.in/og-image.png" },
    ],
    links: [
      { rel: "canonical", href: "https://astrologymarketing.in/marketing-for-tarot-readers" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(tarotFaqSchema),
      },
    ],
  }),
  component: MarketingForTarotReaders,
});

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.5 14.4c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.7.2-.2.3-.7 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.5-.5.1-.2 0-.4 0-.5s-.7-1.7-1-2.3c-.3-.6-.5-.5-.7-.5H7.7c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1.1 2.8 1.2 3c.1.2 2.1 3.2 5 4.5 1.7.7 2.4.8 3.3.7.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.3c1.4.8 3.1 1.3 4.8 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3.3.9.9-3.2-.2-.3C3.8 15 3.3 13.5 3.3 12c0-4.8 3.9-8.7 8.7-8.7s8.7 3.9 8.7 8.7-3.9 8-8.7 8z"/>
    </svg>
  );
}

function MarketingForTarotReaders() {
  return (
    <div className="bg-background text-ink">
      {/* HERO */}
      <section className="relative px-6 md:px-10 pt-12 pb-24 overflow-hidden border-b-2 border-ink">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-pink text-ink px-4 py-1.5 font-semibold text-sm border-2 border-ink mb-6">
            <Sparkles size={18} /> Digital Marketing for Tarot Readers
          </span>
          <h1 className="text-display text-[12vw] sm:text-[8vw] md:text-[6vw] leading-[0.9] text-ink font-bold">
            Marketing for tarot readers
          </h1>
          <p className="mt-8 max-w-3xl mx-auto text-lg md:text-2xl text-ink/85 leading-relaxed font-medium">
            Social media and digital marketing for tarot card readers: Instagram, WhatsApp bookings and ads that turn followers into paid readings.
          </p>
          <div className="mt-10 flex flex-wrap justify-center items-center gap-4">
            <a
              href="https://wa.link/nmlzuz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-[#25D366] text-white px-8 py-4 text-lg font-semibold border-2 border-ink shadow-[4px_4px_0_0_var(--ink)] hover:scale-105 transition"
            >
              <WhatsAppIcon size={22} /> Talk to Kumar Neepu on WhatsApp
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-cream border-2 border-ink px-6 py-4 font-medium hover:bg-lime transition">
              Get Free Instagram Audit <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED CLIENT CASE STUDY */}
      <section className="px-6 md:px-10 py-24 bg-cream border-b-2 border-ink">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-3xl border-2 border-ink bg-background p-8 md:p-12 shadow-[6px_6px_0_0_var(--ink)]">
            <span className="text-xs uppercase tracking-widest text-coral font-bold">Client Success Story</span>
            <h2 className="text-display text-3xl md:text-5xl text-ink mt-2">
              Starstuck Signs (@starstuck_signs)
            </h2>
            <p className="mt-4 text-lg text-ink/80 leading-relaxed font-medium">
              Based in Toronto, Starstuck Signs serves Canadian and US diaspora clients seeking intuitive tarot and astrology readings. With 16K followers, we built a streamlined booking path that turns Pick-A-Card viewers directly into paid 30-minute WhatsApp video consultation slots.
            </p>
            <a
              href="https://www.instagram.com/starstuck_signs"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-lime border-2 border-ink px-6 py-3 font-semibold hover:bg-cream transition"
            >
              View Instagram Profile <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* MINI-GUIDE / BLOG SECTION: HOW TO GET CLIENTS AS A TAROT READER */}
      <section className="px-6 md:px-10 py-24 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <BookOpen size={36} className="mx-auto text-coral mb-3" />
          <h2 className="text-display text-4xl md:text-6xl text-ink">
            How to get clients as a tarot reader
          </h2>
          <p className="mt-4 text-lg text-ink/80 max-w-2xl mx-auto font-medium">
            3 proven steps to transition from free general readings to ₹1,500 – ₹4,500 paid sessions.
          </p>
        </div>

        <div className="space-y-8">
          <Reveal variant="up" delay={100} className="bg-cream rounded-2xl p-8 border-2 border-ink shadow-[4px_4px_0_0_var(--ink)]">
            <h3 className="text-display text-2xl text-ink">Step 1: Specific Life-Situation Spreads</h3>
            <p className="mt-3 text-base text-ink/80 leading-relaxed font-medium">
              Instead of generic "What does the universe have for you today?", post focused Reels: "Will your ex reach out during Mercury Retrograde?" or "Is a career move coming in Q4?". Specific curiosity drives immediate reading requests.
            </p>
          </Reveal>

          <Reveal variant="up" delay={200} className="bg-cream rounded-2xl p-8 border-2 border-ink shadow-[4px_4px_0_0_var(--ink)]">
            <h3 className="text-display text-2xl text-ink">Step 2: Clear Session Packages &amp; Pricing</h3>
            <p className="mt-3 text-base text-ink/80 leading-relaxed font-medium">
              Display your reading durations clearly: 15-min urgent card pull (₹999), 30-min deep dive (₹1,999), or 60-min full year forecast (₹3,999). Transparent pricing filters out non-paying inquiries.
            </p>
          </Reveal>

          <Reveal variant="up" delay={300} className="bg-cream rounded-2xl p-8 border-2 border-ink shadow-[4px_4px_0_0_var(--ink)]">
            <h3 className="text-display text-2xl text-ink">Step 3: Direct WhatsApp Slot Scarcity</h3>
            <p className="mt-3 text-base text-ink/80 leading-relaxed font-medium">
              Post daily story updates: "Only 3 reading slots left for tonight's Love Spread session." Urgency prompts hesitant followers to message on WhatsApp immediately.
            </p>
          </Reveal>
        </div>
      </section>

      {/* TAROT FAQS */}
      <section className="px-6 md:px-10 py-24 bg-cream border-t-2 border-ink">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <HelpCircle size={36} className="mx-auto text-coral mb-3" />
            <h2 className="text-display text-4xl md:text-6xl text-ink">
              Tarot Marketing FAQs
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "How do Pick-A-Card reels convert into paid private readings?",
                a: "Pick-A-Card reels act as top-of-funnel hooks. At the end of the reel, invite viewers who resonate with Pile 1 or Pile 2 to book a personalized 1-on-1 reading for exact timelines.",
              },
              {
                q: "Should I run Meta Facebook ads for my tarot reading practice?",
                a: "Yes. Targeted Meta ads aiming at love, career, and relationship demographics in India and NRI markets can bring highly qualified client inquiries directly to WhatsApp.",
              },
              {
                q: "What booking platform works best for tarot readers?",
                a: "Direct WhatsApp chat links are the fastest and highest-converting channel in India, avoiding abandoned website carts.",
              },
            ].map((faq, i) => (
              <Reveal key={faq.q} variant="up" delay={i * 60} className="rounded-2xl border-2 border-ink bg-background p-6 md:p-8 shadow-[4px_4px_0_0_var(--ink)]">
                <h3 className="text-display text-xl md:text-2xl text-ink font-semibold">{faq.q}</h3>
                <p className="mt-3 text-base text-ink/80 leading-relaxed font-medium">{faq.a}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-cream px-6 md:px-10 py-24 border-t-2 border-ink text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-display text-4xl md:text-6xl text-cream">
            Ready to fill your daily tarot reading schedule?
          </h2>
          <div className="pt-6">
            <a
              href="https://wa.link/nmlzuz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-[#25D366] text-white px-8 py-4 text-xl font-semibold border-2 border-cream shadow-[4px_4px_0_0_var(--lime)] hover:scale-105 transition"
            >
              <WhatsAppIcon size={24} /> Message Kumar Neepu on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
