import express from "express";
import { addExpense } from '../controllers/expense.js';

const ExpenseRouter = express.Router();

ExpenseRouter.post('/add-expense', addExpense);

export default ExpenseRouter;