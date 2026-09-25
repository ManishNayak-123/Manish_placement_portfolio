// import React, { useState } from "react";
// import { Sparkles, Code, Server, Wrench, Terminal, Cpu } from "lucide-react";
// import Header from "./Header";
// import Footer from "./Footer";

// // Category Data & Icons
// const skillCategories = [
//   { id: "all", label: "All Skills", icon: Cpu },
//   { id: "frontend", label: "Frontend", icon: Code },
//   { id: "backend", label: "Backend & DB", icon: Server },
//   { id: "tools", label: "Tools & DevOps", icon: Wrench },
// ];

// // Tech Stack Items with SVG Logos
// const skillsData = [
//   {
//     name: "React.js",
//     category: "frontend",
//     level: 92,
//     tag: "Core Library",
//     description: "Component Architecture, Hooks, Custom Hooks, Performance Optimization",
//     svg: (
//       <svg className="w-6 h-6 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//         <circle cx="12" cy="12" r="2" fill="currentColor" />
//         <ellipse cx="12" cy="12" rx="10" ry="4.5" />
//         <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
//         <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
//       </svg>
//     ),
//   },
//   {
//     name: "Redux / Redux Toolkit",
//     category: "frontend",
//     level: 85,
//     tag: "State Management",
//     description: "Global State Management, Async Thunks, RTK Query",
//     svg: (
//       <svg className="w-6 h-6 text-purple-400" viewBox="0 0 24 24" fill="currentColor">
//         <path d="M16.5 6a4.5 4.5 0 100 9 4.5 4.5 0 000-9zM7.5 9a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm9 6a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" />
//       </svg>
//     ),
//   },
//   {
//     name: "Tailwind CSS",
//     category: "frontend",
//     level: 95,
//     tag: "Styling Framework",
//     description: "Responsive Layouts, Custom Themes, Dark Mode, Animations",
//     svg: (
//       <svg className="w-6 h-6 text-sky-400" viewBox="0 0 24 24" fill="currentColor">
//         <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
//       </svg>
//     ),
//   },
//   {
//     name: "JavaScript (ES6+)",
//     category: "frontend",
//     level: 90,
//     tag: "Programming Language",
//     description: "Async/Await, Promises, Closures, DOM Manipulation, Event Loop",
//     svg: (
//       <svg className="w-6 h-6 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
//         <path d="M3 3h18v18H3V3zm11.5 13.5c.35.58.9 1 1.7 1 1.1 0 1.8-.6 1.8-1.8v-5.2h2.2v5.3c0 2.3-1.4 3.4-3.8 3.4-1.9 0-3.1-.9-3.7-2.1l1.8-1.1zm-6.1.1c.4.6 1 1 1.8 1 .8 0 1.3-.4 1.3-1 0-.6-.4-.9-1.4-1.3l-.6-.2c-1.6-.7-2.4-1.5-2.4-3 0-2.1 1.7-3.3 4.1-3.3 1.8 0 3 .7 3.6 1.8l-1.7 1.1c-.3-.5-.7-.8-1.5-.8s-1.2.3-1.2.8c0 .5.3.8 1.3 1.2l.6.2c1.8.7 2.6 1.6 2.6 3.1 0 2.2-1.7 3.4-4.3 3.4-2.2 0-3.6-.9-4.2-2.3l1.9-1.0z" />
//       </svg>
//     ),
//   },
//   {
//     name: "Node.js",
//     category: "backend",
//     level: 88,
//     tag: "Runtime Environment",
//     description: "RESTful APIs, Asynchronous Execution, Event-Driven Architecture",
//     svg: (
//       <svg className="w-6 h-6 text-emerald-500" viewBox="0 0 24 24" fill="currentColor">
//         <path d="M12 2l10 5.8v11.5L12 22 2 19.3V7.8L12 2zm0 2.3L4 8.9v8.3l8 4.6 8-4.6V8.9L12 4.3z" />
//       </svg>
//     ),
//   },
//   {
//     name: "Express.js",
//     category: "backend",
//     level: 86,
//     tag: "Backend Framework",
//     description: "Middleware, Route Handling, Error Handling, Controller Patterns",
//     svg: (
//       <svg className="w-6 h-6 text-slate-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//         <path d="M4 12h16M12 4v16" strokeLinecap="round" />
//       </svg>
//     ),
//   },
//   {
//     name: "MongoDB",
//     category: "backend",
//     level: 84,
//     tag: "NoSQL Database",
//     description: "Mongoose ODM, Schema Design, Aggregation Pipelines, Indexing",
//     svg: (
//       <svg className="w-6 h-6 text-green-500" viewBox="0 0 24 24" fill="currentColor">
//         <path d="M12 2c0 0-6 7.5-6 12.5 0 3.3 2.7 6 6 6s6-2.7 6-6C18 9.5 12 2 12 2zm0 16.5c-2.2 0-4-1.8-4-4 0-2.8 3-7.2 4-8.6 1 1.4 4 5.8 4 8.6 0 2.2-1.8 4-4 4z" />
//       </svg>
//     ),
//   },
//   {
//     name: "JWT Authentication",
//     category: "backend",
//     level: 90,
//     tag: "Security",
//     description: "Bearer Tokens, Role-Based Access Control (RBAC), Cookie/Session Management",
//     svg: (
//       <svg className="w-6 h-6 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//         <path d="M12 2a5 5 0 00-5 5v3H6a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2v-8a2 2 0 00-2-2h-1V7a5 5 0 00-5-5zm-3 5a3 3 0 016 0v3H9V7z" />
//       </svg>
//     ),
//   },
//   {
//     name: "Git & GitHub",
//     category: "tools",
//     level: 88,
//     tag: "Version Control",
//     description: "Branching Strategies, Pull Requests, Merge Conflict Resolution",
//     svg: (
//       <svg className="w-6 h-6 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
//         <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
//       </svg>
//     ),
//   },
//   {
//     name: "Postman / REST Tools",
//     category: "tools",
//     level: 90,
//     tag: "API Testing",
//     description: "API Testing, Environment Variables, Automated Endpoint Collections",
//     svg: (
//       <svg className="w-6 h-6 text-orange-400" viewBox="0 0 24 24" fill="currentColor">
//         <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
//       </svg>
//     ),
//   },
// ];

// function Skills() {
//   const [activeTab, setActiveTab] = useState("all");

//   const filteredSkills =
//     activeTab === "all"
//       ? skillsData
//       : skillsData.filter((skill) => skill.category === activeTab);

//   return (
//     <div>
//         <Header />
//     <section className="min-h-screen bg-slate-950 text-slate-100 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
//       {/* Background Glow Elements */}
//       <div className="absolute top-1/3 -left-20 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
//       <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

//       <div className="max-w-7xl mx-auto relative z-10 space-y-12">
//         {/* Header Title Section */}
//         <div className="text-center max-w-3xl mx-auto space-y-4">
//           <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wide uppercase">
//             <Sparkles size={14} />
//             <span>Technical Capabilities</span>
//           </div>
//           <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
//             Skills & Core Technologies
//           </h1>
//           <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
//             A comprehensive breakdown of my full-stack web development stack, frameworks, and workflow tools.
//           </p>
//         </div>

//         {/* Highlight Summary Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
//           <div className="bg-slate-900/60 border border-slate-800 backdrop-blur-xl p-5 rounded-2xl text-center space-y-1 shadow-lg">
//             <h3 className="text-2xl font-bold text-indigo-400">MERN Stack</h3>
//             <p className="text-xs text-slate-400">Primary Specialization</p>
//           </div>
//           <div className="bg-slate-900/60 border border-slate-800 backdrop-blur-xl p-5 rounded-2xl text-center space-y-1 shadow-lg">
//             <h3 className="text-2xl font-bold text-violet-400">REST & Auth</h3>
//             <p className="text-xs text-slate-400">Secure API Engineering</p>
//           </div>
//           <div className="bg-slate-900/60 border border-slate-800 backdrop-blur-xl p-5 rounded-2xl text-center space-y-1 shadow-lg">
//             <h3 className="text-2xl font-bold text-cyan-400">Responsive UI</h3>
//             <p className="text-xs text-slate-400">Tailwind & React Workflows</p>
//           </div>
//         </div>

//         {/* Filter Navigation Tabs */}
//         <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
//           {skillCategories.map((tab) => {
//             const Icon = tab.icon;
//             const isActive = activeTab === tab.id;
//             return (
//               <button
//                 key={tab.id}
//                 onClick={() => setActiveTab(tab.id)}
//                 className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
//                   isActive
//                     ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
//                     : "bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700"
//                 }`}
//               >
//                 <Icon size={16} />
//                 <span>{tab.label}</span>
//               </button>
//             );
//           })}
//         </div>

//         {/* Skills Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {filteredSkills.map((skill, idx) => (
//             <div
//               key={idx}
//               className="group bg-slate-900/50 border border-slate-800/80 hover:border-slate-700/80 rounded-2xl p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 shadow-lg flex flex-col justify-between"
//             >
//               <div className="space-y-4">
//                 {/* Header Row */}
//                 <div className="flex items-start justify-between gap-4">
//                   <div className="flex items-center gap-3">
//                     <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 group-hover:border-indigo-500/40 transition-colors shadow-inner">
//                       {skill.svg}
//                     </div>
//                     <div>
//                       <h2 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">
//                         {skill.name}
//                       </h2>
//                       <span className="text-[11px] font-medium text-slate-400">
//                         {skill.tag}
//                       </span>
//                     </div>
//                   </div>

//                   <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
//                     {skill.level}%
//                   </span>
//                 </div>

//                 {/* Skill Description */}
//                 <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
//                   {skill.description}
//                 </p>
//               </div>

//               {/* Progress Bar Footer */}
//               <div className="pt-5 mt-4 border-t border-slate-800/60 space-y-1.5">
//                 <div className="flex justify-between items-center text-[11px] text-slate-400 font-medium">
//                   <span>Proficiency Level</span>
//                   <span>{skill.level}%</span>
//                 </div>
//                 <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-800/80">
//                   <div
//                     className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full transition-all duration-500"
//                     style={{ width: `${skill.level}%` }}
//                   />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//     <Footer />
//     </div>
//   );
// }

// export default Skills;

import React, { useState } from "react";
import { Sparkles, Code, Server, Wrench, Cpu } from "lucide-react";
import Footer from "./Footer";
import Header from "./Header";

// Category Data & Icons
const skillCategories = [
  { id: "all", label: "All Skills", icon: Cpu },
  { id: "frontend", label: "Frontend", icon: Code },
  { id: "backend", label: "Backend & DB", icon: Server },
  { id: "tools", label: "Tools & DevOps", icon: Wrench },
];

// Tech Stack Items with SVG Logos
const skillsData = [
  {
    name: "React.js",
    category: "frontend",
    level: 92,
    tag: "Core Library",
    description: "Component Architecture, Hooks, Custom Hooks, Performance Optimization",
    svg: (
      <svg className="w-6 h-6 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="2" fill="currentColor" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
      </svg>
    ),
  },
  {
    name: "Redux / Redux Toolkit",
    category: "frontend",
    level: 85,
    tag: "State Management",
    description: "Global State Management, Async Thunks, RTK Query",
    svg: (
      <svg className="w-6 h-6 text-purple-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16.5 6a4.5 4.5 0 100 9 4.5 4.5 0 000-9zM7.5 9a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm9 6a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    level: 95,
    tag: "Styling Framework",
    description: "Responsive Layouts, Custom Themes, Dark Mode, Animations",
    svg: (
      <svg className="w-6 h-6 text-sky-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    ),
  },
  {
    name: "JavaScript (ES6+)",
    category: "frontend",
    level: 90,
    tag: "Programming Language",
    description: "Async/Await, Promises, Closures, DOM Manipulation, Event Loop",
    svg: (
      <svg className="w-6 h-6 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 3h18v18H3V3zm11.5 13.5c.35.58.9 1 1.7 1 1.1 0 1.8-.6 1.8-1.8v-5.2h2.2v5.3c0 2.3-1.4 3.4-3.8 3.4-1.9 0-3.1-.9-3.7-2.1l1.8-1.1zm-6.1.1c.4.6 1 1 1.8 1 .8 0 1.3-.4 1.3-1 0-.6-.4-.9-1.4-1.3l-.6-.2c-1.6-.7-2.4-1.5-2.4-3 0-2.1 1.7-3.3 4.1-3.3 1.8 0 3 .7 3.6 1.8l-1.7 1.1c-.3-.5-.7-.8-1.5-.8s-1.2.3-1.2.8c0 .5.3.8 1.3 1.2l.6.2c1.8.7 2.6 1.6 2.6 3.1 0 2.2-1.7 3.4-4.3 3.4-2.2 0-3.6-.9-4.2-2.3l1.9-1.0z" />
      </svg>
    ),
  },
  {
    name: "Node.js",
    category: "backend",
    level: 88,
    tag: "Runtime Environment",
    description: "RESTful APIs, Asynchronous Execution, Event-Driven Architecture",
    svg: (
      <svg className="w-6 h-6 text-emerald-500" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l10 5.8v11.5L12 22 2 19.3V7.8L12 2zm0 2.3L4 8.9v8.3l8 4.6 8-4.6V8.9L12 4.3z" />
      </svg>
    ),
  },
  {
    name: "Express.js",
    category: "backend",
    level: 86,
    tag: "Backend Framework",
    description: "Middleware, Route Handling, Error Handling, Controller Patterns",
    svg: (
      <svg className="w-6 h-6 text-slate-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 12h16M12 4v16" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "MongoDB",
    category: "backend",
    level: 84,
    tag: "NoSQL Database",
    description: "Mongoose ODM, Schema Design, Aggregation Pipelines, Indexing",
    svg: (
      <svg className="w-6 h-6 text-green-500" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2c0 0-6 7.5-6 12.5 0 3.3 2.7 6 6 6s6-2.7 6-6C18 9.5 12 2 12 2zm0 16.5c-2.2 0-4-1.8-4-4 0-2.8 3-7.2 4-8.6 1 1.4 4 5.8 4 8.6 0 2.2-1.8 4-4 4z" />
      </svg>
    ),
  },
  {
    name: "JWT Authentication",
    category: "backend",
    level: 90,
    tag: "Security",
    description: "Bearer Tokens, Role-Based Access Control (RBAC), Cookie/Session Management",
    svg: (
      <svg className="w-6 h-6 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2a5 5 0 00-5 5v3H6a2 2 0 00-2 2v8a2 2 0 002 h12a2 2 0 002-2v-8a2 2 0 00-2-2h-1V7a5 5 0 00-5-5zm-3 5a3 3 0 016 0v3H9V7z" />
      </svg>
    ),
  },
  {
    name: "Docker",
    category: "tools",
    level: 80,
    tag: "Containerization",
    description: "Dockerfiles, Docker Compose, Multi-stage Builds, Container Management",
    svg: (
      <svg className="w-6 h-6 text-sky-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.98 11.08h1.83v1.83h-1.83zm-2.4 0h1.83v1.83h-1.83zm-2.4 0h1.83v1.83H9.18zm-2.4 0h1.83v1.83H6.78zm4.8-2.4h1.83v1.83h-1.83zm-2.4 0h1.83v1.83H9.18zm-2.4 0h1.83v1.83H6.78zm2.4-2.4h1.83v1.83H9.18zm13.3 5.38c-.36-.26-1.48-.95-3.08-.85-.16-.62-.51-1.2-1.01-1.63l-.4-.32-.27.42c-.44.7-.6 1.55-.45 2.37-.32.09-.65.23-.97.41H1.5v1.83c0 2.21 1.79 4 4 4h.61c.88 1.48 2.48 2.45 4.28 2.45 2.68 0 4.93-1.81 5.56-4.28 2.27-.08 4.23-1.39 5.25-3.32l.24-.46-.64-.22z" />
      </svg>
    ),
  },
  {
    name: "Linux / Bash",
    category: "tools",
    level: 82,
    tag: "OS & CLI",
    description: "Shell Scripting, File Permissions, Environment Setup, Package Management",
    svg: (
      <svg className="w-6 h-6 text-yellow-500" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C9.5 2 7.5 4 7.5 6.5c0 1.2.4 2.3 1.2 3.1C7.2 10.8 6 12.8 6 15c0 2.8 2.2 5 5 5h2c2.8 0 5-2.2 5-5 0-2.2-1.2-4.2-2.7-5.4.8-.8 1.2-1.9 1.2-3.1C16.5 4 14.5 2 12 2zm-1.5 4a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2zm-3.5 9a1.5 1.5 0 013 0h-3z" />
      </svg>
    ),
  },
  {
    name: "Git & GitHub",
    category: "tools",
    level: 88,
    tag: "Version Control",
    description: "Branching Strategies, Pull Requests, Merge Conflict Resolution",
    svg: (
      <svg className="w-6 h-6 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    name: "Postman / REST Tools",
    category: "tools",
    level: 90,
    tag: "API Testing",
    description: "API Testing, Environment Variables, Automated Endpoint Collections",
    svg: (
      <svg className="w-6 h-6 text-orange-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
];

function Skills() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredSkills =
    activeTab === "all"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeTab);

  return (
    <div className="bg-slate-950">
        <Header />
    <section className="min-h-screen  bg-slate-950 text-slate-100 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Glow Elements */}
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mt-10 max-w-7xl mx-auto relative z-10 space-y-12">
        {/* Header Title Section */}
        <div className="mt-10 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wide uppercase">
            <Sparkles size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            Skills & Core Technologies
          </h1>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A comprehensive breakdown of my full-stack web development stack, frameworks, and workflow tools.
          </p>
        </div>

        {/* Highlight Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <div className="bg-slate-900/60 border border-slate-800 backdrop-blur-xl p-5 rounded-2xl text-center space-y-1 shadow-lg">
            <h3 className="text-2xl font-bold text-indigo-400">MERN Stack</h3>
            <p className="text-xs text-slate-400">Primary Specialization</p>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 backdrop-blur-xl p-5 rounded-2xl text-center space-y-1 shadow-lg">
            <h3 className="text-2xl font-bold text-violet-400">REST & Auth</h3>
            <p className="text-xs text-slate-400">Secure API Engineering</p>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 backdrop-blur-xl p-5 rounded-2xl text-center space-y-1 shadow-lg">
            <h3 className="text-2xl font-bold text-cyan-400">DevOps & Tools</h3>
            <p className="text-xs text-slate-400">Docker, Linux, Git Workflows</p>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {skillCategories.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                    : "bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700"
                }`}
              >
                <Icon size={16} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className="group bg-slate-900/50 border border-slate-800/80 hover:border-slate-700/80 rounded-2xl p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 shadow-lg flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Header Row */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 group-hover:border-indigo-500/40 transition-colors shadow-inner">
                      {skill.svg}
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">
                        {skill.name}
                      </h2>
                      <span className="text-[11px] font-medium text-slate-400">
                        {skill.tag}
                      </span>
                    </div>
                  </div>

                  <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    {skill.level}%
                  </span>
                </div>

                {/* Skill Description */}
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {skill.description}
                </p>
              </div>

              {/* Progress Bar Footer */}
              <div className="pt-5 mt-4 border-t border-slate-800/60 space-y-1.5">
                <div className="flex justify-between items-center text-[11px] text-slate-400 font-medium">
                  <span>Proficiency Level</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-800/80">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
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

export default Skills;