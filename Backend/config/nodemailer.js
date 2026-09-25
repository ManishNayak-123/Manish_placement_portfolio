// import nodemailer from "nodemailer";
// import dotenv from "dotenv";

// dotenv.config();

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// // Verify SMTP connection on server startup
// transporter.verify((error, success) => {
//   if (error) {
//     console.error("Nodemailer transporter error:", error);
//   } else {
//     console.log("Nodemailer transporter ready to send emails.");
//   }
// });

// export default transporter;
// config/nodemailer.js
import dotenv from "dotenv";
dotenv.config(); // Must run BEFORE reading process.env

import nodemailer from "nodemailer";

// Debug check to verify variables are loading
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  console.error("❌ CRITICAL: EMAIL_USER or EMAIL_PASS is missing or undefined!");
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.error("Nodemailer transporter error:", error);
  } else {
    console.log("✅ Nodemailer transporter connected successfully!");
  }
});

export default transporter;