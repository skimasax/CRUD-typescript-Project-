import express, {Application,Request,Response, urlencoded} from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import DatabaseConfig from "./Config/Database";
import router from './routers';


const app: Application = express();
const envResult = dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const userRouter = 


const port: number = parseInt(process.env.PORT || "4000");

app.listen(port, ()=> {
    console.log(`Typescript app started on port ${port}`)
})
