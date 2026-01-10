import mongoose from "mongoose";

const proofSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    commitment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Commitment",
      required: true,
    },

    proofText: {
      type: String,
      required: true,
      trim: true,
    },

    proofDate: {
      type: Date,
      required: true,
    },

    status: {
      type: String,
      enum: ["pending", "verified", "rejected"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

// 🔒 Ensure one proof per commitment per day
proofSchema.index(
  { commitment: 1, proofDate: 1 },
  { unique: true }
);

const Proof = mongoose.model("Proof", proofSchema);

export default Proof;
