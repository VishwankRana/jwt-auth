import express from "express";
import connectDb from "./DbConfig.js";
import authRoutes from "./routes/auth.js"
import router from "./routes/auth.js";

const app = express();
connectDb();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(router);
app.use("/api/auth", authRoutes);

app.get('/', (req,res)=>{
    res.json({message: "Hello from backend"});
})

app.listen(3120, ()=>{
    console.log("Lisenting on port 3120");   
})