import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {fetchCommitment} from "../services/commitment.api";
import dayjs from "dayjs";
import ProofEditor from "../components/proof/ProofEditor";
import ProofSubmittedState from "../components/proof/ProofSubmittedState";
import { submitProof } from "../services/proof.api";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "../styles/motion";

const SubmitProof = () => {
  const { commitmentId } = useParams();
  
  const [commitment, setCommitment] = useState();
  const [loadingCommitment, setLoadingCommitment] = useState(true);
  const [status, setStatus] = useState("not_submitted");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCommitment(commitmentId)
      .then(setCommitment)
      .finally(() => setLoadingCommitment(false));
  }, [commitmentId]);

  const todayDate = dayjs().format("YYYY-MM-DD");

  if (loadingCommitment) return <p>Loading commitment…</p>;
  if (!commitment) return <p>Commitment not found.</p>;

  const handleSubmit = async (text) => {
    setLoading(true);


    try {
      await submitProof({
        commitmentId: commitmentId,
        proofText: text,
        proofDate: todayDate,
      });

      setStatus("submitted_pending");
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  }

  

  return (
    <AnimatePresence mode="wait">
      {status === "submitted_pending" ? (
        <motion.div key="submitted" {...fadeIn}>
          <ProofSubmittedState />
        </motion.div>
      ) : (
        <motion.div key="editor" {...fadeIn}>
          <ProofEditor
            onSubmit={handleSubmit}
            loading={loading}
            dailyRequirement={commitment.dailyRequirement}
            commitment = {commitment}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SubmitProof;
