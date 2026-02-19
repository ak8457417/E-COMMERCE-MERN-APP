import express from "express";
import cors from "cors";
import connectDB from "../config/mongodb.js";
import connectCloudinary from "../config/cloudinary.js";

import userRouter from "../routes/userRoute.js";
import productRouter from "../routes/productRoute.js";
import cartRouter from "../routes/cartRoute.js";
import orderRouter from "../routes/orderRoute.js";

const app = express();

app.use(cors());
app.use(express.json());

let initialized = false;

app.use(async (req, res, next) => {
    if (!initialized) {
        await connectDB();
        await connectCloudinary();
        initialized = true;
        console.log("Connected once");
    }
    next();
});

// routes
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => res.send("API Running"));

export default app;
