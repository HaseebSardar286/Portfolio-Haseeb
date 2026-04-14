"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    slug: "assetloop-rental-platform",
    title: "AssetLoop — Rental Platform",
    subtitle: "Full-Stack Web Application",
    description:
      "End-to-end rental platform supporting full booking workflows, handling 100+ concurrent user interactions, with JWT-secured role-based access control and a 20% latency reduction.",
    tags: ["Angular", "Node.js", "MongoDB", "JWT"],
    color: "from-purple-600 to-violet-600",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
    link: "https://assetloop-rental-platform.vercel.app/",
    period: "Sep 2025 – Jan 2026",
  },
  {
    slug: "cry-care-classification",
    title: "Cry-Care — Baby Cry Classification",
    subtitle: "Final Year Project (ML)",
    description:
      "ML system achieving 88% classification accuracy on 580+ labelled audio samples. Applied SMOTE & ADASYN oversampling to balance 900+ records and engineered discriminative audio features.",
    tags: ["Python", "Scikit-learn", "XGBoost", "SVM"],
    color: "from-cyan-600 to-teal-600",
    image: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?q=80&w=1974",
    link: "https://github.com/HaseebSardar286/Cry-Care-mobile-application/",
    period: "Sep 2024 – Mar 2025",
  },
  {
    slug: "marketing-crm-platform",
    title: "Marketing CRM & Analytics",
    subtitle: "Full-Stack SaaS Dashboard",
    description:
      "Interactive analytics dashboards processing 300+ user events for real-time traffic and conversion monitoring. UTM-based tracking and scalable lead management for 100+ records.",
    tags: ["Next.js", "Node.js", "Firebase", "Analytics"],
    color: "from-orange-600 to-red-600",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015",
    link: "https://dbt-five.vercel.app/",
    period: "Feb 2026 – Mar 2026",
  },
  {
    slug: "mlb-ai-predictor",
    title: "MLB AI Predictor & Analytics",
    subtitle: "AI Betting Engine",
    description: "Automated prediction system using XGBoost and Scikit-Learn. Calculates Game Winners and Player Props, finding the true Edge vs real-time bookmaker odds.",
    tags: ["Python", "XGBoost", "Scikit-Learn", "REST APIs"],
    color: "from-blue-600 to-cyan-600",
    image: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?q=80&w=2070",
    link: "#",
    period: "May 2025",
  },
  {
    slug: "SVM-Model-for-Engine-Failure",
    title: "SVM Model for Engine Failure",
    subtitle: "Predictive Maintenance ML",
    description: "Predictive maintenance model classifying engine failure using SVM. Processed 1000+ records with 11+ features, achieving 90% accuracy in anomaly detection.",
    tags: ["Python", "SVM", "Pandas"],
    color: "from-emerald-600 to-green-600",
    image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=2070",
    link: "https://github.com/HaseebSardar286/SVM-Model-for-Engine-Failure-dataset",
    period: "April 2026",
  },
  {
    slug: "concavetech-modules",
    title: "Enterprise Web Modules",
    subtitle: "Professional Work — ConcaveTech",
    description:
      "Engineered 4+ scalable web modules in Angular + Java (MVC), integrated 10+ REST APIs, and boosted frontend performance by ~25% via lazy loading and modular component design.",
    tags: ["Angular", "Java", "REST APIs", "MVC"],
    color: "from-indigo-600 to-blue-600",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072",
    link: "#",
    period: "Apr 2025 – Present",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-[#000319] relative overflow-hidden">
      {/* Ambient blobs */}
      <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-purple-600/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            A curated selection of real projects — from deployed web apps to award-worthy ML systems.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: (Math.min(i, 3)) * 0.1 }}
              key={project.title} 
              className="project-card group"
            >
              {/* Card header */}
              <div
                className={`h-48 relative flex items-center justify-center overflow-hidden bg-[#000319]`}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" 
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} mix-blend-color opacity-70 group-hover:opacity-40 transition-all duration-500`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000319] to-transparent opacity-80" />

                {/* Index badge */}
                <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-black/60 backdrop-blur flex items-center justify-center text-xs font-bold text-white z-20 shadow-black drop-shadow-md border border-white/10">
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* Period badge */}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur rounded-full px-3 py-1 text-xs text-white z-20 shadow-black drop-shadow-md border border-white/10 font-medium">
                  {project.period}
                </div>
              </div>

              {/* Card content */}
              <div className="p-6">
                <p className="text-purple-400 text-xs font-semibold tracking-wider uppercase mb-1">
                  {project.subtitle}
                </p>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-4">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm text-purple-400 hover:text-purple-300 font-medium transition-colors group/link"
                  >
                    View Details
                    <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                  </Link>
                  {project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-white/30 hover:text-white/60 transition-colors"
                    >
                      ↗ Live
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-12"
        >
          <Link href="/projects" className="btn-outline no-underline inline-block">
            View All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
