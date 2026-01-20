import { useNavigate } from "react-router-dom";

const EmptyState = () => {
  const navigate = useNavigate();

  return (
    <section
      style={{
        textAlign: "center",
        padding: "80px 20px",
        color: "#666",
      }}
    >
      <h3 style={{ marginBottom: 16, color: "#333" }}>
        No Active Commitments
      </h3>
      <p style={{ marginBottom: 24 }}>
        You don't have any active commitments right now.
      </p>
      <p style={{ marginBottom: 32 }}>
        Create a new commitment to start building your reputation.
      </p>
      <button
        onClick={() => navigate("/create")}
        style={{
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          padding: "12px 24px",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: "500",
        }}
      >
        Create Commitment
      </button>
    </section>
  );
};

export default EmptyState;
