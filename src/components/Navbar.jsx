import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../assets/images/logo.png";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navItems = [
  { label: "Home", href: "#home", icon: AiOutlineHome },
  { label: "About", href: "#about", icon: AiOutlineUser },
  { label: "Projects", href: "#projects", icon: AiOutlineFundProjectionScreen },
];

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    function scrollHandler() {
      // Check if scrolled past 20px
      setIsScrolled(window.scrollY >= 20);

      // Calculate scroll progress
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    }

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const sectionIds = ["home", "about", "projects"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection("#" + entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-dark-900/80 backdrop-blur-md border-b border-emerald/20 shadow-lg"
          : "bg-transparent"
      }`}
    >
      {/* Scroll progress bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-emerald to-emerald-light"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="section-padding container-max flex items-center justify-between h-20">
        {/* Logo */}
        <motion.a
          href="#home"
          className="flex items-center gap-2 z-10"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src={logo} alt="logo" className="h-10 w-auto" />
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.href;

            return (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className={`relative px-4 py-2 rounded-lg flex items-center gap-2 font-medium transition-all duration-300 ${
                  isActive
                    ? "text-dark-950 bg-emerald"
                    : "text-foreground hover:text-emerald"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-4 h-4" />
                {item.label}
              </motion.a>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-emerald hover:bg-emerald/10 rounded-lg transition-colors duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className={`md:hidden overflow-hidden bg-dark-900/95 backdrop-blur-md border-b border-emerald/20 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="section-padding container-max flex flex-col gap-2 py-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.href;

            return (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className={`px-4 py-3 rounded-lg flex items-center gap-3 font-medium transition-all duration-300 ${
                  isActive
                    ? "text-dark-950 bg-emerald"
                    : "text-foreground hover:bg-emerald/10"
                }`}
                whileHover={{ x: 5 }}
              >
                <Icon className="w-5 h-5" />
                {item.label}
              </motion.a>
            );
          })}
        </div>
      </motion.div>
    </nav>
  );
}

export default NavBar;
