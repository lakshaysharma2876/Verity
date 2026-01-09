import express from "express";
import authRoutes from "./routes/authRoutes.js"
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use(express.json());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);

app.get("/", (req,res)=> {
    res.json({
        "status" : "OK",
        "message" : "Running"
    });
});

app.get("/health", (req,res) => {
    res.json({
        "status" : "OK"
    });

    console.log("Health status is : ", res);
});

export default app;