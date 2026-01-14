import { useState } from "react";
import CommitmentForm from "../components/commitment/CommitmentForm";
import CommitmentWarning from "../components/commitment/CommitmentWarning";
import { createCommitment } from "../services/commitment.api";
import { useNavigate } from "react-router-dom";

const CreateCommitment = () => {
  const [acknowledged, setAcknowledged] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleCreate = async (data) => {
    setLoading(true);
    try {
      await createCommitment(data);
      navigate("/");
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ maxWidth: 720, margin: "40px auto" }}>
      <h2>Create Commitment</h2>

      <CommitmentWarning
        acknowledged={acknowledged}
        onAcknowledge={() => setAcknowledged(true)}
      />

      {acknowledged && (
        <CommitmentForm
          onSubmit={handleCreate}
          loading={loading}
        />
      )}
    </main>
  );
};

export default CreateCommitment;
