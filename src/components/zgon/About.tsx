import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";

export function About() {
  return (
    <section id="about" className="relative py-32 md:py-44 px-6 overflow-hidden">
      <div className="absolute -left-40 top-1/3 w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
        style={{ background: "radial-gradient(circle, var(--zgon-lime), transparent 60%)" }} />
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center relative">
        <div className="md:col-span-7">
          <SectionLabel index="01" label="About the movement" />
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-display font-black text-5xl md:text-7xl leading-[0.95] tracking-tight"
          >
            Built <span className="text-[var(--zgon-lime)] text-glow-lime">Before</span><br />
            The Hype.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 space-y-5 text-[var(--zgon-muted)] text-lg max-w-xl leading-relaxed"
          >
            <p>
              ZGON is more than a meme coin. It's a movement built around speed, culture, branding, and internet momentum.
            </p>
            <p className="text-[var(--zgon-text)]">
              We are building the community before the launch. The energy before the explosion. The people before the hype.
            </p>
          </motion.div>
        </div>

        <div className="md:col-span-5 grid grid-cols-2 gap-4">
          {[
            { k: "Speed", v: "0.4s", sub: "Block finality" },
            { k: "Cost", v: "$0.0001", sub: "Per transaction" },
            { k: "Culture", v: "100%", sub: "Internet-native" },
            { k: "Hype", v: "Pre-Launch", sub: "Status now" },
          ].map((c, i) => (
            <motion.div
              key={c.k}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="glass cut-corners p-5 hover:border-[var(--zgon-lime)]/40 transition-all group"
            >
              <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--zgon-muted)]">{c.k}</div>
              <div className="mt-2 font-display text-2xl text-[var(--zgon-lime)] group-hover:text-glow-lime transition-all">
                {c.v}
              </div>
              <div className="mt-1 text-xs text-[var(--zgon-muted)]">{c.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
