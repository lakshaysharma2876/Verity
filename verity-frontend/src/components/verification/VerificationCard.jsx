import dayjs from "dayjs";
import DecisionButtons from "./DecisionButtons";

const VerificationCard = ({ item, onDecision }) => {
  const { proof } = item;

  return (
    <section
      style={{
        padding: 24,
        border: "1px solid #ddd",
        borderRadius: 8,
      }}
    >
      <h3>Proof for Review</h3>

      <p style={{ fontSize: 14, color: "#777" }}>
        Submitted on {dayjs(proof.proofDate).format("MMM D")}
      </p>

      <hr style={{ margin: "16px 0" }} />

      <p style={{ color: "#444", marginBottom: 12 }}>
        <strong>Requirement</strong><br />
        {proof.commitment.dailyRequirement}
      </p>

      <p style={{ color: "#333", whiteSpace: "pre-wrap" }}>
        {proof.proofText}
      </p>

      <hr style={{ margin: "24px 0" }} />

      <p style={{ fontSize: 14, color: "#555" }}>
        Submitted by <strong>{proof.user.name}</strong>  
        (Credibility: {proof.user.credibilityScore})
      </p>

      <DecisionButtons
        onApprove={() => onDecision(proof._id, "approved")}
        onReject={() => onDecision(proof._id, "rejected")}
      />
    </section>
  );
};

export default VerificationCard;
