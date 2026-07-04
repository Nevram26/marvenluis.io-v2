import React from "react";
import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";
import { hoverScale } from "../../utils/animations";

function ProjectCards(props) {
  return (
    <motion.div
      variants={hoverScale}
      whileHover="whileHover"
      whileTap="whileTap"
      className="group relative h-full overflow-hidden rounded-2xl border border-emerald/30 bg-dark-900 bg-opacity-50 backdrop-blur-md hover:border-emerald hover:shadow-emerald-glow transition-all duration-500"
    >
      {/* Background decoration on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-emerald rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col p-6 md:p-8">
        {/* Image or Logo */}
        {props.imgPath && (
          <motion.img
            src={props.imgPath}
            alt="project"
            className="w-full h-40 sm:h-48 object-cover rounded-lg mb-6 group-hover:brightness-110 transition-all duration-300"
          />
        )}
        {props.logoPath && !props.imgPath && (
          <div className="w-full h-32 flex items-center justify-center mb-6 rounded-lg bg-dark-800/50 border border-emerald/20">
            <img src={props.logoPath} alt="logo" className="max-w-full max-h-full" />
          </div>
        )}

        {/* Title */}
        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-emerald transition-colors duration-300">
          {props.title}
        </h3>

        {/* Description */}
        <p className="text-foreground/80 text-sm leading-relaxed mb-6 flex-grow">
          {props.description}
        </p>

        {/* GitHub Link */}
        {props.ghLink && (
          <motion.a
            href={props.ghLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald text-dark-950 font-semibold hover:bg-emerald-dark transition-all duration-300 w-fit"
          >
            <BsGithub className="w-4 h-4" />
            GitHub
          </motion.a>
        )}
      </div>
    </motion.div>
  );
}

export default ProjectCards;
