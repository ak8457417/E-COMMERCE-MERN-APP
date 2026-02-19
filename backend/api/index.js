import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import connectDB from "../config/mongodb.js";
import connectCloudinary from "../config/cloudinary.js";
import userRouter from "../routes/userRoute.js";
import productRouter from "../routes/productRoute.js";
import cartRouter from "../routes/cartRoute.js";
import orderRouter from "../routes/orderRoute.js";

const app = express();

app.use(express.json());
app.use(cors());

// connect DB only once (important for serverless)
let isConnected = false;
const connectAll = async () => {
    if (!isConnected) {
        await connectDB();
        await connectCloudinary();
        isConnected = true;
        console.log("Connected to DB & Cloudinary");
    }
};

app.use(async (req, res, next) => {
    await connectAll();
    next();
});

// routes
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);

app.get('/', (req, res) => {
    res.send("API working");
});

// EXPORT — NO app.listen()
export default app;
