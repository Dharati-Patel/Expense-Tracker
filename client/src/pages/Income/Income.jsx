import React, {useState, useEffect} from 'react';
import InputForm from '../../components/InputForm/InputForm';
import './Income.scss';
import IncomeItem from '../../components/IncomeItem/IncomeItem';
import { useGlobalContext } from '../../components/GlobalContext/GlobalContext';

const BASE_URL = import.meta.env.VITE_API_URL;

const Income = () => {
    const {addIncome, getIncome, incomes, deleteIncome, totalIncome} = useGlobalContext();

    return(
        <section className='income'>
            <h1 className='income__title'>Incomes</h1>
            <h2 className='income__total'>Total Income: <span>${totalIncome()}</span></h2>
            <div className='income__content'>
                <div className='form__conatiner'>
                    <InputForm addIncome={addIncome} getIncome={getIncome} incomes={incomes} deleteIncome={deleteIncome} totalIncome={totalIncome}/>
                </div>
                <div className='income__display'>
                    {incomes.map((income) => {
                        const {_id, title, amount, date, category, description, type} = income;
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
                            deleteItem={deleteIncome}
                        />
                    })}
                </div>
            </div>
        </section>
    );
};

export default Income;