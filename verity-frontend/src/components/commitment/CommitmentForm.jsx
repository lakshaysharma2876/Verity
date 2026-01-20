import { useState } from "react";

const CommitmentForm = ({ onSubmit, loading }) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    dailyRequirement: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(form);
      }}
      style={{ display: "flex", flexDirection: "column", gap: "16px" }}
    >
      <div>
        <label style={{ display: "block", marginBottom: "8px", fontWeight: "500" }}>
          Commitment Title
        </label>
        <input
          name="title"
          placeholder="e.g., Exercise daily"
          value={form.title}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "12px", fontSize: "16px" }}
        />
      </div>

      <div>
        <label style={{ display: "block", marginBottom: "8px", fontWeight: "500" }}>
          Description
        </label>
        <textarea
          name="description"
          placeholder="Why are you committing to this?"
          value={form.description}
          onChange={handleChange}
          rows={3}
          required
          style={{ width: "100%", padding: "12px", fontSize: "16px", resize: "vertical" }}
        />
      </div>

      <div>
        <label style={{ display: "block", marginBottom: "8px", fontWeight: "500" }}>
          Daily Requirement
        </label>
        <textarea
          name="dailyRequirement"
          placeholder="What must be done every day?"
          value={form.dailyRequirement}
          onChange={handleChange}
          rows={2}
          required
          style={{ width: "100%", padding: "12px", fontSize: "16px", resize: "vertical" }}
        />
      </div>

      <div style={{ display: "flex", gap: "16px" }}>
        <div style={{ flex: 1 }}>
          <label style={{ display: "block", marginBottom: "8px", fontWeight: "500" }}>
            Start Date
          </label>
          <input
            type="date"
            name="startDate"
            value={form.startDate}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "12px", fontSize: "16px" }}
          />
        </div>

        <div style={{ flex: 1 }}>
          <label style={{ display: "block", marginBottom: "8px", fontWeight: "500" }}>
            End Date
          </label>
          <input
            type="date"
            name="endDate"
            value={form.endDate}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "12px", fontSize: "16px" }}
          />
        </div>
      </div>

      <button
        disabled={loading}
        style={{
          marginTop: "16px",
          padding: "14px",
          fontSize: "16px",
          fontWeight: "500"
        }}
      >
        {loading ? "Creating…" : "Create Commitment"}
      </button>
    </form>
  );
};

export default CommitmentForm;
