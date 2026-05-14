import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";
import { ZGON_SOCIAL } from "@/lib/zgon-social";

const TWEETS = [
  {
    u: "solwhale.eth", h: "@solwhale", t: "the ZGON branding is unreal. this is what a movement looks like before it goes parabolic. early.",
    likes: 4821, rt: 1284, reply: 392,
  },
  {
    u: "memekng", h: "@memekng", t: "TOO FAST. TOO ZGON. that's it. that's the tweet.",
    likes: 9134, rt: 3021, reply: 612,
  },
  {
    u: "0xfast", h: "@0xfast", t: "i don't usually shill but ZGON is different. raid army forming. art is cinematic. i'm in.",
    likes: 2740, rt: 891, reply: 244,
  },
  {
    u: "neonape", h: "@neonape", t: "screenshot this. you'll want to remember you saw ZGON in phase 01.",
    likes: 6210, rt: 2104, reply: 488,
  },
];

function TweetCard({ t, idx }: { t: typeof TWEETS[number]; idx: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: idx % 2 === 0 ? -1.5 : 1.5 }}
      whileInView={{ opacity: 1, y: 0, rotate: idx % 2 === 0 ? -1 : 1 }}
      whileHover={{ y: -6, rotate: 0, scale: 1.02 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: idx * 0.1, duration: 0.6 }}
      className="cut-corners glass p-6 relative overflow-hidden"
    >
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--zgon-lime)] to-[var(--zgon-purple)] shrink-0" />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <span className="font-display text-sm text-[var(--zgon-text)]">{t.u}</span>
            <svg className="w-3.5 h-3.5 text-[var(--zgon-lime)]" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>
          </div>
          <div className="font-mono text-[11px] text-[var(--zgon-muted)]">{t.h} · 2h</div>
        </div>
        <svg className="w-5 h-5 text-[var(--zgon-text)]" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2H21l-6.52 7.45L22 22h-6.797l-5.314-6.94L3.8 22H1l7-8L1 2h6.96l4.79 6.34L18.244 2zm-2.382 18.21h1.86L8.21 3.69H6.21l9.652 16.52z"/></svg>
      </div>
      <p className="mt-4 text-[var(--zgon-text)] text-sm leading-relaxed">{t.t}</p>
      <div className="mt-5 flex items-center gap-6 text-xs font-mono text-[var(--zgon-muted)]">
        <span className="flex items-center gap-1.5"><svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12a9 9 0 1 1-3.5-7.1L21 4v6h-6"/></svg>{t.rt.toLocaleString()}</span>
        <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 }} className="flex items-center gap-1.5 text-[var(--zgon-lime)]">
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.5-7 10-7 10z"/></svg>
          {t.likes.toLocaleString()}
        </motion.span>
        <span className="flex items-center gap-1.5"><svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a4 4 0 0 1-4 4H7l-4 4V5a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/></svg>{t.reply}</span>
      </div>
    </motion.div>
  );
}

export function TwitterShowcase() {
  return (
    <section id="twitter" className="relative py-32 md:py-44 px-6 overflow-hidden bg-black">
      <div className="absolute inset-0 zgon-grid-bg [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--zgon-lime), transparent 60%)" }} />

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <SectionLabel index="06" label="Crypto Twitter" />
          <h2 className="font-display font-black text-[12vw] md:text-[7vw] leading-[0.85] tracking-tighter">
            BUILT FOR<br />
            <span className="text-[var(--zgon-lime)] text-glow-lime-strong">CRYPTO TWITTER.</span>
          </h2>
          <p className="mt-8 text-[var(--zgon-muted)] max-w-xl mx-auto">
            The timeline is talking. Engagement is climbing. The signal is impossible to ignore.
          </p>
        </div>

        {/* engagement counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {[
            { v: "12.4K", l: "Followers" },
            { v: "3.2M", l: "Impressions / wk" },
            { v: "94%", l: "Bullish sentiment" },
            { v: "▲ 218%", l: "Growth 7d" },
          ].map((s) => (
            <div key={s.l} className="cut-corners glass p-5 text-center">
              <div className="font-display text-2xl md:text-3xl text-[var(--zgon-lime)] text-glow-lime">{s.v}</div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-[var(--zgon-muted)]">{s.l}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {TWEETS.map((t, i) => (
            <TweetCard key={i} t={t} idx={i} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href={ZGON_SOCIAL.twitter} target="_blank" rel="noreferrer" className="btn-zgon">
            Follow {ZGON_SOCIAL.twitterHandle} →
          </a>
        </div>
      </div>
    </section>
  );
}