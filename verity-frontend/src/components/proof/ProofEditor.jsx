import { useState } from "react";

const ProofEditor = ({ onSubmit, loading, dailyRequirement }) => {
  const [text, setText] = useState("");

  return (
    <section style={{ maxWidth: 720 }}>
      <p style={{ marginBottom: 12 }}>
        Requirement: {dailyRequirement}
      </p>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Describe what you did today"
        rows={6}
        style={{ width: "100%" }}
      />

      <button
        onClick={() => onSubmit(text)}
        disabled={loading || !text.trim()}
        style={{ marginTop: 12 }}
      >
        {loading ? "Submitting..." : "Submit Proof"}
      </button>
    </section>
  );
};

export default ProofEditor;
