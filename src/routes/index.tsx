import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2, AlertCircle, HelpCircle, Instagram, Youtube, Search } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import founderImg from "@/assets/FOUNDER_IMAGE.jpeg";

const homeFaqs = [
  {
    q: "How is astrology marketing different from general business marketing?",
    a: "Astrology is built entirely on personal trust, timing, and spiritual credibility. People do not buy astrology consultations from generic corporate graphics; they book because a practitioner's content spoke directly to their current life problem.",
  },
  {
    q: "Do I need to come on camera for Instagram Reels?",
    a: "Yes, face-to-camera videos convert significantly higher than text quotes or stock graphics. Viewers need to see your face and hear your voice to feel comfortable booking a ₹1,100–₹5,100 personal reading.",
  },
  {
    q: "How long does it take to start getting consultation bookings?",
    a: "With an optimized Instagram bio, structured daily stories, and direct WhatsApp booking links, clients usually start seeing inbound inquiries within 14–30 days of consistent execution.",
  },
  {
    q: "Will I work with an account manager or directly with Kumar Neepu?",
    a: "You work directly with me — Kumar Neepu. There are no junior staff or account managers. I handle strategy and production execution 1-on-1.",
  },
  {
    q: "What types of spiritual practitioners do you work with?",
    a: "Vedic Astrologers, Tarot Readers, Numerologists, Palmists, and Vastu Consultants based in India and serving international NRI diaspora clients.",
  },
];

const homeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": homeFaqs.map(f => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": f.a,
    },
  })),
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Astrology Marketing for Astrologers | Kumar Neepu" },
      { name: "description", content: "I turn social media content into consultation bookings for astrologers, tarot readers and numerologists. 6 years inside Guruji Astro." },
      { property: "og:title", content: "Astrology Marketing for Astrologers | Kumar Neepu" },
      { property: "og:description", content: "I turn social media content into consultation bookings for astrologers, tarot readers and numerologists. 6 years inside Guruji Astro." },
      { property: "og:url", content: "https://astrologymarketing.in" },
      { property: "og:image", content: "https://astrologymarketing.in/og-image.png" },
      { name: "twitter:title", content: "Astrology Marketing for Astrologers | Kumar Neepu" },
      { name: "twitter:description", content: "I turn social media content into consultation bookings for astrologers, tarot readers and numerologists. 6 years inside Guruji Astro." },
      { name: "twitter:image", content: "https://astrologymarketing.in/og-image.png" },
    ],
    links: [
      { rel: "canonical", href: "https://astrologymarketing.in" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(homeFaqSchema),
      },
    ],
  }),
  component: Home,
});

function StarBurst({ className = "", color = "var(--coral)" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill={color} aria-hidden>
      <path d="M50 0 L58 32 L92 24 L66 48 L100 56 L66 60 L86 92 L54 70 L50 100 L46 70 L14 92 L34 60 L0 56 L34 48 L8 24 L42 32 Z" />
    </svg>
  );
}

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

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.5 14.4c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.7.2-.2.3-.7 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.5-.5.1-.2 0-.4 0-.5s-.7-1.7-1-2.3c-.3-.6-.5-.5-.7-.5H7.7c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1.1 2.8 1.2 3c.1.2 2.1 3.2 5 4.5 1.7.7 2.4.8 3.3.7.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.3c1.4.8 3.1 1.3 4.8 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3.3.9.9-3.2-.2-.3C3.8 15 3.3 13.5 3.3 12c0-4.8 3.9-8.7 8.7-8.7s8.7 3.9 8.7 8.7-3.9 8-8.7 8z"/>
    </svg>
  );
}

function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative px-6 md:px-10 pt-8 pb-24 overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute -top-20 -left-24 h-96 w-96 rounded-full blur-3xl opacity-40" style={{ background: "var(--lilac)" }} />
        <div aria-hidden className="pointer-events-none absolute top-40 right-1/3 h-80 w-80 rounded-full blur-3xl opacity-30" style={{ background: "var(--lime)" }} />

        {/* top ticker */}
        <Reveal variant="fade" className="mb-8 flex flex-wrap items-center gap-3 text-sm">
          <span className="inline-flex items-center gap-2 rounded-full bg-ink text-cream px-4 py-1.5 font-medium">
            <span className="h-2 w-2 rounded-full bg-lime animate-pulse" /> 6 years inside Guruji Astro
          </span>
          <Sticker color="var(--lime)" rotate={-2}>✦ 100+ astrologers worked with</Sticker>
          <Sticker color="var(--pink)" rotate={2}>Digital Marketing Agency for Astrologers</Sticker>
        </Reveal>

        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <Reveal as="h1" variant="up" duration={1000} className="text-display text-[14vw] sm:text-[11vw] md:text-[8vw] text-ink leading-[0.9]">
              followers don't pay you.<br/>
              <span className="text-serif-italic text-coral">bookings do.</span>
            </Reveal>

            {/* MANDATORY SUB-LINE UNDER H1 */}
            <p className="mt-6 text-display text-2xl md:text-3xl text-ink font-semibold">
              Digital marketing for astrologers, tarot readers &amp; numerologists
            </p>

            <Reveal variant="up" delay={200} className="mt-6 space-y-4 text-base md:text-xl text-ink/90 leading-relaxed max-w-2xl">
              <p>
                <strong>I'm Kumar Neepu.</strong> I spent six years running social media at Guruji Astro from the inside. As a specialized <strong>astrology marketing agency</strong>, I turn Instagram content, Reels, and YouTube videos into paid 1-on-1 consultation bookings.
              </p>
              <p className="text-serif-italic text-xl md:text-2xl text-ink font-medium">
                No junior team, no agency fluff. You work directly with me.
              </p>
            </Reveal>

            <Reveal variant="up" delay={300} className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="https://wa.link/nmlzuz"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-[#25D366] text-white px-7 py-4 text-lg font-semibold shadow-[4px_4px_0_0_var(--ink)] border-2 border-ink hover:scale-105 transition"
              >
                <WhatsAppIcon size={22} /> Message me on WhatsApp
              </a>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full bg-cream border-2 border-ink px-6 py-4 font-medium hover:bg-lime transition"
              >
                About me <ArrowUpRight size={18} />
              </Link>
            </Reveal>
          </div>

          <div className="md:col-span-5">
            <Reveal variant="rotate" delay={200} className="relative mx-auto max-w-xs md:max-w-none">
              <StarBurst className="absolute -top-6 -right-6 h-20 w-20 spin-slow" color="var(--coral)" />
              <div className="relative wiggle">
                <img
                  src={founderImg}
                  alt="Kumar Neepu, astrology business coach"
                  width={1122}
                  height={1402}
                  className="aspect-[4/5] w-full object-cover object-top rounded-2xl border-2 border-ink shadow-[10px_10px_0_0_var(--ink)]"
                />
                <Sticker color="var(--lime)" rotate={-6} className="absolute -bottom-4 -left-3 border-2 border-ink font-semibold">
                  Kumar Neepu ✦
                </Sticker>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHY MOST ASTROLOGY MARKETING GETS FOLLOWERS, NOT BOOKINGS */}
      <section className="px-6 md:px-10 py-24 bg-cream border-y-2 border-ink">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-coral font-bold">Industry Analysis</span>
            <h2 className="text-display text-4xl md:text-6xl text-ink mt-2">
              Why most astrology marketing gets followers, not bookings
            </h2>
            <p className="mt-4 text-lg text-ink/80 max-w-2xl mx-auto">
              Follower growth and consultation revenue require two completely different marketing strategies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Reveal variant="up" delay={100} className="bg-background rounded-2xl p-8 border-2 border-ink shadow-[4px_4px_0_0_var(--ink)]">
              <h3 className="text-display text-2xl text-ink">1. Viral Views vs. Paid Intent</h3>
              <p className="mt-3 text-base text-ink/80 leading-relaxed">
                Generic transit graphics get likes, but fail to tell the viewer why they need a personal Kundli analysis or remedy right now.
              </p>
            </Reveal>

            <Reveal variant="up" delay={200} className="bg-background rounded-2xl p-8 border-2 border-ink shadow-[4px_4px_0_0_var(--ink)]">
              <h3 className="text-display text-2xl text-ink">2. High Friction Booking Path</h3>
              <p className="mt-3 text-base text-ink/80 leading-relaxed">
                Slow website forms reduce conversions. Direct WhatsApp booking sequences capture hot inquiry leads immediately.
              </p>
            </Reveal>

            <Reveal variant="up" delay={300} className="bg-background rounded-2xl p-8 border-2 border-ink shadow-[4px_4px_0_0_var(--ink)]">
              <h3 className="text-display text-2xl text-ink">3. Generic Agency Fluff</h3>
              <p className="mt-3 text-base text-ink/80 leading-relaxed">
                Standard digital agencies don't understand Dasha cycles, Sade Sati, or Nakshatra nuances. We live and breathe spiritual marketing.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* INSTAGRAM, YOUTUBE & GOOGLE FOR ASTROLOGERS */}
      <section className="px-6 md:px-10 py-24 bg-background border-b-2 border-ink">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-lime bg-ink px-3 py-1 rounded-full font-bold">Platform Strategy</span>
            <h2 className="text-display text-4xl md:text-6xl text-ink mt-4">
              Instagram, YouTube &amp; Google for astrologers
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Reveal variant="up" delay={100} className="bg-cream rounded-2xl p-8 border-2 border-ink shadow-[5px_5px_0_0_var(--ink)]">
              <Instagram size={32} className="text-pink mb-4 text-ink" />
              <h3 className="text-display text-2xl text-ink">Instagram Reels &amp; Stories</h3>
              <p className="mt-3 text-sm text-ink/80 leading-relaxed">
                Face-to-camera transit reels and story booking sequences that convert casual followers into paid consultation clients.
              </p>
              <Link to="/instagram-marketing-for-astrologers" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-coral hover:underline">
                Explore Instagram Guide <ArrowUpRight size={16} />
              </Link>
            </Reveal>

            <Reveal variant="up" delay={200} className="bg-cream rounded-2xl p-8 border-2 border-ink shadow-[5px_5px_0_0_var(--ink)]">
              <Youtube size={32} className="text-coral mb-4" />
              <h3 className="text-display text-2xl text-ink">YouTube Shorts &amp; Long-Form</h3>
              <p className="mt-3 text-sm text-ink/80 leading-relaxed">
                In-depth Kundli teaching videos that build evergreen search authority and long-term consultation flow.
              </p>
              <Link to="/services" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-coral hover:underline">
                View YouTube Package <ArrowUpRight size={16} />
              </Link>
            </Reveal>

            <Reveal variant="up" delay={300} className="bg-cream rounded-2xl p-8 border-2 border-ink shadow-[5px_5px_0_0_var(--ink)]">
              <Search size={32} className="text-lime text-ink mb-4" />
              <h3 className="text-display text-2xl text-ink">Google My Business &amp; SEO</h3>
              <p className="mt-3 text-sm text-ink/80 leading-relaxed">
                Rank #1 for "best astrologer near me" in your city and build 5-star Google review proof.
              </p>
              <Link to="/seo-for-astrologers" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-coral hover:underline">
                Explore SEO Guide <ArrowUpRight size={16} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* THE THREE NUMBERS */}
      <section className="bg-lime border-b-2 border-ink px-6 md:px-10 py-20">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-ink/70 mb-4 font-semibold">The track record</p>
          <div className="grid gap-8 md:grid-cols-3 text-ink">
            <Reveal variant="zoom" delay={100} className="rounded-2xl border-2 border-ink bg-cream p-8 shadow-[4px_4px_0_0_var(--ink)]">
              <div className="text-display text-6xl md:text-7xl text-ink">6 years</div>
              <p className="mt-3 text-lg font-medium">inside Guruji Astro's social media</p>
            </Reveal>
            <Reveal variant="zoom" delay={200} className="rounded-2xl border-2 border-ink bg-cream p-8 shadow-[4px_4px_0_0_var(--ink)]">
              <div className="text-display text-6xl md:text-7xl text-ink">100+</div>
              <p className="mt-3 text-lg font-medium">astrologers I've worked with directly</p>
            </Reveal>
            <Reveal variant="zoom" delay={300} className="rounded-2xl border-2 border-ink bg-cream p-8 shadow-[4px_4px_0_0_var(--ink)]">
              <div className="text-display text-6xl md:text-7xl text-coral">~80</div>
              <p className="mt-3 text-lg font-medium">of them where it actually worked</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PROOF BLOCK - WHO I WORK WITH */}
      <section className="px-6 md:px-10 py-28 bg-background border-b-2 border-ink">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="inline-block bg-pink border-2 border-ink rounded-full px-4 py-1 text-sm font-medium rotate-[-2deg] mb-4">Proof &amp; Roster</span>
              <h2 className="text-display text-[12vw] md:text-[7vw] leading-[0.9]">
                who I <span className="text-serif-italic text-coral">work with</span>
              </h2>
            </div>
            <p className="max-w-md text-base text-ink/80 font-medium">
              All three accounts are public. Go and inspect their live social presence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Reveal variant="up" delay={100} className="rounded-2xl border-2 border-ink bg-cream p-8 flex flex-col justify-between hover:-translate-y-1 transition shadow-[4px_4px_0_0_var(--ink)]">
              <div>
                <div className="flex justify-between items-start">
                  <span className="text-xs uppercase tracking-widest text-ink/60 font-semibold">Instagram</span>
                  <CheckCircle2 size={20} className="text-coral" />
                </div>
                <h3 className="text-display text-3xl mt-4 text-ink">Guru Ashish Sharma</h3>
                <a
                  href="https://www.instagram.com/guruashishsharmaji"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-serif-italic text-lg text-coral underline underline-offset-4 block mt-1 hover:text-ink"
                >
                  @guruashishsharmaji
                </a>
                <p className="mt-6 text-base text-ink/80 leading-relaxed">
                  Celebrity astrologer and relationship expert. 722K followers, 2 lakh+ consultations. He also practises on Astrotalk.
                </p>
              </div>
              <a
                href="https://www.instagram.com/guruashishsharmaji"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4"
              >
                View live account <ArrowUpRight size={16} />
              </a>
            </Reveal>

            <Reveal variant="up" delay={200} className="rounded-2xl border-2 border-ink bg-cream p-8 flex flex-col justify-between hover:-translate-y-1 transition shadow-[4px_4px_0_0_var(--ink)]">
              <div>
                <div className="flex justify-between items-start">
                  <span className="text-xs uppercase tracking-widest text-ink/60 font-semibold">YouTube</span>
                  <CheckCircle2 size={20} className="text-coral" />
                </div>
                <h3 className="text-display text-3xl mt-4 text-ink">Truths of Astro</h3>
                <a
                  href="https://www.youtube.com/@TRUTHSOFASTRO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-serif-italic text-lg text-coral underline underline-offset-4 block mt-1 hover:text-ink"
                >
                  @TRUTHSOFASTRO
                </a>
                <p className="mt-6 text-base text-ink/80 leading-relaxed">
                  84.6K subscribers. Long-form Vedic astrology teaching — building high authority and search consultations.
                </p>
              </div>
              <a
                href="https://www.youtube.com/@TRUTHSOFASTRO"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4"
              >
                View live account <ArrowUpRight size={16} />
              </a>
            </Reveal>

            <Reveal variant="up" delay={300} className="rounded-2xl border-2 border-ink bg-cream p-8 flex flex-col justify-between hover:-translate-y-1 transition shadow-[4px_4px_0_0_var(--ink)]">
              <div>
                <div className="flex justify-between items-start">
                  <span className="text-xs uppercase tracking-widest text-ink/60 font-semibold">Instagram · Diaspora</span>
                  <CheckCircle2 size={20} className="text-coral" />
                </div>
                <h3 className="text-display text-3xl mt-4 text-ink">Starstuck Signs</h3>
                <a
                  href="https://www.instagram.com/starstuck_signs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-serif-italic text-lg text-coral underline underline-offset-4 block mt-1 hover:text-ink"
                >
                  @starstuck_signs
                </a>
                <p className="mt-6 text-base text-ink/80 leading-relaxed">
                  Vedic astrologer in Toronto, serving Canadian &amp; US diaspora. 16K followers with a direct booking path.
                </p>
              </div>
              <a
                href="https://www.instagram.com/starstuck_signs"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4"
              >
                View live account <ArrowUpRight size={16} />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQS: MARKETING FOR ASTROLOGERS */}
      <section className="px-6 md:px-10 py-24 bg-cream border-b-2 border-ink">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <HelpCircle size={36} className="mx-auto text-coral mb-3" />
            <h2 className="text-display text-4xl md:text-6xl text-ink">
              FAQs: marketing for astrologers
            </h2>
            <p className="mt-3 text-lg text-ink/80">Common questions about digital marketing for spiritual practitioners.</p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "How is astrology marketing different from general business marketing?",
                a: "Astrology is built entirely on personal trust, timing, and spiritual credibility. People do not buy astrology consultations from generic corporate graphics; they book because a practitioner's content spoke directly to their current life problem.",
              },
              {
                q: "Do I need to come on camera for Instagram Reels?",
                a: "Yes, face-to-camera videos convert significantly higher than text quotes or stock graphics. Viewers need to see your face and hear your voice to feel comfortable booking a ₹1,100–₹5,100 personal reading.",
              },
              {
                q: "How long does it take to start getting consultation bookings?",
                a: "With an optimized Instagram bio, structured daily stories, and direct WhatsApp booking links, clients usually start seeing inbound inquiries within 14–30 days of consistent execution.",
              },
              {
                q: "Will I work with an account manager or directly with Kumar Neepu?",
                a: "You work directly with me — Kumar Neepu. There are no junior staff or account managers. I handle strategy and production execution 1-on-1.",
              },
              {
                q: "What types of spiritual practitioners do you work with?",
                a: "Vedic Astrologers, Tarot Readers, Numerologists, Palmists, and Vastu Consultants based in India and serving international NRI diaspora clients.",
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

      {/* CTA SECTION */}
      <section className="px-6 md:px-10 py-28 text-center bg-ink text-cream relative">
        <Sticker color="var(--lime)" rotate={-4} className="mb-6">Direct access · No agency fluff</Sticker>
        <h2 className="text-display text-[14vw] md:text-[9vw] leading-[0.9]">
          ready to turn content<br/>into <span className="text-serif-italic text-lime">bookings?</span>
        </h2>
        <div className="mt-12 flex flex-wrap justify-center items-center gap-4">
          <a
            href="https://wa.link/nmlzuz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-[#25D366] text-white px-8 py-4 text-xl font-bold shadow-[4px_4px_0_0_var(--cream)] border-2 border-cream hover:scale-105 transition"
          >
            <WhatsAppIcon size={24} /> Message me on WhatsApp
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border-2 border-cream px-8 py-4 text-cream font-medium hover:bg-cream hover:text-ink transition"
          >
            Get Free Audit <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
