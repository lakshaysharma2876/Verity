import { useEffect, useState } from "react";
import { apiFetch } from "../services/api";
import TodayStatus from "../components/TodayStatus";
import ActiveCommitmentCard from "../components/ActiveCommitmentCards";
import PastCommitments from "../components/PastCommitments";
import EmptyState from "../components/EmptyState";


const Dashboard = () => {
  const [commitments, setCommitments] = useState([]);
  const [loading, setLoading] = useState(true);

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
