import mongoose from "mongoose";

const MONGO_URI = "mongodb://localhost:27017/authapp-practice";

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    // Connecting to the database
    await mongoose.connect(MONGO_URI, {});
    console.log("MongoDB connected successfully.");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;
