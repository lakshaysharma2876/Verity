import ProofTimelineItem from "./ProofTimelineItem";


const ProofTimeline = ({ proofs }) => {
  if (!proofs.length) {
    return (
      <p style={{ color: "#777" }}>
        No proofs submitted yet.
      </p>
    );
  }

  return (
    <section>
      <h3>Proof History</h3>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {proofs.map((proof) => (
          <ProofTimelineItem
            key={proof._id}
            proof={proof}
          />
        ))}
      </ul>
    </section>
  );
};

export default ProofTimeline;
