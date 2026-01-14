const statusStyles = {
  pending: {
    color: "#777",
  },
  verified: {
    color: "#2f855a",
  },
  rejected: {
    color: "#c53030",
  },
};

const ProofStatusBadge = ({ status }) => {
  return (
    <span
      style={{
        fontSize: 13,
        ...statusStyles[status],
      }}
    >
      {status.toUpperCase()}
    </span>
  );
};

export default ProofStatusBadge;
