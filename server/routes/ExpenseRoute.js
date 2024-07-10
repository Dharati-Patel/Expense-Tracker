import express from "express";
import { addExpense, getExpense, delExpense } from '../controllers/expense.js';

const ExpenseRouter = express.Router();

ExpenseRouter.post('/add-expense', addExpense);
ExpenseRouter.get('/get-expense/:userId', getExpense);
ExpenseRouter.delete('/delete-expense/:id', delExpense);

export default ExpenseRouter;