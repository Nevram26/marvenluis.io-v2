import React from "react";
import { motion } from "framer-motion";

export default function BorderBeam({
  children,
  className = "",
  isHovering = true,
}) {
  return (
    <div className={`relative ${className}`}>
      {/* Border beam animation */}
      {isHovering && (
        <motion.div
          className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald/20 via-emerald to-emerald/20 p-px opacity-0 group-hover:opacity-100"
          animate={{
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="bg-background rounded-lg h-full" />
        </motion.div>
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
