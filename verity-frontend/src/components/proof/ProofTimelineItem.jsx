import dayjs from "dayjs";
import ProofStatusBadge from "./ProofStatusBadge";
import { motion } from "framer-motion";

const ProofTimelineItem = ({ proof }) => {
  return (
    <li
      style={{
        padding: 16,
        borderBottom: "1px solid #eee",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 8,
        }}
      >
        <strong>{dayjs(proof.proofDate).format("MMM D, YYYY")}</strong>

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <ProofStatusBadge status={proof.status} />
        </motion.span>
      </div>

      <p
        style={{
          color: "#444",
          whiteSpace: "pre-wrap",
        }}
      >
        {proof.proofText}
      </p>
    </li>
  );
};

export default ProofTimelineItem;
