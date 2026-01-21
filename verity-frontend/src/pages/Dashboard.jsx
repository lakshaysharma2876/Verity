import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiFetch } from "../services/api";
import TodayStatus from "../components/TodayStatus";
import ActiveCommitmentCard from "../components/ActiveCommitmentCard";
import PastCommitments from "../components/PastCommitments";
import EmptyState from "../components/EmptyState";

const Dashboard = () => {
  const [commitments, setCommitments] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    apiFetch("/commitments")
      .then(setCommitments)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading…</p>;

  const activeCommitment = commitments.find(
    (c) => c.status === "active"
  );

  return (
    <main style={{ maxWidth: 720, margin: "40px auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
        <h1 style={{ margin: 0 }}>Dashboard</h1>
        <button
          onClick={() => navigate("/create")}
          style={{
            backgroundColor: "#28a745",
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
      </div>

      <TodayStatus activeCommitment={activeCommitment} />
      {activeCommitment ? (
        <ActiveCommitmentCard commitment={activeCommitment} />
      ) : (
        <EmptyState />
      )}
      <PastCommitments commitments={commitments} />
    </main>
  );
};

export default Dashboard;
