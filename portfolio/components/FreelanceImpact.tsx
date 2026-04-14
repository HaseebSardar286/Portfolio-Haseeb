import React from "react";
import Link from "next/link";

// Real freelance work stats from resume
const stats = [
  {
    value: "5+",
    label: "ML Projects Delivered",
    sub: "Sports analytics, healthcare, real estate domains",
    icon: "🤖",
    color: "from-purple-600/20 to-purple-900/10",
    border: "border-purple-500/20",
  },
  {
    value: "85–92%",
    label: "Model Accuracy Range",
    sub: "XGBoost, Random Forest & SVM pipelines",
    icon: "📈",
    color: "from-cyan-600/20 to-cyan-900/10",
    border: "border-cyan-500/20",
  },
  {
    value: "10k+",
    label: "Records Processed",
    sub: "Rigorous preprocessing & feature engineering",
    icon: "🗂️",
    color: "from-blue-600/20 to-blue-900/10",
    border: "border-blue-500/20",
  },
  {
    value: "15–20%",
    label: "Generalization Improvement",
    sub: "Hyperparameter tuning & k-fold cross-validation",
    icon: "⚡",
    color: "from-orange-600/20 to-orange-900/10",
    border: "border-orange-500/20",
  },
];

const FreelanceImpact = () => {
  return (
    <section id="testimonials" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#000319] via-[#04041c] to-[#000319]" />
      <div className="absolute top-0 left-1/2 w-96 h-64 bg-purple-600/6 rounded-full blur-3xl pointer-events-none -translate-x-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-3">
            By the Numbers
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Freelance <span className="gradient-text">Impact</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Real metrics from 8+ international ML projects delivered as a
            Freelance Machine Learning Developer.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((item) => (
            <div
              key={item.label}
              className={`service-card bg-gradient-to-br ${item.color} ${item.border} text-center group`}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <div className="text-3xl font-extrabold purple-gradient-text mb-2">
                {item.value}
              </div>
              <p className="text-white/80 font-semibold text-sm mb-2">
                {item.label}
              </p>
              <p className="text-white/40 text-xs leading-relaxed">
                {item.sub}
              </p>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="glass-card rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">
              Open to new opportunities
            </h3>
            <p className="text-white/50 text-sm">
              Full-time roles, freelance contracts, and research collaborations
              welcome.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Link
              href="/contact"
              className="btn-primary text-white text-sm no-underline"
            >
              Get in Touch
            </Link>
            <a
              href="https://www.linkedin.com/in/m-haseeb-sardar"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-sm no-underline"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreelanceImpact;
