import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import RequireAuth from "../auth/RequireAuth";
import SubmitProof from "../pages/SubmitProof";
import VerifyQueue from "../pages/VerifyQueue";
import CreateCommitment from "../pages/CreateCommitment";
import CommitmentDetail from "../pages/CommitmentDetail";

const Router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    element: <RequireAuth />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/create",
        element: <CreateCommitment />,
      },
      { 
        path: "/submit-proof", 
        element: <SubmitProof /> 
      },
      {
        path: "/verify",
        element: <VerifyQueue />
      },
      {
       path: "/commitment/:id", 
       element: <CommitmentDetail /> 
      },
    ],
  },
]);

export default Router;
