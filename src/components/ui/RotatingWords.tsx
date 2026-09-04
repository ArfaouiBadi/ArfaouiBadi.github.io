import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

interface RotatingWordsProps {
  words: string[];
  interval?: number;
}

export default function RotatingWords({
  words,
  interval = 2200,
}: RotatingWordsProps) {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => window.clearInterval(id);
  }, [words.length, interval, reduced]);

  return (
    <span className="relative inline-grid align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: "0.55em", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-0.55em", opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-gradient col-start-1 row-start-1 whitespace-nowrap font-semibold"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
