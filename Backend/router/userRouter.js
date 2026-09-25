//Here we will define router

import express from "express";
import { loginUser, registerUser } from "../controller/userController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { upload } from "../config/cloudinary.js";

const router = express.Router();

router.post("/register", upload.single("avatar"),registerUser,authMiddleware);
router.post("/login", loginUser,authMiddleware);

export default router;
