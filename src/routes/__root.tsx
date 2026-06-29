import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Menu, X, Instagram, Youtube, Facebook, Linkedin, Twitter } from "lucide-react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-display text-8xl text-gold">404</h1>
        <p className="mt-4 text-italic-serif text-2xl">the stars don't align here</p>
        <Link to="/" className="mt-8 inline-block underline underline-offset-4 hover:text-gold">
          return home
        </Link>
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
        <h1 className="text-display text-4xl">cosmic interference</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something disrupted the signal.</p>
        <div className="mt-6 flex justify-center gap-3">
          <button onClick={() => { router.invalidate(); reset(); }} className="rounded-full bg-gold px-5 py-2 text-sm font-medium text-ink">Try again</button>
          <a href="/" className="rounded-full border border-border px-5 py-2 text-sm">Go home</a>
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
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..600&family=Inter:wght@400;500;600&display=swap" },
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

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/40 border-b border-border/40">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4 md:px-10">
        <Link to="/" className="text-display text-2xl tracking-tight text-cream">
          lunara<span className="text-gold">*</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {NAV.map(n => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: n.to === "/" }} className="text-cream/70 hover:text-gold transition-colors" activeProps={{ className: "text-gold" }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <Link to="/contact" className="hidden md:inline-flex items-center gap-2 rounded-full border border-gold/60 px-4 py-2 text-xs uppercase tracking-widest text-gold hover:bg-gold hover:text-ink transition">
          Book a reading
        </Link>
        <button className="md:hidden text-cream" onClick={() => setOpen(!open)} aria-label="menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border/40 bg-background/95 px-6 py-6 flex flex-col gap-4">
          {NAV.map(n => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="text-2xl text-display">{n.label}</Link>
          ))}
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="mx-auto max-w-[1600px] px-6 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <div className="text-display text-5xl">lunara<span className="text-gold">*</span></div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              A creative marketing studio building cosmic brands for modern astrologers, tarot readers and spiritual guides.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Youtube, Facebook, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" aria-label="social" className="grid h-10 w-10 place-items-center rounded-full border border-border hover:border-gold hover:text-gold transition">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-gold/80">Navigate</p>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV.map(n => <li key={n.to}><Link to={n.to} className="hover:text-gold">{n.label}</Link></li>)}
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-gold/80">Services</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Video Editing</li>
              <li>Social Media</li>
              <li>Performance Ads</li>
              <li>Content Strategy</li>
              <li>Profile Management</li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-gold/80">Studio</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>hello@lunara.studio</li>
              <li>+91 98765 43210</li>
              <li>Mumbai · Remote</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col md:flex-row justify-between gap-4 border-t border-border/40 pt-6 text-xs text-muted-foreground">
          <p>© 2026 Lunara Studio. All celestial rights reserved.</p>
          <p className="text-italic-serif">written in the stars · built on earth</p>
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
      <main className="pt-20">
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
