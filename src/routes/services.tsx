import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Video, Share2, Youtube, MapPin, Star, PlusCircle } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Kumar Neepu | Marketing for Astrologers" },
      { name: "description", content: "One package. Everything your presence needs, run by one person who knows the industry. Turn your content into consultation bookings." },
      { property: "og:title", content: "Services — Marketing for Astrologers" },
      { property: "og:description", content: "One package. Everything your presence needs, run by one person who knows the industry." },
    ],
  }),
  component: Services,
});

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.5 14.4c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.7.2-.2.3-.7 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.5-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5s-.7-1.7-1-2.3c-.3-.6-.5-.5-.7-.5H7.7c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1.1 2.8 1.2 3c.1.2 2.1 3.2 5 4.5 1.7.7 2.4.8 3.3.7.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.3c1.4.8 3.1 1.3 4.8 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3.3.9.9-3.2-.2-.3C3.8 15 3.3 13.5 3.3 12c0-4.8 3.9-8.7 8.7-8.7s8.7 3.9 8.7 8.7-3.9 8-8.7 8z"/>
    </svg>
  );
}

const packageItems = [
  {
    icon: Video,
    t: "Reels & Short Video Production",
    d: "Scripted, cut and formatted specifically to turn curious viewers into consultation leads.",
    badge: "Monthly Core",
  },
  {
    icon: Share2,
    t: "Feed Posts & Carousels",
    d: "High-value Vedic and spiritual insights designed for saves, shares, and authority building.",
    badge: "Monthly Core",
  },
  {
    icon: Share2,
    t: "Daily Story Sequences",
    d: "Intentionally structured story flows that direct warm viewers straight into booking a consultation.",
    badge: "Monthly Core",
  },
  {
    icon: Share2,
    t: "Facebook Reposting & Page Ops",
    d: "Crossposting your content onto Facebook to reach mature, highly-converting client demographics.",
    badge: "Monthly Core",
  },
  {
    icon: Youtube,
    t: "YouTube Shorts & Long-Form Video",
    d: "Packaging long-form teaching videos alongside YouTube Shorts that build searchable authority.",
    badge: "Monthly Core",
  },
  {
    icon: MapPin,
    t: "Google My Business & Local Search",
    d: "Optimizing your local search profile so clients searching for consultation in your area find you.",
    badge: "Setup & Ops",
  },
  {
    icon: Star,
    t: "Consultation Review System",
    d: "Setting up a systematic review collector that turns happy consultation clients into public proof.",
    badge: "System Build",
  },
];

const addOns = [
  { t: "Meta Paid Performance Ads", d: "Targeted Facebook & Instagram ads engineered strictly for consultation bookings and ROAS." },
  { t: "Course & Workshop Launches", d: "Full funnel setup and promotional content blitz for your astrology courses or webinars." },
  { t: "WhatsApp Booking Automation", d: "Custom direct WhatsApp chat flow to qualify and book clients instantly." },
];

function Services() {
  return (
    <div>
      {/* HERO */}
      <section className="px-6 md:px-10 pt-10 pb-20 text-center max-w-5xl mx-auto">
        <span className="inline-block bg-lime border-2 border-ink rounded-full px-4 py-1 text-sm font-semibold rotate-[-2deg] mb-8">
          All-in-one execution ✦
        </span>
        <h1 className="text-display text-[14vw] md:text-[8vw] leading-[0.9]">
          One package. Everything your presence needs, <span className="text-serif-italic text-coral">run by one person who knows the industry.</span>
        </h1>
        <p className="mt-8 max-w-2xl mx-auto text-lg md:text-xl text-ink/80 leading-relaxed">
          No fragmented deliverables, no moon-phase filler. Just the real content, systems, and distribution needed to turn viewers into paid consultations.
        </p>
      </section>

      {/* CORE PACKAGE */}
      <section className="bg-cream border-t-2 border-ink px-6 md:px-10 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <span className="text-xs uppercase tracking-widest text-ink/70 font-semibold">What's included</span>
            <h2 className="text-display text-4xl md:text-6xl text-ink mt-2">The Monthly Package</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {packageItems.map((item, i) => (
              <Reveal key={item.t} variant="up" delay={i * 60} className="rounded-2xl border-2 border-ink bg-background p-8 hover:-translate-y-1 transition shadow-[4px_4px_0_0_var(--ink)]">
                <div className="flex items-center justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-lime border-2 border-ink">
                    <item.icon size={22} className="text-ink" />
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-pink border border-ink">{item.badge}</span>
                </div>
                <h3 className="text-display text-2xl md:text-3xl mt-6 text-ink">{item.t}</h3>
                <p className="mt-3 text-base text-ink/80 leading-relaxed">{item.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ADD-ONS SECTION */}
      <section className="bg-ink text-cream px-6 md:px-10 py-24 border-t-2 border-ink">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <span className="text-xs uppercase tracking-widest text-lime font-semibold">Optional Boosts</span>
            <h2 className="text-display text-4xl md:text-6xl text-cream mt-2">Add-On Capabilities</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {addOns.map((a, i) => (
              <Reveal key={a.t} variant="up" delay={i * 80} className="rounded-2xl border-2 border-cream/20 bg-ink p-8 hover:border-lime transition">
                <PlusCircle size={28} className="text-lime" />
                <h3 className="text-display text-2xl mt-6 text-cream">{a.t}</h3>
                <p className="mt-3 text-sm text-cream/80 leading-relaxed">{a.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING & CLOSING */}
      <section className="px-6 md:px-10 py-28 text-center bg-lime border-t-2 border-ink">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-display text-3xl md:text-5xl text-ink leading-tight">
            "What it costs depends on how much of this you need. Message me on WhatsApp and I'll tell you in two minutes."
          </h2>
          <div className="pt-4">
            <a
              href="https://wa.link/nmlzuz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 text-xl text-cream font-semibold shadow-[4px_4px_0_0_var(--cream)] hover:bg-coral transition"
            >
              <WhatsAppIcon size={22} /> Message me on WhatsApp <ArrowUpRight size={20} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
