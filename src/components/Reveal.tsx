import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";

type Variant = "up" | "down" | "left" | "right" | "fade" | "zoom" | "rotate";

export function Reveal({
  children,
  as: Tag = "div",
  variant = "up",
  delay = 0,
  duration = 800,
  className = "",
  once = true,
  threshold = 0.15,
}: {
  children: ReactNode;
  as?: keyof React.JSX.IntrinsicElements;
  variant?: Variant;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  threshold?: number;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") { setVisible(true); return; }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            if (once) io.unobserve(e.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once, threshold]);

  const from: Record<Variant, string> = {
    up: "translate3d(0,40px,0)",
    down: "translate3d(0,-40px,0)",
    left: "translate3d(-48px,0,0)",
    right: "translate3d(48px,0,0)",
    fade: "none",
    zoom: "scale(0.92)",
    rotate: "rotate(-6deg) translate3d(0,30px,0)",
  };

  const style: CSSProperties = {
    transform: visible ? "none" : from[variant],
    opacity: visible ? 1 : 0,
    transition: `transform ${duration}ms cubic-bezier(0.22,1,0.36,1) ${delay}ms, opacity ${duration}ms ease ${delay}ms`,
    willChange: "transform, opacity",
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Comp: any = Tag;
  return <Comp ref={ref as any} className={className} style={style}>{children}</Comp>;
}
