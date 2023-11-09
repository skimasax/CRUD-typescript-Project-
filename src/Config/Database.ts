import mongoose from "mongoose";
import dotenv from "dotenv";


export async function connectToDatabase() {
  try {
    const url: any = process.env.MONGODB_URL;
    await mongoose.connect(url);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
}



