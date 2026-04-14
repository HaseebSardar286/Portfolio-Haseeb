import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Real project data from resume
const projects: Record<
  string,
  {
    title: string;
    tagline: string;
    heroGradient: string;
    heroImage: string;
    liveUrl: string;
    githubUrl: string;
    period: string;
    problem: string;
    problemStats: { label: string; value: string; color: string }[];
    solution: string;
    techStack: { name: string; icon: string }[];
    highlights: string[];
    resources: { label: string; icon: string; href: string }[];
    nextProject: { slug: string; title: string };
  }
> = {
  "assetloop-rental-platform": {
    title: "AssetLoop — Rental Platform",
    tagline:
      "A full-stack rental platform supporting end-to-end booking workflows and handling 100+ simulated concurrent user interactions.",
    heroGradient: "from-purple-900 via-violet-950 to-black",
    heroImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
    liveUrl: "https://assetloop-rental-platform.vercel.app/",
    githubUrl: "https://github.com/HaseebSardar286/Assetloop",
    period: "Sep 2025 – Jan 2026",
    problem:
      "Traditional rental systems lacked a unified digital workflow — asset listings, booking management, payments, and user roles were all siloed across disconnected tools, causing friction and data inconsistency.",
    problemStats: [
      {
        label: "Manual Booking Overhead",
        value: "HIGH",
        color: "text-red-400",
      },
      {
        label: "API Response Latency",
        value: ">300ms",
        color: "text-yellow-400",
      },
    ],
    solution:
      "AssetLoop provides a unified rental platform with end-to-end booking workflows, JWT-secured role-based access control, and 8+ optimized REST API endpoints — reducing API response latency by ~20% through targeted optimization.",
    techStack: [
      { name: "Angular", icon: "🅰" },
      { name: "Node.js", icon: "⬡" },
      { name: "Express.js", icon: "⚡" },
      { name: "MongoDB", icon: "🍃" },
      { name: "JWT", icon: "🔐" },
      { name: "Vercel", icon: "▲" },
    ],
    highlights: [
      "Constructed a full-stack rental platform supporting end-to-end booking workflows",
      "Handled 100+ simulated concurrent user interactions",
      "Designed and exposed 8+ REST API endpoints with JWT-based authentication",
      "Enforced secure role-based access control (admin, owner, renter)",
      "Refined UI responsiveness and trimmed API response latency by ~20%",
    ],
    resources: [
      {
        label: "Live Platform",
        icon: "↗",
        href: "https://assetloop-rental-platform.vercel.app/",
      },
      {
        label: "Source Code",
        icon: "{ }",
        href: "https://github.com/HaseebSardar286/Assetloop",
      },
    ],
    nextProject: {
      slug: "cry-care-classification",
      title: "Cry-Care Classification",
    },
  },

  "cry-care-classification": {
    title: "Cry-Care — Baby Cry Classification",
    tagline:
      "ML-powered audio classification system achieving 88% accuracy on 900+ balanced records — Final Year Project (FYP).",
    heroGradient: "from-cyan-900 via-teal-950 to-black",
    heroImage:
      "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?q=80&w=1974",
    liveUrl: "https://github.com/HaseebSardar286/Cry-Care-mobile-application/",
    githubUrl:
      "https://github.com/HaseebSardar286/Cry-Care-mobile-application/",
    period: "Sep 2024 – Mar 2025",
    problem:
      "Parents and caregivers struggle to interpret infant cries — hunger, pain, discomfort, and fatigue produce audibly similar patterns that are difficult to distinguish without clinical expertise, especially under stress.",
    problemStats: [
      {
        label: "Parent Classification Accuracy",
        value: "~40%",
        color: "text-red-400",
      },
      {
        label: "Dataset Class Imbalance",
        value: "SEVERE",
        color: "text-yellow-400",
      },
    ],
    solution:
      "Cry-Care trained and benchmarked ML models (SVM, Random Forest, XGBoost) on engineered audio features extracted from 580+ raw samples. SMOTE and ADASYN oversampling balanced the dataset to 900+ records, achieving 88% classification accuracy.",
    techStack: [
      { name: "Python", icon: "🐍" },
      { name: "Scikit-learn", icon: "🤖" },
      { name: "XGBoost", icon: "📈" },
      { name: "SVM", icon: "📐" },
      { name: "SMOTE/ADASYN", icon: "⚖️" },
      { name: "Librosa", icon: "🎵" },
    ],
    highlights: [
      "Trained and benchmarked ML models achieving up to 88% classification accuracy",
      "Extracted and engineered discriminative features from 580+ audio samples",
      "Strengthened model signal quality through spectrogram and MFCC analysis",
      "Applied SMOTE and ADASYN oversampling to address class imbalance",
      "Scaled dataset to 900+ balanced records for robust training",
    ],
    resources: [
      {
        label: "GitHub Repo",
        icon: "{ }",
        href: "https://github.com/HaseebSardar286/Cry-Care-mobile-application/",
      },
    ],
    nextProject: {
      slug: "marketing-crm-platform",
      title: "Marketing CRM & Analytics",
    },
  },

  "marketing-crm-platform": {
    title: "Marketing CRM & Analytics Platform",
    tagline:
      "Interactive analytics dashboards processing 300+ user events for real-time traffic and conversion monitoring with UTM tracking.",
    heroGradient: "from-orange-900 via-red-950 to-black",
    heroImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015",
    liveUrl: "https://dbt-five.vercel.app/",
    githubUrl: "https://github.com/HaseebSardar286/DentalBillingTeam",
    period: "Feb 2026 – Mar 2026",
    problem:
      "Marketing teams lacked real-time visibility into campaign performance — UTM-tagged traffic sources, lead conversions, and user acquisition funnels were manually tracked in spreadsheets with significant lag and error.",
    problemStats: [
      { label: "Reporting Delay", value: "24–48h", color: "text-red-400" },
      { label: "Lead Data Accuracy", value: "~60%", color: "text-yellow-400" },
    ],
    solution:
      "A Next.js SaaS dashboard with real-time event processing, UTM-based acquisition tracking across marketing channels, and scalable lead management modules handling 100+ records — all with live conversion monitoring.",
    techStack: [
      { name: "Next.js", icon: "▲" },
      { name: "Node.js", icon: "⬡" },
      { name: "Firebase", icon: "🔥" },
      { name: "TypeScript", icon: "📘" },
      { name: "Vercel", icon: "🚀" },
      { name: "Analytics API", icon: "📡" },
    ],
    highlights: [
      "Crafted interactive analytics dashboards processing 300+ user events",
      "Enabled real-time traffic and conversion rate monitoring",
      "Incorporated UTM-based tracking to surface user acquisition insights",
      "Structured scalable lead management modules for 100+ records",
      "Deployed to Vercel with CI/CD pipeline for continuous delivery",
    ],
    resources: [
      {
        label: "Live Platform",
        icon: "↗",
        href: "https://dbt-five.vercel.app/",
      },
      {
        label: "Source Code",
        icon: "{ }",
        href: "https://github.com/HaseebSardar286/DentalBillingTeam",
      },
    ],
    nextProject: { slug: "mlb-ai-predictor", title: "MLB AI Predictor" },
  },

  "mlb-ai-predictor": {
    title: "MLB AI Predictor & Betting Analytics",
    tagline:
      "Machine Learning system to predict MLB game outcomes and identify profitable betting edges using Scikit-Learn and XGBoost.",
    heroGradient: "from-blue-900 via-cyan-950 to-black",
    heroImage:
      "https://images.unsplash.com/photo-1543286386-2e659306cd6c?q=80&w=2070",
    liveUrl: "https://github.com/HaseebSardar286/baseball_",
    githubUrl: "https://github.com/HaseebSardar286/baseball_",
    period: "May 2025",
    problem:
      "Sports bettors often rely on intuition or basic stats, missing profitable 'edges' where bookmaker odds differ significantly from actual game probabilities.",
    problemStats: [
      { label: "Manual Analysis Delay", value: "HIGH", color: "text-red-400" },
      { label: "Missed Edges", value: "OFTEN", color: "text-yellow-400" },
    ],
    solution:
      "Developed an automated prediction system using XGBoost and Scikit-Learn that calculates probabilities for game winners and player props, comparing them to real-time The Odds API data to find the mathematical Edge.",
    techStack: [
      { name: "Python", icon: "🐍" },
      { name: "Pandas", icon: "🐼" },
      { name: "XGBoost", icon: "📈" },
      { name: "Scikit-Learn", icon: "🤖" },
      { name: "REST APIs", icon: "🔗" },
    ],
    highlights: [
      "Forecasted Game Winners, Exact Scores, and Player Props (Hits/Home Runs)",
      "Calculated the 'Edge' by comparing model probabilities against real-time bookmaker odds",
      "Analyzed matchups down to pitcher vs. batter history, park factors, and weather conditions",
      "Built an automated workflow from data scraping to daily betting CSV reports",
    ],
    resources: [
      {
        label: "Dataset / Code",
        icon: "{ }",
        href: "https://github.com/HaseebSardar286/baseball_",
      },
    ],
    nextProject: {
      slug: "SVM-Model-for-Engine-Failure",
      title: "SVM Model for Engine Failure",
    },
  },

  "SVM-Model-for-Engine-Failure": {
    title: "SVM Model for Engine Failure",
    tagline:
      "SVM model for engine failure detection aiming for predictive maintenance.",
    heroGradient: "from-emerald-900 via-green-950 to-black",
    heroImage:
      "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=2070",
    liveUrl:
      "https://github.com/HaseebSardar286/SVM-Model-for-Engine-Failure-dataset",
    githubUrl:
      "https://github.com/HaseebSardar286/SVM-Model-for-Engine-Failure-dataset",
    period: "April 2026",
    problem:
      "Sudden engine failures lead to costly downtimes, unforeseen disruptions, and heavy maintenance overheads in industrial environments.",
    problemStats: [
      { label: "Downtime Costs", value: "CRITICAL", color: "text-red-400" },
      {
        label: "Predictive Capability",
        value: "LOW",
        color: "text-yellow-400",
      },
    ],
    solution:
      "Created a predictive maintenance model to classify engine failures using Support Vector Machines (SVM). Processed and engineered a dataset of 1000+ records with 11+ features to accurately detect anomaly patterns.",
    techStack: [
      { name: "Python", icon: "🐍" },
      { name: "Scikit-Learn", icon: "🤖" },
      { name: "SVM", icon: "📐" },
      { name: "Pandas", icon: "🐼" },
    ],
    highlights: [
      "Achieved 90% classification accuracy on 1000+ engine records",
      "Implemented thorough data preprocessing and exploratory data analysis (EDA)",
      "Trained and evaluated the model to aid predictive maintenance",
      "Packaged the entire workflow cleanly within a Jupyter Notebook environment",
    ],
    resources: [
      {
        label: "Dataset / Code",
        icon: "{ }",
        href: "https://github.com/HaseebSardar286/SVM-Model-for-Engine-Failure-dataset",
      },
    ],
    nextProject: {
      slug: "concavetech-modules",
      title: "Enterprise Web Modules",
    },
  },

  "concavetech-modules": {
    title: "Enterprise Web Modules",
    tagline:
      "4+ production-grade Angular + Java (MVC) web modules built at ConcaveTech, Lahore — delivering 25% frontend performance gains.",
    heroGradient: "from-blue-900 via-indigo-950 to-black",
    heroImage:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072",
    liveUrl: "#",
    githubUrl: "#",
    period: "Apr 2025 – Present",
    problem:
      "Existing enterprise web modules had inconsistent architecture, high bug counts, and slow frontend rendering — impacting team velocity and end-user experience across multiple sprint cycles.",
    problemStats: [
      { label: "Frontend Performance", value: "LOW", color: "text-red-400" },
      { label: "Open Bug Count", value: "15+", color: "text-yellow-400" },
    ],
    solution:
      "Engineered 4+ scalable modules using Angular and Java following strict MVC architecture. Integrated 10+ REST APIs, boosted frontend performance by ~25% through lazy loading and modular components, and resolved 15+ critical bugs.",
    techStack: [
      { name: "Angular", icon: "🅰" },
      { name: "Java", icon: "☕" },
      { name: "REST APIs", icon: "🔗" },
      { name: "MVC", icon: "📐" },
      { name: "Git/GitHub", icon: "🐙" },
      { name: "Agile/Scrum", icon: "🔄" },
    ],
    highlights: [
      "Engineered and maintained 4+ scalable web modules using Angular and Java (MVC)",
      "Collaborated with a team of 5+ engineers across multiple sprint cycles",
      "Architected and integrated 10+ REST APIs for data exchange across services",
      "Boosted frontend performance by ~25% through lazy loading and modular design",
      "Diagnosed and resolved 15+ bugs, elevating application stability",
    ],
    resources: [
      { label: "Company", icon: "🏢", href: "https://concavetech.com" },
    ],
    nextProject: {
      slug: "assetloop-rental-platform",
      title: "AssetLoop Rental Platform",
    },
  },
};

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects[slug];

  if (!project) {
    return (
      <main className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project not found</h1>
          <Link href="/projects" className="btn-primary text-white">
            ← Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-end pb-16 pt-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[#0a0a0a]">
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover opacity-40 object-center"
          />
          <div
            className={`absolute inset-0 bg-gradient-to-b ${project.heroGradient} mix-blend-color opacity-80`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <div className="mb-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-white/40 text-sm hover:text-white/70 transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              All Projects
            </Link>
          </div>

          <div className="inline-flex items-center gap-2 tag-pill mb-4">
            <span>{project.period}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
            {project.title}
          </h1>
          <p className="text-white/60 text-lg max-w-2xl leading-relaxed mb-8">
            {project.tagline}
          </p>

          <div className="flex flex-wrap gap-4">
            {project.liveUrl !== "#" && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-white text-sm no-underline"
              >
                ↗ Live Demo
              </a>
            )}
            {project.githubUrl !== "#" && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-sm no-underline"
              >
                View Code
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Problem + Solution */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-3 py-1 mb-6">
              <span className="w-2 h-2 rounded-full bg-red-400" />
              <span className="text-red-400 text-xs font-bold tracking-wider uppercase">
                The Challenge
              </span>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-white">The Problem</h2>
            <p className="text-white/50 leading-relaxed mb-6">
              {project.problem}
            </p>
            <div className="bg-white/[0.03] border border-white/[0.07] rounded-xl p-5 space-y-4">
              {project.problemStats.map((stat) => (
                <div key={stat.label}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-white/50">{stat.label}</span>
                    <span className={`font-bold ${stat.color}`}>
                      {stat.value}
                    </span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full">
                    <div className="h-full rounded-full bg-red-500/60 w-3/4" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-3 py-1 mb-6">
              <span className="w-2 h-2 rounded-full bg-purple-400" />
              <span className="text-purple-400 text-xs font-bold tracking-wider uppercase">
                The Solution
              </span>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-white">
              How It Was Solved
            </h2>
            <p className="text-white/50 leading-relaxed">{project.solution}</p>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 px-6 border-y border-white/[0.05]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {project.techStack.map((tech) => (
              <div
                key={tech.name}
                className="bg-white/[0.03] border border-white/[0.08] rounded-xl px-6 py-4 flex flex-col items-center gap-2 hover:border-purple-500/30 hover:bg-white/[0.06] transition-all group"
              >
                <span className="text-2xl">{tech.icon}</span>
                <span className="text-xs text-white/50 font-medium group-hover:text-white/80 transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Key Highlights</h2>
        <p className="text-white/40 text-center text-sm mb-12">
          What was built and what was achieved
        </p>

        <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8">
          <ul className="space-y-4">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-purple-600/15 border border-purple-500/20 flex items-center justify-center flex-shrink-0 text-xs font-bold text-purple-400 mt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="text-white/70 leading-relaxed pt-1">{h}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Resources + Next Project */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-10">
          Project Resources
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {project.resources.map((r) => (
            <a
              key={r.label}
              href={r.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/[0.03] border border-white/[0.07] rounded-xl px-8 py-5 flex flex-col items-center gap-3 hover:border-purple-500/30 hover:bg-white/[0.06] transition-all group min-w-36"
            >
              <span className="text-xl font-mono text-white/50 group-hover:text-purple-400 transition-colors">
                {r.icon}
              </span>
              <span className="text-sm text-white/60 font-medium">
                {r.label}
              </span>
            </a>
          ))}
        </div>

        <div className="border-t border-white/[0.05] pt-12 text-center">
          <p className="text-white/30 text-xs font-bold tracking-widest uppercase mb-3">
            NEXT PROJECT
          </p>
          <Link
            href={`/projects/${project.nextProject.slug}`}
            className="group inline-flex flex-col items-center gap-2"
          >
            <span className="text-3xl md:text-4xl font-bold text-white group-hover:text-purple-300 transition-colors">
              {project.nextProject.title}
            </span>
            <svg
              className="w-6 h-6 text-white/30 group-hover:text-purple-400 group-hover:translate-y-1 transition-all"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
