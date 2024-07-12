import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Income from '../../pages/Income/Income';
import Expense from '../../pages/Expense/Expense';
import Chart from '../Chart/Chart';

// const BASE_URL = import.meta.env.VITE_API_URL;

const GlobalContext = createContext();

const GlobalProvider = ({children}) => {

    const [incomes, setIncomes] = useState([]);
    const [expenses, setExpenses] = useState([]);
    const [error, setError] = useState([null]);

    const userId = localStorage.getItem('userId');

    const addIncome = async (income) => {
        try {
            const response = await axios.post('http://localhost:8080/api/add-income', income);
            console.log(response.data); 
        } catch (err) {
            setError(err.response.data.message);
        }
        getIncome()
    }

    const getIncome = async () => {
        const response = await axios.get(`http://localhost:8080/api/get-income/${userId}`);
        setIncomes(response.data);
        console.log(response.data);
    };

    const deleteIncome = async (id) => {
        const response = await axios.delete(`http://localhost:8080/api/delete-income/${id}`);
        getIncome();
    }

    const totalIncome = () => {
        let totalIncome = 0;
        incomes.forEach((income) => {
            totalIncome += income.amount;
        })
        return totalIncome;
    }

    useEffect(() => {
        getIncome();
    }, []);



    const addExpense = async (expense) => {
        try {
            const response = await axios.post('http://localhost:8080/api/add-expense', expense);
            console.log(response.data); 
        } catch (err) {
            setError(err.response.data.message);
        }
        getExpense()
    }

    const getExpense = async () => {
        const response = await axios.get(`http://localhost:8080/api/get-expense/${userId}`);
        setExpenses(response.data);
        console.log(response.data);
    };

    const deleteExpense = async (id) => {
        const response = await axios.delete(`http://localhost:8080/api/delete-expense/${id}`);
        getExpense();
    }

    const totalExpense = () => {
        let totalExpense = 0;
        expenses.forEach((expense) => {
            totalExpense += expense.amount;
        })
        return totalExpense;
    }

    useEffect(() => {
        getExpense();
    }, []);

    return(
        <GlobalContext.Provider value={{
            addIncome,
            getIncome,
            incomes,
            deleteIncome,
            totalIncome,
            addExpense,
            getExpense,
            expenses,
            deleteExpense,
            totalExpense
        }
         
        }>
            {children}
        </GlobalContext.Provider>
        
    );
}

//export default GlobalProvider;

export const useGlobalContext = () => {
    return useContext(GlobalContext);
};

export {GlobalProvider};