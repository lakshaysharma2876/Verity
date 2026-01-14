import { apiFetch } from "./api";

export const createCommitment = async (payload) => {
  return apiFetch("/commitments", {
    method: "POST",
    body: JSON.stringify(payload),
  });
};
