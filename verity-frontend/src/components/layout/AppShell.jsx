import { Outlet, NavLink } from "react-router-dom";
import { useAuth } from "../../auth/AuthContext";

const AppShell = () => {
  const { logout } = useAuth();
  return (
    <div>
      {/* Top Navigation */}
      <header
        style={{
          padding: "16px 24px",
          borderBottom: "1px solid #eee",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <strong>Verity</strong>

        <nav style={{ display: "flex", gap: 16 }}>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              fontWeight: isActive ? "600" : "400",
              opacity: isActive ? 1 : 0.7,
            })}
          >
            Dashboard
          </NavLink>
          <NavLink to="/create">Commit</NavLink>
          <NavLink to="/verify">Verify</NavLink>
          <NavLink to="/reputation">Reputation</NavLink>
        </nav>

        <button onClick={logout}>Logout</button>
      </header>

      {/* Page Content */}
      <div style={{ padding: "24px" }}>
  <Outlet />
</div>
    </div>
  );
};

export default AppShell;
