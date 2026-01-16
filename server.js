import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDb from "./DbConfig.js";
import router from "./routes/auth.js";
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/user.js";

const app = express();
dotenv.config();
connectDb();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.use(router);
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

app.get('/', (req,res)=>{
    res.json({message: "Hello from backend"});
})

app.listen(3120, ()=>{
    console.log("Lisenting on port 3120");   
})