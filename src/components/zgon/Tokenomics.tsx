import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";

const tokens = [
  { name: "Community", pct: 35, color: "var(--zgon-lime)" },
  { name: "Liquidity", pct: 20, color: "var(--zgon-blue)" },
  { name: "Marketing", pct: 15, color: "var(--zgon-lime)" },
  { name: "Farming Rewards", pct: 15, color: "var(--zgon-purple)" },
  { name: "Ecosystem", pct: 10, color: "var(--zgon-lime)" },
  { name: "Development", pct: 5, color: "var(--zgon-blue)" },
];

function Ring({ pct, color }: { pct: number; color: string }) {
  const r = 42;
  const c = 2 * Math.PI * r;
  return (
    <svg width="110" height="110" viewBox="0 0 110 110" className="-rotate-90">
      <circle cx="55" cy="55" r={r} stroke="rgba(255,255,255,0.06)" strokeWidth="6" fill="none" />
      <motion.circle
        cx="55" cy="55" r={r}
        stroke={color} strokeWidth="6" fill="none" strokeLinecap="round"
        strokeDasharray={c}
        initial={{ strokeDashoffset: c }}
        whileInView={{ strokeDashoffset: c - (c * pct) / 100 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        style={{ filter: `drop-shadow(0 0 6px ${color})` }}
      />
    </svg>
  );
}

export function Tokenomics() {
  return (
    <section id="tokenomics" className="relative py-32 md:py-44 px-6 bg-[var(--zgon-bg-soft)] overflow-hidden">
      <div className="absolute inset-0 zgon-grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <SectionLabel index="02" label="Tokenomics" />
            <h2 className="font-display font-black text-5xl md:text-7xl leading-[0.95] tracking-tight">
              Distribution<br />
              <span className="text-[var(--zgon-lime)] text-glow-lime">Engineered.</span>
            </h2>
          </div>
          <div className="font-mono text-xs text-[var(--zgon-muted)] max-w-sm">
            <div className="text-[var(--zgon-lime)]">TOTAL_SUPPLY</div>
            <div className="text-2xl font-display text-[var(--zgon-text)] mt-1">1,000,000,000 ZGON</div>
            <div className="mt-2">Fair allocation for the early movement.</div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tokens.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="group relative cut-corners glass p-7 hover:border-[var(--zgon-lime)]/50 transition-all overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full opacity-0 group-hover:opacity-20 blur-2xl transition-opacity"
                style={{ background: t.color }} />
              <div className="flex items-center justify-between gap-4 relative">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--zgon-muted)]">
                    [{String(i + 1).padStart(2, "0")}]
                  </div>
                  <div className="mt-2 font-display text-xl">{t.name}</div>
                  <div className="mt-3 font-display text-4xl" style={{ color: t.color, textShadow: `0 0 20px ${t.color}` }}>
                    {t.pct}%
                  </div>
                </div>
                <Ring pct={t.pct} color={t.color} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
