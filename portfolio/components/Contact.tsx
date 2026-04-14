import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-[#000319] relative overflow-hidden"
    >
      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-600/8 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let&apos;s Build Something{" "}
            <span className="gradient-text">Amazing Together</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Have a project in mind or just want to chat? I&apos;d love to hear
            from you.
          </p>
        </div>

        {/* Info */}
        <div>
          <div className="glass-card rounded-2xl p-8 md:p-12 mb-6">
            <div className="space-y-6">
              {[
                {
                  icon: "📧",
                  label: "Email",
                  value: "haseebsardar123123@gmail.com",
                  href: "https://mail.google.com/mail/?view=cm&fs=1&to=haseebsardar123123@gmail.com",
                },
                {
                  icon: "💼",
                  label: "LinkedIn",
                  value: "linkedin.com/in/m-haseeb-sardar",
                  href: "https://www.linkedin.com/in/m-haseeb-sardar/",
                },
                {
                  icon: "🐙",
                  label: "GitHub",
                  value: "github.com/HaseebSardar286",
                  href: "https://github.com/HaseebSardar286",
                },
                {
                  icon: "📍",
                  label: "Location",
                  value: "Lahore, Pakistan (Remote Worldwide)",
                  href: null,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-5 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-purple-600/15 border border-purple-500/20 flex items-center justify-center text-xl flex-shrink-0 group-hover:bg-purple-600/25 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-white/40 text-xs mb-1 uppercase tracking-widest font-semibold">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.includes("mailto") ? "_self" : "_blank"}
                        rel="noopener noreferrer"
                        className="text-white/80 text-sm md:text-base font-medium hover:text-purple-300 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white/80 text-sm md:text-base font-medium">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Availability badge */}
          <div className="glass-card rounded-xl px-6 py-5 flex items-center justify-center gap-3 text-center">
            <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
            <p className="text-white/70 text-sm">
              <span className="text-white font-semibold">
                Available for hire
              </span>{" "}
              — Response within 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
