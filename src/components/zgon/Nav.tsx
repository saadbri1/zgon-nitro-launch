import { motion } from "framer-motion";
import { ZgonLogo } from "./Logo";

const links = [
  { label: "About", href: "#about" },
  { label: "Tokenomics", href: "#tokenomics" },
  { label: "Farming", href: "#farming" },
  { label: "Roadmap", href: "#roadmap" },
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
        <a href="#cta" className="btn-zgon text-xs">
          Join <span aria-hidden>→</span>
        </a>
      </div>
    </motion.header>
  );
}
