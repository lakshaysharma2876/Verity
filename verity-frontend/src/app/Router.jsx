import { createBrowserRouter } from "react-router-dom";
import RequireAuth from "../auth/RequireAuth";
import AppShell from "../components/layout/AppShell";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

import Dashboard from "../pages/Dashboard";
import CreateCommitment from "../pages/CreateCommitment";
import SubmitProof from "../pages/SubmitProof";
import VerifyQueue from "../pages/VerifyQueue";
import Reputation from "../pages/Reputation";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
  // PUBLIC
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/contact", element: <Contact /> },

  // PROTECTED
  {
    element: <RequireAuth />,
    children: [
      {
        element: <AppShell />,
        children: [
          { path: "/dashboard", element: <Dashboard /> },
          { path: "/create", element: <CreateCommitment /> },
          { path: "/submit-proof/:commitmentId", element: <SubmitProof /> },
          { path: "/verify", element: <VerifyQueue /> },
          { path: "/reputation", element: <Reputation /> },
        ],
      },
    ],
  },
]);

export default router;
