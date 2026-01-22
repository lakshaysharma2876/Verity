import { useState } from "react";
import { useError } from "../context/ErrorContext";

const Contact = () => {
  const { showError } = useError();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      showError("Please fill in all fields");
      return;
    }

    setLoading(true);

    try {
      // TEMP: frontend-only version
      // Later this can be replaced with API call
      await new Promise((res) => setTimeout(res, 1000));

      setSubmitted(true);
    } catch (err) {
      showError("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div style={{ maxWidth: 600, margin: "80px auto", textAlign: "center" }}>
        <h2>Message sent</h2>
        <p>
          Thanks for reaching out. We’ll get back to you as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 600, margin: "80px auto" }}>
      <h1>Contact Us</h1>
      <p style={{ color: "#666", marginBottom: 32 }}>
        Need help, have feedback, or facing an issue?  
        Drop us a message and we’ll respond.
      </p>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 16 }}>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: "100%", padding: 10, marginTop: 4 }}
          />
        </div>

        <div style={{ marginBottom: 16 }}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%", padding: 10, marginTop: 4 }}
          />
        </div>

        <div style={{ marginBottom: 24 }}>
          <label>Message</label>
          <textarea
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{ width: "100%", padding: 10, marginTop: 4 }}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{ padding: "10px 20px" }}
        >
          {loading ? "Sending…" : "Send message"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
