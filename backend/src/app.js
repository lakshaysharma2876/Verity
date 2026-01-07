import express from "express";

const app = express();

app.use(express.json());

app.get("/health", (req,res) => {
    res.json({
        "status" : "OK"
    });

    console.log("Health status is : ", res);
});

export default app;