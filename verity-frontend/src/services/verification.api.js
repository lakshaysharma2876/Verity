import { apiFetch } from "./api";

export const fetchPendingVerifications = () => {
  return apiFetch("/verifications/pending");
};

export const submitVerification = ({ proofId, decision }) => {
  return apiFetch("/verifications", {
    method: "POST",
    body: JSON.stringify({ proofId, decision }),
  });
};
