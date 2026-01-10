import Proof from "../models/Proof.js";
import Commitment from "../models/Commitment.js";
import { assignVerifiers } from "../services/verifierAssignmentService.js";


export const submitProof = async (req, res) => {
  try {
    const { commitmentId, proofText, proofDate } = req.body;

    if (!commitmentId || !proofText || !proofDate) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // 1. Check commitment exists and belongs to user
    const commitment = await Commitment.findOne({
      _id: commitmentId,
      user: req.user._id,
      status: "active",
    });

    if (!commitment) {
      return res.status(404).json({
        message: "Active commitment not found or access denied",
      });
    }

    // 2. Create proof (DB index enforces one-per-day)
    const proof = await Proof.create({
      user: req.user._id,
      commitment: commitmentId,
      proofText,
      proofDate: new Date(proofDate),
    });

    await assignVerifiers(proof._id, req.user._id);


    res.status(201).json(proof);
  } 
  
  catch (error) {
    // Duplicate proof for same day
    if (error.code === 11000) {
      return res.status(400).json({
        message: "Proof for this day already submitted",
      });
    }

    res.status(500).json({ message: error.message });
  }
};
