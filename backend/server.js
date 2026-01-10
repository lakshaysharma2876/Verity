import dotenv from 'dotenv';
import { startMissedDayJob } from "./jobs/missedDayCheck.js";
dotenv.config();

import connectDB from "./src/config/db.js"
import app from "./src/app.js"

const PORT = process.env.PORT || 8080

await connectDB();
startMissedDayJob();

app.listen(PORT, () => {
    console.log("running server on " + PORT)
})