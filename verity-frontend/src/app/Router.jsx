import { createBrowserRouter } from "react-router-dom";
import RequireAuth from "../auth/RequireAuth";
import AppShell from "../components/layout/AppShell";

import Dashboard from "../pages/Dashboard";
import CreateCommitment from "../pages/CreateCommitment";
import CommitmentDetail from "../pages/CommitmentDetail";
import SubmitProof from "../pages/SubmitProof";
import VerifyQueue from "../pages/VerifyQueue";
import Reputation from "../pages/Reputation";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },

  {
    element: <RequireAuth />,
    children: [
      {
        element: <AppShell />,
        children: [
          { path: "/", element: <Dashboard /> },
          { path: "/create", element: <CreateCommitment /> },
          { path: "/commitment/:id", element: <CommitmentDetail /> },
          { path: "/submit-proof/:commitmentId", element: <SubmitProof /> },
          { path: "/verify", element: <VerifyQueue /> },
          { path: "/reputation", element: <Reputation /> },
        ],
      },
    ],
  },
]);

export default router;
