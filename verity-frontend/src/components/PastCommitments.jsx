const PastCommitments = ({ commitments }) => {
  const past = commitments.filter(
    (c) => c.status !== "active"
  );

  if (!past.length) return null;

  return (
    <section style={{ marginTop: 48 }}>
      <h4>Past commitments</h4>
      <ul>
        {past.map((c) => (
          <li key={c._id}>
            {c.title} — {c.status}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PastCommitments;
