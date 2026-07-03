import React from "react";
import { motion } from "framer-motion";
import ShowcaseCarousel from "./ShowcaseCarousel";
import { fadeInUp, staggerContainer } from "../../utils/animations";

function Home2() {
  return (
    <div className="py-16 lg:py-20">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
      >
        <ShowcaseCarousel />
      </motion.div>
    </div>
  );
}

export default Home2;
