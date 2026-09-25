
// import React from "react";
// import { Sparkles, User, GraduationCap, Code2, Terminal, Briefcase, Download, FileText } from "lucide-react";
// import Footer from "./Footer";
// import Header from "./Header";

// function About() {
//   const highlights = [
//     {
//       icon: GraduationCap,
//       title: "Education",
//       desc: "Computer Science & Engineering",
//       color: "text-indigo-400",
//     },
//     {
//       icon: Code2,
//       title: "Specialization",
//       desc: "Full-Stack Web Development (MERN Stack)",
//       color: "text-violet-400",
//     },
//     {
//       icon: Terminal,
//       title: "Core Competencies",
//       desc: "REST APIs, Auth Systems, Docker & Linux",
//       color: "text-cyan-400",
//     },
//   ];

//   return (
//     <div>
//       <Header />
//       <section className="min-h-screen mt-15 bg-slate-950 text-slate-100 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
//         {/* Background Glow Elements */}
//         <div className="absolute top-1/4 -left-20 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
//         <div className="absolute bottom-1/3 -right-20 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

//         <div className="max-w-7xl mx-auto relative z-10 space-y-12">
//           {/* Header Title Section */}
//           <div className="text-center max-w-3xl mx-auto space-y-4">
//             <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wide uppercase">
//               <Sparkles size={14} />
//               <span>Get To Know Me</span>
//             </div>
//             <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
//               About Me
//             </h1>
//             <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
//               Passionate software developer focused on engineering scalable web applications, robust backends, and intuitive user experiences.
//             </p>

//             {/* Primary Download Resume Button in Header */}
//             <div className="pt-2">
//               <a
//                 href="/resume.pdf"
//                 download="Resume.pdf"
//                 className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all duration-200 shadow-lg shadow-indigo-600/30 cursor-pointer group"
//               >
//                 <Download size={18} className="group-hover:-translate-y-0.5 transition-transform" />
//                 <span>Download Resume</span>
//               </a>
//             </div>
//           </div>

//           {/* Content Layout */}
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
//             {/* Left Column: Profile Image & Bio Summary */}
//             <div className="lg:col-span-7 bg-slate-900/50 border border-slate-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-lg space-y-6 flex flex-col justify-between">
//               <div className="space-y-6">
                
//                 {/* Profile Header with Avatar Image */}
//                 <div className="flex items-center justify-between gap-4 flex-wrap pb-4 border-b border-slate-800/80">
//                   <div className="flex items-center gap-4">
//                     {/* Profile Image Frame */}
//                     <div className="relative group">
//                       <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-200" />
//                       <img
//                         src="/profile.jpg"
//                         alt="Profile"
//                         className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border border-slate-700 bg-slate-950 shadow-md"
//                         onError={(e) => {
//                           e.target.onerror = null;
//                           e.target.src = "https://ui-avatars.com/api/?name=Developer&background=020617&color=818cf8";
//                         }}
//                       />
//                     </div>

//                     <div>
//                       <h2 className="text-xl sm:text-2xl font-bold text-white">Full-Stack Developer</h2>
//                       <p className="text-xs sm:text-sm text-indigo-400 font-medium mt-0.5">MERN & DevOps Enthusiast</p>
//                     </div>
//                   </div>

//                   {/* Preview CV Link */}
//                   <a
//                     href="/resume.pdf"
//                     target="_blank"
//                     rel="noreferrer"
//                     className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-indigo-400 border border-slate-800 hover:border-indigo-500/40 bg-slate-950 px-3 py-2 rounded-xl transition-all"
//                   >
//                     <FileText size={14} />
//                     <span>Preview CV</span>
//                   </a>
//                 </div>

//                 {/* Bio Text */}
//                 <div className="space-y-3 text-slate-300 text-sm leading-relaxed">
//                   <p>
//                     Hello! I am a Computer Science student and full-stack web developer. I build production-ready applications using React, Node.js, Express, and MongoDB, styled with Tailwind CSS and powered by Redux state management.
//                   </p>
//                   <p>
//                     My focus includes engineering role-based JWT authentication systems, database schema designs, containerization using Docker, and hosting workflows on Linux servers.
//                   </p>
//                 </div>
//               </div>

//               {/* Quick Stat Highlights */}
//               <div className="grid grid-cols-3 gap-3 pt-6 border-t border-slate-800/80">
//                 <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-3 text-center">
//                   <h3 className="text-xl font-extrabold text-indigo-400">10+</h3>
//                   <p className="text-[11px] text-slate-400">Projects Built</p>
//                 </div>
//                 <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-3 text-center">
//                   <h3 className="text-xl font-extrabold text-violet-400">MERN</h3>
//                   <p className="text-[11px] text-slate-400">Core Stack</p>
//                 </div>
//                 <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-3 text-center">
//                   <h3 className="text-xl font-extrabold text-cyan-400">100%</h3>
//                   <p className="text-[11px] text-slate-400">Code Quality</p>
//                 </div>
//               </div>
//             </div>

//             {/* Right Column: Highlights & Focus Cards */}
//             <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
//               {highlights.map((item, idx) => {
//                 const Icon = item.icon;
//                 return (
//                   <div
//                     key={idx}
//                     className="bg-slate-900/50 border border-slate-800/80 rounded-2xl p-6 backdrop-blur-md shadow-lg flex items-start gap-4 transition-all hover:border-slate-700"
//                   >
//                     <div className={`p-3 rounded-xl bg-slate-950 border border-slate-800 ${item.color} shrink-0`}>
//                       <Icon size={22} />
//                     </div>
//                     <div>
//                       <h3 className="text-base font-bold text-white">{item.title}</h3>
//                       <p className="text-xs text-slate-400 mt-1 leading-relaxed">{item.desc}</p>
//                     </div>
//                   </div>
//                 );
//               })}

//               {/* Current Focus Banner */}
//               <div className="bg-gradient-to-r from-indigo-900/30 to-violet-900/30 border border-indigo-500/30 rounded-2xl p-5 text-center space-y-2">
//                 <div className="inline-flex items-center gap-2 text-indigo-300 text-xs font-semibold uppercase tracking-wider">
//                   <Briefcase size={14} />
//                   <span>Open for Opportunities</span>
//                 </div>
//                 <p className="text-xs text-slate-300">
//                   Currently exploring full-stack engineering roles, frontend projects, and software internships.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </div>
//   );
// }

// export default About;

import React, { useState } from "react";
import {
  Sparkles,
  GraduationCap,
  Code2,
  Terminal,
  Briefcase,
  Download,
  FileText,
  Award,
  ExternalLink,
  Eye,
  X,
  CheckCircle2,
} from "lucide-react";
import Footer from "./Footer";
import Header from "./Header";

function About() {
  // State for preview modal
  const [selectedCert, setSelectedCert] = useState(null);

  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      desc: "Computer Science & Engineering",
      color: "text-indigo-400",
    },
    {
      icon: Code2,
      title: "Specialization",
      desc: "Full-Stack Web Development (MERN Stack)",
      color: "text-violet-400",
    },
    {
      icon: Terminal,
      title: "Core Competencies",
      desc: "REST APIs, Auth Systems, Docker & Linux",
      color: "text-cyan-400",
    },
  ];

  // Certificates & Achievements Data
  const certificates = [
    {
      id: 1,
      title: "Inernet of Things",
      issuer: "Softpro",
      date: "2024",
      category: "IOT",
      image: "/iot.png", // Replace with your image path
      credentialUrl: "https://www.softproindia.in",
      skills: ["Sensors","Actuators","Microcontrollers/processors"],
    },
    {
      id: 2,
      title: "Cloud Computing",
      issuer: "IBM",
      date: "2024",
      category: "Cloud",
      image: "/ibm.png", // Replace with your image path
      credentialUrl: "https://example.com/verify/456",
      skills: ["Python","AWS","Docker","Linux"],
    },
    {
      id: 3,
      title: "Basics of Computer",
      issuer: "Global center",
      date: "2022",
      category: "BASICS",
      image: "/basics.png", // Replace with your image path
      credentialUrl: "https://computer.basics.com",
      skills: ["MS word","Power point","Excel(XL)","Notepad++"],
    },
  ];

  return (
    <div className="bg-slate-950">
      <Header />
      <section className="min-h-screen  bg-slate-950 text-slate-100 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Glow Elements */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 -right-20 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="mt-10 max-w-7xl mx-auto relative z-10 space-y-16">
          {/* Header Title Section */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wide uppercase">
              <Sparkles size={14} />
              <span>Get To Know Me</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              About Me
            </h1>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Passionate software developer focused on engineering scalable web applications, robust backends, and intuitive user experiences.
            </p>

            {/* Primary Download Resume Button in Header */}
            <div className="pt-2">
              <a
                href="/resume.pdf"
                download="Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all duration-200 shadow-lg shadow-indigo-600/30 cursor-pointer group"
              >
                <Download size={18} className="group-hover:-translate-y-0.5 transition-transform" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Bio & Overview Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
            {/* Left Column: Profile Image & Bio Summary */}
            <div className="lg:col-span-7 bg-slate-900/50 border border-slate-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-lg space-y-6 flex flex-col justify-between">
              <div className="space-y-6">
                {/* Profile Header with Avatar Image */}
                <div className="flex items-center justify-between gap-4 flex-wrap pb-4 border-b border-slate-800/80">
                  <div className="flex items-center gap-4">
                    {/* Profile Image Frame */}
                    <div className="relative group">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-200" />
                      <img
                        src="/profile.jpg"
                        alt="Profile"
                        className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border border-slate-700 bg-slate-950 shadow-md"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src =
                            "https://ui-avatars.com/api/?name=Developer&background=020617&color=818cf8";
                        }}
                      />
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white">Full-Stack Developer</h2>
                      <p className="text-xs sm:text-sm text-indigo-400 font-medium mt-0.5">MERN & DevOps Enthusiast</p>
                    </div>
                  </div>

                  {/* Preview CV Link */}
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-indigo-400 border border-slate-800 hover:border-indigo-500/40 bg-slate-950 px-3 py-2 rounded-xl transition-all"
                  >
                    <FileText size={14} />
                    <span>Preview CV</span>
                  </a>
                </div>

                {/* Bio Text */}
                <div className="space-y-3 text-slate-300 text-sm leading-relaxed">
                  <p>
                    Hello! I am a Computer Science student and full-stack web developer. I build production-ready applications using React, Node.js, Express, and MongoDB, styled with Tailwind CSS and powered by Redux state management.
                  </p>
                  <p>
                    My focus includes engineering role-based JWT authentication systems, database schema designs, containerization using Docker, and hosting workflows on Linux servers.
                  </p>
                </div>
              </div>

              {/* Quick Stat Highlights */}
              <div className="grid grid-cols-3 gap-3 pt-6 border-t border-slate-800/80">
                <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-3 text-center">
                  <h3 className="text-xl font-extrabold text-indigo-400">10+</h3>
                  <p className="text-[11px] text-slate-400">Projects Built</p>
                </div>
                <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-3 text-center">
                  <h3 className="text-xl font-extrabold text-violet-400">MERN</h3>
                  <p className="text-[11px] text-slate-400">Core Stack</p>
                </div>
                <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-3 text-center">
                  <h3 className="text-xl font-extrabold text-cyan-400">100%</h3>
                  <p className="text-[11px] text-slate-400">Code Quality</p>
                </div>
              </div>
            </div>

            {/* Right Column: Highlights & Focus Cards */}
            <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="bg-slate-900/50 border border-slate-800/80 rounded-2xl p-6 backdrop-blur-md shadow-lg flex items-start gap-4 transition-all hover:border-slate-700"
                  >
                    <div className={`p-3 rounded-xl bg-slate-950 border border-slate-800 ${item.color} shrink-0`}>
                      <Icon size={22} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">{item.title}</h3>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}

              {/* Current Focus Banner */}
              <div className="bg-gradient-to-r from-indigo-900/30 to-violet-900/30 border border-indigo-500/30 rounded-2xl p-5 text-center space-y-2">
                <div className="inline-flex items-center gap-2 text-indigo-300 text-xs font-semibold uppercase tracking-wider">
                  <Briefcase size={14} />
                  <span>Open for Opportunities</span>
                </div>
                <p className="text-xs text-slate-300">
                  Currently exploring full-stack engineering roles, frontend projects, and software internships.
                </p>
              </div>
            </div>
          </div>

          {/* NEW SECTION: Certificates & Achievements */}
          <div className="max-w-6xl mx-auto space-y-8 pt-4">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-800/80 pb-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold tracking-wide uppercase mb-2">
                  <Award size={14} />
                  <span>Verified Qualifications</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">Certificates & Achievements</h2>
              </div>
              <p className="text-slate-400 text-xs sm:text-sm max-w-md">
                Recognized certifications validating domain competence in full-stack architecture, React frontend workflows, and API design.
              </p>
            </div>

            {/* Certificate Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificates.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-slate-900/50 border border-slate-800/80 rounded-2xl p-5 backdrop-blur-md shadow-lg flex flex-col justify-between hover:border-slate-700 transition-all group"
                >
                  <div className="space-y-4">
                    {/* Header Badge */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 text-[11px] font-semibold border border-indigo-500/20">
                        {cert.category}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">{cert.date}</span>
                    </div>

                    {/* Title & Issuer */}
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1 flex items-center gap-1.5">
                        <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                        <span>{cert.issuer}</span>
                      </p>
                    </div>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {cert.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 rounded-md bg-slate-950 border border-slate-800 text-[11px] text-slate-400"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 pt-5 mt-4 border-t border-slate-800/60">
                    <button
                      onClick={() => setSelectedCert(cert)}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 hover:text-white hover:border-indigo-500/40 text-xs font-semibold transition-all cursor-pointer"
                    >
                      <Eye size={14} />
                      <span>View</span>
                    </button>

                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Verify Credential"
                        className="p-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 hover:text-indigo-400 hover:border-indigo-500/40 transition-all flex items-center justify-center"
                      >
                        <ExternalLink size={15} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certificate Preview Modal */}
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4">
            <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden space-y-4 p-6">
              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-white">{selectedCert.title}</h3>
                  <p className="text-xs text-slate-400">{selectedCert.issuer} • {selectedCert.date}</p>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Certificate Image Preview */}
              <div className="relative aspect-video rounded-xl overflow-hidden border border-slate-800 bg-slate-950 flex items-center justify-center">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/800x500/020617/818cf8?text=Certificate+Preview";
                  }}
                />
              </div>

              {/* Modal Footer */}
              <div className="flex items-center justify-end gap-3 pt-2">
                {selectedCert.credentialUrl && (
                  <a
                    href={selectedCert.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-all"
                  >
                    <ExternalLink size={14} />
                    <span>Verify Credential</span>
                  </a>
                )}
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 hover:text-white text-xs font-semibold transition-all cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
}

export default About;