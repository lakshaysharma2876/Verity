import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Database connection successful: ${conn.connection.host}`);
    }
    catch(error) {
        console.error(`Connection unsuccessful ${error.message}`);
        process.exit(1); //terminates the server and prevents from starting the broken server
    }
}

export default connectDB;