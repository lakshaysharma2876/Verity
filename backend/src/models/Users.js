import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },

    credibilityScore: {
      type: Number,
      default: 50,
      min: 0,
      max: 100,
    },

    verifierTrustScore: {
      type: Number,
      default: 50,
      min: 0,
      max: 100,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt automatically
  }
);

//$algorithm(2digits)$counts$salt_hash 

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt, (err) => {
    if(err) {
        console.error("Error while hashing the password");
        return;
    }
  });

  next();
});


userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

//jwt authentication ==> header.payload.signature || separated by dot(.)
userSchema.methods.generateToken = () => {
  return jwt.sign(
    { id: this._id },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN,
    }
  );
};


const User = mongoose.model("User", userSchema);

export default User;
