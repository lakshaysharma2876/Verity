import Commitment from "../models/Commitment.js";


export const createCommitment = async (req, res) => {
  const activeCommitments = await Commitment.countDocuments({
  user: req.user._id,
  status: "active",
});

//no user can have more than 2 active commitments
if (activeCommitments >= 2) {
  return res
    .status(400)
    .json({ message: "Maximum active commitments reached" });
}

  try {
    const {
      title,
      description,
      dailyRequirement,
      startDate,
      endDate,
    } = req.body;

    // 1. Basic validation
    if (
      !title ||
      !description ||
      !dailyRequirement ||
      !startDate ||
      !endDate
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // 2. Date validation
    if (new Date(startDate) >= new Date(endDate)) {
      return res
        .status(400)
        .json({ message: "End date must be after start date" });
    }

    // 3. Create commitment
    const commitment = await Commitment.create({
      user: req.user._id,
      title,
      description,
      dailyRequirement,
      startDate,
      endDate,
    });

    res.status(201).json(commitment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getMyCommitment = async (req, res) => {
  try {
    const commitments = await Commitment.find({
      user: req.user._id,
    }).sort({ createdAt: -1 });

    res.json(commitments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
