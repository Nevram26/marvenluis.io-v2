import React from "react";
import { motion } from "framer-motion";
import {
  FaJava,
  FaJsSquare,
  FaPython,
  FaPhp,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaDocker,
  FaGit,
  FaLinux,
  FaWindows,
  FaCode,
  FaStar,
  FaTrophy,
  FaUser,
} from "react-icons/fa";
import {
  SiTypescript,
  SiDjango,
  SiSupabase,
  SiPostgresql,
  SiGo,
  SiGithub,
  SiIntellijidea,
  SiTrello,
  SiVercel,
  SiObsidian,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { staggerContainer, fadeInUp, scaleIn } from "../../utils/animations";

const BentoGrid = () => {
  const techStack = [
    { name: "Java", icon: FaJava },
    { name: "JavaScript", icon: FaJsSquare },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Python", icon: FaPython },
    { name: "Go", icon: SiGo },
    { name: "PHP", icon: FaPhp },
  ];

  const toolStack = [
    { name: "React", icon: FaReact },
    { name: "React Native", icon: FaReact },
    { name: "Node.js", icon: FaNodeJs },
    { name: "Django", icon: SiDjango },
    { name: "Supabase", icon: SiSupabase },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "Docker", icon: FaDocker },
    { name: "Git", icon: FaGit },
    { name: "GitHub", icon: SiGithub },
    { name: "VSCode", icon: VscVscode },
    { name: "IntelliJ", icon: SiIntellijidea },
    { name: "Windows", icon: FaWindows },
    { name: "Trello", icon: SiTrello },
    { name: "Vercel", icon: SiVercel },
    { name: "Obsidian", icon: SiObsidian },
  ];

  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6"
    >
      {/* Bio Tile */}
      <motion.div
        variants={scaleIn}
        className="group sm:col-span-2 lg:col-span-1 rounded-2xl border border-emerald/30 bg-dark-900 bg-opacity-50 backdrop-blur-md p-6 md:p-8 hover:border-emerald hover:shadow-emerald-glow transition-all duration-500 hover:-translate-y-1"
      >
        <div className="text-4xl mb-4 text-emerald"><FaUser /></div>
        <h3 className="text-xl font-bold text-foreground mb-3">About Me</h3>
        <p className="text-foreground/80 text-sm leading-relaxed">
          Full-stack developer building real-world solutions. Currently working on government-funded agtech platform and university CMS systems.
        </p>
      </motion.div>

      {/* Achievements Tile */}
      <motion.div
        variants={scaleIn}
        className="group sm:col-span-2 lg:col-span-1 rounded-2xl border border-emerald/30 bg-dark-900 bg-opacity-50 backdrop-blur-md p-6 md:p-8 hover:border-emerald hover:shadow-emerald-glow transition-all duration-500 hover:-translate-y-1"
      >
        <div className="text-4xl mb-4 text-emerald"><FaTrophy /></div>
        <h3 className="text-xl font-bold text-foreground mb-3">Achievements</h3>
        <ul className="text-foreground/80 text-sm space-y-2">
          <li>• 3rd Place - 2025 Meralco IDOL Hackathon</li>
          <li>• Dean&apos;s Lister (7/8 semesters)</li>
        </ul>
      </motion.div>

      {/* Specializations Tile */}
      <motion.div
        variants={scaleIn}
        className="group sm:col-span-2 lg:col-span-1 rounded-2xl border border-emerald/30 bg-dark-900 bg-opacity-50 backdrop-blur-md p-6 md:p-8 hover:border-emerald hover:shadow-emerald-glow transition-all duration-500 hover:-translate-y-1"
      >
        <div className="text-4xl mb-4 text-emerald"><FaCode /></div>
        <h3 className="text-xl font-bold text-foreground mb-3">Specializations</h3>
        <ul className="text-foreground/80 text-sm space-y-2">
          <li>• Web Development</li>
          <li>• Backend Development</li>
          <li>• Mobile Development</li>
        </ul>
      </motion.div>

      {/* Tech Stack Tile */}
      <motion.div
        variants={scaleIn}
        className="group sm:col-span-2 lg:col-span-2 rounded-2xl border border-emerald/30 bg-dark-900 bg-opacity-50 backdrop-blur-md p-6 md:p-8 hover:border-emerald hover:shadow-emerald-glow transition-all duration-500 hover:-translate-y-1"
      >
        <h3 className="text-xl font-bold text-foreground mb-4">Languages</h3>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3">
          {techStack.map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                variants={fadeInUp}
                className="flex flex-col items-center justify-center p-3 rounded-lg border border-emerald/20 hover:border-emerald hover:bg-emerald/10 transition-all duration-300 group/item"
                whileHover={{ scale: 1.1 }}
              >
                <Icon className="text-2xl text-emerald mb-2" />
                <span className="text-xs text-foreground/70 text-center">
                  {tech.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Tools & Frameworks Tile */}
      <motion.div
        variants={scaleIn}
        className="group sm:col-span-2 lg:col-span-1 rounded-2xl border border-emerald/30 bg-dark-900 bg-opacity-50 backdrop-blur-md p-6 md:p-8 hover:border-emerald hover:shadow-emerald-glow transition-all duration-500 hover:-translate-y-1"
      >
        <h3 className="text-xl font-bold text-foreground mb-4">Tools & Frameworks</h3>
        <div className="grid grid-cols-4 gap-2">
          {toolStack.map((tool) => {
            const Icon = tool.icon;
            return (
              <motion.div
                key={tool.name}
                className="flex justify-center"
                whileHover={{ scale: 1.15 }}
                title={tool.name}
              >
                <Icon className="text-2xl text-emerald" />
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Hobbies & Interests Tile */}
      <motion.div
        variants={scaleIn}
        className="group sm:col-span-2 lg:col-span-3 rounded-2xl border border-emerald/30 bg-dark-900 bg-opacity-50 backdrop-blur-md p-6 md:p-8 hover:border-emerald hover:shadow-emerald-glow transition-all duration-500 hover:-translate-y-1"
      >
        <div className="text-4xl mb-4 text-emerald"><FaStar /></div>
        <h3 className="text-xl font-bold text-foreground mb-3">When I&apos;m Not Coding</h3>
        <p className="text-foreground/80 text-sm leading-relaxed mb-3">
          I enjoy exploring new technologies, contributing to open-source projects, and staying updated with industry trends. I&apos;m passionate about creating clean, maintainable code and mentoring other developers.
        </p>
        <div className="flex flex-wrap gap-2">
          {["Reading", "Gaming", "Gym", "Travel"].map(
            (hobby) => (
              <span
                key={hobby}
                className="px-3 py-1 rounded-full bg-emerald/10 border border-emerald/30 text-emerald text-xs font-medium"
              >
                {hobby}
              </span>
            )
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BentoGrid;
