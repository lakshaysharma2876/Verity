import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import { AuthProvider } from "./auth/AuthContext";
import "../index.css";
import { ErrorProvider } from "./context/ErrorContext";
import ErrorBanner from "./components/ui/ErrorBanner";
import { useError } from "./context/ErrorContext";
import {MotionConfig} from "framer-motion";
import Background from "./components/layout/Background";

const ErrorBannerWrapper = () => {
  const { error } = useError();
  return <ErrorBanner message={error} />;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MotionConfig reducedMotion="user">
      <ErrorProvider>
        <ErrorBannerWrapper />
        <AuthProvider>
          <Background>
            <App />
          </Background>
        </AuthProvider>
      </ErrorProvider>
    </MotionConfig>
  </React.StrictMode>
);
