import IncomeModel from '../models/IncomeModel.js';
import UserModel from '../models/UserModel.js';

export const addIncome = async (req, res) => {
    const { title, amount, date, category, description, user } = req.body;
    try {
        const userId = await UserModel.findById(user);
        if (!userId) {
            return res.status(404).json({ message: 'User not found!' });
        }

        const newIncome = new IncomeModel({
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

        await newIncome.save();
        res.status(200).json({ message: 'Income Added!', income: newIncome });
    } catch (error) {
        res.status(500).json({ message: 'Server Error!', error: error.message });
    }
};

export const getIncome = async (req,res) => {
    const { userId } = req.params;

    try {
        const incomes = await IncomeModel.find({ user: userId }).sort({createdAt: -1});
        res.status(200).json(incomes);
    } catch (error) {
        res.status(500).json({message: 'Server Error!'});
    }
};

export const delIncome = async (req, res) => {
    const { id } = req.params;

    try {
        const income = await IncomeModel.findByIdAndDelete(id);
        if (!income) {
            return res.status(404).json({ message: 'Income not found!' });
        }
        res.status(200).json({ message: 'Income Deleted!' });
    } catch (err) {
        res.status(500).json({ message: 'Server Error!' });
    }
};
