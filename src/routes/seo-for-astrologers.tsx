import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, MapPin, Search, Star, ShieldCheck, HelpCircle } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const seoFaqs = [
  {
    q: "How fast can an astrologer rank on Google Maps?",
    a: "With a fully verified Google Business Profile and 15–20 keyword-rich customer reviews, local map pack rankings typically improve within 30 to 60 days.",
  },
  {
    q: "Does Google SEO bring higher-paying consultation clients than social media?",
    a: "Yes. Clients searching 'best astrologer near me' on Google have urgent problems and high purchase intent compared to casual social media scrollers.",
  },
  {
    q: "Is Google Business Profile optimization included in the main monthly package?",
    a: "Yes. GMB setup, keyword optimization, and review collection systems are built into Kumar Neepu's core monthly package.",
  },
];

const seoFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": seoFaqs.map(f => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": f.a,
    },
  })),
};

export const Route = createFileRoute("/seo-for-astrologers")({
  head: () => ({
    meta: [
      { title: "SEO & Google My Business for Astrologers" },
      { name: "description", content: "Rank your astrology practice on Google and Maps: Google Business Profile, reviews and local SEO for astrologers." },
      { property: "og:title", content: "SEO & Google My Business for Astrologers" },
      { property: "og:description", content: "Rank your astrology practice on Google and Maps: Google Business Profile, reviews and local SEO for astrologers." },
      { property: "og:url", content: "https://astrologymarketing.in/seo-for-astrologers" },
      { property: "og:image", content: "https://astrologymarketing.in/og-image.png" },
      { name: "twitter:title", content: "SEO & Google My Business for Astrologers" },
      { name: "twitter:description", content: "Rank your astrology practice on Google and Maps." },
      { name: "twitter:image", content: "https://astrologymarketing.in/og-image.png" },
    ],
    links: [
      { rel: "canonical", href: "https://astrologymarketing.in/seo-for-astrologers" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(seoFaqSchema),
      },
    ],
  }),
  component: SeoForAstrologers,
});

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.5 14.4c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.7.2-.2.3-.7 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.5-.5.1-.2 0-.4 0-.5s-.7-1.7-1-2.3c-.3-.6-.5-.5-.7-.5H7.7c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1.1 2.8 1.2 3c.1.2 2.1 3.2 5 4.5 1.7.7 2.4.8 3.3.7.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.3c1.4.8 3.1 1.3 4.8 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3.3.9.9-3.2-.2-.3C3.8 15 3.3 13.5 3.3 12c0-4.8 3.9-8.7 8.7-8.7s8.7 3.9 8.7 8.7-3.9 8-8.7 8z"/>
    </svg>
  );
}

function SeoForAstrologers() {
  return (
    <div className="bg-background text-ink">
      {/* HERO */}
      <section className="relative px-6 md:px-10 pt-12 pb-24 overflow-hidden border-b-2 border-ink">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-lime text-ink px-4 py-1.5 font-semibold text-sm border-2 border-ink mb-6">
            <Search size={18} /> Search Engine &amp; Google Maps Optimization
          </span>
          <h1 className="text-display text-[12vw] sm:text-[8vw] md:text-[6vw] leading-[0.9] text-ink font-bold">
            SEO and Google My Business for astrologers
          </h1>
          <p className="mt-8 max-w-3xl mx-auto text-lg md:text-2xl text-ink/85 leading-relaxed font-medium">
            Rank your astrology practice on Google and Maps: Google Business Profile, reviews and local SEO for astrologers by <strong>Kumar Neepu</strong>.
          </p>
          <div className="mt-10 flex flex-wrap justify-center items-center gap-4">
            <a
              href="https://wa.link/nmlzuz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-[#25D366] text-white px-8 py-4 text-lg font-semibold border-2 border-ink shadow-[4px_4px_0_0_var(--ink)] hover:scale-105 transition"
            >
              <WhatsAppIcon size={22} /> Audit Your Google Ranking Free
            </a>
            <Link to="/services" className="inline-flex items-center gap-2 rounded-full bg-cream border-2 border-ink px-6 py-4 font-medium hover:bg-lime transition">
              View Services <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CORE SEO PILLARS */}
      <section className="px-6 md:px-10 py-24 bg-cream border-b-2 border-ink">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-ink/70 font-semibold">Local Search Strategy</span>
            <h2 className="text-display text-4xl md:text-6xl text-ink mt-2">The 4 Pillars of Local Astrology SEO</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Reveal variant="up" delay={100} className="bg-background rounded-2xl p-8 border-2 border-ink shadow-[5px_5px_0_0_var(--ink)]">
              <MapPin size={32} className="text-coral mb-4" />
              <h3 className="text-display text-2xl text-ink">1. Google Business Profile Optimization</h3>
              <p className="mt-3 text-base text-ink/80 leading-relaxed font-medium">
                Claiming and fully configuring your GMB profile for categories like "Astrologer" and "Vedic Consultant" to rank in the Google Maps top-3 local pack.
              </p>
            </Reveal>

            <Reveal variant="up" delay={200} className="bg-background rounded-2xl p-8 border-2 border-ink shadow-[5px_5px_0_0_var(--ink)]">
              <Star size={32} className="text-lime text-ink mb-4" />
              <h3 className="text-display text-2xl text-ink">2. Review Generation System</h3>
              <p className="mt-3 text-base text-ink/80 leading-relaxed font-medium">
                Google heavily ranks profiles with high-frequency 5-star reviews mentioning keywords like "accurate predictions" and "effective remedies".
              </p>
            </Reveal>

            <Reveal variant="up" delay={300} className="bg-background rounded-2xl p-8 border-2 border-ink shadow-[5px_5px_0_0_var(--ink)]">
              <Search size={32} className="text-coral mb-4" />
              <h3 className="text-display text-2xl text-ink">3. High-Intent Keyword Targeting</h3>
              <p className="mt-3 text-base text-ink/80 leading-relaxed font-medium">
                Optimizing your landing pages for high-converting local searches like "best astrologer for marriage problem in [City]" or "Kundli consultation near me".
              </p>
            </Reveal>

            <Reveal variant="up" delay={400} className="bg-background rounded-2xl p-8 border-2 border-ink shadow-[5px_5px_0_0_var(--ink)]">
              <ShieldCheck size={32} className="text-lime text-ink mb-4" />
              <h3 className="text-display text-2xl text-ink">4. E-E-A-T &amp; Trust Schema</h3>
              <p className="mt-3 text-base text-ink/80 leading-relaxed font-medium">
                Embedding structured JSON-LD Schema data so search engines recognize your credentials, TV appearances, and verified consultation proof.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SEO FAQS */}
      <section className="px-6 md:px-10 py-24 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <HelpCircle size={36} className="mx-auto text-coral mb-3" />
          <h2 className="text-display text-4xl md:text-6xl text-ink">
            SEO &amp; Google Maps FAQs
          </h2>
        </div>

        <div className="space-y-6">
          {[
            {
              q: "How fast can an astrologer rank on Google Maps?",
              a: "With a fully verified Google Business Profile and 15–20 keyword-rich customer reviews, local map pack rankings typically improve within 30 to 60 days.",
            },
            {
              q: "Does Google SEO bring higher-paying consultation clients than social media?",
              a: "Yes. Clients searching 'best astrologer near me' on Google have urgent problems and high purchase intent compared to casual social media scrollers.",
            },
            {
              q: "Is Google Business Profile optimization included in the main monthly package?",
              a: "Yes. GMB setup, keyword optimization, and review collection systems are built into Kumar Neepu's core monthly package.",
            },
          ].map((faq, i) => (
            <Reveal key={faq.q} variant="up" delay={i * 60} className="rounded-2xl border-2 border-ink bg-cream p-6 md:p-8 shadow-[4px_4px_0_0_var(--ink)]">
              <h3 className="text-display text-xl md:text-2xl text-ink font-semibold">{faq.q}</h3>
              <p className="mt-3 text-base text-ink/80 leading-relaxed font-medium">{faq.a}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-cream px-6 md:px-10 py-24 border-t-2 border-ink text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-display text-4xl md:text-6xl text-cream">
            Ready to rank #1 for astrology consultations in your city?
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
