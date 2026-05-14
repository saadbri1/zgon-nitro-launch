import { motion } from "framer-motion";
import { ZgonLogo } from "./Logo";
import { ZGON_SOCIAL } from "@/lib/zgon-social";

const links = [
  { label: "About", href: "#about" },
  { label: "Why", href: "#why" },
  { label: "Tokenomics", href: "#tokenomics" },
  { label: "Farming", href: "#farming" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "War Room", href: "#warroom" },
  { label: "Community", href: "#community" },
];

export function Nav() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between glass cut-corners px-5 md:px-7 py-3">
        <a href="#top" className="flex items-center gap-2">
          <ZgonLogo className="text-xl" />
          <span className="hidden sm:inline-block ml-3 px-2 py-0.5 text-[10px] font-mono uppercase tracking-widest text-[var(--zgon-lime)] border border-[var(--zgon-lime)]/40">
            Solana
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs font-mono uppercase tracking-widest text-[var(--zgon-muted)] hover:text-[var(--zgon-lime)] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href={ZGON_SOCIAL.twitter} target="_blank" rel="noreferrer" aria-label="Twitter / X" className="hidden sm:inline-flex w-9 h-9 items-center justify-center border border-white/10 hover:border-[var(--zgon-lime)] hover:text-[var(--zgon-lime)] text-[var(--zgon-muted)] transition-colors">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2H21l-6.52 7.45L22 22h-6.797l-5.314-6.94L3.8 22H1l7-8L1 2h6.96l4.79 6.34L18.244 2zm-2.382 18.21h1.86L8.21 3.69H6.21l9.652 16.52z"/></svg>
          </a>
          <a href={ZGON_SOCIAL.telegramChannel} target="_blank" rel="noreferrer" aria-label="Telegram Channel" className="hidden sm:inline-flex w-9 h-9 items-center justify-center border border-white/10 hover:border-[var(--zgon-lime)] hover:text-[var(--zgon-lime)] text-[var(--zgon-muted)] transition-colors">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M9.04 15.36 8.86 19c.4 0 .58-.17.79-.38l1.9-1.81 3.94 2.88c.72.4 1.24.19 1.43-.66l2.6-12.18c.25-1.08-.39-1.5-1.1-1.24L3.3 11.04c-1.05.4-1.04.99-.18 1.26l3.93 1.23 9.13-5.75c.43-.27.83-.12.5.16"/></svg>
          </a>
          <a href={ZGON_SOCIAL.telegramChannel} target="_blank" rel="noreferrer" className="btn-zgon text-xs">
            Join <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </motion.header>
  );
}
