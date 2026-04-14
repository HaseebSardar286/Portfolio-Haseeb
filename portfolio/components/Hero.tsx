"use client";
import React from "react";
import { motion } from "framer-motion";
import { Spotlight } from "./ui/spotlight";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#000319] pt-20"
    >
      {/* Spotlights */}
      <Spotlight
        className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
        fill="white"
      />
      <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
      <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />

      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139,92,246,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139,92,246,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm text-white/70 font-medium">
            Open to new opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
        >
          <span className="text-white">Muhammad </span>
          <span className="gradient-text">Haseeb</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-6"
        >
          {[
            "Associate Software Engineer",
            "Full Stack Developer",
            "ML Enthusiast",
          ].map((tag) => (
            <span key={tag} className="tag-pill text-sm">
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-white/60 text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Results-driven Software Engineer with a strong foundation in web
          architecture, OOP, and modern JavaScript frameworks. Shipping scalable
          full-stack apps and ML-powered solutions across diverse domains.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <a href="/projects" className="btn-primary text-white no-underline">
            View Projects
          </a>
          <a href="/contact" className="btn-outline no-underline">
            Contact Me
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto"
        >
          {[
            { value: "1+", label: "Year Experience" },
            { value: "7+", label: "REST APIs Built" },
            { value: "85-92%", label: "ML Accuracy" },
            { value: "5+", label: "Client Projects" },
          ].map((stat) => (
            <div key={stat.label} className="stat-card">
              <div className="text-2xl font-bold purple-gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-white/50">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="text-white/30 text-xs tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-5 h-8 border border-white/20 rounded-full flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 bg-purple-400 rounded-full animate-bounce" />
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
