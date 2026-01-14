import { useState } from "react";
import { useLocation } from "react-router-dom";
import dayjs from "dayjs";
import ProofEditor from "../components/proof/ProofEditor";
import ProofSubmittedState from "../components/proof/ProofSubmittedState";
import { submitProof } from "../services/proof.api";

const SubmitProof = () => {
  const location = useLocation();
  const commitment = location.state?.commitment;
  
  const [status, setStatus] = useState("not_submitted");
  const [loading, setLoading] = useState(false);

  const today = dayjs().format("YYYY-MM-DD");

  if (!commitment) {
    return <div>No commitment selected. Please go back to the dashboard and select a commitment to submit proof for.</div>;
  }

  const handleSubmit = async (text) => {
    setLoading(true);
    try {
      await submitProof({
        commitmentId: commitment?._id,
        proofText: text,
        proofDate: today,
      });
      setStatus("submitted_pending");
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (status === "submitted_pending") {
    return <ProofSubmittedState />;
  }

  return (
    <ProofEditor
      onSubmit={handleSubmit}
      loading={loading}
      dailyRequirement={commitment?.dailyRequirement}
      commitment={commitment}
    />
  );
};

export default SubmitProof;
