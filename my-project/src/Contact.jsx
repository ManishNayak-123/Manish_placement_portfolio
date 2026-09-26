

import React, { useState } from "react";
import axios from "axios";
import { Sparkles, Mail, Phone, MapPin, Send, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import Footer from "./Footer";
import Header from "./Header";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    if (errorMessage) setErrorMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsLoading(true);
    setErrorMessage("");

    try {
      const response = await axios.post(
        "https://manish-placement-portfolio-2.onrender.com/api/v1/message/contact",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success || response.status === 200 || response.status === 201) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });

        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }
    } catch (error) {
      console.error("API Error sending message:", error);
      const apiError =
        error.response?.data?.error ||
        error.response?.data?.message ||
        "Failed to send message. Please try again.";
      setErrorMessage(apiError);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Header />
      <section className="min-h-screen  bg-slate-950 text-slate-100 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Glow Elements */}
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 -left-20 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 space-y-12">
          {/* Header Title Section */}
          <div className=" mt-10 text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wide uppercase">
              <Sparkles size={14} />
              <span>Get In Touch</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Let's Build Something Together
            </h1>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Have a project in mind, a question, or an opportunity? Feel free to reach out via the form or my personal contacts.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start max-w-6xl mx-auto">
            {/* Contact Details & Info (2 Columns) */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-slate-900/50 border border-slate-800/80 rounded-2xl p-6 backdrop-blur-md shadow-lg space-y-6">
                <h2 className="text-xl font-bold text-white border-b border-slate-800/80 pb-3">
                  Contact Details
                </h2>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-indigo-400 shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        Email
                      </h3>
                      <a
                        href="mailto:manishnayak5248@gmail.com"
                        className="text-sm font-medium text-slate-200 hover:text-indigo-400 transition-colors"
                      >
                        manishnayak5248@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-violet-400 shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        Phone / WhatsApp
                      </h3>
                      <a
                        href="tel:+918273235248"
                        className="text-sm font-medium text-slate-200 hover:text-violet-400 transition-colors"
                      >
                        +91 8273235248
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-cyan-400 shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        Location
                      </h3>
                      <p className="text-sm font-medium text-slate-200">
                        India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Profiles & Links Card */}
              <div className="bg-slate-900/50 border border-slate-800/80 rounded-2xl p-6 backdrop-blur-md shadow-lg space-y-4">
                <h2 className="text-sm font-bold text-slate-300 uppercase tracking-wider">
                  Connect Elsewhere
                </h2>
                <div className="flex gap-3">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub Profile"
                    className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all flex items-center justify-center flex-1 group"
                  >
                    <svg
                      className="w-5 h-5 fill-current transition-colors"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      />
                    </svg>
                  </a>

                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn Profile"
                    className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 hover:text-indigo-400 hover:border-slate-700 transition-all flex items-center justify-center flex-1 group"
                  >
                    <svg
                      className="w-5 h-5 fill-current transition-colors"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Interactive Form (3 Columns) */}
            <div className="lg:col-span-3 bg-slate-900/50 border border-slate-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-lg">
              <h2 className="text-xl font-bold text-white mb-6">Send Message</h2>

              {errorMessage && (
                <div className="mb-4 p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs sm:text-sm flex items-center gap-2">
                  <AlertCircle size={16} className="shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center space-y-3">
                  <CheckCircle2 size={48} className="text-emerald-400 animate-bounce" />
                  <h3 className="text-xl font-bold text-white">Message Sent!</h3>
                  <p className="text-slate-400 text-sm max-w-sm">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        Your Name <span className="text-indigo-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        Email Address <span className="text-indigo-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry / Hiring"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Message <span className="text-indigo-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows="5"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hello, I'd like to talk about..."
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-800/50 text-white font-medium text-sm transition-all duration-200 shadow-lg shadow-indigo-600/30 cursor-pointer disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Contact;