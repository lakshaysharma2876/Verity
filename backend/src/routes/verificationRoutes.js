import express from "express";
import { verifyProof } from "../controllers/verificationController.js";
import { getPendingVerifications } from "../controllers/verifierQueueController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/pending", protect, getPendingVerifications);

router.post("/", protect, verifyProof);

export default router;
