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