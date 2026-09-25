
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation,  useNavigate } from "react-router";
import {
  Code2,
  Menu,
  X,
  Sparkles,
  Terminal,
  Layers,
  Send,
  LogIn,
  UserPlus,
  LogOut,
  User,
  ChevronDown,
  Briefcase,
  UserCheck
} from "lucide-react";
import Login from "./Login";
import SignUp from "./SignUP";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [authModal, setAuthModal] = useState({ isOpen: false, tab: "login" });
  const [user, setUser] = useState(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef(null);
  
  const location = useLocation();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  // 1. Check logged-in user on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch {
        setUser(null);
      }
    }
  }, []);

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { name: "Home", path: "/", icon: <Terminal size={16} />, protected: false },
    { name: "About", path: "/about", icon: <UserCheck size={16} />, protected: false },
    { name: "Projects", path: "/projects", icon: <Briefcase size={16} />, protected: true },
    { name: "Skills", path: "/skills", icon: <Layers size={16} />, protected: true },
    { name: "Contact", path: "/contact", icon: <Send size={16} />, protected: false },
  ];

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const openAuthModal = (tab) => {
    setIsMobileMenuOpen(false);
    setAuthModal({ isOpen: true, tab });
  };

  const closeModal = () => {
    setAuthModal({ ...authModal, isOpen: false });
  };

  // Handle Login / Signup Success callback
  const handleAuthSuccess = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    closeModal();
  };

  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    setIsProfileOpen(false);
    setIsMobileMenuOpen(false);
  };

  // Intercept navigation for protected routes if unauthenticated
  const handleNavClick = (e, link) => {
    if (link.protected && !token) {
      e.preventDefault();
      setIsMobileMenuOpen(false);
      openAuthModal("signup");
    } else {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="bg-slate-950">
      <header className="fixed top-0 z-40 w-full backdrop-blur-md bg-slate-950/90 border-b border-slate-800/80 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            
            {/* BRAND LOGO */}
            <Link
              to="/"
              className="flex items-center gap-2.5 group focus:outline-none"
            >
              <div className="p-2 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-600/25 group-hover:scale-105 transition-transform">
                <Code2 size={22} />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg tracking-tight text-white group-hover:text-indigo-400 transition-colors">
                  Manish<span className="text-indigo-500">.</span>Portfolio
                </span>
                <span className="text-[10px] text-slate-400 font-mono tracking-wider uppercase">
                  MERN Stack
                </span>
              </div>
            </Link>

            {/* DESKTOP NAVIGATION */}
            <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 shadow-inner">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={(e) => handleNavClick(e, link)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                      isActive
                        ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                        : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                    }`}
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </Link>
                );
              })}
            </nav>

            {/* ACTION BUTTONS OR USER PROFILE */}
            <div className="hidden md:flex items-center gap-3">
              {user ? (
                /* PROFILE MENU DROPDOWN */
                <div className="relative" ref={profileRef}>
                  <button
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    type="button"
                    className="flex items-center gap-2.5 p-1.5 pr-3 rounded-full bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all cursor-pointer focus:outline-none"
                  >
                    {user.avatar ? (
                      <img
                        src={user.avatar}
                        alt={user.name || "User"}
                        className="w-8 h-8 rounded-full object-cover ring-2 ring-indigo-500/50"
                      />
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-600 to-violet-600 flex items-center justify-center text-white font-bold text-xs ring-2 ring-indigo-500/50">
                        {user.name ? user.name.charAt(0).toUpperCase() : <User size={16} />}
                      </div>
                    )}
                    <span className="text-xs font-medium text-slate-200 max-w-[100px] truncate">
                      {user.name || "Account"}
                    </span>
                    <ChevronDown size={14} className="text-slate-400" />
                  </button>

                  {/* Dropdown Card */}
                  {isProfileOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl py-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                      <div className="px-3.5 py-2 border-b border-slate-800/80">
                        <p className="text-xs font-semibold text-white truncate">
                          {user.name || "User"}
                        </p>
                        <p className="text-[11px] text-slate-400 truncate">
                          {user.email || ""}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={handleLogout}
                        className="w-full text-left px-3.5 py-2 text-xs font-medium text-red-400 hover:bg-slate-800 hover:text-red-300 flex items-center gap-2 transition-colors cursor-pointer"
                      >
                        <LogOut size={14} />
                        <span>Log Out</span>
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                /* LOG IN & SIGN UP BUTTONS */
                <>
                  <button
                    type="button"
                    onClick={() => openAuthModal("login")}
                    className="px-3.5 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-900 border border-transparent hover:border-slate-800 font-semibold text-xs transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <LogIn size={15} className="text-indigo-400" />
                    <span>Log In</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => openAuthModal("signup")}
                    className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 hover:border-slate-700 font-semibold text-xs transition-all flex items-center gap-1.5 shadow-sm cursor-pointer"
                  >
                    <UserPlus size={15} className="text-violet-400" />
                    <span>Sign Up</span>
                  </button>
                </>
              )}

              {/* Hire Me CTA */}
              <a
                href="mailto:your.email@example.com?subject=Hiring%20Inquiry%20-%20Full%20Stack%20Developer"
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-semibold text-xs shadow-md shadow-indigo-600/20 hover:shadow-indigo-600/40 transition-all flex items-center gap-1.5"
              >
                <Sparkles size={14} />
                <span>Hire Me</span>
              </a>
            </div>

            {/* MOBILE MENU BUTTON */}
            <div className="flex md:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white border border-slate-800 focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>

          </div>
        </div>

        {/* MOBILE DRAWER MENU */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-950/95 border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top duration-200">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={(e) => handleNavClick(e, link)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-300 hover:bg-slate-900 hover:text-white transition-colors"
              >
                <span className="text-indigo-400">{link.icon}</span>
                <span>{link.name}</span>
              </Link>
            ))}

            <div className="pt-3 border-t border-slate-800/80 space-y-2">
              {user ? (
                <div className="space-y-2">
                  <div className="flex items-center gap-3 p-3 bg-slate-900 rounded-xl border border-slate-800">
                    {user.avatar ? (
                      <img src={user.avatar} alt="Profile" className="w-9 h-9 rounded-full object-cover" />
                    ) : (
                      <div className="w-9 h-9 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-xs">
                        {user.name ? user.name.charAt(0).toUpperCase() : <User size={16} />}
                      </div>
                    )}
                    <div className="overflow-hidden">
                      <p className="text-sm font-semibold text-white truncate">{user.name || "User"}</p>
                      <p className="text-xs text-slate-400 truncate">{user.email || ""}</p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleLogout}
                    className="w-full py-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20 text-center font-semibold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <LogOut size={15} />
                    <span>Log Out</span>
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => openAuthModal("login")}
                    className="py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-center font-semibold text-xs flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors cursor-pointer"
                  >
                    <LogIn size={15} className="text-indigo-400" />
                    <span>Log In</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => openAuthModal("signup")}
                    className="py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-center font-semibold text-xs flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors cursor-pointer"
                  >
                    <UserPlus size={15} className="text-violet-400" />
                    <span>Sign Up</span>
                  </button>
                </div>
              )}

              <a
                href="mailto:your.email@example.com?subject=Hiring%20Inquiry%20-%20Full%20Stack%20Developer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-center font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20"
              >
                <Sparkles size={16} />
                <span>Hire Me</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* MODAL OVERLAY WITH BLURRED BACKGROUND */}
      {authModal.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200">
          <div className="absolute inset-0" onClick={closeModal} />

          <div className="relative z-10 w-full max-w-md bg-slate-900/90 border border-slate-800 rounded-2xl shadow-2xl p-2">
            <button
              onClick={closeModal}
              type="button"
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <X size={18} />
            </button>

            {authModal.tab === "login" ? (
              <Login
                onClose={closeModal}
                onSuccess={handleAuthSuccess}
                onSwitchToSignUp={() => setAuthModal({ isOpen: true, tab: "signup" })}
              />
            ) : (
              <SignUp
                onClose={closeModal}
                onSuccess={handleAuthSuccess}
                onSwitchToLogin={() => setAuthModal({ isOpen: true, tab: "login" })}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;