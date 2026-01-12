import mongoose from "mongoose";

const connectDb = async () =>{
    try{
        await mongoose.connect('mongodb://localhost:27017/JWTAuthDB');
        console.log("MongoDB Succesfully Connected");
    }
    catch{
        if (err instanceof Error) {
            console.error("MongoDB connection error:", err.message)
        } else {
            console.error('Unknown MongoDB connection error');
        }
    }
}

export default connectDb;