import express from "express";
import { createCommitment, getMyCommitment } from "../controllers/commitmentController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

//Create commitment (protected)
router.post("/", protect, createCommitment);

//fetch commitment
router.get("/", protect, getMyCommitment);
router.get("/:id", protect, getMyCommitment);

export default router;
