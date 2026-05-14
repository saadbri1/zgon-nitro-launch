import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { SectionLabel } from "./SectionLabel";
import { ZGON_SOCIAL } from "@/lib/zgon-social";

const socials = [
  { name: "Twitter / X",    handle: ZGON_SOCIAL.twitterHandle,            count: 12847, color: "var(--zgon-lime)",   href: ZGON_SOCIAL.twitter,         cta: "Follow on X" },
  { name: "Telegram Channel", handle: ZGON_SOCIAL.telegramChannelHandle,  count: 8421,  color: "var(--zgon-blue)",   href: ZGON_SOCIAL.telegramChannel, cta: "Join Channel" },
  { name: "Telegram Chat",  handle: ZGON_SOCIAL.telegramChatHandle,        count: 5392,  color: "var(--zgon-purple)", href: ZGON_SOCIAL.telegramChat,    cta: "Enter War Room" },
];

const feed = [
  { u: "0xfast", t: "just aped in. wagmi", d: "2s" },
  { u: "zgonchad", t: "TOO FAST. TOO ZGON.", d: "11s" },
  { u: "solwhale", t: "the branding is unreal", d: "34s" },
  { u: "memekng", t: "phase 02 cant come soon enough", d: "1m" },
  { u: "earlyone", t: "i was here before 10k", d: "2m" },
  { u: "neonape", t: "this is going to print", d: "4m" },
];

function Counter({ to }: { to: number }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const dur = 1800;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.floor(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to]);
  return <span>{n.toLocaleString()}</span>;
}

export function Community() {
  return (
    <section id="community" className="relative py-32 md:py-44 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel index="05" label="The Network" />
          <h2 className="font-display font-black text-5xl md:text-7xl leading-[0.95] tracking-tight">
            The Movement<br />
            <span className="text-[var(--zgon-lime)] text-glow-lime">Is Starting.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          {socials.map((s, i) => (
            <motion.a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="lg:col-span-4 cut-corners glass p-7 hover:border-[var(--zgon-lime)]/40 transition-all group relative overflow-hidden"
            >
              <div className="absolute -right-20 -bottom-20 w-60 h-60 rounded-full opacity-10 group-hover:opacity-30 blur-3xl transition-opacity"
                style={{ background: s.color }} />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--zgon-muted)]">
                    {s.name}
                  </div>
                  <span className="w-2 h-2 rounded-full bg-[var(--zgon-lime)] animate-pulse-glow" />
                </div>
                <div className="mt-6 font-display text-5xl" style={{ color: s.color, textShadow: `0 0 24px ${s.color}` }}>
                  <Counter to={s.count} />
                </div>
                <div className="mt-1 text-xs font-mono text-[var(--zgon-muted)]">members live</div>
                <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4">
                  <span className="font-mono text-xs text-[var(--zgon-text)] truncate pr-2">{s.handle}</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--zgon-lime)] group-hover:translate-x-1 transition-transform shrink-0">{s.cta} →</span>
                </div>
              </div>
            </motion.a>
          ))}

          {/* live feed */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-12 cut-corners glass p-6"
          >
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--zgon-lime)] animate-pulse-glow" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--zgon-muted)]">
                  Live activity feed
                </span>
              </div>
              <span className="font-mono text-[10px] text-[var(--zgon-lime)]">{feed.length * 47} msgs / min</span>
            </div>
            <div className="grid md:grid-cols-3 gap-3 font-mono text-xs">
              {feed.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-3 p-3 bg-black/30 border border-white/5"
                >
                  <span className="text-[var(--zgon-lime)] shrink-0">{f.u}</span>
                  <span className="text-[var(--zgon-text)] flex-1 truncate">{f.t}</span>
                  <span className="text-[var(--zgon-muted)] shrink-0">{f.d}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
