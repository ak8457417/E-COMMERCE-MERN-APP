import app from "../server.js";
import connectDB from "../config/mongodb.js";
import connectCloudinary from "../config/cloudinary.js";

let isConnected = false;

export default async function handler(req, res) {
    if (!isConnected) {
        await connectDB();
        await connectCloudinary();
        isConnected = true;
        console.log("Serverless Cold Start: DB Connected");
    }

    return app(req, res);
}
