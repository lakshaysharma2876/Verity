import cron from "node-cron";
import Commitment from "../models/Commitment.js";
import Proof from "../models/Proof.js";


// Runs once every day at 00:05 AM
 
export const startMissedDayJob = () => {
  cron.schedule("5 0 * * *", async () => {
    console.log("Running missed-day detection job");

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Yesterday
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    //  Fetch all active commitments
    const activeCommitments = await Commitment.find({
      status: "active",
      startDate: { $lte: yesterday },
      endDate: { $gte: yesterday },
    });

    for (const commitment of activeCommitments) {
      // Check if proof exists for yesterday
      const proofExists = await Proof.findOne({
        commitment: commitment._id,
        proofDate: {
          $gte: yesterday,
          $lt: today,
        },
      });

      //  If no proof → fail commitment
      if (!proofExists) {
        commitment.status = "failed";
        await commitment.save();

        console.log(`Commitment failed due to missed proof: ${commitment._id}`);
      }
    }
  });
};
