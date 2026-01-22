import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import { useError } from "../context/ErrorContext";

const Login = () => {
  const { login } = useAuth();
  const { showError } = useError();

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      showError("Please enter email and password");
      return;
    }

    setLoading(true);
    try {
      await login(email, password );
      navigate(from, { replace: true });
    } catch (err) {
      showError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: 360,
          padding: 32,
          background: "#fff",
          border: "1px solid #eee",
          borderRadius: 8,
        }}
      >
        <h2 style={{ marginBottom: 8 }}>Welcome back</h2>
        <p style={{ marginBottom: 24, color: "#666" }}>
          Log in to continue to Verity
        </p>

        <div style={{ marginBottom: 16 }}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%", padding: 8, marginTop: 4 }}
          />
        </div>

        <div style={{ marginBottom: 16 }}>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%", padding: 8, marginTop: 4 }}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: 10,
            marginTop: 8,
          }}
        >
          {loading ? "Logging in…" : "Login"}
        </button>

        <p style={{ marginTop: 16, fontSize: 14 }}>
          Don’t have an account?{" "}
          <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
