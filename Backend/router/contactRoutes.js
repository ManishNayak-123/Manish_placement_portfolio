import express from "express";
import { sendContactEmail } from "../controller/contactController.js";
import { contactLimiter } from "../middleware/rateLimiter.js";

const router1 = express.Router();

router1.post("/contact", sendContactEmail,contactLimiter);

export default router1;