import { useState } from "react";

const ProofEditor = ({
  onSubmit,
  loading,
  dailyRequirement,
  commitment,
}) => {
  const [text, setText] = useState("");

  return (
    <section
      style={{
        maxWidth: 720,
        margin: "40px auto",
      }}
    >
      <h2>Submit Proof for: {commitment?.title}</h2>

      <div style={{ marginBottom: 24, padding: 16, backgroundColor: "#f9f9f9", borderRadius: 8 }}>
        <h3 style={{ margin: "0 0 8px 0", color: "#333" }}>{commitment?.title}</h3>
        <p style={{ margin: "0 0 12px 0", color: "#666" }}>{commitment?.description}</p>
        <p style={{ margin: 0, color: "#555", fontWeight: "bold" }}>
          Daily Requirement: {dailyRequirement}
        </p>
      </div>

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
