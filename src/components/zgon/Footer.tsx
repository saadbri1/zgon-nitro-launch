import { ZgonLogo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 px-6 py-10 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <ZgonLogo className="text-lg" />
          <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--zgon-muted)]">
            © 2025 — Built on Solana
          </span>
        </div>
        <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--zgon-muted)]">
          Too Fast. Too ZGON.
        </div>
      </div>
    </footer>
  );
}
