const CommitmentWarning = ({ acknowledged, onAcknowledge }) => {
  if (acknowledged) return null;

  return (
    <section
      style={{
        padding: 20,
        border: "1px solid #ddd",
        marginBottom: 24,
      }}
    >
      <p>
        A commitment cannot be edited or deleted once created.
      </p>
      <p>
        Missing a single day will fail the commitment automatically.
      </p>

      <button
        style={{ marginTop: 16 }}
        onClick={onAcknowledge}
      >
        I understand and want to proceed
      </button>
    </section>
  );
};

export default CommitmentWarning;
