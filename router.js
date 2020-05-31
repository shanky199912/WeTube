import express, { Router } from "express";

export const userRouter = express.Router();

userRouter.get("/", (req, res) => res.send(`Hi from user index`));
userRouter.get("/edit", (req, res) => res.send(`Hi from the user edit`));
userRouter.get("/password", (req,res) => res.send(`HI Plss never share your password`));