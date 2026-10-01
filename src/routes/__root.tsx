import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet, Link, createRootRouteWithContext, useRouter, HeadContent, Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Menu, X, Instagram, Youtube, Facebook, Linkedin, Twitter } from "lucide-react";
import qrImg from "@/assets/qr.png";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-display text-9xl">404</h1>
        <p className="mt-4 text-serif-italic text-3xl">the stars don't align here</p>
        <Link to="/" className="mt-8 inline-block underline underline-offset-4">return home</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-display text-5xl">oops, cosmic glitch</h1>
        <div className="mt-6 flex justify-center gap-3">
          <button onClick={() => { router.invalidate(); reset(); }} className="rounded-full bg-ink px-5 py-2 text-sm text-cream">Try again</button>
          <a href="/" className="rounded-full border border-ink px-5 py-2 text-sm">Go home</a>
        </div>
      </div>
    </div>
  );
}

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Kumar Neepu",
  "jobTitle": "Astrology Business Coach",
  "worksFor": {
    "@type": "Organization",
    "name": "Astrology Marketing",
    "url": "https://astrologymarketing.in"
  },
  "sameAs": [
    "https://www.instagram.com/astro.marketingg",
    "https://www.linkedin.com/in/kumarneepu"
  ]
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Astrology Marketing",
  "url": "https://astrologymarketing.in",
  "description": "Digital & social media marketing for astrologers, tarot readers and numerologists.",
  "image": "https://astrologymarketing.in/og-image.png",
  "areaServed": "India",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Varanasi",
    "addressRegion": "Uttar Pradesh",
    "addressCountry": "IN"
  },
  "founder": {
    "@type": "Person",
    "name": "Kumar Neepu"
  },
  "sameAs": [
    "https://www.instagram.com/astro.marketingg",
    "https://www.linkedin.com/in/kumarneepu"
  ]
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Astrology Marketing for Astrologers | Kumar Neepu" },
      { name: "description", content: "Astrology Marketing by Kumar Neepu — digital & social media marketing for astrologers, tarot readers and numerologists. Delhi & Varanasi." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Astrology Marketing" },
      { property: "og:title", content: "Astrology Marketing by Kumar Neepu" },
      { property: "og:description", content: "Digital & social media marketing for astrologers, tarot readers and numerologists." },
      { property: "og:url", content: "https://astrologymarketing.in" },
      { property: "og:image", content: "https://astrologymarketing.in/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Astrology Marketing by Kumar Neepu" },
      { name: "twitter:description", content: "Digital & social media marketing for astrologers, tarot readers and numerologists." },
      { name: "twitter:image", content: "https://astrologymarketing.in/og-image.png" },
      { name: "robots", content: "index, follow" },
      { name: "p:domain_verify", content: "38dddcafb362268323a9adb8e446571a" },
    ],
    links: [
      { rel: "canonical", href: "https://astrologymarketing.in" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Anton&family=DM+Serif+Display:ital@0;1&family=Inter:wght@400;500;600&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(personSchema),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(professionalServiceSchema),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

function StarBurst({ className = "", color = "var(--coral)" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill={color} aria-hidden>
      <path d="M50 0 L58 32 L92 24 L66 48 L100 56 L66 60 L86 92 L54 70 L50 100 L46 70 L14 92 L34 60 L0 56 L34 48 L8 24 L42 32 Z" />
    </svg>
  );
}

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.5 14.4c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.7.2-.2.3-.7 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.5-.5.1-.2 0-.4 0-.5s-.7-1.7-1-2.3c-.3-.6-.5-.5-.7-.5H7.7c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1.1 2.8 1.2 3c.1.2 2.1 3.2 5 4.5 1.7.7 2.4.8 3.3.7.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.3c1.4.8 3.1 1.3 4.8 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3.3.9.9-3.2-.2-.3C3.8 15 3.3 13.5 3.3 12c0-4.8 3.9-8.7 8.7-8.7s8.7 3.9 8.7 8.7-3.9 8-8.7 8z"/>
    </svg>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [qrOpen, setQrOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      if (y > last && y > 120) setHidden(true);
      else setHidden(false);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
    <header className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ${hidden ? "-translate-y-full" : "translate-y-0"} ${scrolled ? "bg-cream/85 backdrop-blur-md border-b border-ink/10" : ""}`}>
      <div className="flex items-center justify-between px-6 py-5 md:px-10">
        <Link to="/" className="relative inline-flex items-center" aria-label="Astrology Marketing by Kumar Neepu">
          <StarBurst className="absolute -left-2 -top-2 h-16 w-16 wiggle" />
          <span className="relative text-display text-2xl text-ink pl-3">am*</span>
          <span className="sr-only">Astrology Marketing by Kumar Neepu</span>
        </Link>
        <Link to="/" className="hidden md:block text-serif-italic text-3xl text-ink hover:scale-105 transition whitespace-nowrap">
          astrology marketing*
        </Link>
        <div className="flex items-center gap-3">
          <button onClick={() => setQrOpen(true)} aria-label="whatsapp" className="grid h-11 w-11 place-items-center rounded-full bg-[#25D366] text-white hover:scale-110 transition shadow-[3px_3px_0_0_var(--ink)] border-2 border-ink">
            <WhatsAppIcon size={20} />
          </button>
          <button className="md:hidden text-ink" onClick={() => setOpen(!open)} aria-label="menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {/* desktop floating nav */}
      <nav className="hidden md:flex absolute top-20 left-1/2 -translate-x-1/2 items-center gap-1 rounded-full bg-ink/90 backdrop-blur px-2 py-2 text-sm text-cream">
        {NAV.map(n => (
          <Link
            key={n.to}
            to={n.to}
            activeOptions={{ exact: n.to === "/" }}
            className="px-4 py-2 rounded-full hover:bg-cream hover:text-ink transition"
            activeProps={{ className: "px-4 py-2 rounded-full bg-lime text-ink" }}
          >
            {n.label}
          </Link>
        ))}
      </nav>
      {open && (
        <div className="md:hidden mx-4 rounded-2xl bg-ink text-cream px-6 py-8 flex flex-col gap-4">
          {NAV.map(n => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="text-display text-4xl">{n.label}</Link>
          ))}
        </div>
      )}
    </header>
    {qrOpen && (
      <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-ink/60 backdrop-blur-sm p-4 sm:p-6" onClick={() => setQrOpen(false)}>
        <div className="relative my-auto bg-cream rounded-3xl p-6 sm:p-8 w-full max-w-[20rem] sm:max-w-sm border-2 border-ink shadow-[8px_8px_0_0_var(--ink)]" onClick={(e) => e.stopPropagation()}>
          <button aria-label="close" onClick={() => setQrOpen(false)} className="absolute -top-3 -right-3 grid h-10 w-10 place-items-center rounded-full bg-ink text-cream border-2 border-ink hover:bg-coral transition">
            <X size={18} />
          </button>
          <div className="absolute -top-4 -left-4 grid h-12 w-12 place-items-center rounded-full bg-[#25D366] border-2 border-ink text-white wiggle">
            <WhatsAppIcon size={20} />
          </div>
          <img src={qrImg} alt="Scan to WhatsApp us" className="w-full aspect-square object-contain rounded-xl border-2 border-ink" />
          <h3 className="mt-5 text-display text-2xl sm:text-3xl text-ink text-center">whatsapp me</h3>
          <p className="mt-2 text-center text-sm text-ink/80">Scan the QR code to chat directly on WhatsApp.</p>
          <a
            href="https://wa.link/nmlzuz"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white border-2 border-ink shadow-[3px_3px_0_0_var(--ink)] hover:scale-[1.02] transition"
          >
            <WhatsAppIcon size={18} />
            Message on WhatsApp
          </a>
        </div>
      </div>
    )}
    </>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="px-6 md:px-10 py-20">
        <div className="text-display text-[18vw] leading-[0.85] tracking-tight">
          turn content into<br/>
          <span className="text-serif-italic text-lime">bookings</span>
        </div>
        <div className="mt-20 grid gap-10 md:grid-cols-[2fr_1fr_1.5fr_1fr]">
          <div>
            <div className="text-serif-italic text-5xl">astrology marketing*</div>
            <p className="mt-2 text-sm text-cream/90 font-medium">
              Astrology Marketing by Kumar Neepu — digital &amp; social media marketing for astrologers, tarot readers and numerologists. Delhi · Varanasi · Working with astrologers across India and abroad.
            </p>
            <div className="mt-6 flex gap-2">
              {[
                { Icon: Instagram, href: "https://www.instagram.com/astro.marketingg?igsh=aG8wZXB2dHhsM3ds", label: "@astro.marketingg on Instagram" },
                { Icon: Youtube, href: "https://www.youtube.com/@TRUTHSOFASTRO", label: "Truths of Astro on YouTube" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/kumarneepu?utm_source=share_via&utm_content=profile&utm_medium=member_android", label: "Kumar Neepu on LinkedIn" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  title={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-cream/30 hover:bg-lime hover:text-ink hover:border-lime transition"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest opacity-60 font-semibold">Navigate</p>
            <ul className="mt-4 space-y-2 font-medium">
              {NAV.map(n => <li key={n.to}><Link to={n.to} className="hover:text-lime">{n.label}</Link></li>)}
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest opacity-60 font-semibold">Services &amp; Guides</p>
            <ul className="mt-4 space-y-2.5 opacity-90 text-sm font-medium">
              <li><Link to="/instagram-marketing-for-astrologers" className="hover:text-lime">Instagram Marketing for Astrologers</Link></li>
              <li><Link to="/marketing-for-tarot-readers" className="hover:text-lime">Marketing for Tarot Readers</Link></li>
              <li><Link to="/marketing-for-numerologists" className="hover:text-lime">Marketing for Numerologists</Link></li>
              <li><Link to="/seo-for-astrologers" className="hover:text-lime">SEO &amp; Google My Business for Astrologers</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest opacity-60 font-semibold">Location &amp; Contact</p>
            <ul className="mt-4 space-y-2 opacity-90 text-sm font-medium">
              <li>Kumar Neepu</li>
              <li><a href="mailto:info@astrologymarketing.in" className="hover:text-lime underline underline-offset-2">info@astrologymarketing.in</a></li>
              <li>astrologymarketing.in</li>
              <li>Delhi &amp; Varanasi, India</li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col md:flex-row justify-between gap-4 border-t border-cream/15 pt-6 text-xs opacity-70 font-medium">
          <p>Astrology Marketing by Kumar Neepu — digital &amp; social media marketing for astrologers, tarot readers and numerologists. Delhi · Varanasi · Working with astrologers across India and abroad.</p>
          <p className="text-serif-italic text-base whitespace-nowrap">written in the stars · built on earth</p>
        </div>
      </div>
    </footer>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main className="pt-24">
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
