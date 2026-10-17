import React from "react";
import { motion } from "framer-motion";
import { ArrowDownTrayIcon, ArrowRightIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import avatar from "../../assets/images/avatar.svg";
import resumePdf from "../../assets/documents/Marven_Luis_Resume.pdf";

const proofPoints = [
  "Shipping production features weekly",
  "Full-stack and mobile experience",
  "Open to software engineering roles",
];

const reveal = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

function Home() {
  return (
    <section id="home" className="hero-section section border-b border-border">
      <div className="hero-orb hero-orb-one" aria-hidden="true" />
      <div className="hero-orb hero-orb-two" aria-hidden="true" />
      <div className="container-max section-padding relative grid gap-12 pt-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:pt-24">
        <motion.div initial="hidden" animate="visible" transition={{ staggerChildren: 0.12 }}>
          <motion.div variants={reveal} transition={{ duration: 0.5 }} className="eyebrow mb-6">
            <span className="status-dot" /> Available for opportunities
          </motion.div>
          <motion.h1 variants={reveal} transition={{ duration: 0.6 }} className="max-w-4xl text-4xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            I build reliable software that turns complex workflows into <span className="text-primary">useful products.</span>
          </motion.h1>
          <motion.p variants={reveal} transition={{ duration: 0.6 }} className="mt-7 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
            I&apos;m Marven, a full-stack developer working across web, backend, and mobile. I currently build production tools for agricultural communities and university teams.
          </motion.p>
          <motion.div variants={reveal} transition={{ duration: 0.6 }} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#experience" className="button button-primary">View my experience <ArrowRightIcon className="size-4" /></a>
            <a href={resumePdf} download className="button button-outline"><ArrowDownTrayIcon className="size-4" /> Download résumé</a>
          </motion.div>
          <motion.div variants={reveal} transition={{ duration: 0.6 }} className="mt-8 flex items-center gap-3">
            <a href="https://www.linkedin.com/in/marven-luis/" target="_blank" rel="noreferrer" className="icon-button" aria-label="Marven Luis on LinkedIn"><FaLinkedinIn /></a>
            <a href="https://github.com/Nevram26" target="_blank" rel="noreferrer" className="icon-button" aria-label="Marven Luis on GitHub"><FaGithub /></a>
          </motion.div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, x: 36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.15 }}
          className="profile-card card overflow-hidden"
          aria-label="Professional summary"
        >
          <div className="profile-visual">
            <motion.img
              src={avatar}
              alt="Illustrated portrait of Marven Luis working at a laptop"
              className="relative z-10 w-full"
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <div className="p-6 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">At a glance</p>
            <ul className="mt-5 flex flex-col gap-3">
              {proofPoints.map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-6 text-foreground">
                  <CheckCircleIcon className="mt-0.5 size-5 shrink-0 text-primary" />
                  {point}
                </li>
              ))}
            </ul>
            <p className="mt-5 border-t border-border pt-4 text-sm text-muted">Based in the Philippines · Open to remote and hybrid work</p>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}

export default Home;
