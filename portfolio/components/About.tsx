import React from "react";
import Image from "next/image";
const skills = [
  { label: "JavaScript / TypeScript", level: 80 },
  { label: "React.js / Next.js", level: 75 },
  { label: "Angular", level: 70 },
  { label: "Node.js / Express.js", level: 75 },
  { label: "Java/J2EE", level: 75 },
  { label: "Python / Machine Learning", level: 55 },
  { label: "MongoDB / MySQL / Firebase", level: 70 },
];

const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-[#000319] relative overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - Avatar card */}
          <div className="relative">
            <div className="relative w-72 h-72 mx-auto md:mx-0">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-600/30 to-blue-600/20 blur-xl animate-pulse-glow" />
              <div className="relative rounded-2xl w-full h-full bg-gradient-to-br from-[#0d0d2b] to-[#0a0a1f] border border-purple-500/20 flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 mx-auto mb-3 flex items-center justify-center text-4xl font-bold text-white overflow-hidden">
                    <Image
                      src="/profile.jpg"
                      alt="Profile"
                      width={190}
                      height={190}
                      style={{ width: "auto", height: "auto" }}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <p className="text-white/60 text-sm font-semibold">
                    Muhammad Haseeb Sardar
                  </p>
                  <p className="text-white/30 text-xs mt-1">
                    Associate Software Engineer
                  </p>
                </div>
                <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-purple-500/60 rounded-tr" />
                <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-purple-500/60 rounded-bl" />
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 md:right-8 bg-[#0d0d2b] border border-purple-500/30 rounded-xl px-4 py-3 animate-float">
              <div className="flex items-center gap-2">
                <span className="text-2xl">💼</span>
                <div>
                  <div className="text-xs text-white/50">Currently at</div>
                  <div className="text-sm font-semibold text-white">
                    ConcaveTech, Lahore
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Text + skills */}
          <div>
            <p className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-3">
              About Me
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Architecting the <span className="gradient-text">Future</span>
            </h2>
            <p className="text-white/60 leading-relaxed mb-4">
              I&apos;m a results-driven Software Engineer with a strong
              foundation in web architecture, object-oriented programming, and
              modern JavaScript frameworks. I&apos;ve shipped scalable
              full-stack applications and ML-powered solutions across sports
              analytics, healthcare, and real estate domains.
            </p>
            <p className="text-white/60 leading-relaxed mb-8">
              Currently an Associate Software Engineer at ConcaveTech, Lahore —
              building Angular + Java modules, architecting REST APIs, and
              boosting frontend performance by 25% through modular design and
              lazy-loading strategies.
            </p>

            {/* Skill bars */}
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.label}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-white/80 font-medium">
                      {skill.label}
                    </span>
                    <span className="text-purple-400 font-semibold">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="progress-bar h-full"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
