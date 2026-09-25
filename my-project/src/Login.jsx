

// import React, { useState } from "react";
// import { useNavigate } from "react-router";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { Mail, Lock, Eye, EyeOff, Loader2, LogIn } from "lucide-react";

// function Login({ onClose, onSuccess, onSwitchToSignUp }) {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const response = await axios.post(
//         "http://localhost:8080/api/v1/user/login",
//         formData
//       );

//       toast.success(response.data?.message || "Login successful!");

//       const userData = response.data?.user;
//       const token = response.data?.token;

//       if (token) localStorage.setItem("token", token);
//       if (userData) localStorage.setItem("user", JSON.stringify(userData));

//       // Trigger user login state update in Header
//       if (onSuccess) {
//         onSuccess(userData);
//       }

//       if (onClose) {
//         onClose();
//       }

//       navigate("/"); // Navigate to home page
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Login failed");
//       console.error("Login Error:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="w-full bg-slate-900/90 border border-slate-800 backdrop-blur-xl rounded-2xl shadow-2xl p-6 sm:p-8 relative text-slate-100">
//       <div className="text-center mb-6">
//         <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Welcome Back</h1>
//         <p className="text-slate-400 text-xs sm:text-sm mt-1">Log in to your account</p>
//       </div>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div className="space-y-1.5">
//           <label className="block text-xs font-medium text-slate-300">Email Address</label>
//           <div className="relative">
//             <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-500">
//               <Mail size={18} />
//             </div>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="name@example.com"
//               required
//               className="w-full pl-10 pr-4 py-2.5 bg-slate-950/60 border border-slate-800 rounded-xl text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
//             />
//           </div>
//         </div>

//         <div className="space-y-1.5">
//           <label className="block text-xs font-medium text-slate-300">Password</label>
//           <div className="relative">
//             <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-500">
//               <Lock size={18} />
//             </div>
//             <input
//               type={showPassword ? "text" : "password"}
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               placeholder="••••••••"
//               required
//               className="w-full pl-10 pr-10 py-2.5 bg-slate-950/60 border border-slate-800 rounded-xl text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
//             />
//             <button
//               type="button"
//               onClick={() => setShowPassword(!showPassword)}
//               className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-500 hover:text-slate-300"
//             >
//               {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//             </button>
//           </div>
//         </div>

//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold text-sm shadow-lg hover:shadow-indigo-600/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
//         >
//           {loading ? <Loader2 size={18} className="animate-spin" /> : <LogIn size={18} />}
//           <span>Log In</span>
//         </button>
//       </form>

//       <div className="mt-6 text-center border-t border-slate-800/80 pt-4">
//         <p className="text-xs text-slate-400">
//           Don't have an account?{" "}
//           <button
//             type="button"
//             onClick={onSwitchToSignUp}
//             className="font-semibold text-indigo-400 hover:text-indigo-300 cursor-pointer"
//           >
//             Sign Up
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import axios from "axios";
import toast from "react-hot-toast";
import { Mail, Lock, Eye, EyeOff, Loader2, LogIn } from "lucide-react";

function Login({ onClose, onSuccess, onSwitchToSignUp }) {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/user/login",
        formData
      );

      toast.success(response.data?.message || "Login successful!");

      const userData = response.data?.user;
      const token = response.data?.token;

      if (token) localStorage.setItem("token", token);
      if (userData) localStorage.setItem("user", JSON.stringify(userData));

      // Trigger user login state update in Header
      if (onSuccess) {
        onSuccess(userData);
      }

      if (onClose) {
        onClose();
      }

      // Navigate back to the page the user originally tried to open, or default to Home
      const origin = location.state?.from?.pathname || "/";
      navigate(origin, { replace: true });

    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
      console.error("Login Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-slate-900/90 border border-slate-800 backdrop-blur-xl rounded-2xl shadow-2xl p-6 sm:p-8 relative text-slate-100">
      <div className="text-center mb-6">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Welcome Back</h1>
        <p className="text-slate-400 text-xs sm:text-sm mt-1">Log in to your account</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1.5">
          <label className="block text-xs font-medium text-slate-300">Email Address</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-500">
              <Mail size={18} />
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@example.com"
              required
              className="w-full pl-10 pr-4 py-2.5 bg-slate-950/60 border border-slate-800 rounded-xl text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="block text-xs font-medium text-slate-300">Password</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-500">
              <Lock size={18} />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              required
              className="w-full pl-10 pr-10 py-2.5 bg-slate-950/60 border border-slate-800 rounded-xl text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-500 hover:text-slate-300"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold text-sm shadow-lg hover:shadow-indigo-600/40 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
        >
          {loading ? <Loader2 size={18} className="animate-spin" /> : <LogIn size={18} />}
          <span>Log In</span>
        </button>
      </form>

      <div className="mt-6 text-center border-t border-slate-800/80 pt-4">
        <p className="text-xs text-slate-400">
          Don't have an account?{" "}
          <button
            type="button"
            onClick={onSwitchToSignUp}
            className="font-semibold text-indigo-400 hover:text-indigo-300 cursor-pointer"
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;