import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

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

      {/* speed streaks */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-[var(--zgon-lime)] to-transparent animate-streak"
            style={{
              top: `${10 + i * 11}%`,
              width: "60%",
              opacity: 0.2 + (i % 3) * 0.15,
              animationDelay: `${i * 0.6}s`,
              animationDuration: `${3 + (i % 4)}s`,
            }}
          />
        ))}
      </div>

      {/* particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[var(--zgon-lime)]"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.8, 0],
              y: [0, -30, -60],
            }}
            transition={{
              duration: 4 + (i % 5),
              repeat: Infinity,
              delay: (i % 10) * 0.4,
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
          <a href="#cta" className="btn-zgon">Join The Movement →</a>
          <a href="#community" className="btn-ghost">Enter Telegram</a>
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
    </section>
  );
}
