

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { User, Mail, Lock, Eye, EyeOff, Loader2, UserPlus, Camera } from "lucide-react";

// function SignUp({ onClose, onSwitchToLogin }) {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const [avatar, setAvatar] = useState(null);
//   const [avatarPreview, setAvatarPreview] = useState(null);
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);

//   // Clean up object URL memory when component unmounts or preview changes
//   useEffect(() => {
//     return () => {
//       if (avatarPreview) {
//         URL.revokeObjectURL(avatarPreview);
//       }
//     };
//   }, [avatarPreview]);

//   const handleFormData = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setAvatar(file);
//       setAvatarPreview(URL.createObjectURL(file));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const data = new FormData();
//       data.append("name", formData.name);
//       data.append("email", formData.email);
//       data.append("password", formData.password);
//       if (avatar) {
//         data.append("avatar", avatar);
//       }

//       const response = await axios.post(
//         "http://localhost:8080/api/v1/user/register",
//         data,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       toast.success(response.data?.message || "Registration successful! Please log in.");

//       // Reset Form State
//       setFormData({ name: "", email: "", password: "" });
//       setAvatar(null);
//       setAvatarPreview(null);

//       // Handle navigation: switch tab in modal or perform router redirect
//       if (onSwitchToLogin) {
//         onSwitchToLogin();
//       } else {
//         navigate("/login");
//       }
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message || "Backend connection failed."
//       );
//       console.error("Registration Error:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="w-full bg-slate-900/90 border border-slate-800 backdrop-blur-xl rounded-2xl shadow-2xl p-6 sm:p-8 relative overflow-hidden text-slate-100">
//       <div className="absolute -top-16 -right-16 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl pointer-events-none"></div>
//       <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-violet-500/20 rounded-full blur-2xl pointer-events-none"></div>

//       <div className="text-center mb-6">
//         <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
//           Create an Account
//         </h1>
//         <p className="text-slate-400 text-xs sm:text-sm mt-1">
//           Join to explore full portfolio features and services.
//         </p>
//       </div>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         {/* Profile Image Picker */}
//         <div className="flex flex-col items-center justify-center space-y-2">
//           <div className="relative group cursor-pointer">
//             <div className="w-20 h-20 rounded-full bg-slate-950 border-2 border-dashed border-slate-700 hover:border-indigo-500 flex items-center justify-center overflow-hidden transition-all shadow-md">
//               {avatarPreview ? (
//                 <img
//                   src={avatarPreview}
//                   alt="Profile Preview"
//                   className="w-full h-full object-cover"
//                 />
//               ) : (
//                 <div className="flex flex-col items-center text-slate-500 group-hover:text-indigo-400 transition-colors">
//                   <Camera size={24} />
//                   <span className="text-[9px] mt-1 font-medium">Upload</span>
//                 </div>
//               )}
//             </div>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleImageChange}
//               className="absolute inset-0 opacity-0 cursor-pointer"
//             />
//           </div>
//           <span className="text-[11px] text-slate-400">
//             Click to choose profile image
//           </span>
//         </div>

//         {/* Full Name Field */}
//         <div className="space-y-1.5">
//           <label htmlFor="name" className="block text-xs font-medium text-slate-300">
//             Full Name
//           </label>
//           <div className="relative">
//             <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
//               <User size={18} />
//             </div>
//             <input
//               id="name"
//               type="text"
//               name="name"
//               onChange={handleFormData}
//               value={formData.name}
//               placeholder="John Doe"
//               required
//               className="w-full pl-10 pr-4 py-2.5 bg-slate-950/60 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all duration-200"
//             />
//           </div>
//         </div>

//         {/* Email Field */}
//         <div className="space-y-1.5">
//           <label htmlFor="email" className="block text-xs font-medium text-slate-300">
//             Email Address
//           </label>
//           <div className="relative">
//             <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
//               <Mail size={18} />
//             </div>
//             <input
//               id="email"
//               type="email"
//               name="email"
//               onChange={handleFormData}
//               value={formData.email}
//               placeholder="name@example.com"
//               required
//               className="w-full pl-10 pr-4 py-2.5 bg-slate-950/60 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all duration-200"
//             />
//           </div>
//         </div>

//         {/* Password Field */}
//         <div className="space-y-1.5">
//           <label htmlFor="password" className="block text-xs font-medium text-slate-300">
//             Password
//           </label>
//           <div className="relative">
//             <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
//               <Lock size={18} />
//             </div>
//             <input
//               id="password"
//               type={showPassword ? "text" : "password"}
//               name="password"
//               onChange={handleFormData}
//               value={formData.password}
//               placeholder="••••••••"
//               required
//               className="w-full pl-10 pr-10 py-2.5 bg-slate-950/60 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all duration-200"
//             />
//             <button
//               type="button"
//               onClick={() => setShowPassword(!showPassword)}
//               className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-500 hover:text-slate-300 transition-colors"
//             >
//               {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//             </button>
//           </div>
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full mt-2 py-3 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/25 transition-all duration-200 hover:shadow-indigo-600/40 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
//         >
//           {loading ? (
//             <>
//               <Loader2 size={18} className="animate-spin" />
//               <span>Creating Account...</span>
//             </>
//           ) : (
//             <>
//               <UserPlus size={18} />
//               <span>Sign Up</span>
//             </>
//           )}
//         </button>
//       </form>

//       <div className="mt-6 text-center border-t border-slate-800/80 pt-4">
//         <p className="text-xs text-slate-400">
//           Already have an account?{" "}
//           <button
//             type="button"
//             onClick={onSwitchToLogin}
//             className="font-semibold text-indigo-400 hover:text-indigo-300 transition-colors hover:underline cursor-pointer"
//           >
//             Log In
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default SignUp;


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router"; // Fixed import source
import axios from "axios";
import toast from "react-hot-toast";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Loader2,
  UserPlus,
  Camera,
  X,
} from "lucide-react";

function SignUp({ onClose, onSwitchToLogin }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [avatar, setAvatar] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // Clean up object URL memory when component unmounts or preview changes
  useEffect(() => {
    return () => {
      if (avatarPreview) {
        URL.revokeObjectURL(avatarPreview);
      }
    };
  }, [avatarPreview]);

  const handleFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatar(file);
      setAvatarPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("password", formData.password);
      if (avatar) {
        data.append("avatar", avatar);
      }

      const response = await axios.post(
        "https://manish-placement-portfolio-3.onrender.com/api/v1/user/register",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success(
        response.data?.message || "Registration successful! Please log in."
      );

      // Reset Form State
      setFormData({ name: "", email: "", password: "" });
      setAvatar(null);
      setAvatarPreview(null);

      // Handle navigation: switch tab in modal or perform router redirect
      if (onSwitchToLogin) {
        onSwitchToLogin();
      } else {
        navigate("/login");
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Backend connection failed."
      );
      console.error("Registration Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-slate-900/90 border border-slate-800 backdrop-blur-xl rounded-2xl shadow-2xl p-6 sm:p-8 relative overflow-hidden text-slate-100">
      {/* Background Decorative Blur */}
      <div className="absolute -top-16 -right-16 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl pointer-events-none"></div>
      <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-violet-500/20 rounded-full blur-2xl pointer-events-none"></div>

      {/* Modal Close Button (renders if onClose prop is passed) */}
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800/80 transition-colors z-10 cursor-pointer"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>
      )}

      <div className="text-center mb-6">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Create an Account
        </h1>
        <p className="text-slate-400 text-xs sm:text-sm mt-1">
          Join to explore full portfolio features and services.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Profile Image Picker */}
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="relative group cursor-pointer">
            <div className="w-20 h-20 rounded-full bg-slate-950 border-2 border-dashed border-slate-700 hover:border-indigo-500 flex items-center justify-center overflow-hidden transition-all shadow-md">
              {avatarPreview ? (
                <img
                  src={avatarPreview}
                  alt="Profile Preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex flex-col items-center text-slate-500 group-hover:text-indigo-400 transition-colors">
                  <Camera size={24} />
                  <span className="text-[9px] mt-1 font-medium">Upload</span>
                </div>
              )}
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
          </div>
          <span className="text-[11px] text-slate-400">
            Click to choose profile image
          </span>
        </div>

        {/* Full Name Field */}
        <div className="space-y-1.5">
          <label htmlFor="name" className="block text-xs font-medium text-slate-300">
            Full Name
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
              <User size={18} />
            </div>
            <input
              id="name"
              type="text"
              name="name"
              onChange={handleFormData}
              value={formData.name}
              placeholder="John Doe"
              required
              className="w-full pl-10 pr-4 py-2.5 bg-slate-950/60 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all duration-200"
            />
          </div>
        </div>

        {/* Email Field */}
        <div className="space-y-1.5">
          <label htmlFor="email" className="block text-xs font-medium text-slate-300">
            Email Address
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
              <Mail size={18} />
            </div>
            <input
              id="email"
              type="email"
              name="email"
              onChange={handleFormData}
              value={formData.email}
              placeholder="name@example.com"
              required
              className="w-full pl-10 pr-4 py-2.5 bg-slate-950/60 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all duration-200"
            />
          </div>
        </div>

        {/* Password Field */}
        <div className="space-y-1.5">
          <label htmlFor="password" className="block text-xs font-medium text-slate-300">
            Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
              <Lock size={18} />
            </div>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              name="password"
              onChange={handleFormData}
              value={formData.password}
              placeholder="••••••••"
              required
              className="w-full pl-10 pr-10 py-2.5 bg-slate-950/60 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all duration-200"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-500 hover:text-slate-300 transition-colors"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full mt-2 py-3 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/25 transition-all duration-200 hover:shadow-indigo-600/40 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
        >
          {loading ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              <span>Creating Account...</span>
            </>
          ) : (
            <>
              <UserPlus size={18} />
              <span>Sign Up</span>
            </>
          )}
        </button>
      </form>

      {/* Switch to Login Link */}
      <div className="mt-6 text-center border-t border-slate-800/80 pt-4">
        <p className="text-xs text-slate-400">
          Already have an account?{" "}
          <button
            type="button"
            onClick={onSwitchToLogin || (() => navigate("/login"))}
            className="font-semibold text-indigo-400 hover:text-indigo-300 transition-colors hover:underline cursor-pointer"
          >
            Log In
          </button>
        </p>
      </div>
    </div>
  );
}

export default SignUp;