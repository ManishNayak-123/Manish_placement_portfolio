
// import nodemailer from "nodemailer";

// export const sendEmail = async ({ to, subject, html }) => {
//   // 1. Verify Environment Variables exist
//   if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
//     console.error("❌ EMAIL_USER or EMAIL_PASS is missing in process.env");
//     return;
//   }

//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS, // MUST be a 16-character App Password, NOT your Gmail password
//     },
//   });

//   try {
//     // 2. Verify connection configuration
//     await transporter.verify();
//     console.log("Transporter connection verified successfully.");

//     // 3. Send email
//     const info = await transporter.sendMail({
//       from: `"JiViKa Platform" <${process.env.EMAIL_USER}>`,
//       to,
//       subject,
//       html,
//     });

//     console.log("✅ Email sent successfully! Message ID:", info.messageId);
//   } catch (error) {
//     console.error("❌ Nodemailer Error:", error.message);
//     throw error;
//   }
// };
import nodemailer from "nodemailer";

export const sendEmail = async ({ to, subject, html }) => {
  // 1. Check if environment variables are loaded
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error("❌ SendEmail Error: EMAIL_USER or EMAIL_PASS is missing in process.env!");
    return;
  }

  // 2. Create Transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, // Must be a 16-character App Password (no spaces)
    },
  });

  try {
    // 3. Verify SMTP Connection & Credentials
    console.log("⏳ Verifying Nodemailer transporter connection...");
    await transporter.verify();
    console.log("✅ Transporter verified! Connection to Gmail SMTP server is healthy.");

    // 4. Send Email
    const mailOptions = {
      from: `"Manish Portfolio" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(`✅ Registration email successfully sent to ${to}`);
    console.log(`📧 Message ID: ${info.messageId}`);
  } catch (error) {
    console.error("❌ SendEmail Execution Failed:");
    console.error("Code:", error.code);
    console.error("Details:", error.message);
  }
};