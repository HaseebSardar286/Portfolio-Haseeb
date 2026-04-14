import React from "react";

const competencies = [
  {
    icon: "⚡",
    title: "Frontend",
    description: "React.js, Next.js, Angular, HTML5, CSS3, TypeScript, Component Architecture",
    color: "from-purple-600/20 to-purple-900/10",
    border: "border-purple-500/20",
  },
  {
    icon: "🛠️",
    title: "Backend & APIs",
    description: "Node.js, Express.js, REST API Design, JWT Authentication, MVC Architecture",
    color: "from-blue-600/20 to-blue-900/10",
    border: "border-blue-500/20",
  },
  {
    icon: "🗄️",
    title: "Databases",
    description: "MongoDB, MySQL, Firebase — schema design, indexing, and query optimization",
    color: "from-cyan-600/20 to-cyan-900/10",
    border: "border-cyan-500/20",
  },
  {
    icon: "🤖",
    title: "Machine Learning",
    description: "Python, XGBoost, Random Forest, SVM, Scikit-learn, feature engineering, SMOTE",
    color: "from-pink-600/20 to-pink-900/10",
    border: "border-pink-500/20",
  },
  {
    icon: "☁️",
    title: "DevOps & Tools",
    description: "Git, GitHub Actions, CI/CD, Vercel, Docker (Basic), Agile / Scrum",
    color: "from-orange-600/20 to-orange-900/10",
    border: "border-orange-500/20",
  },
  {
    icon: "📐",
    title: "Architecture",
    description: "OOP, MVC, RESTful design, web architecture, modular & scalable system design",
    color: "from-green-600/20 to-green-900/10",
    border: "border-green-500/20",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000319] via-[#05051a] to-[#000319]" />
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-purple-600/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-3">
            What I Bring
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Core <span className="gradient-text">Competencies</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Languages: Java · JavaScript · Python · TypeScript — and the full-stack disciplines I&apos;ve built around them.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {competencies.map((item) => (
            <div
              key={item.title}
              className={`service-card bg-gradient-to-br ${item.color} ${item.border} group`}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>

              {/* Decorative corner */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-2 h-2 rounded-full bg-purple-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
