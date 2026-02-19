// import express from 'express';
// import cors from 'cors';
// import 'dotenv/config'
// import mongoose from "mongoose";
// import connectDB from "./config/mongodb.js";
// import connectCloudinary from "./config/coudinary.js";
// import userRouter from "./routes/userRoute.js";
// import productRouter from "./routes/productRoute.js";
// import cartRouter from "./routes/cartRoute.js";
// import orderRouter from "./routes/orderRoute.js";
//
// const app = express();
// const port = process.env.PORT || 3000;
//
// app.use(express.json());
// app.use(cors());
//
// // main()
// //     .then(() => console.log('Connected to MongoDB'))
// //     .catch(err => console.log(err));
// //
// // async function main() {
// //     await mongoose.connect('mongodb+srv://ak8457417:22311167abhishek@cluster0.n7p36.mongodb.net/e-commerce');
// // }
//
// connectDB()
// connectCloudinary()
//
// // api endpoints
// app.use('/api/user', userRouter);
// app.use('/api/product', productRouter)
// app.use('/api/cart', cartRouter);
// app.use('/api/order', orderRouter);
//
// app.listen(port, () => {
//     console.log(`Listening on port ${port}`);
// })
//
// app.get('/', (req, res) => {
//     res.send("API working on http://localhost:3000");
// })


import express from "express";
import cors from "cors";

import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

const app = express();

app.use(express.json());
app.use(cors({
    origin: ["https://e-commerce-mern-app-frontend-one.vercel.app"],
    credentials: true
}));

// Routes
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
    res.send("API Working");
});

export default app;
