import express from "express";
import dotenv from "dotenv";

const app = express();
const env = dotenv.config();
const port = process.env.PORT;

app.listen(port, ()=> {
    console.log(`Typescript app started on port ${port}`)
})
