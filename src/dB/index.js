import mongoose from "mongoose";
import { DB_Name } from "../constants.js";

export const connectDB = async () => 
{
    try {
       const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URL}/${DB_Name}`)
        console.log(`MONGODB Connected! DB Host ${connectionInstance.connection.host}`);
        
    } catch (error) {
        console.log("MongoDB connection error : ",error);
        process.exit(1);
    }
}