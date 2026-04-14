"use client";
import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const allProjects = [
  {
    slug: "denbury-bright-smiles",
    title: "Denbury Bright Smiles",
    subtitle: "Highly responsive web application for a premier dental clinic.",
    tags: ["NEXT.JS", "TYPESCRIPT", "BOOTSTRAP 5"],
    category: "Full-Stack",
    features: [
      "Custom UtmTracker for Marketing ROI",
      "Dynamic Service Architecture via Next.js",
    ],
    imageGradient: "from-teal-900 to-cyan-950",
    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2070",
    liveUrl: "https://dental-clinic-inky.vercel.app/",
    period: "Mar 2026 – Apr 2026",
  },
  {
    slug: "assetloop-rental-platform",
    title: "AssetLoop — Rental Platform",
    subtitle: "Full-stack rental platform with end-to-end booking workflows.",
    tags: ["ANGULAR", "NODE.JS", "MONGODB"],
    category: "MERN",
    features: [
      "8+ REST APIs with JWT role-based auth",
      "~20% API response latency reduction",
    ],
    imageGradient: "from-purple-900 to-violet-950",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
    liveUrl: "https://assetloop-rental-platform.vercel.app/",
    period: "Sep 2025 – Jan 2026",
  },
  {
    slug: "cry-care-classification",
    title: "Cry-Care — Baby Cry Classification",
    subtitle: "ML-powered audio classification system (Final Year Project).",
    tags: ["PYTHON", "ML", "SCIKIT-LEARN"],
    category: "ML / AI",
    features: [
      "88% classification accuracy",
      "SMOTE & ADASYN on 900+ balanced records",
    ],
    imageGradient: "from-cyan-900 to-teal-950",
    image:
      "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?q=80&w=1974",
    liveUrl: "https://github.com/HaseebSardar286/Cry-Care-mobile-application/",
    period: "Sep 2024 – Mar 2025",
  },
  {
    slug: "marketing-crm-platform",
    title: "Marketing CRM & Analytics",
    subtitle: "SaaS dashboard for real-time traffic and conversion monitoring.",
    tags: ["NEXT.JS", "NODE.JS", "FIREBASE"],
    category: "MERN",
    features: [
      "300+ user events processed in real-time",
      "UTM-based acquisition tracking",
    ],
    imageGradient: "from-orange-900 to-red-950",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015",
    liveUrl: "https://dental-billing-team.vercel.app/",
    period: "Feb 2026 – Mar 2026",
  },
  {
    slug: "mlb-ai-predictor",
    title: "MLB AI Predictor & Analytics",
    subtitle:
      "Predicts MLB game outcomes and identifies profitable betting edges.",
    tags: ["PYTHON", "XGBOOST", "SCIKIT-LEARN"],
    category: "ML / AI",
    features: [
      "AI forecasts Game Winners & Player Props",
      "Calculates Edge vs real-time bookmaker odds",
    ],
    imageGradient: "from-blue-900 to-cyan-950",
    image:
      "https://images.unsplash.com/photo-1543286386-2e659306cd6c?q=80&w=2070",
    liveUrl: "#",
    period: "May 2025",
  },
  {
    slug: "SVM-Model-for-Engine-Failure",
    title: "SVM Model for Engine Failure",
    subtitle: "SVM model for engine failure detection.",
    tags: ["PYTHON", "ML", "SCIKIT-LEARN"],
    category: "ML / AI",
    features: [
      "90% classification accuracy",
      "1000+ records dataset with 11+ features",
      "The workflow involves data preprocessing, exploratory data analysis, and model training within a Jupyter Notebook environment to aid in predictive maintenance",
    ],
    imageGradient: "from-emerald-900 to-green-950",
    image:
      "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=2070",
    liveUrl:
      "https://github.com/HaseebSardar286/SVM-Model-for-Engine-Failure-dataset",
    period: "April 2026",
  },
  {
    slug: "concavetech-modules",
    title: "Enterprise Web Modules",
    subtitle: "Production Angular + Java modules at ConcaveTech, Lahore.",
    tags: ["ANGULAR", "JAVA", "REST APIs"],
    category: "Full-Stack",
    features: [
      "4+ scalable MVC-structured modules",
      "~25% frontend performance boost",
    ],
    imageGradient: "from-blue-900 to-indigo-950",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072",
    liveUrl: "#",
    period: "Apr 2025 – Present",
  },
];

const filterTabs = ["All Projects", "MERN", "ML / AI", "Full-Stack"];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All Projects");

  const filtered =
    activeFilter === "All Projects"
      ? allProjects
      : allProjects.filter((p) => p.category === activeFilter);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />

      <div
        className="fixed inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20">
        {/* Hero heading */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4">
            Selected <span className="purple-gradient-text">Artifacts</span>
          </h1>
          <p className="text-white/50 text-lg max-w-xl leading-relaxed">
            An archive of real digital solutions — from production-grade rental
            platforms to award-worthy ML classification systems. Built with
            precision and shipped.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all border ${
                activeFilter === tab
                  ? "bg-purple-600 border-purple-600 text-white"
                  : "border-white/10 text-white/50 hover:border-white/25 hover:text-white/80"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {filtered.map((project) => (
            <div
              key={project.slug}
              className="project-card group bg-white/[0.02] border border-white/[0.06] rounded-2xl overflow-hidden"
            >
              {/* Card image */}
              <div
                className={`h-52 relative flex items-center justify-center overflow-hidden bg-[#000319]`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.imageGradient} mix-blend-color opacity-70 group-hover:opacity-20 transition-all duration-500`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent opacity-90" />

                {/* Period */}
                <div className="absolute bottom-4 right-4 text-white/60 text-xs font-semibold z-20 shadow-black drop-shadow-md">
                  {project.period}
                </div>
              </div>

              {/* Card content */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-bold tracking-widest text-purple-400/80 uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-4">
                  {project.subtitle}
                </p>

                <ul className="space-y-1.5 mb-5">
                  {project.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-sm text-white/60"
                    >
                      <svg
                        className="w-3.5 h-3.5 text-green-400 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-4">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-white font-medium transition-colors group/link"
                  >
                    Project Details
                    <svg
                      className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </Link>
                  {project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white/30 hover:text-white/60 transition-colors"
                    >
                      ↗ Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Have a unique <span className="purple-gradient-text">vision?</span>
          </h2>
          <p className="text-white/50 mb-8 max-w-md mx-auto">
            I&apos;m open to freelance projects, full-time roles, and research
            collaborations in full-stack engineering and machine learning.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="btn-primary text-white text-sm no-underline"
            >
              Start a Project
            </Link>
            <a
              href="https://www.linkedin.com/in/m-haseeb-sardar"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-sm no-underline"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
