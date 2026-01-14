import { useState } from "react";
import SubmitProof from "../../pages/SubmitProof";

const ProofEditor = ({
  onSubmit,
  loading,
  dailyRequirement,
}) => {
  const [text, setText] = useState("");

  return (
    <section
      style={{
        maxWidth: 720,
        margin: "40px auto",
      }}
    >
      <h2>Today’s Proof</h2>

      <p style={{ color: "#555", marginBottom: 16 }}>
        Requirement: {SubmitProof?.dailyRequirement}
      </p>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Describe what you did today. Be precise."
        rows={8}
        style={{
          width: "100%",
          padding: 16,
          fontSize: 16,
          resize: "none",
        }}
        disabled={loading}
      />

      <div style={{ marginTop: 16 }}>
        <button
          onClick={() => onSubmit(text)}
          disabled={!text.trim() || loading}
        >
          {loading ? "Submitting…" : "Submit Proof"}
        </button>
      </div>

      <p
        style={{
          marginTop: 12,
          fontSize: 13,
          color: "#777",
        }}
      >
        Once submitted, this proof cannot be edited.
      </p>
    </section>
  );
};

export default ProofEditor;
