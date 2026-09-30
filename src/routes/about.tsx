import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Instagram, Linkedin, MapPin } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import founderImg from "@/assets/FOUNDER_IMAGE.jpeg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Kumar Neepu — Astrology Business Coach & Marketer" },
      { name: "description", content: "Kumar Neepu, astrology business coach: ex-Balaji Telefilms AD, 6 years building Guruji Astro's social media, 100+ astrologers. Delhi & Varanasi." },
      { property: "og:title", content: "Kumar Neepu — Astrology Business Coach & Marketer" },
      { property: "og:description", content: "Kumar Neepu, astrology business coach: ex-Balaji Telefilms AD, 6 years building Guruji Astro's social media, 100+ astrologers. Delhi & Varanasi." },
      { property: "og:url", content: "https://astrologymarketing.in/about" },
      { name: "twitter:title", content: "Kumar Neepu — Astrology Business Coach & Marketer" },
      { name: "twitter:description", content: "Ex-Balaji Telefilms AD, 6 years building Guruji Astro's social media. Delhi & Varanasi." },
    ],
    links: [
      { rel: "canonical", href: "https://astrologymarketing.in/about" },
    ],
  }),
  component: About,
});

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.5 14.4c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.7.2-.2.3-.7 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.5-.5.1-.2 0-.4 0-.5s-.7-1.7-1-2.3c-.3-.6-.5-.5-.7-.5H7.7c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1.1 2.8 1.2 3c.1.2 2.1 3.2 5 4.5 1.7.7 2.4.8 3.3.7.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.3c1.4.8 3.1 1.3 4.8 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3.3.9.9-3.2-.2-.3C3.8 15 3.3 13.5 3.3 12c0-4.8 3.9-8.7 8.7-8.7s8.7 3.9 8.7 8.7-3.9 8-8.7 8z"/>
    </svg>
  );
}

const founderSocials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/astro.marketingg?igsh=aG8wZXB2dHhsM3ds",
    Icon: Instagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kumarneepu?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    Icon: Linkedin,
  },
] as const;

function About() {
  return (
    <div>
      {/* HEADER SECTION */}
      <section className="bg-ink text-cream px-6 md:px-10 py-24 text-center">
        <span className="inline-block bg-lime text-ink border-2 border-cream rounded-full px-4 py-1 text-sm font-semibold rotate-[-2deg] mb-6">
          Single Operator · Direct Accountability ✦
        </span>
        <h1 className="text-display text-[15vw] md:text-[9vw] leading-[0.88] text-cream">
          There is no studio.<br/>
          <span className="text-serif-italic text-lime">There's me.</span>
        </h1>
        <h2 className="mt-8 text-serif-italic text-2xl md:text-4xl text-cream/90 font-medium max-w-4xl mx-auto leading-snug">
          Astrology business coach — from film sets to Guruji Astro
        </h2>
      </section>

      {/* MAIN BIO SECTION */}
      <section className="px-6 md:px-10 py-24 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <Reveal variant="left" className="md:col-span-5">
            <div className="relative">
              <img
                src={founderImg}
                alt="Kumar Neepu, astrology business coach"
                loading="lazy"
                width={1122}
                height={1402}
                className="aspect-[4/5] w-full rounded-2xl border-2 border-ink shadow-[10px_10px_0_0_var(--ink)] object-cover object-top"
              />
              <span className="absolute -bottom-4 -right-3 rotate-[-4deg] bg-lime text-ink border-2 border-ink rounded-full px-4 py-1 text-sm font-semibold">
                Kumar Neepu ✦
              </span>
            </div>
          </Reveal>

          <Reveal variant="right" className="md:col-span-7 space-y-6 text-lg md:text-xl text-ink/90 leading-relaxed">
            <p className="text-serif-italic text-2xl md:text-3xl text-ink font-medium leading-snug">
              I started in television as an assistant director at <strong>Balaji Telefilms</strong>. Then spent six years at <strong>Guruji Astro</strong>, building their <strong>Instagram</strong> and <strong>YouTube</strong> social media operations from the inside.
            </p>

            <p>
              As an independent <strong>astrology business coach</strong>, I learned that astrology content and consultation bookings are two completely different problems. Most astrologers have solved content — their Reels get views. But almost none of it turns into paid consultations because nothing tells a viewer how or why to book now.
            </p>

            <p>
              That gap is the whole reason I work with spiritual practitioners. Since leaving <strong>Guruji Astro</strong>, I've worked with more than 100 astrologers, tarot readers, and numerologists across <strong>Delhi</strong>, <strong>Varanasi</strong>, and across India.
            </p>

            <p className="p-6 rounded-2xl bg-cream border-2 border-ink text-ink font-medium">
              I take a handful of clients at a time. Not a positioning strategy — it's just me doing the work, and I'd rather do four properly than fifteen badly.
            </p>

            <div className="flex items-center gap-3 pt-2 text-ink font-semibold">
              <MapPin size={22} className="text-coral" />
              <span>Delhi and Varanasi. I work with clients across India, and a few outside it.</span>
            </div>

            <div className="pt-6 flex flex-wrap items-center gap-4">
              <a
                href="https://wa.link/nmlzuz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-[#25D366] text-white px-7 py-4 font-semibold border-2 border-ink shadow-[4px_4px_0_0_var(--ink)] hover:scale-105 transition"
              >
                <WhatsAppIcon size={20} /> Message me on WhatsApp
              </a>

              <div className="flex gap-3">
                {founderSocials.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid h-12 w-12 place-items-center rounded-full border-2 border-ink bg-cream text-ink hover:bg-lime transition"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
