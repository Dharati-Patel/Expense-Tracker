import React, {useState, useEffect} from 'react';
import './Expense.scss';
import IncomeItem from '../../components/IncomeItem/IncomeItem';
import ExpenseForm from '../../components/ExpenseForm/ExpenseForm';
import { useGlobalContext } from '../../components/GlobalContext/GlobalContext';

const Expense = () => {
    const {addExpense, getExpense, expenses, deleteExpense, totalExpense} = useGlobalContext();
 
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
            </div>
        </section>
    );
};

export default Expense;