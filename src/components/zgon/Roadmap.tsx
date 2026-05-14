import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";

const phases = [
  {
    id: "01",
    title: "Foundation",
    status: "Active",
    items: ["Branding & identity", "Community building", "Viral content engine", "Twitter raids"],
  },
  {
    id: "02",
    title: "Ignition",
    status: "Loading",
    items: ["PumpFun launch", "Meme domination", "Influencer push", "Farming activation"],
  },
  {
    id: "03",
    title: "Domination",
    status: "Queued",
    items: ["Ecosystem expansion", "Strategic partnerships", "Exchange visibility", "Global movement"],
  },
];

export function Roadmap() {
  return (
    <section id="roadmap" className="relative py-32 md:py-44 px-6 bg-[var(--zgon-bg-soft)] overflow-hidden">
      <div className="absolute inset-0 zgon-grid-bg opacity-20 [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" />
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <SectionLabel index="04" label="The Roadmap" />
          <h2 className="font-display font-black text-5xl md:text-7xl leading-[0.95] tracking-tight">
            Three Phases.<br />
            <span className="text-[var(--zgon-lime)] text-glow-lime">One Movement.</span>
          </h2>
        </div>

        <div className="relative">
          {/* connecting line */}
          <div className="hidden md:block absolute top-12 left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-[var(--zgon-lime)]/40 to-transparent" />

          <div className="grid md:grid-cols-3 gap-6">
            {phases.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.7 }}
                className="relative"
              >
                {/* node */}
                <div className="hidden md:flex absolute top-12 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[var(--zgon-lime)] glow-lime-sm items-center justify-center">
                  <span className="absolute inset-0 rounded-full bg-[var(--zgon-lime)] animate-pulse-glow" />
                </div>

                <div className="md:mt-24 cut-corners glass p-7 hover:border-[var(--zgon-lime)]/40 transition-all group h-full">
                  <div className="flex items-center justify-between">
                    <div className="font-display text-6xl text-[var(--zgon-lime)]/20 group-hover:text-[var(--zgon-lime)]/40 transition-colors">
                      {p.id}
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-1 border border-[var(--zgon-lime)]/30 text-[var(--zgon-lime)]">
                      {p.status}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-3xl">{p.title}</h3>
                  <ul className="mt-6 space-y-3">
                    {p.items.map((it) => (
                      <li key={it} className="flex items-center gap-3 text-sm text-[var(--zgon-muted)]">
                        <span className="w-1.5 h-1.5 bg-[var(--zgon-lime)]" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
