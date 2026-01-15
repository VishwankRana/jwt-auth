import express from "express";
import User from "../models/user.js";
import jwt from "jsonwebtoken";
import { access } from "fs";

const router = express.Router();

router.post('/register', async(req,res) =>{
    try{
        const { username, password } = req.body;

        if(!username || !password){
            return res.status(400).json({message: "All fields are required"});
        }

        const existingUser = await User.findOne({username});
        if(existingUser){
            return res.status(409).json({message: "Username already taken"});
        }

        const user = await User.create({
            username,
            password
        });

        res.status(201).json({
            message: "User Registered Successfully",
            userId: user._id
        });
    } catch (error) {
        console.error("Register error:", error);
        res.status(500).json({ message: "Server error" });
    }
});

router.post("/login", async(req,res) =>{
    try{
        const {username, password} = req.body;

        const user = await User.findOne({username});
        if(!user){
            return res.status(401).json({message: "Invalid credentials"});
        }

        const isMatch = await user.comparePassword(password);
        if(!isMatch){
            return res.status(401).json({ message: "Invalid Credentials"});
        }

        const token = jwt.sign(
            {userId: user._id},
            process.env.JWT_SECRET,
            {expiresIn: "15m"}
        );

        res.json({accessToken: token});
        }catch (err) {
            console.error("Login error:", err);
            res.status(500).json({ message: "Server error" });
        }
})

export default router;