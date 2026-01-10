import User from "../models/Users.js";
import Verification from "../models/Verification.js";

const VERIFIERS_PER_PROOF = Number(process.env.VERIFIERS_PER_PROOF || 3);

export const assignVerifiers = async (proofId, proofOwnerId) => {
  // 1. Find eligible users
  const eligibleUsers = await User.find({
    _id: { $ne: proofOwnerId },
    isActive: true,
  }).select("_id");

  // 2. Shuffle users randomly
  const shuffled = eligibleUsers.sort(() => 0.5 - Math.random());

  // 3. Pick N verifiers
  const selected = shuffled.slice(0, VERIFIERS_PER_PROOF);

  const verificationDocs = selected.map((user) => ({
    proof: proofId,
    verifier: user._id,
    decision: "approved", 
  }));

  return selected.map((u) => u._id);
};
