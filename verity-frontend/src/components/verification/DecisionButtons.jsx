const DecisionButtons = ({ onApprove, onReject }) => {
  return (
    <div
      style={{
        display: "flex",
        gap: 12,
        marginTop: 24,
      }}
    >
      <button
        style={{
          flex: 1,
          background: "#f5f5f5",
        }}
        onClick={onReject}
      >
        Reject
      </button>

      <button
        style={{
          flex: 1,
          background: "#eaeaea",
        }}
        onClick={onApprove}
      >
        Approve
      </button>
    </div>
  );
};

export default DecisionButtons;
