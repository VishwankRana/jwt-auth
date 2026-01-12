import express from "express";
import connectDb from "./DbConfig.js";

const app = express();
connectDb();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req,res)=>{
    res.json({message: "Hello from backend"});
})

app.listen(3120, ()=>{
    console.log("Lisenting on port 3120");   
})