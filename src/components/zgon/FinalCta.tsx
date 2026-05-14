import { motion } from "framer-motion";
import { ZGON_SOCIAL } from "@/lib/zgon-social";

export function FinalCta() {
  return (
    <section id="cta" className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden bg-black">
      {/* speed streaks */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-[var(--zgon-lime)] to-transparent animate-streak"
            style={{
              top: `${(i * 5) % 100}%`,
              width: "70%",
              opacity: 0.15 + (i % 3) * 0.15,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${2 + (i % 4)}s`,
            }}
          />
        ))}
      </div>

      {/* lime void glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(217,255,0,0.25), transparent 60%)" }} />

      <div className="relative z-10 text-center max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-display font-black text-[14vw] md:text-[9vw] leading-[0.85] tracking-tighter text-glow-lime-strong"
        >
          YOU WERE<br />
          <span className="text-[var(--zgon-lime)]">HERE EARLY.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-8 text-lg md:text-xl text-[var(--zgon-muted)]"
        >
          Most people will discover ZGON too late.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href={ZGON_SOCIAL.twitter} target="_blank" rel="noreferrer" className="btn-zgon text-base py-4 px-8">
            Follow {ZGON_SOCIAL.twitterHandle} →
          </a>
          <a href={ZGON_SOCIAL.telegramChannel} target="_blank" rel="noreferrer" className="btn-ghost">
            Join Telegram
          </a>
        </motion.div>
      </div>
    </section>
  );
}
