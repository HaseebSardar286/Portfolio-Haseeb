"use client";
import React from "react";
import { motion } from "framer-motion";

const journey = [
  {
    year: "Apr 2025 – Present",
    title: "Associate Software Engineer",
    org: "ConcaveTech, Lahore",
    description:
      "Engineered and maintained 4+ scalable web modules using Angular and Java following MVC architecture. Architected and integrated 10+ REST APIs, boosted frontend performance by ~25% via modular component design and lazy loading, and resolved 15+ bugs to elevate application stability.",
    tags: ["Angular", "Java", "Node.js", "REST APIs", "MVC"],
  },
  {
    year: "Sep 2024 – Dec 2025",
    title: "Freelance Machine Learning Developer",
    org: "Remote — International Clients",
    description:
      "Delivered 5+ ML and Python-based solutions across sports analytics, healthcare, and real estate. Actively managed end-to-end client communications, gathered stakeholder requirements, and translated business needs into technical architectures. Trained predictive models achieving 85–92% accuracy using XGBoost and SVM, ensuring seamless project handoffs.",
    tags: [
      "Python",
      "XGBoost",
      "Client Communication",
      "Requirement Gathering",
      "Scikit-learn",
    ],
  },
  {
    year: "Oct 2021 – July 2025",
    title: "BS Software Engineering",
    org: "University of Central Punjab, Lahore",
    description:
      "Completed a 4-year degree with a focus on software engineering, OOP, data structures, algorithms, and applied machine learning. Final Year Project: Cry-Care — an ML-powered baby cry classification system achieving 88% accuracy on 900+ balanced audio records.",
    tags: ["OOP", "Algorithms", "Machine Learning", "FYP: Cry-Care"],
  },
];

const Journey = () => {
  return (
    <section id="journey" className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000319] via-[#03031a] to-[#000319]" />
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-purple-600/8 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-3">
            My Story
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Journey &amp; <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Real experience, real impact — the milestones that shaped me.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          {/* Vertical line */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-600/60 via-purple-600/30 to-transparent" 
          />

          <div className="space-y-12">
            {journey.map((item, i) => (
              <div
                key={item.title}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="absolute left-6 md:left-1/2 -translate-x-1/2 top-2 timeline-dot" 
                />

                {/* Content card */}
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className={`ml-16 md:ml-0 md:w-[45%] ${
                    i % 2 === 0
                      ? "md:pr-12 md:text-right md:ml-auto"
                      : "md:pl-12 md:mr-auto"
                  }`}
                >
                  <div className="glass-card rounded-2xl p-6 group hover:border-purple-500/30 transition-all duration-300">
                    <span className="inline-block tag-pill mb-3">
                      {item.year}
                    </span>
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-purple-400 text-sm font-medium mb-3">
                      {item.org}
                    </p>
                    <p className="text-white/50 text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}
                    >
                      {item.tags.map((tag) => (
                        <span key={tag} className="tag-pill">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-[45%]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
