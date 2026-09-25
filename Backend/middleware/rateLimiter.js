import rateLimit from "express-rate-limit";

// Limits requests to 5 messages per 15 minutes per IP address
export const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 requests per windowMs
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  message: {
    success: false,
    error: "Too many contact submissions from this IP. Please try again after 15 minutes.",
  },
});