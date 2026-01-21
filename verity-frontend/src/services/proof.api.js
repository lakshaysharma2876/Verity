import { apiFetch } from "./api";

export const submitProof = async ({
  commitmentId,
  proofText,
  proofDate,
}) => {
  return apiFetch("/proofs/", {
    method: "POST",
    body: JSON.stringify({
      commitmentId,
      proofText,
      proofDate,
    }),
  });
};

export const fetchProofsForCommitment = ({commitmentId}) => {
  return apiFetch(`/proofs?commitmentId=${commitmentId}`);
};
