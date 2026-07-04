import React from "react";
import GitHubCalendar from "react-github-calendar";
import { motion } from "framer-motion";

function Github() {
  const isSmallScreen = typeof window !== "undefined" && window.innerWidth < 640;
  const blockSize = isSmallScreen ? 12 : 15;
  const blockMargin = isSmallScreen ? 3 : 5;
  const fontSize = isSmallScreen ? 12 : 16;

  return (
    <motion.div
      className="flex flex-col items-center gap-6 py-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <h3 className="text-2xl font-bold text-foreground">
        Days I <span className="text-emerald">Code</span>
      </h3>
      <div className="rounded-2xl border border-emerald/30 bg-dark-900/50 backdrop-blur-md p-4 sm:p-6 overflow-x-auto">
        <GitHubCalendar
          username="Nevram26"
          blockSize={blockSize}
          blockMargin={blockMargin}
          color="#10b981"
          fontSize={fontSize}
        />
      </div>
    </motion.div>
  );
}

export default Github;
