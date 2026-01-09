import dotenv from 'dotenv';
dotenv.config();

import connectDB from "./src/config/db.js"
import app from "./src/app.js"

const PORT = process.env.PORT || 8080

await connectDB();

app.listen(PORT, () => {
    console.log("running server on " + PORT)
})