import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { disclaimer, portraitAlt, profiles } from "@/lib/content";

const links = [
  { to: "/about", label: "About" },
  { to: "/work", label: "Work" },
  { to: "/writing", label: "Writing" },
  { to: "/the-reasons-why", label: "Book" },
  { to: "/connect", label: "Connect" },
] as const;

export function Frame({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cream text-ink">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-paper focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-40 border-b border-line/40 bg-navy/95 text-paper backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
          <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <span className="grid h-9 w-9 place-items-center rounded-full border border-gold/70 font-display text-sm text-gold">
              DH
            </span>
            <span className="text-sm tracking-wide">
              <span className="text-mist">DH / </span>
              Daniel Heiwig
            </span>
          </Link>
          <nav className="hidden items-center gap-8 text-sm tracking-wide text-mist md:flex">
            {links.map((link) => {
              const active = pathname === link.to || pathname.startsWith(`${link.to}/`);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={active ? "text-cyan" : "hover:text-paper"}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-line text-paper md:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
        {open ? (
          <nav className="border-t border-line px-5 py-3 md:hidden">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="block py-3 text-base text-paper"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        ) : null}
      </header>
      <main id="content">{children}</main>
      <footer className="bg-navy text-mist">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-display text-2xl text-paper">Daniel Heiwig</p>
            <p className="mt-2 text-sm text-gold">Data. Insight. AI. Impact.</p>
            <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
              {profiles.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="me noopener noreferrer"
                    className="hover:text-paper"
                    title={item.note}
                  >
                    {item.label === "YouTube" ? `YouTube ${item.note}` : item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <Link to="/government" className="hover:text-paper">
              Digital government
            </Link>
            <Link to="/ventures" className="hover:text-paper">
              Citrati.ai & ventures
            </Link>
            <Link to="/heiwig-press" className="hover:text-paper">
              Heiwig Press
            </Link>
            <Link to="/connect" className="hover:text-paper">
              Connect
            </Link>
            <Link to="/privacy" className="hover:text-paper">
              Privacy
            </Link>
          </div>
          <p className="text-sm text-paper">Personal capacity. Not an official site.</p>
        </div>
        <div className="border-t border-line">
          <p className="mx-auto max-w-6xl px-5 py-6 text-xs leading-relaxed text-mist">{disclaimer}</p>
        </div>
      </footer>
    </div>
  );
}

export function Portrait({
  priority = false,
  className,
}: {
  priority?: boolean;
  className: string;
}) {
  return (
    <picture>
      <source
        type="image/webp"
        srcSet="/daniel-heiwig-ai-engineering-800w.webp 800w, /daniel-heiwig-ai-engineering.webp 1254w"
        sizes="(min-width: 768px) 28rem, 100vw"
      />
      <img
        src="/daniel-heiwig-ai-engineering-800w.jpg"
        srcSet="/daniel-heiwig-ai-engineering-800w.jpg 800w, /daniel-heiwig-ai-engineering.jpg 1254w"
        alt={portraitAlt}
        width={1254}
        height={1254}
        fetchPriority={priority ? "high" : undefined}
        decoding="async"
        className={className}
      />
    </picture>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-medium tracking-widest text-cyan uppercase">{children}</p>
  );
}
