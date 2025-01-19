// require('dotenv').config({"path" : "./dB"}) -> problems in code consistency

import dotenv from "dotenv";



// import mongoose from "mongoose";
// import { DB_Name } from "./constants";
// import express from "express";
// const app = express()
import {connectDB} from "./dB/index.js";

dotenv.config({
    path : './env'
})
connectDB()



























/*
(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_Name}`)
        app.on("error" , (error) => {
            console.log("Application isn't able to talk to database: ", error);
            throw error;
        })
    app.listen(process.env.PORT, () => 
    {
        console.log(`App is listening on ${process.env.PORT}`);
        
    })
    } catch (error) {
        console.log("Error occured, error");
        throw error;
    }
})
    */