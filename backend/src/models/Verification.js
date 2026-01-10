import mongoose from "mongoose";

const verificationSchema = new mongoose.Schema(
  {
    proof: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Proof",
      required: true,
    },

    verifier: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    decision: {
      type: String,
      enum: ["approved", "rejected"],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// One verifier can verify a proof only once
verificationSchema.index(
  { proof: 1, verifier: 1 },
  { unique: true }
);

const Verification = mongoose.model("Verification", verificationSchema);

export default Verification;
