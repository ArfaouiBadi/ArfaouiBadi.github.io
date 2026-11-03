import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import type { AnchorHTMLAttributes, ReactNode } from "react";

/* Leans toward the cursor on fine pointers; a plain link on touch and reduced motion. */
export default function MagneticLink({
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { children: ReactNode }) {
  const reduced = useReducedMotion();
  const x = useSpring(useMotionValue(0), { stiffness: 100, damping: 20 });
  const y = useSpring(useMotionValue(0), { stiffness: 100, damping: 20 });

  if (reduced) return <a {...props}>{children}</a>;

  return (
    <motion.a
      {...(props as object)}
      style={{ x, y }}
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse") return;
        const r = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - r.left - r.width / 2) * 0.25);
        y.set((e.clientY - r.top - r.height / 2) * 0.35);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.a>
  );
}
