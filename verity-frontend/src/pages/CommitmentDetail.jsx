import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiFetch } from "../services/api";
import { fetchProofsForCommitment } from "../services/proof.api";
import ProofTimeline from "../components/proof/ProofTimeline";

const CommitmentDetail = () => {
  const { id } = useParams();
  const [commitment, setCommitment] = useState(null);
  const [proofs, setProofs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      apiFetch(`/commitments/${id}`),
      fetchProofsForCommitment(id),
    ])
      .then(([commitmentData, proofData]) => {
        setCommitment(commitmentData);
        setProofs(proofData);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Loading…</p>;
  if (!commitment) return <p>Commitment not found</p>;

  return (
    <main style={{ maxWidth: 720, margin: "40px auto" }}>
      <h2>{commitment.title}</h2>

      <p style={{ color: "#555", marginBottom: 24 }}>
        {commitment.dailyRequirement}
      </p>

      <ProofTimeline proofs={proofs} />
    </main>
  );
};

export default CommitmentDetail;
