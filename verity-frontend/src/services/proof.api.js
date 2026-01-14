import { apiFetch } from "./api";

const token = localStorage.getItem("token");

export const submitProof = async ({
  commitmentId,
  proofText,
  proofDate,
}) => {
  return apiFetch("/proofs", {
    method: "POST",
    body: JSON.stringify({
      commitmentId,
      proofText,
      proofDate,
    }),
  });
};
