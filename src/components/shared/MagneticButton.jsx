import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function MagneticButton({
  children,
  onClick,
  className = "",
  disabled = false,
  variant = "primary",
}) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const variants = {
    primary:
      "bg-emerald hover:bg-emerald-dark text-dark-950 font-semibold rounded-lg px-6 py-3 transition-all duration-300",
    secondary:
      "border-2 border-emerald text-emerald hover:bg-emerald hover:text-dark-950 font-semibold rounded-lg px-6 py-3 transition-all duration-300",
    ghost:
      "text-emerald hover:text-emerald-light font-medium px-4 py-2 transition-colors duration-300",
  };

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const { left, top, width, height } =
      ref.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) * 0.2;
    const y = (e.clientY - top - height / 2) * 0.2;

    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      onClick={onClick}
      disabled={disabled}
      className={`${variants[variant]} ${
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      } ${className}`}
    >
      {children}
    </motion.button>
  );
}
