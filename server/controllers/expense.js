import ExpenseModel from '../models/ExpenseModel.js';
import UserModel from '../models/UserModel.js';

export const addExpense = async (req, res) => {
    const { title, amount, date, category, description, user } = req.body;

    try {
        const userId = await UserModel.findById(user);
        if (!userId) {
            return res.status(404).json({ message: 'User not found!' });
        }

        const newExpense = new ExpenseModel({
            title,
            amount,
            date,
            category,
            description,
            user: userId
        });

        const lettersAndSpaces = /^[a-zA-Z\s]*$/;

        if (!title || !date || !category || !description || !userId) {
            return res.status(400).json({ message: 'All fields are required!' });
        }
        if (!title || !lettersAndSpaces.test(title)) {
            return res.status(400).json({ message: 'Title is required and must not contain numbers or special characters!' });
        }
        if (amount <= 0 || typeof amount !== 'number') {
            return res.status(400).json({ message: 'Amount must be a positive number!' });
        }

        await newExpense.save();
        res.status(200).json({ message: 'Expense Added!', expense: newExpense });
    } catch (error) {
        res.status(500).json({ message: 'Server Error!', error: error.message });
    }
};

export const getExpense = async (req,res) => {
    const { userId } = req.params;

    try {
        const expenses = await ExpenseModel.find({ user: userId }).sort({createdAt: -1});
        res.status(200).json(expenses);
    } catch (error) {
        res.status(500).json({message: 'Server Error!'});
    }
};

export const delExpense = async (req, res) => {
    const { id } = req.params;

    try {
        const expense = await ExpenseModel.findByIdAndDelete(id);
        if (!expense) {
            return res.status(404).json({ message: 'Expense not found!' });
        }
        res.status(200).json({ message: 'Expense Deleted!' });
    } catch (err) {
        res.status(500).json({ message: 'Server Error!' });
    }
};


