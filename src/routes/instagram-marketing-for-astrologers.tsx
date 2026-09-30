import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Instagram, Video, MessageSquare, CheckCircle2, AlertTriangle, HelpCircle, UserCheck } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const instaFaqs = [
  {
    q: "What is the ideal video length for Instagram astrology reels?",
    a: "30 to 45 seconds is the sweet spot. The first 3 seconds must state a specific life problem, followed by a 20-second cosmic reason and a direct WhatsApp booking call-to-action.",
  },
  {
    q: "How many stories should an astrologer post per day?",
    a: "4 to 6 story slides spread across morning, afternoon, and evening. Stories should include client review screenshots, transit tips, and available consultation booking slots for the day.",
  },
  {
    q: "How do you handle inquiry messages in Instagram DMs?",
    a: "We set up automated comment-to-DM triggers that automatically send your consultation rates and direct WhatsApp booking link.",
  },
];

const instaFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": instaFaqs.map(f => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": f.a,
    },
  })),
};

export const Route = createFileRoute("/instagram-marketing-for-astrologers")({
  head: () => ({
    meta: [
      { title: "Instagram Marketing for Astrologers | Kumar Neepu" },
      { name: "description", content: "Reels, stories and profile set-up that turn an astrologer's Instagram followers into paid consultations. Strategy + done-for-you content by Kumar Neepu." },
      { property: "og:title", content: "Instagram Marketing for Astrologers | Kumar Neepu" },
      { property: "og:description", content: "Reels, stories and profile set-up that turn an astrologer's Instagram followers into paid consultations. Strategy + done-for-you content by Kumar Neepu." },
      { property: "og:url", content: "https://astrologymarketing.in/instagram-marketing-for-astrologers" },
      { property: "og:image", content: "https://astrologymarketing.in/og-image.png" },
      { name: "twitter:title", content: "Instagram Marketing for Astrologers | Kumar Neepu" },
      { name: "twitter:description", content: "Turn your Instagram Reels into daily paid consultation bookings." },
      { name: "twitter:image", content: "https://astrologymarketing.in/og-image.png" },
    ],
    links: [
      { rel: "canonical", href: "https://astrologymarketing.in/instagram-marketing-for-astrologers" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(instaFaqSchema),
      },
    ],
  }),
  component: InstagramMarketingForAstrologers,
});

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.5 14.4c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.7.2-.2.3-.7 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.5-.5.1-.2 0-.4 0-.5s-.7-1.7-1-2.3c-.3-.6-.5-.5-.7-.5H7.7c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1.1 2.8 1.2 3c.1.2 2.1 3.2 5 4.5 1.7.7 2.4.8 3.3.7.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.3c1.4.8 3.1 1.3 4.8 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3.3.9.9-3.2-.2-.3C3.8 15 3.3 13.5 3.3 12c0-4.8 3.9-8.7 8.7-8.7s8.7 3.9 8.7 8.7-3.9 8-8.7 8z"/>
    </svg>
  );
}

function InstagramMarketingForAstrologers() {
  return (
    <div className="bg-background text-ink">
      {/* HERO */}
      <section className="relative px-6 md:px-10 pt-12 pb-24 overflow-hidden border-b-2 border-ink">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-pink text-ink px-4 py-1.5 font-semibold text-sm border-2 border-ink mb-6">
            <Instagram size={18} /> Instagram Growth &amp; Booking Conversion Strategy
          </span>
          <h1 className="text-display text-[12vw] sm:text-[8vw] md:text-[6vw] leading-[0.9] text-ink font-bold">
            Instagram marketing for astrologers
          </h1>
          <p className="mt-8 max-w-3xl mx-auto text-lg md:text-2xl text-ink/85 leading-relaxed font-medium">
            Reels, stories and profile set-up that turn an astrologer's Instagram followers into paid consultations. Strategy + done-for-you content by <strong>Kumar Neepu</strong>.
          </p>
          <div className="mt-10 flex flex-wrap justify-center items-center gap-4">
            <a
              href="https://wa.link/nmlzuz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-[#25D366] text-white px-8 py-4 text-lg font-semibold border-2 border-ink shadow-[4px_4px_0_0_var(--ink)] hover:scale-105 transition"
            >
              <WhatsAppIcon size={22} /> Message Kumar Neepu on WhatsApp
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-cream border-2 border-ink px-6 py-4 font-medium hover:bg-lime transition">
              Get Free Instagram Audit <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CORE DATA INSIGHT: FACE-TO-CAMERA REELS BEAT TEXT CARDS */}
      <section className="px-6 md:px-10 py-24 bg-cream border-b-2 border-ink">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-coral font-bold">Key Data &amp; Industry Insight</span>
            <h2 className="text-display text-4xl md:text-6xl text-ink mt-2">
              Why Face-to-Camera Reels Outperform Static Text Cards
            </h2>
            <p className="mt-4 text-lg text-ink/80 max-w-2xl mx-auto">
              Our data across 100+ Indian astrologers reveals a striking difference in conversion rates.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Reveal variant="up" delay={100} className="bg-background rounded-2xl p-8 border-2 border-ink shadow-[4px_4px_0_0_var(--ink)]">
              <div className="text-display text-4xl text-coral font-bold">Static Text Quotes</div>
              <p className="mt-3 text-base text-ink/80 leading-relaxed font-medium">
                Text graphics can collect passive likes, but they build minimal personal trust. Viewers scroll past without feeling connected to the astrologer behind the screen. Conversion rate to paid consultation: &lt; 0.2%.
              </p>
            </Reveal>

            <Reveal variant="up" delay={200} className="bg-background rounded-2xl p-8 border-2 border-ink shadow-[4px_4px_0_0_var(--ink)]">
              <div className="text-display text-4xl text-lime font-bold text-ink">Face-to-Camera Video</div>
              <p className="mt-3 text-base text-ink/80 leading-relaxed font-medium">
                When an astrologer speaks directly into the camera explaining Rahu-Ketu transits or marriage timing, eye contact and voice tone create immediate authority. Conversion rate to paid consultation: 3.8% – 5.2%.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* REAL CLIENT EXAMPLE */}
      <section className="px-6 md:px-10 py-24 max-w-5xl mx-auto">
        <div className="rounded-3xl border-2 border-ink bg-ink text-cream p-8 md:p-12 shadow-[8px_8px_0_0_var(--coral)]">
          <span className="text-xs uppercase tracking-widest text-lime font-bold">Real Client Case Study</span>
          <h2 className="text-display text-3xl md:text-5xl text-cream mt-2">
            Guru Ashish Sharma (@guruashishsharmaji)
          </h2>
          <p className="mt-4 text-lg text-cream/90 leading-relaxed">
            Guru Ashish Sharma built a massive presence of <strong>722K+ Instagram followers</strong> and completed over 2 lakh+ consultations. By pairing scripted face-to-camera reels with direct WhatsApp story booking sequences, his account consistently turns viewer curiosity into daily paid appointments.
          </p>
          <a
            href="https://www.instagram.com/guruashishsharmaji"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-lime text-ink px-6 py-3 font-semibold hover:bg-cream transition"
          >
            Inspect Live Instagram Account <ArrowUpRight size={18} />
          </a>
        </div>
      </section>

      {/* INSTAGRAM FAQS */}
      <section className="px-6 md:px-10 py-24 bg-cream border-t-2 border-ink">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <HelpCircle size={36} className="mx-auto text-coral mb-3" />
            <h2 className="text-display text-4xl md:text-6xl text-ink">
              Instagram Marketing FAQs
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "What is the ideal video length for Instagram astrology reels?",
                a: "30 to 45 seconds is the sweet spot. The first 3 seconds must state a specific life problem (e.g. delayed marriage, career stagnation during Dasha), followed by a 20-second cosmic reason and a direct WhatsApp booking call-to-action.",
              },
              {
                q: "How many stories should an astrologer post per day?",
                a: "4 to 6 story slides spread across morning, afternoon, and evening. Stories should include client review screenshots, transit tips, and available consultation booking slots for the day.",
              },
              {
                q: "How do you handle inquiry messages in Instagram DMs?",
                a: "We set up automated comment-to-DM triggers (e.g. comment 'KUNDLI' for fee details) that automatically send your consultation rates and direct WhatsApp booking link.",
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
            Ready to turn your Instagram followers into paid consultation clients?
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
