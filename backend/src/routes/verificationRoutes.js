import express from "express";
import { verifyProof } from "../controllers/verificationController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, verifyProof);

export default router;
