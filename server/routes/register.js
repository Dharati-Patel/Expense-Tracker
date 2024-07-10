import express from "express";
import UserModel from "../models/UserSignup.js";

const userRouter = express.Router();

userRouter.post('/register', async (req, res) => {
    try {
        const users = await UserModel.create(req.body);
        res.json(users);
    } catch (err) {
        res.json(err);
    }
});

export default userRouter;