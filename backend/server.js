import dotenv from 'dotenv';
dotenv.config();

import connectDB from "./src/config/db.js"
import app from "./src/app.js"

import http from "http";

const PORT = process.env.PORT || 8080

connectDB();

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.end("Welcome to my server")
})

server.listen(PORT, () => {
    console.log("running server on " + PORT)
})