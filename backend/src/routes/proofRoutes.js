import express from "express";
import { submitProof } from "../controllers/proofController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// 🔐 Submit daily proof
router.post("/", protect, submitProof);

export default router;
