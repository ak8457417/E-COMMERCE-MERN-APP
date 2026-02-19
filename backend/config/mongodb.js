// import mongoose from 'mongoose'
//
// const connectDB = async () => {
//     mongoose.connection.on('connected', () => {
//         console.log("MongoDB connected");
//     })
//     await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`)
// }
//
// export default connectDB

import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connection.on("connected", () => {
            console.log("MongoDB connected");
        });

        await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`, {
            serverSelectionTimeoutMS: 30000   // wait 30s for atlas
        });

    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        throw error; // VERY IMPORTANT
    }
};

export default connectDB;
