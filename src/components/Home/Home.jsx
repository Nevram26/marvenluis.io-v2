import React from "react";
import { motion } from "framer-motion";
import avatar from "../../assets/images/avatar.svg";
import resumePdf from "../../assets/documents/Marven_Luis_Resume.pdf";
import Home2 from "./Home2";
import Type from "./Type";
import { staggerContainer, fadeInUp, slideInRight } from "../../utils/animations";

function Home() {
  return (
    <section id="home" className="relative min-h-screen">
      {/* Hero Content */}
      <div className="relative z-10 section-padding section container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col justify-center"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-heading-1 mb-4 text-foreground"
            >
              Hi There!
            </motion.h1>

            <motion.h1 variants={fadeInUp} className="text-heading-1 mb-8">
              I'm{" "}
              <span className="text-emerald font-bold">
                MARVEN JOFFRE LUIS
              </span>
            </motion.h1>

            {/* Typewriter Effect */}
            <motion.div
              variants={fadeInUp}
              className="text-2xl md:text-3xl font-bold text-emerald mb-12 h-16 flex items-center"
            >
              <Type />
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-lg bg-emerald text-dark-950 font-semibold hover:bg-emerald-dark transition-all duration-300 text-center"
              >
                View My Work
              </motion.a>
              <motion.a
                href={resumePdf}
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-lg border-2 border-emerald text-emerald font-semibold hover:bg-emerald hover:text-dark-950 transition-all duration-300 text-center"
              >
                Download CV
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            variants={slideInRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="flex justify-center lg:justify-end"
          >
            <motion.img
              src={avatar}
              alt="Marven Luis"
              className="w-full max-w-sm h-auto"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>

        {/* Floating Social Icons */}
        <motion.div
          variants={fadeInUp}
          className="mt-16 flex justify-center gap-6"
        >
          <motion.a
            href="https://github.com/Nevram26"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -5 }}
            className="w-12 h-12 rounded-full bg-dark-900 border border-emerald/30 flex items-center justify-center text-emerald hover:bg-emerald hover:text-dark-950 transition-all duration-300"
            aria-label="GitHub"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.544 2.914 1.19.092-.926.35-1.546.636-1.903-2.22-.253-4.555-1.112-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.817c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.137 18.195 20 14.44 20 10.017 20 4.484 15.522 0 10 0z"
                clipRule="evenodd"
              />
            </svg>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/marven-luis/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -5 }}
            className="w-12 h-12 rounded-full bg-dark-900 border border-emerald/30 flex items-center justify-center text-emerald hover:bg-emerald hover:text-dark-950 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.292-1.194-2.292-1.195 0-1.38.93-1.38 1.891v4.579H8.265V9.359h2.632v.937h.037c.367-.696 1.244-1.435 2.557-1.435 2.729 0 3.232 1.796 3.232 4.183v4.694zM5.005 8.887a1.56 1.56 0 11-.001-3.12 1.56 1.56 0 01.001 3.12zm1.338 9.451H3.667V9.359h2.676v8.979zM17.668 0H.332C.147 0 0 .15 0 .333v19.334C0 19.85.147 20 .332 20h17.336c.185 0 .332-.15.332-.333V.333C18 .15 17.853 0 17.668 0z" />
            </svg>
          </motion.a>

          <motion.a
            href="https://www.facebook.com/marven.luis.2024/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -5 }}
            className="w-12 h-12 rounded-full bg-dark-900 border border-emerald/30 flex items-center justify-center text-emerald hover:bg-emerald hover:text-dark-950 transition-all duration-300"
            aria-label="Facebook"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 0C4.477 0 0 4.484 0 10.017c0 4.925 3.474 9.026 8 9.823v-6.977h-2.6V10h2.6V7.413c0-2.622 1.924-4.084 3.994-4.084 1.159 0 2.357.206 2.357.206v2.633h-1.328c-1.31 0-1.716.817-1.716 1.657V10h2.908l-.464 2.863h-2.444v6.977C16.526 19.043 20 14.942 20 10.017 20 4.484 15.522 0 10 0z" />
            </svg>
          </motion.a>
        </motion.div>
      </div>

      {/* Showcase Carousel Section */}
      <div className="relative z-10 section-padding section container-max">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-heading-2 text-center mb-12 text-foreground">
            Highlights &amp; <span className="text-emerald">Achievements</span>
          </h2>
          <Home2 />
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
