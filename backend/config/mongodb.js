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


// const testSchema = new mongoose.Schema({
//     name: String,
//     createdAt: { type: Date, default: Date.now }
// });
//
// const TestModel = mongoose.model("Test", testSchema);
//
// // Function to Connect to MongoDB
// async function connectDB() {
//     try {
//         await mongoose.connect("mongodb+srv://ak8457417:22311167abhishek@cluster0.n7p36.mongodb.net/hello", {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         });
//         console.log('✅ Connected to MongoDB');
//
//         // Insert a test document
//         await TestModel.create({ name: "Hello MongoDB" });
//         console.log("✅ Test document inserted!");
//
//         // Start the server only after the DB is connected
//         app.listen(port, () => {
//             console.log(`🚀 Server running on http://localhost:${port}`);
//         });
//
//     } catch (err) {
//         console.error('❌ MongoDB Connection Error:', err);
//         process.exit(1); // Stop the process if DB connection fails
//     }
// }


import mongoose from "mongoose";

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

const connectDB = async () => {

    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        cached.promise = mongoose.connect(process.env.MONGODB_URI, {
            bufferCommands: false,
        }).then((mongooseInstance) => {
            console.log("MongoDB Connected");
            return mongooseInstance;
        });
    }

    cached.conn = await cached.promise;
    return cached.conn;
};

export default connectDB;
