import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2, AlertCircle } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import founderImg from "@/assets/FOUNDER_IMAGE.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kumar Neepu — Content to Consultation Bookings for Astrologers" },
      { name: "description", content: "I turn social media content into consultation bookings for astrologers, tarot readers and numerologists. 6 years inside Guruji Astro." },
      { property: "og:title", content: "Kumar Neepu — Marketing for Astrologers" },
      { property: "og:description", content: "Followers don't pay you. Bookings do. Direct 1-on-1 marketing for spiritual practitioners." },
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
      <path d="M17.5 14.4c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.7.2-.2.3-.7 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.5-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5s-.7-1.7-1-2.3c-.3-.6-.5-.5-.7-.5H7.7c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1.1 2.8 1.2 3c.1.2 2.1 3.2 5 4.5 1.7.7 2.4.8 3.3.7.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.3c1.4.8 3.1 1.3 4.8 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3.3.9.9-3.2-.2-.3C3.8 15 3.3 13.5 3.3 12c0-4.8 3.9-8.7 8.7-8.7s8.7 3.9 8.7 8.7-3.9 8-8.7 8z"/>
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
          <Sticker color="var(--pink)" rotate={2}>No team · You work with me</Sticker>
        </Reveal>

        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <Reveal as="h1" variant="up" duration={1000} className="text-display text-[14vw] sm:text-[11vw] md:text-[8vw] text-ink leading-[0.9]">
              followers don't pay you.<br/>
              <span className="text-serif-italic text-coral">bookings do.</span>
            </Reveal>

            <Reveal variant="up" delay={200} className="mt-8 space-y-4 text-base md:text-xl text-ink/90 leading-relaxed max-w-2xl">
              <p>
                <strong>I'm Kumar Neepu.</strong> I spent six years running social media at Guruji Astro, from the inside — not as a consultant. Since then I've worked with more than 100 astrologers, tarot readers and numerologists.
              </p>
              <p className="text-serif-italic text-xl md:text-2xl text-ink font-medium">
                I do one thing: turn your content into consultation bookings. No team, no account manager. You work with me.
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
                  alt="Kumar Neepu"
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

      {/* THE THREE NUMBERS */}
      <section className="bg-lime border-y-2 border-ink px-6 md:px-10 py-20">
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

      {/* ABOUT THE 20 IT DIDN'T WORK FOR */}
      <section className="px-6 md:px-10 py-24 bg-cream">
        <div className="max-w-4xl mx-auto rounded-3xl border-2 border-ink bg-ink text-cream p-8 md:p-14 shadow-[8px_8px_0_0_var(--coral)] relative overflow-hidden">
          <div className="flex items-center gap-3 text-lime mb-4">
            <AlertCircle size={24} />
            <span className="text-xs uppercase tracking-widest font-semibold">Full transparency</span>
          </div>
          <h2 className="text-display text-4xl md:text-6xl text-cream">
            About the 20 it didn't work for
          </h2>
          <div className="mt-8 space-y-6 text-lg md:text-xl text-cream/90 leading-relaxed font-normal">
            <p>
              Roughly one in five astrologers I've worked with didn't get the result they wanted. I'd rather say that here than have you find out in month three.
            </p>
            <p className="p-6 rounded-2xl bg-cream/10 border border-cream/20 text-cream">
              In most of those cases it came down to one of two things: they wanted follower count and I was building bookings, which are not the same job — or the content needed them on camera consistently and that wasn't something they wanted to do.
            </p>
            <p className="text-serif-italic text-2xl text-lime">
              Ask me about it on the call. If either of those sounds like you, we'll both save some money.
            </p>
          </div>
          <div className="mt-10">
            <a
              href="https://wa.link/nmlzuz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-lime text-ink px-6 py-3 font-semibold hover:bg-cream transition"
            >
              Ask me on WhatsApp <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* PROOF BLOCK - WHO I WORK WITH */}
      <section className="px-6 md:px-10 py-28 bg-background border-t-2 border-ink">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="inline-block bg-pink border-2 border-ink rounded-full px-4 py-1 text-sm font-medium rotate-[-2deg] mb-4">Proof &amp; Roster</span>
              <h2 className="text-display text-[12vw] md:text-[7vw] leading-[0.9]">
                who I <span className="text-serif-italic text-coral">work with</span>
              </h2>
            </div>
            <p className="max-w-md text-base text-ink/80">
              All three accounts are public. Go and look at them.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Client 1 */}
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

            {/* Client 2 */}
            <Reveal variant="up" delay={200} className="rounded-2xl border-2 border-ink bg-cream p-8 flex flex-col justify-between hover:-translate-y-1 transition shadow-[4px_4px_0_0_var(--ink)]">
              <div>
                <div className="flex justify-between items-start">
                  <span className="text-xs uppercase tracking-widest text-ink/60 font-semibold">YouTube</span>
                  <CheckCircle2 size={20} className="text-coral" />
                </div>
                <h3 className="text-display text-3xl mt-4 text-ink">Truths of Astro</h3>
                <p className="text-serif-italic text-lg text-ink/70 mt-1">YouTube Channel</p>
                <p className="mt-6 text-base text-ink/80 leading-relaxed">
                  84.6K subscribers. Long-form Vedic astrology teaching — the format most astrologers are told won't work.
                </p>
              </div>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold opacity-70">
                Public YouTube account
              </span>
            </Reveal>

            {/* Client 3 */}
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
                  Vedic astrologer in Toronto, serving the Canadian and US diaspora. 16K followers, with a booking path that actually converts.
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

          <div className="mt-12 text-center p-6 rounded-2xl bg-lime/30 border-2 border-ink">
            <p className="text-serif-italic text-xl text-ink font-medium">
              "All three accounts are public. Go and look at them."
            </p>
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
            Send inquiry <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
