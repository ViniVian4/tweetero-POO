import express from "express";
import { signUp } from "../controllers/signController.js";

const signRouter = express.Router();

signRouter.post("/sign-up", signUp);

export { signRouter }