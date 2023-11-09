import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import UserRouter from "./Router/users";
import { connectToDatabase as db } from "./Config/Database";

const app: Application = express();
const envResult = dotenv.config();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.get('api/v1/register', (req:Request,res:Response)=>{
    res.send('hello');
});

const port: number = parseInt(process.env.PORT || "4000");











app.listen(port, () => {
    console.log(`Typescript app started on port ${port}`);
});

db();
