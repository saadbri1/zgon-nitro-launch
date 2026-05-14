import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ZGON_SOCIAL } from "@/lib/zgon-social";

const FLOAT_WORDS = [
  { t: "EARLY",    x: "6%",  y: "22%", d: 0,   s: "text-5xl md:text-7xl" },
  { t: "FAST",     x: "82%", y: "18%", d: 0.4, s: "text-4xl md:text-6xl" },
  { t: "SOLANA",   x: "10%", y: "72%", d: 0.8, s: "text-3xl md:text-5xl" },
  { t: "MOVEMENT", x: "74%", y: "78%", d: 1.2, s: "text-3xl md:text-5xl" },
  { t: "ZGON",     x: "88%", y: "50%", d: 1.6, s: "text-2xl md:text-4xl" },
];

const LIVE_CARDS = [
  { t: "New member joined Telegram", h: "+1", side: "left",  top: "30%", delay: 0 },
  { t: "Early believer entered the movement", h: "alpha", side: "right", top: "40%", delay: 1.2 },
  { t: "Wallets watching ZGON", h: "+248", side: "left",  top: "62%", delay: 2.4 },
  { t: "Community growing fast", h: "live", side: "right", top: "70%", delay: 3.6 },
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [m, setM] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const r = ref.current.getBoundingClientRect();
      setM({
        x: ((e.clientX - r.left) / r.width) * 100,
        y: ((e.clientY - r.top) / r.height) * 100,
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden zgon-noise"
      style={{
        background: `radial-gradient(circle at ${m.x}% ${m.y}%, rgba(217,255,0,0.18), transparent 45%), #050505`,
      }}
    >
      {/* grid */}
      <div className="absolute inset-0 zgon-grid-bg [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      {/* energy rings */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="absolute left-1/2 top-1/2 w-[420px] h-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--zgon-lime)]/30 animate-ring"
            style={{ animationDelay: `${i * 1.2}s` }}
          />
        ))}
      </div>

      {/* speed streaks */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(14)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-[var(--zgon-lime)] to-transparent animate-streak"
            style={{
              top: `${(i * 7) % 100}%`,
              width: "70%",
              opacity: 0.15 + (i % 3) * 0.18,
              animationDelay: `${i * 0.35}s`,
              animationDuration: `${2 + (i % 4)}s`,
            }}
          />
        ))}
      </div>

      {/* floating ambient words */}
      <div className="absolute inset-0 pointer-events-none hidden sm:block">
        {FLOAT_WORDS.map((w) => (
          <motion.div
            key={w.t}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: [0, 0.18, 0.08, 0.18], y: [20, -10, 0, -10] }}
            transition={{ duration: 8, delay: w.d, repeat: Infinity, ease: "easeInOut" }}
            className={`absolute font-display font-black ${w.s} tracking-tighter text-[var(--zgon-lime)] select-none`}
            style={{ left: w.x, top: w.y, textShadow: "0 0 40px rgba(217,255,0,0.4)" }}
          >
            {w.t}
          </motion.div>
        ))}
      </div>

      {/* particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(60)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[var(--zgon-lime)]"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.8, 0],
              y: [0, -40, -80],
            }}
            transition={{
              duration: 3 + (i % 5),
              repeat: Infinity,
              delay: (i % 10) * 0.3,
            }}
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
              boxShadow: "0 0 8px var(--zgon-lime)",
            }}
          />
        ))}
      </div>

      {/* purple atmospheric glow */}
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--zgon-purple), transparent 60%)" }}
      />

      {/* live social proof cards */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        {LIVE_CARDS.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: c.side === "left" ? -40 : 40 }}
            animate={{ opacity: [0, 1, 1, 0], x: c.side === "left" ? [-40, 0, 0, -10] : [40, 0, 0, 10] }}
            transition={{ duration: 6, delay: c.delay, repeat: Infinity, repeatDelay: 6, ease: "easeOut" }}
            className="absolute glass cut-corners pl-3 pr-4 py-2.5 flex items-center gap-3 max-w-[260px]"
            style={{
              [c.side]: "3%",
              top: c.top,
            } as React.CSSProperties}
          >
            <span className="w-2 h-2 rounded-full bg-[var(--zgon-lime)] animate-pulse-glow shrink-0" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--zgon-text)]">{c.t}</span>
            <span className="font-mono text-[10px] text-[var(--zgon-lime)] ml-auto shrink-0">{c.h}</span>
          </motion.div>
        ))}
      </div>

      {/* center content */}
      <div className="relative z-10 text-center px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-3 mb-8 px-4 py-1.5 glass-lime cut-corners"
        >
          <span className="w-2 h-2 rounded-full bg-[var(--zgon-lime)] animate-pulse-glow glow-lime-sm" />
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[var(--zgon-lime)]">
            Phase 01 — Pre-launch live
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-display font-black text-[18vw] md:text-[10vw] leading-[0.85] tracking-tighter"
        >
          <span className="block text-[var(--zgon-text)] text-glow-lime-strong">TOO FAST.</span>
          <span className="block text-[var(--zgon-lime)] text-glow-lime-strong animate-glitch">TOO ZGON.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-8 text-base md:text-xl text-[var(--zgon-muted)] max-w-2xl mx-auto font-light"
        >
          The fastest meme coin movement on Solana. <span className="text-[var(--zgon-text)]">Built before the hype.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href={ZGON_SOCIAL.telegramChannel} target="_blank" rel="noreferrer" className="btn-zgon">Join Telegram →</a>
          <a href={ZGON_SOCIAL.twitter} target="_blank" rel="noreferrer" className="btn-ghost">Follow on X</a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="mt-6 font-mono text-[10px] uppercase tracking-[0.4em] text-[var(--zgon-muted)] caret"
        >
          You are still early
        </motion.div>

        {/* live stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-20 grid grid-cols-3 max-w-3xl mx-auto glass cut-corners divide-x divide-white/5"
        >
          {[
            { v: "12,847", l: "Believers" },
            { v: "00:00", l: "Launch T-" },
            { v: "SOL", l: "Network" },
          ].map((s) => (
            <div key={s.l} className="px-4 py-5">
              <div className="font-display text-xl md:text-2xl text-[var(--zgon-lime)]">{s.v}</div>
              <div className="text-[10px] mt-1 font-mono uppercase tracking-widest text-[var(--zgon-muted)]">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-mono uppercase tracking-[0.4em] text-[var(--zgon-muted)] animate-pulse-glow">
        Scroll ↓
      </div>

      {/* bottom marquee */}
      <div className="absolute bottom-0 left-0 right-0 border-y border-white/5 bg-black/40 backdrop-blur overflow-hidden py-2">
        <div className="flex animate-marquee whitespace-nowrap font-display text-xs md:text-sm tracking-[0.3em] text-[var(--zgon-muted)]">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex shrink-0 items-center gap-8 px-8">
              {["TOO FAST.", "TOO ZGON.", "BUILT ON SOLANA", "BEFORE THE HYPE", "EARLY BELIEVERS ONLY", "PHASE 01 LIVE", "★", "CRYPTO TWITTER IS WATCHING", "★"].map((w, i) => (
                <span key={i} className={i % 3 === 0 ? "text-[var(--zgon-lime)]" : ""}>{w}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
