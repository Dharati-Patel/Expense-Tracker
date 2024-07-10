import express from "express";
import { addIncome } from '../controllers/income.js';

const transRouter = express.Router();

transRouter.post('/add-income', addIncome);

export default transRouter;