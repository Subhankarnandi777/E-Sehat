// src/routes/users.ts
import { Router } from "express";
import { getUserByPhone, signupUser } from "../controllers/userController";

const router = Router();

// Fetch user by phone
router.get("/", getUserByPhone);

// Signup new patient user
router.post("/signup", signupUser);

export default router;
