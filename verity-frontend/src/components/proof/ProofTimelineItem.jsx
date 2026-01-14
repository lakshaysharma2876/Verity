import dayjs from "dayjs";
import ProofStatusBadge from "./ProofStatusBadge";

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
        <strong>
          {dayjs(proof.proofDate).format("MMM D, YYYY")}
        </strong>

        <ProofStatusBadge status={proof.status} />
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
