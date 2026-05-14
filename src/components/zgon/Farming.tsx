import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";

const apyData = [12, 18, 24, 22, 30, 36, 33, 42, 48, 56, 52, 64];

function Sparkline() {
  const max = Math.max(...apyData);
  const points = apyData
    .map((v, i) => `${(i / (apyData.length - 1)) * 100},${100 - (v / max) * 90}`)
    .join(" ");
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-32">
      <defs>
        <linearGradient id="sg" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="var(--zgon-lime)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="var(--zgon-lime)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.polyline
        points={points}
        fill="none"
        stroke="var(--zgon-lime)"
        strokeWidth="1.2"
        vectorEffect="non-scaling-stroke"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        style={{ filter: "drop-shadow(0 0 4px var(--zgon-lime))" }}
      />
      <polygon points={`0,100 ${points} 100,100`} fill="url(#sg)" opacity="0.7" />
    </svg>
  );
}

export function Farming() {
  return (
    <section id="farming" className="relative py-32 md:py-44 px-6 overflow-hidden">
      <div className="absolute right-0 top-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-20"
        style={{ background: "radial-gradient(circle, var(--zgon-blue), transparent 60%)" }} />
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel index="03" label="Farming Protocol" />
          <h2 className="font-display font-black text-5xl md:text-7xl leading-[0.95] tracking-tight">
            Stake Fast.<br />
            <span className="text-[var(--zgon-lime)] text-glow-lime">Earn Faster.</span>
          </h2>
          <p className="mt-6 text-[var(--zgon-muted)] text-lg">The early ones get rewarded.</p>
        </div>

        {/* fake dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative cut-corners glass p-1"
        >
          {/* scanline */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none cut-corners">
            <div className="absolute left-0 right-0 h-32 bg-gradient-to-b from-transparent via-[var(--zgon-lime)]/5 to-transparent animate-scan" />
          </div>

          <div className="relative cut-corners bg-[var(--zgon-card)] p-6 md:p-10">
            {/* header */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/5">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[var(--zgon-lime)] animate-pulse-glow" />
                <span className="font-mono text-xs text-[var(--zgon-muted)] uppercase tracking-widest">
                  ZGON Farming Terminal · v0.1
                </span>
              </div>
              <button className="btn-zgon text-[10px] py-2 px-4">Connect Wallet</button>
            </div>

            <div className="grid lg:grid-cols-12 gap-6 mt-8">
              {/* APY chart */}
              <div className="lg:col-span-7 cut-corners bg-black/40 border border-white/5 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--zgon-muted)]">
                      Estimated APY
                    </div>
                    <div className="mt-1 font-display text-5xl text-[var(--zgon-lime)] text-glow-lime">
                      247.8%
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {["1D", "1W", "1M", "ALL"].map((p, i) => (
                      <span key={p}
                        className={`text-[10px] font-mono px-2 py-1 border ${i === 2 ? "border-[var(--zgon-lime)] text-[var(--zgon-lime)]" : "border-white/10 text-[var(--zgon-muted)]"}`}>
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
                <Sparkline />
              </div>

              {/* stake panel */}
              <div className="lg:col-span-5 cut-corners bg-black/40 border border-white/5 p-6 flex flex-col gap-4">
                <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--zgon-muted)]">
                  Stake ZGON
                </div>
                <div className="flex items-center justify-between bg-black/40 border border-white/5 p-4">
                  <input
                    defaultValue="1,000,000"
                    className="bg-transparent outline-none font-display text-2xl text-[var(--zgon-text)] w-full"
                  />
                  <div className="text-xs font-mono text-[var(--zgon-lime)]">ZGON</div>
                </div>
                <div className="flex gap-2">
                  {["25%", "50%", "75%", "MAX"].map((v) => (
                    <button key={v} className="flex-1 text-[10px] font-mono py-2 border border-white/10 hover:border-[var(--zgon-lime)] hover:text-[var(--zgon-lime)] transition-colors">
                      {v}
                    </button>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-3 mt-2 text-xs font-mono">
                  <div className="flex justify-between text-[var(--zgon-muted)]"><span>Daily</span><span className="text-[var(--zgon-text)]">+6,789</span></div>
                  <div className="flex justify-between text-[var(--zgon-muted)]"><span>Weekly</span><span className="text-[var(--zgon-text)]">+47,523</span></div>
                  <div className="flex justify-between text-[var(--zgon-muted)]"><span>Monthly</span><span className="text-[var(--zgon-text)]">+203,670</span></div>
                  <div className="flex justify-between text-[var(--zgon-muted)]"><span>Yearly</span><span className="text-[var(--zgon-lime)]">+2,478,000</span></div>
                </div>
                <button className="btn-zgon justify-center mt-2">Stake Now →</button>
              </div>

              {/* feature cards row */}
              {[
                { l: "Referral Bonus", v: "+5%", d: "Per recruit" },
                { l: "Leaderboard", v: "#142", d: "Your rank" },
                { l: "Missions", v: "3 / 8", d: "Active streak" },
                { l: "Airdrop", v: "Eligible", d: "Phase 02" },
              ].map((f) => (
                <div key={f.l} className="lg:col-span-3 cut-corners bg-black/40 border border-white/5 p-5 hover:border-[var(--zgon-lime)]/40 transition-all">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--zgon-muted)]">{f.l}</div>
                  <div className="mt-2 font-display text-2xl text-[var(--zgon-lime)]">{f.v}</div>
                  <div className="text-[10px] font-mono text-[var(--zgon-muted)] mt-1">{f.d}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
