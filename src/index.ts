import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import UserRouter from "./Router/users";
import { connectToDatabase as db } from "./Config/Database";

const app = express();
dotenv.config();

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", UserRouter);

const port: number = parseInt(process.env.PORT || "3000");

app.listen(port, () => {
  console.log(`Typescript app started on port ${port}`);
});

db();
