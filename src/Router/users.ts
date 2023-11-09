import express from "express";
const router = express.Router();
import { register } from "../Controller/UserController";

router.post("/register", register);

export default router;
