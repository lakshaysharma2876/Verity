import Verification from "../models/Verification.js";
import Proof from "../models/Proof.js";
import User from "../models/Users.js";

const clamp = (value, min = 0, max = 100) =>
  Math.max(min, Math.min(max, value));

export const resolveProof = async (proofId) => {
  // 1. Fetch all votes
  const votes = await Verification.find({ proof: proofId });

  const requiredVotes = Number(process.env.VERIFIERS_PER_PROOF || 3);
  if (votes.length < requiredVotes) return;

  // 2. Count votes
  const approvals = votes.filter(v => v.decision === "approved").length;
  const rejections = votes.length - approvals;

  const finalStatus = approvals > rejections ? "verified" : "rejected";

  // 3. Update proof status
  const proof = await Proof.findByIdAndUpdate(
    proofId,
    { status: finalStatus },
    { new: true }
  );

  // 4. Update proof owner credibility
  const owner = await User.findById(proof.user);

  if (finalStatus === "verified") {
    owner.credibilityScore = clamp(owner.credibilityScore + 2);
  } else {
    owner.credibilityScore = clamp(owner.credibilityScore - 3);
  }

  await owner.save();

  // 5. Update verifier trust scores
  for (const vote of votes) {
    const verifier = await User.findById(vote.verifier);

    if (!verifier) continue;

    const correctVote =
      (vote.decision === "approved" && finalStatus === "verified") ||
      (vote.decision === "rejected" && finalStatus === "rejected");

    verifier.verifierTrustScore = clamp(
      verifier.verifierTrustScore + (correctVote ? 1 : -1)
    );

    await verifier.save();
  }

  if (finalStatus === "rejected") {
  await Commitment.findByIdAndUpdate(proof.commitment, {
    status: "failed",
  });
}
};

