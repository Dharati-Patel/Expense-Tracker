import express from "express";
import { addIncome, getIncome, delIncome } from '../controllers/income.js';

const transRouter = express.Router();

transRouter.post('/add-income', addIncome);
transRouter.get('/get-income/:userId', getIncome);
transRouter.delete('/delete-income/:id', delIncome);

export default transRouter;