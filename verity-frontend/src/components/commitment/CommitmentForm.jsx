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
    >
      <input
        name="title"
        placeholder="Commitment title"
        onChange={handleChange}
        required
      />

      <textarea
        name="description"
        placeholder="Why are you committing to this?"
        onChange={handleChange}
        required
      />

      <textarea
        name="dailyRequirement"
        placeholder="What must be done every day?"
        onChange={handleChange}
        required
      />

      <input
        type="date"
        name="startDate"
        onChange={handleChange}
        required
      />

      <input
        type="date"
        name="endDate"
        onChange={handleChange}
        required
      />

      <button disabled={loading}>
        {loading ? "Creating…" : "Create Commitment"}
      </button>
    </form>
  );
};

export default CommitmentForm;
