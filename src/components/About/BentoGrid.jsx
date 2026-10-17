import React from "react";
import { motion } from "framer-motion";
import { AcademicCapIcon, CodeBracketIcon, UserGroupIcon } from "@heroicons/react/24/outline";

const languages = ["JavaScript", "TypeScript", "Java", "Python", "Go", "PHP"];
const platforms = ["React", "React Native", "Node.js", "Django", "PostgreSQL", "Supabase", "Docker", "Git"];

const strengths = [
  { icon: CodeBracketIcon, title: "End-to-end delivery", body: "From interface and API design to data models, testing, and deployment." },
  { icon: UserGroupIcon, title: "Team-minded", body: "Clear communication, thoughtful handoffs, and solutions that others can maintain." },
  { icon: AcademicCapIcon, title: "Always learning", body: "Dean’s Lister for 7 of 8 semesters and a 2025 Meralco IDOL Hackathon awardee." },
];

const cardMotion = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function BentoGrid() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ staggerChildren: 0.1 }}
      className="mt-12 grid gap-5 lg:grid-cols-3"
    >
      {strengths.map(({ icon: Icon, title, body }) => (
        <motion.article key={title} variants={cardMotion} transition={{ duration: 0.5 }} className="card p-6">
          <div className="icon-tile"><Icon className="size-5" /></div>
          <h3 className="mt-5 text-lg font-semibold text-foreground">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-muted">{body}</p>
        </motion.article>
      ))}
      <motion.article variants={cardMotion} transition={{ duration: 0.5 }} className="card p-6 lg:col-span-2">
        <p className="card-label">Core languages</p>
        <div className="mt-4 flex flex-wrap gap-2">{languages.map((item) => <span key={item} className="badge">{item}</span>)}</div>
      </motion.article>
      <motion.article variants={cardMotion} transition={{ duration: 0.5 }} className="card p-6">
        <p className="card-label">Frameworks &amp; tools</p>
        <div className="mt-4 flex flex-wrap gap-2">{platforms.map((item) => <span key={item} className="badge">{item}</span>)}</div>
      </motion.article>
    </motion.div>
  );
}

export default BentoGrid;
