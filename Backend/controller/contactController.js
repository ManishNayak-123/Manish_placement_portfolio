// import transporter from "../config/nodemailer.js";

// export const sendContactEmail = async (req, res) => {
//   const { name, email, subject, message } = req.body;

//   // Input Validation
//   if (!name || !email || !message) {
//     return res.status(400).json({ 
//       success: false, 
//       error: "Name, email, and message are required fields." 
//     });
//   }

//   const mailOptions = {
//     from: `"${name}" <${process.env.EMAIL_USER}>`,
//     replyTo: email,
//     to: process.env.EMAIL_USER,
//     subject: `Portfolio Contact: ${subject || "New Message"} from ${name}`,
//     html: `
//       <div style="font-family: Arial, sans-serif; padding: 24px; background-color: #0f172a; color: #f8fafc; border-radius: 8px;">
//         <h2 style="color: #818cf8; border-bottom: 1px solid #334155; padding-bottom: 12px; margin-top: 0;">
//           New Portfolio Message
//         </h2>
//         <div style="margin-bottom: 16px;">
//           <p style="margin: 4px 0;"><strong>Sender Name:</strong> ${name}</p>
//           <p style="margin: 4px 0;"><strong>Sender Email:</strong> <a href="mailto:${email}" style="color: #38bdf8;">${email}</a></p>
//           <p style="margin: 4px 0;"><strong>Subject:</strong> ${subject || "N/A"}</p>
//         </div>
//         <div style="padding: 16px; background-color: #1e293b; border-radius: 6px; border-left: 4px solid #818cf8;">
//           <p style="margin: 0; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
//         </div>
//       </div>
//     `,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     return res.status(200).json({
//       success: true,
//       message: "Your message has been sent successfully!",
//     });
//   } catch (error) {
//     console.error("Failed to send email:", error);
//     return res.status(500).json({
//       success: false,
//       error: "Internal server error. Unable to send email.",
//     });
//   }
// };

import Message from "../models/Message.js";
import transporter from "../config/nodemailer.js";

export const sendContactEmail = async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: "Name, email, and message are required fields.",
    });
  }

  try {
    // 1. Save entry to MongoDB
    const newMessage = await Message.create({
      name,
      email,
      subject,
      message,
    });

    // 2. Prepare email parameters
    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact: ${subject || "New Message"} from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 24px; background-color: #0f172a; color: #f8fafc; border-radius: 8px;">
          <h2 style="color: #818cf8; border-bottom: 1px solid #334155; padding-bottom: 12px; margin-top: 0;">
            New Portfolio Message
          </h2>
          <div style="margin-bottom: 16px;">
            <p style="margin: 4px 0;"><strong>Sender Name:</strong> ${name}</p>
            <p style="margin: 4px 0;"><strong>Sender Email:</strong> <a href="mailto:${email}" style="color: #38bdf8;">${email}</a></p>
            <p style="margin: 4px 0;"><strong>Subject:</strong> ${subject || "N/A"}</p>
            <p style="margin: 4px 0;"><strong>Database Record ID:</strong> ${newMessage._id}</p>
          </div>
          <div style="padding: 16px; background-color: #1e293b; border-radius: 6px; border-left: 4px solid #818cf8;">
            <p style="margin: 0; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    };

    // 3. Send email notification
    await transporter.sendMail(mailOptions);

    return res.status(200).json({
      success: true,
      message: "Your message has been saved and sent successfully!",
      data: newMessage,
    });
  } catch (error) {
    console.error("Error processing contact request:", error);
    return res.status(500).json({
      success: false,
      error: "Internal server error. Failed to send message.",
    });
  }
};