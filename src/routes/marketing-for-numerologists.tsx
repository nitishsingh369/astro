import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Hash, UserCheck, ShieldCheck, HelpCircle } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const numFaqs = [
  {
    q: "Why is numerology ideal for high-ticket consultation pricing?",
    a: "Unlike general daily horoscopes, name correction and business numerology directly impact a client's identity, brand registration, or commercial venture. Clients are glad to pay premium fees for verified expert guidance.",
  },
  {
    q: "How do you attract corporate business founders for numerology?",
    a: "We produce specialized LinkedIn and Instagram content breaking down successful company name numerology, prompting entrepreneurs to book brand name audits on WhatsApp.",
  },
  {
    q: "Can numerology marketing be combined with astrology or tarot?",
    a: "Absolutely. Many of our clients practice both Vedic astrology and numerology. We structure unified content flows that sell both services seamlessly.",
  },
];

const numFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": numFaqs.map(f => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": f.a,
    },
  })),
};

export const Route = createFileRoute("/marketing-for-numerologists")({
  head: () => ({
    meta: [
      { title: "Marketing for Numerologists | Kumar Neepu" },
      { name: "description", content: "Digital marketing for numerologists: content, Instagram and booking systems that turn followers into paid consultations." },
      { property: "og:title", content: "Marketing for Numerologists | Kumar Neepu" },
      { property: "og:description", content: "Digital marketing for numerologists: content, Instagram and booking systems that turn followers into paid consultations." },
      { property: "og:url", content: "https://astrologymarketing.in/marketing-for-numerologists" },
      { property: "og:image", content: "https://astrologymarketing.in/og-image.png" },
      { name: "twitter:title", content: "Marketing for Numerologists | Kumar Neepu" },
      { name: "twitter:description", content: "Digital marketing for numerologists by Kumar Neepu." },
      { name: "twitter:image", content: "https://astrologymarketing.in/og-image.png" },
    ],
    links: [
      { rel: "canonical", href: "https://astrologymarketing.in/marketing-for-numerologists" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(numFaqSchema),
      },
    ],
  }),
  component: MarketingForNumerologists,
});

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.5 14.4c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.7.2-.2.3-.7 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.5-.5.1-.2 0-.4 0-.5s-.7-1.7-1-2.3c-.3-.6-.5-.5-.7-.5H7.7c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1.1 2.8 1.2 3c.1.2 2.1 3.2 5 4.5 1.7.7 2.4.8 3.3.7.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.3c1.4.8 3.1 1.3 4.8 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3.3.9.9-3.2-.2-.3C3.8 15 3.3 13.5 3.3 12c0-4.8 3.9-8.7 8.7-8.7s8.7 3.9 8.7 8.7-3.9 8-8.7 8z"/>
    </svg>
  );
}

function MarketingForNumerologists() {
  return (
    <div className="bg-background text-ink">
      {/* HERO */}
      <section className="relative px-6 md:px-10 pt-12 pb-24 overflow-hidden border-b-2 border-ink">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-lime text-ink px-4 py-1.5 font-semibold text-sm border-2 border-ink mb-6">
            <Hash size={18} /> High-Ticket Numerology Lead Generation
          </span>
          <h1 className="text-display text-[12vw] sm:text-[8vw] md:text-[6vw] leading-[0.9] text-ink font-bold">
            Marketing for numerologists
          </h1>
          <p className="mt-8 max-w-3xl mx-auto text-lg md:text-2xl text-ink/85 leading-relaxed font-medium">
            Digital marketing for numerologists: content, Instagram and booking systems that turn followers into paid consultations.
          </p>
          <div className="mt-10 flex flex-wrap justify-center items-center gap-4">
            <a
              href="https://wa.link/nmlzuz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-[#25D366] text-white px-8 py-4 text-lg font-semibold border-2 border-ink shadow-[4px_4px_0_0_var(--ink)] hover:scale-105 transition"
            >
              <WhatsAppIcon size={22} /> Speak with Kumar Neepu on WhatsApp
            </a>
            <Link to="/services" className="inline-flex items-center gap-2 rounded-full bg-cream border-2 border-ink px-6 py-4 font-medium hover:bg-lime transition">
              Explore All Services <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CORE STRATEGY FOR NUMEROLOGISTS */}
      <section className="px-6 md:px-10 py-24 bg-cream border-b-2 border-ink">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-ink/70 font-semibold">High-Value Service Positioning</span>
            <h2 className="text-display text-4xl md:text-6xl text-ink mt-2">
              Positioning High-Ticket Numerology Audits
            </h2>
            <p className="mt-4 text-lg text-ink/80 max-w-2xl mx-auto font-medium">
              Name correction and business numerology are high-value services that require clear authority signaling.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Reveal variant="up" delay={100} className="bg-background rounded-2xl p-8 border-2 border-ink shadow-[4px_4px_0_0_var(--ink)]">
              <UserCheck className="text-coral mb-4" size={32} />
              <h3 className="text-display text-2xl text-ink">Name Spelling Correction</h3>
              <p className="mt-3 text-sm text-ink/80 leading-relaxed font-medium">
                Creating short video breakdowns showing celebrity name spelling additions and how single-letter compound vibration adjustments changed their trajectory.
              </p>
            </Reveal>

            <Reveal variant="up" delay={200} className="bg-background rounded-2xl p-8 border-2 border-ink shadow-[4px_4px_0_0_var(--ink)]">
              <Hash className="text-lime text-ink mb-4" size={32} />
              <h3 className="text-display text-2xl text-ink">Mobile &amp; Vehicle Numbers</h3>
              <p className="mt-3 text-sm text-ink/80 leading-relaxed font-medium">
                Educating clients on mobile number digit totals and vehicle number vibration alignment to trigger direct WhatsApp audit requests.
              </p>
            </Reveal>

            <Reveal variant="up" delay={300} className="bg-background rounded-2xl p-8 border-2 border-ink shadow-[4px_4px_0_0_var(--ink)]">
              <ShieldCheck className="text-coral mb-4" size={32} />
              <h3 className="text-display text-2xl text-ink">Business Name Numerology</h3>
              <p className="mt-3 text-sm text-ink/80 leading-relaxed font-medium">
                B2B targeted content for business founders aligning company names, brand logos, and launch dates with lucky compound numbers.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* NUMEROLOGY FAQS */}
      <section className="px-6 md:px-10 py-24 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <HelpCircle size={36} className="mx-auto text-coral mb-3" />
          <h2 className="text-display text-4xl md:text-6xl text-ink">
            Numerology Marketing FAQs
          </h2>
        </div>

        <div className="space-y-6">
          {[
            {
              q: "Why is numerology ideal for high-ticket consultation pricing?",
              a: "Unlike general daily horoscopes, name correction and business numerology directly impact a client's identity, brand registration, or commercial venture. Clients are glad to pay premium fees for verified expert guidance.",
            },
            {
              q: "How do you attract corporate business founders for numerology?",
              a: "We produce specialized LinkedIn and Instagram content breaking down successful company name numerology, prompting entrepreneurs to book brand name audits on WhatsApp.",
            },
            {
              q: "Can numerology marketing be combined with astrology or tarot?",
              a: "Absolutely. Many of our clients practice both Vedic astrology and numerology. We structure unified content flows that sell both services seamlessly.",
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
            Ready to grow your numerology consultation brand?
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
