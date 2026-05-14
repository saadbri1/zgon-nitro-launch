import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader() {
  const [show, setShow] = useState(true);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    let p = 0;
    const id = setInterval(() => {
      p += Math.random() * 18 + 4;
      if (p >= 100) {
        p = 100;
        clearInterval(id);
        setTimeout(() => setShow(false), 350);
      }
      setPct(Math.min(100, p));
    }, 90);
    return () => clearInterval(id);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="font-display font-black text-6xl md:text-8xl text-[var(--zgon-lime)] text-glow-lime-strong"
          >
            ZGON
          </motion.div>
          <div className="mt-10 w-64 h-px bg-white/10 relative overflow-hidden">
            <motion.div
              animate={{ width: `${pct}%` }}
              transition={{ ease: "linear" }}
              className="absolute inset-y-0 left-0 bg-[var(--zgon-lime)] glow-lime-sm"
            />
          </div>
          <div className="mt-4 font-mono text-[10px] uppercase tracking-[0.4em] text-[var(--zgon-muted)]">
            Initializing · {Math.floor(pct)}%
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
