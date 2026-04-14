import React from "react";

const services = [
  {
    icon: "🌐",
    title: "Full-Stack Web Dev",
    description:
      "End-to-end web applications with React, Next.js, Angular on the frontend and Node.js + Express APIs on the backend — scalable, performant, and production-ready.",
  },
  {
    icon: "⚙️",
    title: "REST API Design",
    description:
      "Architect and integrate robust REST APIs with JWT authentication, role-based access control, and clean MVC-structured codebases following industry best practices.",
  },
  {
    icon: "🤖",
    title: "Machine Learning",
    description:
      "End-to-end ML pipelines — data preprocessing, feature engineering, model training (XGBoost, SVM, Random Forest), hyperparameter tuning, and validation.",
  },
  {
    icon: "🗄️",
    title: "Database Design",
    description:
      "Schema design and optimization for MongoDB, MySQL, and Firebase — query tuning, indexing strategies, and data modeling for scalable applications.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-6 bg-[#000319] relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-600/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-3">
            What I Offer
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Expert <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Comprehensive engineering services — from polished frontends to intelligent ML models.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div key={service.title} className="service-card group text-center">
              <div className="w-14 h-14 rounded-2xl bg-purple-600/15 border border-purple-500/20 flex items-center justify-center text-2xl mx-auto mb-4 group-hover:scale-110 group-hover:bg-purple-600/25 transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                {service.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
