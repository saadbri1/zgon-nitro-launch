import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { SectionLabel } from "./SectionLabel";
import { ZGON_SOCIAL } from "@/lib/zgon-social";

const SEED_CHAT = [
  { u: "commander", t: "RAID PROTOCOL ACTIVE. target tweet locked.", c: "lime" },
  { u: "0xfast",    t: "deployed. on it.", c: "text" },
  { u: "neonape",   t: "screenshots looking insane today", c: "text" },
  { u: "earlyone",  t: "the branding is unfair", c: "text" },
  { u: "memekng",   t: "TOO FAST. TOO ZGON.", c: "lime" },
  { u: "solwhale",  t: "added another bag. conviction MAX.", c: "blue" },
  { u: "zgonchad",  t: "phase 02 is going to be cinema", c: "text" },
  { u: "ghost_",    t: "every chart i've seen says early", c: "text" },
  { u: "vyper",     t: "raid count: 412 / 500. push push push", c: "lime" },
];

export function TelegramWarRoom() {
  const [msgs, setMsgs] = useState(SEED_CHAT.slice(0, 5));
  const [online, setOnline] = useState(2841);

  useEffect(() => {
    const id = setInterval(() => {
      setMsgs((prev) => {
        const next = SEED_CHAT[(prev.length + Math.floor(Math.random() * SEED_CHAT.length)) % SEED_CHAT.length];
        const arr = [...prev, { ...next, u: next.u + (Math.random() > 0.6 ? "_" + Math.floor(Math.random() * 99) : "") }];
        return arr.slice(-7);
      });
      setOnline((n) => n + Math.floor(Math.random() * 6) - 1);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="warroom" className="relative py-32 md:py-44 px-6 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-grid-fine opacity-50 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      <div className="absolute top-1/2 -left-40 w-[600px] h-[600px] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--zgon-blue), transparent 60%)" }} />
      <div className="absolute bottom-0 -right-40 w-[600px] h-[600px] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--zgon-lime), transparent 60%)" }} />

      <div className="max-w-7xl mx-auto relative grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-5">
          <SectionLabel index="07" label="Command Center" />
          <h2 className="font-display font-black text-5xl md:text-7xl leading-[0.95] tracking-tight">
            THE WAR ROOM<br />
            <span className="text-[var(--zgon-lime)] text-glow-lime">IS OPEN.</span>
          </h2>
          <p className="mt-6 text-[var(--zgon-muted)] max-w-md">
            The early community is forming now. Alpha drops, raid coordination, and pure ZGON energy — live, 24/7.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-3">
            {[
              { v: online.toLocaleString(), l: "Online now" },
              { v: "8.4K", l: "Members" },
              { v: "47/min", l: "Messages" },
            ].map((s) => (
              <div key={s.l} className="cut-corners glass p-3 text-center">
                <div className="font-display text-lg text-[var(--zgon-lime)]">{s.v}</div>
                <div className="font-mono text-[9px] uppercase tracking-widest text-[var(--zgon-muted)] mt-1">{s.l}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href={ZGON_SOCIAL.telegramChannel} target="_blank" rel="noreferrer" className="btn-zgon">
              Telegram Channel →
            </a>
            <a href={ZGON_SOCIAL.telegramChat} target="_blank" rel="noreferrer" className="btn-ghost">
              Enter War Room
            </a>
          </div>

          <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.4em] text-[var(--zgon-muted)] caret">
            Most people arrive too late
          </p>
        </div>

        {/* terminal */}
        <div className="lg:col-span-7">
          <div className="cut-corners glass relative overflow-hidden glow-blue">
            {/* header */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/5 bg-black/40">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--zgon-lime)]" />
                <span className="ml-3 font-mono text-[10px] uppercase tracking-widest text-[var(--zgon-muted)]">
                  zgon ~ /warroom
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--zgon-lime)] animate-pulse-glow" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--zgon-lime)]">
                  LIVE · {online.toLocaleString()} online
                </span>
              </div>
            </div>

            {/* chat */}
            <div className="relative h-[420px] overflow-hidden mask-fade-y">
              <div className="absolute inset-0 p-6 flex flex-col-reverse gap-3 font-mono text-xs">
                {[...msgs].reverse().map((m, i) => (
                  <motion.div
                    key={`${m.u}-${i}-${m.t}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-[var(--zgon-muted)] shrink-0">{String(20 - i).padStart(2, "0")}:00</span>
                    <span className={`shrink-0 ${m.c === "lime" ? "text-[var(--zgon-lime)]" : m.c === "blue" ? "text-[var(--zgon-blue)]" : "text-[var(--zgon-text)]"}`}>
                      &gt; {m.u}:
                    </span>
                    <span className="text-[var(--zgon-text)] flex-1">{m.t}</span>
                  </motion.div>
                ))}
              </div>

              {/* scanline */}
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-[var(--zgon-lime)]/5 to-transparent animate-scan" />
              </div>
            </div>

            {/* input bar */}
            <div className="border-t border-white/5 px-5 py-3 flex items-center gap-3 bg-black/40">
              <span className="text-[var(--zgon-lime)] font-mono text-xs">$</span>
              <span className="font-mono text-xs text-[var(--zgon-muted)] caret">join the movement</span>
              <a href={ZGON_SOCIAL.telegramChat} target="_blank" rel="noreferrer" className="ml-auto font-mono text-[10px] uppercase tracking-widest text-[var(--zgon-lime)] hover:text-white">
                connect →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}