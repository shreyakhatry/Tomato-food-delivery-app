import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://khatryshreya:pyarekanha@cluster0.jh0zkno.mongodb.net/food-del').then(()=>{
        console.log('DB connected');
    })
}