import Verification from "../models/Verification.js";

export const getPendingVerifications = async (req, res) => {
  try {
    const pending = await Verification.find({
      verifier: req.user._id,
      decision: null,
    })
      .populate({
        path: "proof",
        match: { status: "pending" },
        populate: {
          path: "commitment",
          select: "title description dailyRequirement",
        },
      })
      .populate({
        path: "proof",
        populate: {
          path: "user",
          select: "name credibilityScore",
        },
      })
      .sort({ createdAt: 1 });

    // Filter out null proofs (already resolved)
    const cleanQueue = pending.filter(v => v.proof !== null);

    res.json(cleanQueue);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
