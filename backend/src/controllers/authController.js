import User from "../models/Users.js";

export const registerUser = async (req, res) => {
    console.log("REGISTER endpoint hit");
  try {
    const { name, email, password } = req.body;

    // 1. Basic validation
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // 2. Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // 3. Create user (password hashing happens automatically)
    const user = await User.create({
      name,
      email,
      password,
    });

    // 4. Send response with JWT
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: user.generateToken(),
    });
  } catch (error) {
    console.error("Register error:", error);
    res.status(500).json({ message: error.message });
  }

};


export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Validate input
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }

    // 2. Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // 3. Compare password
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // 4. Send JWT
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: user.generateToken(),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
