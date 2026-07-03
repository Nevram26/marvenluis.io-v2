import React from "react";
import { motion } from "framer-motion";
import BentoGrid from "./BentoGrid";
import Github from "./Github";
import { fadeInUp, staggerContainer } from "../../utils/animations";

function About() {
  return (
    <section id="about" className="relative section">
      <div className="section-padding container-max">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-heading-2 text-center mb-4">
            Know Who <span className="text-emerald">I AM</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-center text-foreground/70 max-w-2xl mx-auto"
          >
            I&apos;m a full-stack developer passionate about building scalable solutions that impact real users.
          </motion.p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div className="mb-20">
          <BentoGrid />
        </motion.div>

        {/* GitHub Calendar Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20"
        >
          <h2 className="text-heading-2 text-center mb-12 text-foreground">
            Contribution <span className="text-emerald">Activity</span>
          </h2>
          <Github />
        </motion.div>
      </div>
    </section>
  );
}

export default About;
