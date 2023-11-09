import express from "express";
const router = express.Router();
import {register} from "../Controller/UserController";


router.post('/register', (req, res)=>{
    res.send('hello');
})

export default router;