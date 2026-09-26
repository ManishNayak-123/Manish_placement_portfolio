

// import React, { useState } from "react";
// import { useNavigate } from "react-router"; // MUST be 'react-router-dom'
// import {
//   ArrowRight,
//   Code2,
//   Database,
//   Layout,
//   Terminal,
//   ExternalLink,
//   FolderGit2,
//   Send,
//   Cpu,
//   CheckCircle2,
//   Sparkles,
//   Layers,
//   ShieldCheck,
//   Zap,
//   GitBranch,
//   X // Added X icon to close modal
// } from "lucide-react";
// import Header from "./Header";
// import Footer from "./Footer";
// import SignUp from "./SignUP";
// // import SignUp from "./SignUp"; // Import your SignUp component/modal

// function Home() {
//   const navigate = useNavigate();

//   // State to manage SignUp modal visibility
//   const [showSignUpModal, setShowSignUpModal] = useState(false);

//   // Handle protected navigation for "Explore Projects" & "For More Projects"
//   const handleMoreProjectsClick = (e) => {
//     e.preventDefault();

//     // Check authentication token or user object in localStorage
//     const isAuthenticated = localStorage.getItem("token") || localStorage.getItem("user");

//     if (isAuthenticated) {
//       navigate("/projects");
//     } else {
//       // Open SignUp Modal overlay directly on Home page
//       setShowSignUpModal(true);
//     }
//   };

//   const techStack = [
//     { name: "React.js", category: "Frontend", level: "Advanced" },
//     { name: "Node.js", category: "Backend", level: "Advanced" },
//     { name: "Express.js", category: "Backend Architecture", level: "Advanced" },
//     { name: "MongoDB", category: "Database", level: "Intermediate" },
//     { name: "Tailwind CSS", category: "Styling & UI", level: "Advanced" },
//     { name: "Redux Toolkit", category: "State Management", level: "Intermediate" },
//     { name: "JavaScript (ES6+)", category: "Core Language", level: "Advanced" },
//     { name: "RESTful APIs", category: "Integration", level: "Advanced" },
//   ];

//   const featuredProjects = [
//     {
//       title: "JiViKa - Recruitment & Job Portal",
//       description:
//         "Full-stack web application featuring role-based dashboards for candidates and recruiters, token authentication, and real-time application processing.",
//       tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Redux"],
//       github: "https://github.com/manishnayak-123",
//       live: "https://final-year-srgc-project-1.onrender.com",
//       featured: true,
//     },
//     {
//       title: "Manish Portfolio",
//       description:
//         "It is my portfolio and it will give my complete introduction.",
//       tags: ["React", "Tailwind CSS", "REST API", "Debounce"],
//       github: "https://github.com/manishnayak-123",
//       live: "https://portfolio-manish-57z3.vercel.app",
//       featured: false,
//     },
//   ];

//   const capabilities = [
//     {
//       icon: <Layout className="text-indigo-400" size={26} />,
//       title: "Frontend Development",
//       description:
//         "Creating fluid, responsive single-page interfaces using React and Tailwind CSS with strict attention to accessibility and performance.",
//     },
//     {
//       icon: <Database className="text-violet-400" size={26} />,
//       title: "Backend Architecture",
//       description:
//         "Designing scalable REST web services, secure authentication workflows (JWT), and efficient MongoDB database schemas with Express and Node.",
//     },
//     {
//       icon: <Cpu className="text-sky-400" size={26} />,
//       title: "Full-Stack Integration",
//       description:
//         "Connecting modern frontend components with secure backend endpoints, structured state management (Redux), and third-party APIs.",
//     },
//   ];

//   return (
//     <div className="relative">
//       <Header />
//       <main className="bg-slate-950 text-slate-100 font-sans min-h-screen overflow-x-hidden">
        
//         {/* HERO SECTION */}
//         <section className="relative py-20 lg:py-32 border-b border-slate-800/80 overflow-hidden">
//           <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none"></div>
//           <div className="absolute bottom-10 right-10 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl pointer-events-none"></div>

//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//             <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
//               <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
//                 <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs sm:text-sm font-medium">
//                   <Sparkles size={15} />
//                   Full-Stack Web Developer (MERN Stack)
//                 </div>

//                 <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
//                   Architecting Modern, Scalable &{" "}
//                   <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-sky-400 bg-clip-text text-transparent">
//                     Interactive Web Solutions
//                   </span>
//                 </h1>

//                 <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
//                   Specializing in building production-ready web applications, responsive user interfaces, and robust backend microservices.
//                 </p>

//                 {/* Action Buttons */}
//                 <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
//                   <button
//                     onClick={handleMoreProjectsClick}
//                     className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 transition-all flex items-center gap-2 group cursor-pointer"
//                   >
//                     <span>Explore Projects</span>
//                     <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
//                   </button>
//                   <a
//                     href="/contact"
//                     className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 text-sm font-semibold transition-all flex items-center gap-2"
//                   >
//                     <Send size={18} />
//                     <span>Contact Me</span>
//                   </a>
//                 </div>

//                 <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-800/80 max-w-md mx-auto lg:mx-0">
//                   <div>
//                     <h2 className="text-2xl sm:text-3xl font-extrabold text-white">10+</h2>
//                     <p className="text-xs text-slate-400 mt-1">Projects Built</p>
//                   </div>
//                   <div>
//                     <h2 className="text-2xl sm:text-3xl font-extrabold text-white">MERN</h2>
//                     <p className="text-xs text-slate-400 mt-1">Core Tech Stack</p>
//                   </div>
//                   <div>
//                     <h2 className="text-2xl sm:text-3xl font-extrabold text-white">100%</h2>
//                     <p className="text-xs text-slate-400 mt-1">Responsive Code</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Terminal Card */}
//               <div className="lg:col-span-5">
//                 <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
//                   <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
//                     <div className="flex items-center space-x-2">
//                       <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
//                       <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
//                       <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
//                     </div>
//                     <span className="text-slate-500 text-xs flex items-center gap-1">
//                       <Terminal size={14} /> developer.config.js
//                     </span>
//                   </div>

//                   <div className="p-5 space-y-3 text-slate-300">
//                     <p>
//                       <span className="text-indigo-400">const</span> <span className="text-yellow-300">engineer</span> = &#123;
//                     </p>
//                     <p className="pl-4">
//                       name: <span className="text-emerald-400">'Full-Stack Engineer'</span>,
//                     </p>
//                     <p className="pl-4">
//                       stack: [<span className="text-emerald-400">'React'</span>, <span className="text-emerald-400">'Node'</span>, <span className="text-emerald-400">'Express'</span>, <span className="text-emerald-400">'MongoDB'</span>],
//                     </p>
//                     <p className="pl-4">
//                       styling: <span className="text-emerald-400">'Tailwind CSS'</span>,
//                     </p>
//                     <p className="pl-4">
//                       architecture: <span className="text-emerald-400">'REST API & JWT'</span>,
//                     </p>
//                     <p>&#125;;</p>

//                     <div className="pt-2 text-slate-500 flex items-center gap-2">
//                       <span className="text-emerald-400">❯</span> npm run build:portfolio
//                     </div>
//                     <p className="text-indigo-400 animate-pulse">
//                       ✔ Optimized build completed successfully...
//                     </p>
//                   </div>
//                 </div>
//               </div>

//             </div>
//           </div>
//         </section>

//         {/* CAPABILITIES SECTION */}
//         <section className="py-20 border-b border-slate-800/80 bg-slate-950/50">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center max-w-2xl mx-auto mb-16">
//               <h2 className="text-xs uppercase tracking-widest text-indigo-400 font-semibold mb-2">Services & Capabilities</h2>
//               <p className="text-3xl font-extrabold text-white">Engineered for Performance</p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               {capabilities.map((item, index) => (
//                 <div
//                   key={index}
//                   className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/50 transition-all duration-300 group hover:-translate-y-1"
//                 >
//                   <div className="p-3.5 rounded-xl bg-slate-800/80 w-fit mb-6 group-hover:scale-110 transition-transform">
//                     {item.icon}
//                   </div>
//                   <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
//                   <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* FEATURED PROJECTS */}
//         <section id="projects" className="py-20 border-b border-slate-800/80">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
//               <div>
//                 <h2 className="text-xs uppercase tracking-widest text-indigo-400 font-semibold mb-2">Selected Works</h2>
//                 <p className="text-3xl font-extrabold text-white">Featured Projects</p>
//               </div>
//               <p className="text-slate-400 text-sm max-w-md">
//                 A collection of full-stack applications showcasing database integration, custom UI interfaces, and state management.
//               </p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {featuredProjects.map((project, index) => (
//                 <div
//                   key={index}
//                   className="rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
//                 >
//                   <div className="p-6 space-y-4">
//                     <div className="flex items-center justify-between">
//                       <div className="p-2.5 rounded-xl bg-indigo-600/10 text-indigo-400">
//                         <svg
//                           className="w-5 h-5 fill-none stroke-current"
//                           viewBox="0 0 24 24"
//                           strokeWidth="2"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         >
//                           <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
//                           <path d="m10 12-2 2 2 2" />
//                           <path d="m14 12 2 2-2 2" />
//                         </svg>
//                       </div>
//                       {project.featured && (
//                         <span className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
//                           Featured App
//                         </span>
//                       )}
//                     </div>

//                     <h3 className="text-xl font-bold text-white hover:text-indigo-400 transition-colors">
//                       {project.title}
//                     </h3>

//                     <p className="text-slate-400 text-sm leading-relaxed">
//                       {project.description}
//                     </p>
//                   </div>

//                   <div className="p-6 pt-0 space-y-6">
//                     <div className="flex flex-wrap gap-2">
//                       {project.tags.map((tag, tIdx) => (
//                         <span
//                           key={tIdx}
//                           className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-slate-300 text-xs font-mono"
//                         >
//                           {tag}
//                         </span>
//                       ))}
//                     </div>

//                     <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80">
//                       <a
//                         href={project.github}
//                         target="_blank"
//                         rel="noreferrer"
//                         className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors"
//                       >
//                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                           <polyline points="16 18 22 12 16 6"/>
//                           <polyline points="8 6 2 12 8 18"/>
//                         </svg>
//                         Code
//                       </a>
//                       <a
//                         href={project.live}
//                         target="_blank"
//                         rel="noreferrer"
//                         className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1.5 transition-colors"
//                       >
//                         <ExternalLink size={16} /> Live Preview
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* PROTECTED "FOR MORE PROJECTS" BUTTON */}
//             <div className="flex justify-center pt-8">
//               <button
//                 type="button"
//                 onClick={handleMoreProjectsClick}
//                 className="group relative inline-flex items-center gap-3 px-7 py-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-slate-200 text-sm font-semibold tracking-wide shadow-lg shadow-indigo-950/30 overflow-hidden transition-all duration-300 hover:border-indigo-500/50 hover:text-white hover:shadow-indigo-500/20 active:scale-95 cursor-pointer"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 via-violet-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
//                 <FolderGit2 size={18} className="text-indigo-400 group-hover:rotate-12 transition-transform duration-300" />
//                 <span>For More Projects</span>
//                 <ArrowRight
//                   size={18}
//                   className="text-slate-400 group-hover:text-indigo-400 group-hover:translate-x-1.5 transition-all duration-300"
//                 />
//               </button>
//             </div>

//           </div>
//         </section>

//         {/* TECH STACK SECTION */}
//         <section className="py-20 border-b border-slate-800/80 bg-slate-950/50">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center max-w-2xl mx-auto mb-16">
//               <h2 className="text-xs uppercase tracking-widest text-indigo-400 font-semibold mb-2">Technologies</h2>
//               <p className="text-3xl font-extrabold text-white">Skills & Stack</p>
//             </div>

//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
//               {techStack.map((tech, index) => (
//                 <div
//                   key={index}
//                   className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center gap-3 hover:border-slate-700 transition-all"
//                 >
//                   <CheckCircle2 size={18} className="text-indigo-400 shrink-0" />
//                   <div>
//                     <h4 className="text-sm font-semibold text-white">{tech.name}</h4>
//                     <p className="text-[11px] text-slate-500">{tech.category}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* CONTACT BANNER */}
//         <section id="contact" className="py-20 relative overflow-hidden">
//           <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-tr from-indigo-950/60 via-slate-900 to-slate-900 border border-indigo-500/20 text-center space-y-6 shadow-2xl relative">
//               <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
//                 Ready to Build Something Impactful?
//               </h2>
//               <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
//                 Open to full-time engineering roles, freelance opportunities, and technical collaborations.
//               </p>
//               <div className="pt-2">
//                 <a
//                   href="mailto:contact@example.com"
//                   className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-xl shadow-indigo-600/30 transition-all hover:scale-105"
//                 >
//                   <Send size={18} />
//                   <span>Get in Touch</span>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </section>

//       </main>
//       <Footer />

//       {/* SIGNUP MODAL OVERLAY */}
//       {showSignUpModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
//           <div className="relative w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl">
//             <button
//               onClick={() => setShowSignUpModal(false)}
//               className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
//             >
//               <X size={20} />
//             </button>
//             <SignUp onClose={() => setShowSignUpModal(false)} />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Home;

import React, { useState } from "react";
import { useNavigate } from "react-router"; // Fixed react-router import
import {
  ArrowRight,
  Code2,
  Database,
  Layout,
  Terminal,
  ExternalLink,
  FolderGit2,
  Send,
  Cpu,
  CheckCircle2,
  Sparkles,
  Layers,
  ShieldCheck,
  Zap,
  GitBranch,
  X
} from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import SignUp from "./SignUP";
import Login from "./Login"; // Import your Login component/modal

function Home() {
  const navigate = useNavigate();

  // Unified modal state: "signup" | "login" | null
  const [authModalMode, setAuthModalMode] = useState(null);

  // Handle protected navigation for "Explore Projects" & "For More Projects"
  const handleMoreProjectsClick = (e) => {
    e.preventDefault();

    // Check authentication token or user object in localStorage
    const isAuthenticated = localStorage.getItem("token") || localStorage.getItem("user");

    if (isAuthenticated) {
      navigate("/projects");
    } else {
      // Open SignUp Modal overlay directly on Home page
      setAuthModalMode("signup");
    }
  };

  const closeModal = () => setAuthModalMode(null);

  const techStack = [
    { name: "React.js", category: "Frontend", level: "Advanced" },
    { name: "Node.js", category: "Backend", level: "Advanced" },
    { name: "Express.js", category: "Backend Architecture", level: "Advanced" },
    { name: "MongoDB", category: "Database", level: "Intermediate" },
    { name: "Tailwind CSS", category: "Styling & UI", level: "Advanced" },
    { name: "Redux Toolkit", category: "State Management", level: "Intermediate" },
    { name: "JavaScript (ES6+)", category: "Core Language", level: "Advanced" },
    { name: "RESTful APIs", category: "Integration", level: "Advanced" },
  ];

  const featuredProjects = [
    {
      title: "JiViKa - Recruitment & Job Portal",
      description:
        "Full-stack web application featuring role-based dashboards for candidates and recruiters, token authentication, and real-time application processing.",
      tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Redux"],
      github: "https://github.com/manishnayak-123",
      live: "https://final-year-srgc-project-1.onrender.com",
      featured: true,
    },
    {
      title: "Manish Portfolio",
      description:
        "It is my portfolio and it will give my complete introduction.",
      tags: ["React", "Tailwind CSS", "REST API", "Debounce"],
      github: "https://github.com/manishnayak-123",
      live: "https://portfolio-manish-57z3.vercel.app",
      featured: false,
    },
  ];

  const capabilities = [
    {
      icon: <Layout className="text-indigo-400" size={26} />,
      title: "Frontend Development",
      description:
        "Creating fluid, responsive single-page interfaces using React and Tailwind CSS with strict attention to accessibility and performance.",
    },
    {
      icon: <Database className="text-violet-400" size={26} />,
      title: "Backend Architecture",
      description:
        "Designing scalable REST web services, secure authentication workflows (JWT), and efficient MongoDB database schemas with Express and Node.",
    },
    {
      icon: <Cpu className="text-sky-400" size={26} />,
      title: "Full-Stack Integration",
      description:
        "Connecting modern frontend components with secure backend endpoints, structured state management (Redux), and third-party APIs.",
    },
  ];

  return (
    <div className="relative">
      <Header />
      <main className="bg-slate-950 text-slate-100 font-sans min-h-screen overflow-x-hidden">
        
        {/* HERO SECTION */}
        <section className="relative py-20 lg:py-32 border-b border-slate-800/80 overflow-hidden">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs sm:text-sm font-medium">
                  <Sparkles size={15} />
                  Full-Stack Web Developer (MERN Stack)
                </div>

                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  Architecting Modern, Scalable &{" "}
                  <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-sky-400 bg-clip-text text-transparent">
                    Interactive Web Solutions
                  </span>
                </h1>

                <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Specializing in building production-ready web applications, responsive user interfaces, and robust backend microservices.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
                  <button
                    onClick={handleMoreProjectsClick}
                    className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 transition-all flex items-center gap-2 group cursor-pointer"
                  >
                    <span>Explore Projects</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <a
                    href="/contact"
                    className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 text-sm font-semibold transition-all flex items-center gap-2"
                  >
                    <Send size={18} />
                    <span>Contact Me</span>
                  </a>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-800/80 max-w-md mx-auto lg:mx-0">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white">10+</h2>
                    <p className="text-xs text-slate-400 mt-1">Projects Built</p>
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white">MERN</h2>
                    <p className="text-xs text-slate-400 mt-1">Core Tech Stack</p>
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white">100%</h2>
                    <p className="text-xs text-slate-400 mt-1">Responsive Code</p>
                  </div>
                </div>
              </div>

              {/* Terminal Card */}
              <div className="lg:col-span-5">
                <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
                  <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                      <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
                      <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
                    </div>
                    <span className="text-slate-500 text-xs flex items-center gap-1">
                      <Terminal size={14} /> developer.config.js
                    </span>
                  </div>

                  <div className="p-5 space-y-3 text-slate-300">
                    <p>
                      <span className="text-indigo-400">const</span> <span className="text-yellow-300">engineer</span> = &#123;
                    </p>
                    <p className="pl-4">
                      name: <span className="text-emerald-400">'Full-Stack Engineer'</span>,
                    </p>
                    <p className="pl-4">
                      stack: [<span className="text-emerald-400">'React'</span>, <span className="text-emerald-400">'Node'</span>, <span className="text-emerald-400">'Express'</span>, <span className="text-emerald-400">'MongoDB'</span>],
                    </p>
                    <p className="pl-4">
                      styling: <span className="text-emerald-400">'Tailwind CSS'</span>,
                    </p>
                    <p className="pl-4">
                      architecture: <span className="text-emerald-400">'REST API & JWT'</span>,
                    </p>
                    <p>&#125;;</p>

                    <div className="pt-2 text-slate-500 flex items-center gap-2">
                      <span className="text-emerald-400">❯</span> npm run build:portfolio
                    </div>
                    <p className="text-indigo-400 animate-pulse">
                      ✔ Optimized build completed successfully...
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CAPABILITIES SECTION */}
        <section className="py-20 border-b border-slate-800/80 bg-slate-950/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-xs uppercase tracking-widest text-indigo-400 font-semibold mb-2">Services & Capabilities</h2>
              <p className="text-3xl font-extrabold text-white">Engineered for Performance</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {capabilities.map((item, index) => (
                <div
                  key={index}
                  className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/50 transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="p-3.5 rounded-xl bg-slate-800/80 w-fit mb-6 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURED PROJECTS */}
        <section id="projects" className="py-20 border-b border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
              <div>
                <h2 className="text-xs uppercase tracking-widest text-indigo-400 font-semibold mb-2">Selected Works</h2>
                <p className="text-3xl font-extrabold text-white">Featured Projects</p>
              </div>
              <p className="text-slate-400 text-sm max-w-md">
                A collection of full-stack applications showcasing database integration, custom UI interfaces, and state management.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="p-2.5 rounded-xl bg-indigo-600/10 text-indigo-400">
                        <svg
                          className="w-5 h-5 fill-none stroke-current"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
                          <path d="m10 12-2 2 2 2" />
                          <path d="m14 12 2 2-2 2" />
                        </svg>
                      </div>
                      {project.featured && (
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                          Featured App
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-white hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-slate-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="p-6 pt-0 space-y-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-slate-300 text-xs font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="16 18 22 12 16 6"/>
                          <polyline points="8 6 2 12 8 18"/>
                        </svg>
                        Code
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1.5 transition-colors"
                      >
                        <ExternalLink size={16} /> Live Preview
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* PROTECTED "FOR MORE PROJECTS" BUTTON */}
            <div className="flex justify-center pt-8">
              <button
                type="button"
                onClick={handleMoreProjectsClick}
                className="group relative inline-flex items-center gap-3 px-7 py-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-slate-200 text-sm font-semibold tracking-wide shadow-lg shadow-indigo-950/30 overflow-hidden transition-all duration-300 hover:border-indigo-500/50 hover:text-white hover:shadow-indigo-500/20 active:scale-95 cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 via-violet-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <FolderGit2 size={18} className="text-indigo-400 group-hover:rotate-12 transition-transform duration-300" />
                <span>For More Projects</span>
                <ArrowRight
                  size={18}
                  className="text-slate-400 group-hover:text-indigo-400 group-hover:translate-x-1.5 transition-all duration-300"
                />
              </button>
            </div>

          </div>
        </section>

        {/* TECH STACK SECTION */}
        <section className="py-20 border-b border-slate-800/80 bg-slate-950/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-xs uppercase tracking-widest text-indigo-400 font-semibold mb-2">Technologies</h2>
              <p className="text-3xl font-extrabold text-white">Skills & Stack</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center gap-3 hover:border-slate-700 transition-all"
                >
                  <CheckCircle2 size={18} className="text-indigo-400 shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">{tech.name}</h4>
                    <p className="text-[11px] text-slate-500">{tech.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT BANNER */}
        <section id="contact" className="py-20 relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-tr from-indigo-950/60 via-slate-900 to-slate-900 border border-indigo-500/20 text-center space-y-6 shadow-2xl relative">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Ready to Build Something Impactful?
              </h2>
              <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
                Open to full-time engineering roles, freelance opportunities, and technical collaborations.
              </p>
              <div className="pt-2">
                <a
                  href="mailto:contact@example.com"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-xl shadow-indigo-600/30 transition-all hover:scale-105"
                >
                  <Send size={18} />
                  <span>Get in Touch</span>
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />

      {/* SHARED AUTH MODAL OVERLAY (FOR BOTH SIGNUP AND LOGIN) */}
      {authModalMode && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>

            {authModalMode === "signup" ? (
              <SignUp
                onClose={closeModal}
                onSwitchToLogin={() => setAuthModalMode("login")}
              />
            ) : (
              <Login
                onClose={closeModal}
                onSwitchToSignUp={() => setAuthModalMode("signup")}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;