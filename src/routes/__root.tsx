import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet, Link, createRootRouteWithContext, useRouter, HeadContent, Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Menu, X, Instagram, Youtube, Facebook, Linkedin, Twitter, MessageCircle } from "lucide-react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

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
  useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
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

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lunara — Marketing Studio for Astrologers" },
      { name: "description", content: "Lunara is a creative marketing studio crafting cinematic content, social strategy and performance campaigns for astrologers and spiritual brands." },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Anton&family=DM+Serif+Display:ital@0;1&family=Inter:wght@400;500;600&display=swap" },
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
  { to: "/work", label: "Work" },
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

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between px-6 py-5 md:px-10">
        <Link to="/" className="relative inline-flex items-center">
          <StarBurst className="absolute -left-2 -top-2 h-16 w-16 wiggle" />
          <span className="relative text-display text-2xl text-ink pl-3">work</span>
        </Link>
        <Link to="/" className="hidden md:block text-serif-italic text-3xl text-ink hover:scale-105 transition">
          lunara*
        </Link>
        <div className="flex items-center gap-3">
          <a href="#" aria-label="whatsapp" className="hidden md:grid h-11 w-11 place-items-center rounded-full bg-ink text-cream hover:bg-coral transition">
            <MessageCircle size={18} />
          </a>
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
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="px-6 md:px-10 py-20">
        <div className="text-display text-[18vw] leading-[0.85] tracking-tight">
          let's<br/>
          <span className="text-serif-italic text-lime">make magic</span>
        </div>
        <div className="mt-20 grid gap-10 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <div className="text-serif-italic text-5xl">lunara*</div>
            <p className="mt-4 max-w-sm text-sm opacity-70">
              A creative marketing studio building cosmic brands for modern astrologers, tarot readers and spiritual guides.
            </p>
            <div className="mt-6 flex gap-2">
              {[Instagram, Youtube, Facebook, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" aria-label="social" className="grid h-10 w-10 place-items-center rounded-full border border-cream/30 hover:bg-lime hover:text-ink hover:border-lime transition">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest opacity-60">Navigate</p>
            <ul className="mt-4 space-y-2">
              {NAV.map(n => <li key={n.to}><Link to={n.to} className="hover:text-lime">{n.label}</Link></li>)}
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest opacity-60">Services</p>
            <ul className="mt-4 space-y-2 opacity-80 text-sm">
              <li>Video Editing</li>
              <li>Social Media</li>
              <li>Performance Ads</li>
              <li>Content Strategy</li>
              <li>Profile Management</li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest opacity-60">Studio</p>
            <ul className="mt-4 space-y-2 opacity-80 text-sm">
              <li>hello@lunara.studio</li>
              <li>+91 98765 43210</li>
              <li>Mumbai · Remote</li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col md:flex-row justify-between gap-4 border-t border-cream/15 pt-6 text-xs opacity-60">
          <p>© 2026 Lunara Studio. All cosmic rights reserved.</p>
          <p className="text-serif-italic text-base">written in the stars · built on earth</p>
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
