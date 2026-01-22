import { createContext, useContext, useState } from "react";

const ErrorContext = createContext();

export const ErrorProvider = ({ children }) => {
  const [error, setError] = useState(null);

  const showError = (message) => {
    setError(message);
    setTimeout(() => setError(null), 4000); // auto-dismiss
  };

  const clearError = () => setError(null);

  return (
    <ErrorContext.Provider
      value={{ error, showError, clearError }}
    >
      {children}
    </ErrorContext.Provider>
  );
};

export const useError = () => useContext(ErrorContext);
