import React, { useState } from "react";
import { ExternalLink, Sparkles, FolderGit2, Code2, Layers } from "lucide-react";
import Footer from "./Footer";
import Header from "./Header";

// Custom GitHub Brand Icon Component (Prevents missing export errors in lucide-react)
const GithubIcon = ({ size = 18, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

// Sample Project Data
const sampleProjects = [
  {
    id: 1,
    title: "JiViKa - Job Portal Platform",
    category: "Full Stack",
    description:
      "A comprehensive job portal featuring student and recruiter roles, JWT authentication, application management, and international standards.",
    image:
      "/jobportal.png",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://final-year-srgc-project-1.onrender.com",
    githubUrl: "https://github.com/manishnayak-123",
    featured: true,
  },
  {
    id: 2,
    title: "Nayak - Live Search Interface",
    category: "Frontend",
    description:
      "A real-time search interface built with live autocomplete suggestions, debounced API calls, and a minimal UI.",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000",
    tags: ["React", "Tailwind CSS", "Redux Toolkit", "REST API"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/manishnayak-123",
    featured: false,
  },
  {
    id: 3,
    title: "AI Recipe Generator",
    category: "Full Stack",
    description:
      "An intelligent meal suggestion application that builds recipes using the current ingredients available in your kitchen.",
    image:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1000",
    tags: ["React", "Node.js", "Tailwind CSS", "OpenAI API"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/manishnayak-123",
    featured: false,
  },
  {
    id: 4,
    title: "Developer Portfolio",
    category: "Frontend",
    description:
      "A modern developer portfolio showcase featuring dynamic authentication state, modal routing, and responsive UI components.",
    image:
      "/porfolio.png",
    tags: ["React", "Tailwind CSS", "Lucide Icons"],
    liveUrl: "https://portfolio-manish-57z3.vercel.app",
    githubUrl: "https://github.com/manishnayak-123",
    featured: false,
  },
];

const categories = ["All", "Full Stack", "Frontend", "Backend"];

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? sampleProjects
      : sampleProjects.filter((project) => project.category === activeCategory);

  const featuredProject = sampleProjects.find((p) => p.featured);

  return (
    <div>
        <Header />
    <section className="min-h-screen  bg-slate-950 text-slate-100 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mt-10 max-w-7xl mx-auto relative z-10 space-y-12">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wide uppercase">
            <Sparkles size={14} />
            <span>Featured Showcase</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            Crafted with Precision & Code
          </h1>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A curated list of web applications, full-stack tools, and UI interfaces I've built.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeCategory === category
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                  : "bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Project Banner (Shown on 'All' tab) */}
        {activeCategory === "All" && featuredProject && (
          <div className="relative group rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl overflow-hidden shadow-2xl transition-all duration-300 hover:border-indigo-500/40">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              <div className="lg:col-span-7 aspect-video lg:aspect-auto h-full overflow-hidden relative">
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-950/80 via-transparent to-transparent" />
              </div>
              <div className="lg:col-span-5 p-6 sm:p-8 space-y-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 uppercase tracking-wider">
                  <FolderGit2 size={14} /> Featured Project
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  {featuredProject.title}
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {featuredProject.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {featuredProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-md bg-slate-800/80 text-indigo-300 border border-slate-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <a
                    href={featuredProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-semibold transition-all shadow-md shadow-indigo-600/25"
                  >
                    <ExternalLink size={16} /> Live Preview
                  </a>
                  <a
                    href={featuredProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold border border-slate-700 transition-all"
                  >
                    <GithubIcon size={16} /> Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-md overflow-hidden flex flex-col justify-between hover:border-slate-700 transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              <div>
                {/* Thumbnail Header */}
                <div className="relative aspect-video overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/0 transition-colors" />
                  <span className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-slate-300 text-[11px] font-medium px-2.5 py-1 rounded-full border border-slate-800">
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 space-y-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2 py-0.5 rounded-md bg-slate-800/60 text-slate-300 border border-slate-700/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="px-5 sm:px-6 pb-5 pt-2 border-t border-slate-800/50 flex items-center justify-between text-xs font-medium">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  <ExternalLink size={15} /> Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
                >
                  <GithubIcon size={15} /> GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer />
    </div>
  );
}

export default Projects;