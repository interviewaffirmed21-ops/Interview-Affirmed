import { useEffect, useRef, useState } from "react";
import { Play, X, Youtube } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const CHANNEL_URL = "https://www.youtube.com/@Capitalinterview/videos";

const YouTubeFloat = () => {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  return (
    <div ref={wrapRef} className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.96 }}
            transition={{ duration: 0.15 }}
            className="relative w-80 rounded-2xl border border-border bg-card p-6 shadow-lg"
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
            >
              <X size={20} />
            </button>
            <div className="flex items-center gap-3">
              <Youtube className="text-[#FF0000]" size={32} />
              <p className="font-semibold text-lg text-foreground">Capital Interview</p>
            </div>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Watch real coaching sessions in action
            </p>
            <a
              href={CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center rounded-lg bg-[#FF0000] px-4 py-3 text-base font-semibold text-white transition-opacity hover:opacity-90"
            >
              Visit Channel →
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Watch Us in Action"
        className="inline-flex items-center gap-2.5 rounded-full bg-[#FF0000] px-5 py-3.5 text-base font-semibold text-white shadow-lg transition-opacity hover:opacity-90"
      >
        <Play size={19} fill="currentColor" />
        Watch Us in Action
      </button>
    </div>
  );
};

export default YouTubeFloat;
