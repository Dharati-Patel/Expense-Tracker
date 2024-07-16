import express from "express";
import UserModel from "../models/UserModel.js";

const userRouter = express.Router();

userRouter.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email: email });
        if (user) {
            if (user.password === password) {
                res.json({ message: "Success", userId: user.id, userName: user.name });
            } else {
                res.json("The password is incorrect!");
            }
        } else {
            res.json("No record found!");
        }
    } catch (err) {
        res.json(err);
    }
});


userRouter.post('/register', async (req, res) => {
    try {
        const users = await UserModel.create(req.body);
        res.json(users);
    } catch (err) {
        res.json(err);
    }
});

export default userRouter;