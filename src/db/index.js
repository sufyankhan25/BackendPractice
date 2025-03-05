import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDb = async () => {
    try {
        // Store the connection instance
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);

        console.log(`\n MongoDB connected to DB Host: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("Error: ", error);
        process.exit(1);
    }
};

export default connectDb;
