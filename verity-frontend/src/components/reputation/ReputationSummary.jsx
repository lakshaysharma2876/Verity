const ReputationSummary = ({ user }) => {
  return (
    <section
      style={{
        padding: 24,
        border: "1px solid #ddd",
        marginBottom: 32,
      }}
    >
      <p>
        <strong>Credibility Score</strong>
      </p>
      <p style={{ fontSize: 24 }}>
        {user.credibilityScore}
      </p>

      <hr style={{ margin: "16px 0" }} />

      <p>
        <strong>Verifier Trust Score</strong>
      </p>
      <p style={{ fontSize: 24 }}>
        {user.verifierTrustScore}
      </p>
    </section>
  );
};

export default ReputationSummary;
