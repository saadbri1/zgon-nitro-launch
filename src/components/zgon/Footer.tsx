import { ZgonLogo } from "./Logo";
import { ZGON_SOCIAL } from "@/lib/zgon-social";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 px-6 py-12 bg-black">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 items-start">
        <div>
          <ZgonLogo className="text-2xl" />
          <p className="mt-4 text-sm text-[var(--zgon-muted)] max-w-xs">
            The fastest meme coin movement on Solana. Built before the hype.
          </p>
        </div>
        <div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--zgon-lime)]">/ Movement</div>
          <div className="mt-3 flex flex-col gap-2 text-sm">
            <a href={ZGON_SOCIAL.twitter} target="_blank" rel="noreferrer" className="text-[var(--zgon-text)] hover:text-[var(--zgon-lime)] transition-colors">Twitter / X — {ZGON_SOCIAL.twitterHandle}</a>
            <a href={ZGON_SOCIAL.telegramChannel} target="_blank" rel="noreferrer" className="text-[var(--zgon-text)] hover:text-[var(--zgon-lime)] transition-colors">Telegram Channel</a>
            <a href={ZGON_SOCIAL.telegramChat} target="_blank" rel="noreferrer" className="text-[var(--zgon-text)] hover:text-[var(--zgon-lime)] transition-colors">Telegram War Room</a>
          </div>
        </div>
        <div className="md:text-right">
          <div className="font-display text-2xl text-[var(--zgon-lime)] text-glow-lime">TOO FAST. TOO ZGON.</div>
          <div className="mt-3 font-mono text-[10px] uppercase tracking-widest text-[var(--zgon-muted)]">
            © 2025 — Built on Solana · Phase 01
          </div>
        </div>
      </div>
    </footer>
  );
}
