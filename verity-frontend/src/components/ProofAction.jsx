import { useNavigate } from "react-router-dom";

const ProofAction = ({ commitment }) => {
  const navigate = useNavigate();

  return (
    <div style={{ marginTop: 16 }}>
      <button
        onClick={() =>
          navigate("/submit-proof", {
            state: { commitment },
          })
        }
      >
        Submit today’s proof
      </button>
    </div>
  );
};

export default ProofAction;
