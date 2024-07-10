import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config';
import cartRouter from "./routes/cartRoute.js";
//app config
const app=express();
const port =4000

//middleware
app.use(express.json());
app.use(cors());

// DB Connection
connectDB();


//api endpoint
app.use("/api/food",foodRouter);
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)

app.get("/",(req,res)=>{
    res.send("api working");
})

app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`);
})
//mongodb+srv://khatryshreya:pyarekanha@cluster0.jh0zkno.mongodb.net/?