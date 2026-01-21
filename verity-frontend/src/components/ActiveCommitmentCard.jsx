import dayjs from "dayjs";
import ProofAction from "./ProofAction";
import { useNavigate } from "react-router-dom";



const ActiveCommitmentCard = ({ commitment }) => {
  const daysLeft = dayjs(commitment.endDate).diff(
    dayjs(),
    "day"
  );

  const navigate = useNavigate();

  return (
    <section
      style={{
        padding: 24,
        border: "1px solid #ddd",
        borderRadius: 8,
        marginBottom: 32,
      }}
    >
      <h3
        style={{ cursor: "pointer" }}
        onClick={() => navigate(`/commitment/${commitment._id}`)}
      >
        {commitment.title}
      </h3>

      <p style={{ margin: "12px 0", color: "#444" }}>
        {commitment?.dailyRequirement}
      </p>

      <p style={{ fontSize: 14, color: "#777" }}>{daysLeft} days remaining</p>
      
      <ProofAction commitment={commitment} />
    </section>
  );
};

export default ActiveCommitmentCard;
