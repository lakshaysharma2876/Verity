import { useEffect, useState } from "react";
import {
  fetchPendingVerifications,
  submitVerification,
} from "../services/verification.api";
import VerificationCard from "../components/verification/VerificationCard";

const VerifyQueue = () => {
  const [queue, setQueue] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPendingVerifications()
      .then(setQueue)
      .finally(() => setLoading(false));
  }, []);

  const handleDecision = async (proofId, decision) => {
    await submitVerification({ proofId, decision });
    setQueue((prev) =>
      prev.filter((v) => v.proof._id !== proofId)
    );
  };

  if (loading) return <p>Loading queue…</p>;

  if (!queue.length) {
    return (
      <p style={{ marginTop: 80, textAlign: "center" }}>
        No proofs awaiting verification.
      </p>
    );
  }

  return (
    <main style={{ maxWidth: 720, margin: "40px auto" }}>
      <VerificationCard
        item={queue[0]} // ONE AT A TIME
        onDecision={handleDecision}
      />
    </main>
  );
};

export default VerifyQueue;
