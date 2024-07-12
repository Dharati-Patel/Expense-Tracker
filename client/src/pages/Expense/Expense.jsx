import React, {useState, useEffect} from 'react';
import './Expense.scss';
import axios from 'axios';
import IncomeItem from '../../components/IncomeItem/IncomeItem';
import ExpenseForm from '../../components/ExpenseForm/ExpenseForm';
import Chart from '../../components/Chart/Chart';
import { useGlobalContext } from '../../components/GlobalContext/GlobalContext';

const BASE_URL = import.meta.env.VITE_API_URL;

const Expense = () => {
    const {addExpense, getExpense, expenses, deleteExpense, totalExpense} = useGlobalContext();
    const [error, setError] = useState([null]);
//    const [expenses, setExpenses] = useState([]);
//     const [error, setError] = useState(null);
//     const userId = localStorage.getItem('userId');

    // const addExpense = async (expense) => {
    //     try {
    //         const response = await axios.post('http://localhost:8080/api/add-expense', expense);
    //         console.log(response.data); 
    //     } catch (err) {
    //         setError(err.response.data.message);
    //     }
    //     getExpense()
    // }

    // const getExpense = async () => {
    //     const response = await axios.get(`http://localhost:8080/api/get-expense/${userId}`);
    //     setExpenses(response.data);
    //     console.log(response.data);
    // };

    // const deleteExpense = async (id) => {
    //     const response = await axios.delete(`http://localhost:8080/api/delete-expense/${id}`);
    //     getExpense();
    // }

    // const totalExpense = () => {
    //     let totalExpense = 0;
    //     expenses.forEach((expense) => {
    //         totalExpense += expense.amount;
    //     })
    //     return totalExpense;
    // }

    // useEffect(() => {
    //     getExpense();
    // }, []);

    return(
        <section className='expense'>
            <h1 className='expense__title'>Expenses</h1>
            <h2 className='expense__total'>Total Expense: <span>${totalExpense()}</span></h2>
            <div className='expense__content'>
                <div className='form__conatiner'>
                    <ExpenseForm addExpense={addExpense} getExpense={getExpense} expenses={expenses} deleteExpense={deleteExpense} totalExpense={totalExpense}/>
                </div>
                <div className='expense__display'>
                    {expenses.map((expense) => {
                        const {_id, title, amount, date, category, description, type} = expense;
                        return <IncomeItem 
                            key={_id}
                            id={_id}
                            title={title}
                            description={description}
                            amount={amount} 
                            date={date}
                            type={type}
                            category={category}
                            indicatorColor='green'
                            deleteItem={deleteExpense}
                        />
                    })}
                </div>
                <div className='error__text'>
                    {error && <div className="error-message">{error}</div>}
                </div>
            </div>
        </section>
    );
};

export default Expense;