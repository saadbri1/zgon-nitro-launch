import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";

const REASONS = [
  { k: "01", t: "Early Positioning",   d: "Most people will arrive too late. You are watching this in phase 01." },
  { k: "02", t: "Solana Speed",        d: "Sub-second finality. Built for memes that move at the speed of culture." },
  { k: "03", t: "Community Momentum",  d: "A real raid army forming. Telegram filling. Twitter accelerating." },
  { k: "04", t: "Viral Branding",      d: "Visual identity engineered to dominate timelines and screenshots." },
  { k: "05", t: "Internet Culture",    d: "ZGON is a feeling. Fast. Loud. Cinematic. Internet-native." },
  { k: "06", t: "Meme Energy",         d: "Pure signal. No fluff. The movement runs on conviction and velocity." },
];

export function WhyWatching() {
  return (
    <section id="why" className="relative py-32 md:py-44 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-grid-fine opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel index="04" label="Signal" />
          <h2 className="font-display font-black text-5xl md:text-7xl leading-[0.95] tracking-tight">
            Why People Are<br />
            <span className="text-[var(--zgon-lime)] text-glow-lime">Watching ZGON.</span>
          </h2>
          <p className="mt-6 text-[var(--zgon-muted)] max-w-xl mx-auto">
            The movement is accelerating. These are the reasons early believers are already inside.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {REASONS.map((r, i) => (
            <motion.div
              key={r.k}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.07, duration: 0.6 }}
              className="cut-corners glass p-7 group relative overflow-hidden hover:border-[var(--zgon-lime)]/40 transition-colors"
            >
              <div className="absolute -right-12 -top-12 w-40 h-40 rounded-full bg-[var(--zgon-lime)]/0 group-hover:bg-[var(--zgon-lime)]/10 blur-3xl transition-all" />
              <div className="relative">
                <div className="font-mono text-[10px] tracking-[0.3em] text-[var(--zgon-lime)]">/ {r.k}</div>
                <h3 className="mt-4 font-display text-2xl md:text-3xl text-[var(--zgon-text)]">{r.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--zgon-muted)]">{r.d}</p>
                <div className="mt-6 h-px bg-gradient-to-r from-[var(--zgon-lime)]/40 via-transparent to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}