import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null);

  const userId = localStorage.getItem('userId');
  const location = useLocation();

  const addIncome = async (income) => {
    try {
      await axios.post('http://localhost:8080/api/add-income', income);
    } catch (err) {
      setError(err.response.data.message);
      console.log("Dharati " + err);
    }
    getIncome();
  };

  const getIncome = async () => {
    const response = await axios.get(`http://localhost:8080/api/get-income/${userId}`);
    setIncomes(response.data);
  };

  const deleteIncome = async (id) => {
    await axios.delete(`http://localhost:8080/api/delete-income/${id}`);
    getIncome();
  };

  const totalIncome = () => {
    return incomes.reduce((total, income) => total + income.amount, 0);
  };

  const addExpense = async (expense) => {
    try {
      await axios.post('http://localhost:8080/api/add-expense', expense);
    } catch (err) {
      setError(err.response.data.message);
    }
    getExpense();
  };

  const getExpense = async () => {
    const response = await axios.get(`http://localhost:8080/api/get-expense/${userId}`);
    setExpenses(response.data);
  };

  const deleteExpense = async (id) => {
    await axios.delete(`http://localhost:8080/api/delete-expense/${id}`);
    getExpense();
  };

  const totalExpense = () => {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
  };

  const totalBalance = () => {
    return totalIncome() - totalExpense();
  };

  const transactionHistory = () => {
    const history = [...incomes, ...expenses];
    history.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    return history.slice(0, 6);
  };

  useEffect(() => {
    if (location.pathname === '/dashboard' || location.pathname === '/income' || location.pathname === '/expense') {
      getIncome();
      getExpense();
    }
  }, [location.pathname]);

  return (
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
      totalExpense,
      totalBalance,
      transactionHistory,
      error,
    }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export { GlobalProvider };