import { useAuth } from "../auth/AuthContext";
import ReputationSummary from "../components/reputation/ReputationSummary";
import ScoreExplanation from "../components/reputation/ScoreExplanation";
import ScoreRules from "../components/reputation/ScoreRules";

const Reputation = () => {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <main style={{ maxWidth: 720, margin: "40px auto" }}>
      <h2>Reputation & Trust</h2>

      <ReputationSummary user={user} />

      <ScoreExplanation />

      <ScoreRules />
    </main>
  );
};

export default Reputation;
