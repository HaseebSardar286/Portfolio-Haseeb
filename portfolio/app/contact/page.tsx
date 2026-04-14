"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const socials = [
  {
    label: "GITHUB",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
    href: "https://github.com/HaseebSardar286",
  },
  {
    label: "LINKEDIN",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    href: "https://www.linkedin.com/in/m-haseeb-sardar",
  },
  {
    label: "FIVERR",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-1.39c-.445 0-.831.304-.945.734l-.87 3.215h-1.428l.87-3.215a.979.979 0 0 0-.945-1.234H15.87l-1.102 4.449H13.34l1.101-4.449H12.61l-.448 1.812c-.34 1.373-1.476 2.637-3.14 2.637H7.959l1.102-4.449H7.632l-1.104 4.449H5.1l.866-3.492a9.19 9.19 0 0 1-2.437.334L3 13.883c.764 0 1.48-.107 2.146-.307L5.847 11H4.42l.437-1.765h1.427l.317-1.282h1.428L7.73 9.235h1.427l-.45 1.765H10.13l.449-1.765h1.427l-.449 1.765h.004c.254.006.505-.064.713-.2l.005.001.748-3.014H14.465l-.736 2.975h1.43l.735-2.975h1.428l-.35 1.416h1.433c.938 0 1.754.617 2.01 1.488h1.034l.57-2.904h1.427l-.57 2.904h.982zM9.11 13.883c.584 0 1.058-.438 1.058-.978 0-.54-.474-.978-1.058-.978s-1.059.438-1.059.978c0 .54.475.978 1.059.978z" />
      </svg>
    ),
    href: "https://www.fiverr.com/haseebsardar518?public_mode=true",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />

      {/* Background subtle grid */}
      <div
        className="fixed inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-20">
        {/* Hero text */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Let&apos;s build something
            <br />
            <span className="purple-gradient-text">extraordinary.</span>
          </h1>
          <p className="text-white/50 text-lg max-w-xl mx-auto leading-relaxed">
            Whether you have a question or a project proposal, my inbox is
            always open. I&apos;m currently looking for new opportunities and
            collaborations.
          </p>
        </div>

        {/* Main Info */}
        <div className="space-y-6">
          {/* Direct contact */}
          <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
            <div className="flex-1 text-center md:text-left">
              <p className="text-xs font-semibold tracking-widest text-white/30 uppercase mb-5">
                Direct Contact
              </p>
              <div className="space-y-6 inline-flex flex-col items-center md:items-start">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=haseebsardar123123@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-purple-500/40 transition-colors">
                    <svg
                      className="w-5 h-5 text-white/80 group-hover:text-purple-400 transition-colors"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-white/40 text-xs mb-0.5 uppercase tracking-wider font-semibold">Email</p>
                    <span className="text-white/80 text-base font-medium group-hover:text-white transition-colors">
                      haseebsardar123123@gmail.com
                    </span>
                  </div>
                </a>
                <div className="flex items-center gap-4 text-left group">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white/80"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/40 text-xs mb-0.5 uppercase tracking-wider font-semibold">Location</p>
                    <span className="text-white/80 text-base font-medium">
                      Lahore, Pakistan
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick availability */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center w-full md:w-64 flex-shrink-0">
               <span className="w-10 h-10 mx-auto rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mb-3">
                 <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
               </span>
               <h3 className="font-bold text-white mb-2">Available</h3>
               <p className="text-white/50 text-sm">Open to full-time roles & contracts globally.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Presence — social cards */}
            <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-8">
              <p className="text-xs font-semibold tracking-widest text-white/30 uppercase mb-5 text-center md:text-left">
                Presence
              </p>
              <div className="grid grid-cols-3 gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-4 flex flex-col items-center justify-center gap-3 hover:border-purple-500/40 hover:bg-white/[0.07] transition-all group min-h-[100px]"
                  >
                    <span className="text-white/50 group-hover:text-white transition-colors">
                      {s.icon}
                    </span>
                    <span className="text-white/30 text-[10px] font-bold tracking-widest group-hover:text-white/60 transition-colors">
                      {s.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* World map decorative */}
            <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-8 overflow-hidden relative h-full min-h-[180px]">
              <svg
                viewBox="0 0 1000 500"
                className="absolute inset-0 w-full h-full opacity-30 scale-150 transform translate-y-10"
              >
                <path
                  d="M150,100 Q200,80 250,100 Q300,120 280,160 Q260,200 220,190 Q180,180 150,160 Q120,140 150,100Z"
                  fill="#8b5cf6"
                />
                <path
                  d="M300,60 Q380,40 460,70 Q540,100 520,150 Q500,200 440,210 Q380,220 330,190 Q280,160 300,60Z"
                  fill="#8b5cf6"
                />
                <path
                  d="M500,80 Q560,60 620,90 Q680,120 660,170 Q640,220 580,230 Q520,240 490,200 Q460,160 500,80Z"
                  fill="#8b5cf6"
                />
                <path
                  d="M680,100 Q740,80 800,105 Q850,130 830,175 Q810,220 760,225 Q710,230 680,195 Q650,160 680,100Z"
                  fill="#8b5cf6"
                />
                <path
                  d="M200,220 Q260,200 310,230 Q360,260 340,310 Q320,360 270,365 Q220,370 190,335 Q160,300 200,220Z"
                  fill="#8b5cf6"
                />
                <path
                  d="M350,250 Q420,230 480,265 Q540,300 520,355 Q500,410 440,415 Q380,420 345,380 Q310,340 350,250Z"
                  fill="#8b5cf6"
                />
                <circle cx="410" cy="160" r="5" fill="#cbacf9" />
                <circle
                  cx="410"
                  cy="160"
                  r="15"
                  fill="#cbacf9"
                  fillOpacity="0.2"
                />
                <circle
                  cx="410"
                  cy="160"
                  r="25"
                  fill="#cbacf9"
                  fillOpacity="0.1"
                />
              </svg>
              <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row items-center justify-between gap-2">
                <span className="text-white/40 text-xs font-medium">
                  Based in Lahore
                </span>
                <span className="text-white/20 text-xs text-center">
                  Remote worldwide
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
