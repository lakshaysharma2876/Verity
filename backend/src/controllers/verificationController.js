import Verification from "../models/Verification.js";
import Proof from "../models/Proof.js";
import { resolveProof } from "../services/verificationResolutionService.js";


export const verifyProof = async (req, res) => {
  try {
    const { proofId, decision } = req.body;

    if (!proofId || !decision) {
      return res.status(400).json({ message: "Invalid request" });
    }

    if (!["approved", "rejected"].includes(decision)) {
      return res.status(400).json({ message: "Invalid decision" });
    }

    // Ensure proof exists
    const proof = await Proof.findById(proofId);
    if (!proof || proof.status !== "pending") {
      return res.status(400).json({ message: "Proof not available for review" });
    }

    // Create verification vote
    await Verification.create({
      proof: proofId,
      verifier: req.user._id,
      decision,
    });

    await resolveProof(proofId);

    res.status(201).json({ message: "Verification submitted" });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        message: "You have already verified this proof",
      });
    }

    res.status(500).json({ message: error.message });
  }
};
