import { motion, AnimatePresence } from "framer-motion";

const ErrorBanner = ({ message }) => {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.2 }}
          style={{
            background: "#f5f5f5",
            color: "#444",
            padding: "12px 16px",
            borderBottom: "1px solid #ddd",
            fontSize: 14,
          }}
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ErrorBanner;
