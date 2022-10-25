import * as dotenv from 'dotenv'
dotenv.config()
import mongoose from "mongoose";


const url = process.env.DATABASE_URL;
const Connection = () => {
  try {
    mongoose.connect(url, { useUnifiedTopology: true });
    console.log("Connected to Database");
  } catch (err) {
    console.log("error connecting to database", err.message);
  }
};

export default Connection;
