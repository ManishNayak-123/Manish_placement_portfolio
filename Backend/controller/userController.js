
// import User from "../models/userModel.js";
// import jwt from "jsonwebtoken";
// import bcrypt from "bcryptjs";
// import { sendEmail } from "../utils/sendEmail.js";

// // REGISTER USER - Sends email on registration
// export const registerUser = async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     if (!name || !email || !password) {
//       return res.status(400).json({
//         message: "All fields are required.",
//       });
//     }

//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({
//         message: "User already exists.",
//       });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const avatarUrl = req.file ? req.file.path : undefined;

//     const user = await User.create({
//       name,
//       email,
//       password: hashedPassword,
//       ...(avatarUrl && { avatar: avatarUrl }),
//     });

//     // Send Welcome Email ONLY during Registration
//     const emailHtml = `
//       <div style="font-family: Arial, sans-serif; background-color: #0f172a; color: #f8fafc; padding: 24px; border-radius: 12px;">
//         <h2 style="color: #6366f1;">Welcome to the Platform, ${user.name}! 🎉</h2>
//         <p>Your account has been created successfully.</p>
//         <p>You can now log in and explore all platform features and services.</p>
//         <hr style="border-color: #334155; margin: 20px 0;" />
//         <p style="font-size: 12px; color: #94a3b8;">If you did not register for this account, please ignore this email.</p>
//       </div>
//     `;

//     // Non-blocking email trigger
//     sendEmail({
//       to: user.email,
//       subject: "Welcome! Registration Successful",
//       html: emailHtml,
//     });

//     return res.status(201).json({
//       message: "User registered successfully",
//       user: {
//         id: user._id,
//         name: user.name,
//         email: user.email,
//         avatar: user.avatar,
//       },
//     });
//   } catch (error) {
//     return res.status(500).json({
//       message: error.message,
//     });
//   }
// };

// // LOGIN USER - No email sent
// export const loginUser = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     if (!email || !password) {
//       return res.status(400).json({
//         message: "All fields are required.",
//       });
//     }

//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(401).json({
//         message: "Invalid email or password.",
//       });
//     }

//     const isCorrectPassword = await bcrypt.compare(password, user.password);
//     if (!isCorrectPassword) {
//       return res.status(401).json({
//         message: "Invalid email or password.",
//       });
//     }

//     const token = jwt.sign(
//       { userId: user._id },
//       process.env.JWT_SECRET,
//       { expiresIn: "1d" }
//     );

//     return res.status(200).json({
//       message: "Login successfully",
//       token,
//       user: {
//         id: user._id,
//         name: user.name,
//         email: user.email,
//         avatar: user.avatar,
//       },
//     });
//   } catch (error) {
//     return res.status(500).json({
//       message: error.message,
//     });
//   }
// };
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { sendEmail } from "../utils/sendEmail.js";

// REGISTER USER - Sends email on registration
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required.",
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const avatarUrl = req.file ? req.file.path : undefined;

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      ...(avatarUrl && { avatar: avatarUrl }),
    });

    // Send Welcome Email ONLY during Registration
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; background-color: #0f172a; color: #f8fafc; padding: 24px; border-radius: 12px;">
        <h2 style="color: #6366f1;">Welcome to the Platform, ${user.name}! 🎉</h2>
        <p>Your account has been created successfully.</p>
        <p>You can now log in and explore all platform features and services.</p>
        <hr style="border-color: #334155; margin: 20px 0;" />
        <p style="font-size: 12px; color: #94a3b8;">If you did not register for this account, please ignore this email.</p>
      </div>
    `;

    // Await sendEmail to ensure dispatch or log any SMTP errors
    try {
      await sendEmail({
        to: user.email,
        subject: "Welcome! Registration Successful",
        html: emailHtml,
      });
    } catch (emailError) {
      console.error("Failed to send welcome email:", emailError.message);
    }

    return res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// LOGIN USER - No email sent
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "All fields are required.",
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password.", //
      });
    }

    const isCorrectPassword = await bcrypt.compare(password, user.password);
    if (!isCorrectPassword) {
      return res.status(401).json({
        message: "Invalid email or password.",
      });
    }

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return res.status(200).json({
      message: "Login successfully",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};