import express from "express";
import { addIncome, getIncome } from '../controllers/income.js';

const transRouter = express.Router();

transRouter.post('/add-income', addIncome);
transRouter.get('/get-income/:userId', getIncome);

export default transRouter;