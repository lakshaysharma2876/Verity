const ProofSubmittedState = () => {
  return (
    <section
      style={{
        maxWidth: 720,
        margin: "80px auto",
        textAlign: "center",
      }}
    >
      <h2>Proof Submitted</h2>

      <p style={{ color: "#555", marginTop: 12 }}>
        Your proof has been submitted and is awaiting peer verification.
      </p>

      <p
        style={{
          marginTop: 24,
          fontSize: 14,
          color: "#777",
        }}
      >
        You cannot submit another proof for today.
      </p>
    </section>
  );
};

export default ProofSubmittedState;
