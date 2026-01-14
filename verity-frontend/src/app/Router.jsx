import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import RequireAuth from "../auth/RequireAuth";
import SubmitProof from "../pages/SubmitProof";

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
        path: "/submit-proof", 
        element: <SubmitProof /> 
      },
    ],
  },
]);

export default Router;
