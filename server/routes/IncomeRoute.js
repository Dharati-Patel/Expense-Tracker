import express from "express";
import { addIncome, getIncome, delIncome } from '../controllers/income.js';

const IncomeRouter = express.Router();

IncomeRouter.post('/add-income', addIncome);
IncomeRouter.get('/get-income/:userId', getIncome);
IncomeRouter.delete('/delete-income/:id', delIncome);

export default IncomeRouter;