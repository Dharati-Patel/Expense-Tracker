import express from "express";
import { addExpense, getExpense } from '../controllers/expense.js';

const ExpenseRouter = express.Router();

ExpenseRouter.post('/add-expense', addExpense);
ExpenseRouter.get('/get-expense/:userId', getExpense);

export default ExpenseRouter;