import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Successfully Connected");
  } catch (err) {
    if (err instanceof Error) {
      console.error("MongoDB connection error:", err.message);
    } else {
      console.error("Unknown MongoDB connection error");
    }
    process.exit(1);
  }
};

export default connectDb;
