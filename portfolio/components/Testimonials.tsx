import React from "react";

const testimonials = [
  {
    name: "glenngoosens",
    platform: "Fiverr Client",
    avatar: "GL",
    color: "from-purple-600 to-blue-600",
    quote: "Perfect and clear understanding!",
    tags: ["Deep understanding", "Code expertise", "Bug free"],
    rating: 5,
  },
  {
    name: "hometeethwhite",
    platform: "Fiverr Client",
    avatar: "HO",
    color: "from-pink-600 to-rose-600",
    quote:
      "Helped me fix out my machine learning script that I had been spending weeks with GPT trying to fix and get working. Will use again.",
    tags: ["Quick responsiveness", "Bug free", "Professionalism"],
    rating: 5,
  },
  {
    name: "yousef_alh1",
    platform: "Fiverr Client",
    avatar: "YO",
    color: "from-cyan-600 to-teal-600",
    quote: "Professional, on time and great work",
    tags: ["Professional", "On time", "Great work"],
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#000319] via-[#04041c] to-[#000319]" />
      <div className="absolute top-0 left-1/2 w-96 h-64 bg-purple-600/6 rounded-full blur-3xl pointer-events-none -translate-x-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Social Proof
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Client <span className="gradient-text">Feedback</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            What my freelance clients think about the quality, value, and speed of my work.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="testimonial-card group flex flex-col">
              {/* Quote mark */}
              <div className="text-5xl text-purple-600/30 font-serif leading-none mb-4">
                &ldquo;
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-sm">
                    ★
                  </span>
                ))}
              </div>

              <p className="text-white/70 text-sm leading-relaxed mb-6 italic flex-grow">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                {t.tags.map((tag) => (
                  <span key={tag} className="tag-pill text-[10px]">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-xs font-bold text-white flex-shrink-0`}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">{t.name}</p>
                  <p className="text-white/40 text-xs">{t.platform}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
