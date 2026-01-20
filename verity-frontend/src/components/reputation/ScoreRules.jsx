const ScoreRules = () => {
  return (
    <section>
      <h3>How scores change</h3>

      <ul style={{ paddingLeft: 16 }}>
        <li>
          When a proof is verified, credibility increases.
        </li>
        <li>
          When a proof is rejected, credibility decreases.
        </li>
        <li>
          Missing a required day fails the commitment.
        </li>
        <li>
          Verifiers gain trust when their decision matches
          the final outcome.
        </li>
        <li>
          Verifiers lose trust when their decision contradicts
          the final outcome.
        </li>
      </ul>

      <p style={{ marginTop: 16, color: "#666" }}>
        Scores change slowly by design. No single action defines
        your reputation.
      </p>
    </section>
  );
};

export default ScoreRules;
