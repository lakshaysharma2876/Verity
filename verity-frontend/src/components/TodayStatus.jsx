import dayjs from "dayjs";

const TodayStatus = ({ activeCommitment }) => {
  const today = dayjs().format("dddd, MMM D");

  return (
    <section style={{ marginBottom: 32 }}>
      <h2>{today}</h2>
      {activeCommitment ? (
        <p style={{ color: "#555" }}>
          You have an active commitment today.
        </p>
      ) : (
        <p style={{ color: "#777" }}>
          No active commitments.
        </p>
      )}
    </section>
  );
};

export default TodayStatus;
