import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const withAnimation = (WrappedComponent: React.FC) => {
  return (props: any) => {
    const compRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (compRef.current) {
        gsap.fromTo(
          compRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
        );
      }
    }, []);

    return (
      <div ref={compRef}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default withAnimation;
