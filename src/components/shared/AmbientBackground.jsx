import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function AmbientBackground() {
  const mousePos = useRef({ x: 0, y: 0 });
  const [spotlightPos, setSpotlightPos] = React.useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      setSpotlightPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Gradient background */}
      <div className="fixed inset-0 z-0">
        {/* Base dark background */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950" />

        {/* Animated spotlight effect */}
        <motion.div
          className="absolute w-96 h-96 rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(16, 185, 129, 0.3), transparent)",
            x: spotlightPos.x - 192,
            y: spotlightPos.y - 192,
            pointerEvents: "none",
          }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
        />

        {/* Top-left gradient accent */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-emerald rounded-full mix-blend-screen opacity-5 blur-3xl" />

        {/* Bottom-right gradient accent */}
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-emerald rounded-full mix-blend-screen opacity-5 blur-3xl" />

        {/* Subtle grid pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Content overlay protection (ensures content is readable) */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-b from-background/10 via-transparent to-background/20" />
    </>
  );
}
