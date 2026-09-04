import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import type { CSSProperties, ReactNode } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  max?: number;
}

export default function TiltCard({
  children,
  className,
  style,
  max = 6.5,
}: TiltCardProps) {
  const reduced = useReducedMotion();
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const sx = useSpring(px, { stiffness: 210, damping: 20 });
  const sy = useSpring(py, { stiffness: 210, damping: 20 });
  const rotateX = useTransform(sy, [0, 1], [max, -max]);
  const rotateY = useTransform(sx, [0, 1], [-max, max]);

  if (reduced) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      style={{ ...style, rotateX, rotateY, transformPerspective: 1100 }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        px.set((e.clientX - rect.left) / rect.width);
        py.set((e.clientY - rect.top) / rect.height);
      }}
      onMouseLeave={() => {
        px.set(0.5);
        py.set(0.5);
      }}
    >
      {children}
    </motion.div>
  );
}
