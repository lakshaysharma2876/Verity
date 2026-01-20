const CommitmentWarning = ({ acknowledged, onAcknowledge }) => {
  if (acknowledged) return null;

  return (
    <section
      style={{
        padding: "24px",
        border: "2px solid #ffc107",
        borderRadius: "8px",
        marginBottom: "24px",
        backgroundColor: "#fff3cd",
      }}
    >
      <h3 style={{ margin: "0 0 16px 0", color: "#856404" }}>
        ⚠️ Important Commitment Rules
      </h3>
      <ul style={{ margin: "0 0 20px 0", paddingLeft: "20px", color: "#856404" }}>
        <li style={{ marginBottom: "8px" }}>
          A commitment cannot be edited or deleted once created.
        </li>
        <li style={{ marginBottom: "8px" }}>
          Missing a single day will fail the commitment automatically.
        </li>
        <li>
          You can only have up to 2 active commitments at once.
        </li>
      </ul>

      <button
        style={{
          backgroundColor: "#ffc107",
          color: "#212529",
          border: "none",
          padding: "12px 24px",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: "500",
        }}
        onClick={onAcknowledge}
      >
        I understand and want to proceed
      </button>
    </section>
  );
};

export default CommitmentWarning;
