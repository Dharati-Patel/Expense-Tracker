import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './ExpenseForm.scss';
import Button from "../Button/Button";
import { plus } from '../Icons/Icons';
import {useGlobalContext} from '../GlobalContext/GlobalContext';

const ExpenseForm = ({ addExpense, getExpense }) => {

    const userId = localStorage.getItem('userId'); 
    const {error} = useGlobalContext();
    const [inputState, setInputState] = useState({
        title: '',
        amount: '',
        date: '',
        category: '',
        description: '',
        user: userId || ''
    });

    const { title, amount, date, category, description } = inputState;

    const handleInput = name => e => {
        setInputState({...inputState, [name]: e.target.value});
    };

    const handleSubmit = async e => {
        e.preventDefault();
        addExpense(inputState);   
        getExpense();  
        setInputState({
            title: '',
            amount: '',
            date: '',
            category: '',
            description: ''
        })  
    };

    return(
        <form className='form__input' onSubmit={handleSubmit}>
            {error && <p className='error'>{error}</p>}
            <div className='input'>
                <input 
                    className='input__control'
                    type="text"
                    value={title}
                    name={'title'}
                    placeholder='Expense Title'
                    onChange={handleInput('title')}  />
            </div>
            <div className='input'>
                <input 
                    className='input__control'
                    type="text"
                    value={amount}
                    name={'amount'}
                    placeholder='Expense Amount'
                    onChange={handleInput('amount')}  />
            </div>
            <div className='input'>
                <DatePicker 
                    className='input__control'
                    id='date'
                    placeholderText='Enter A Date'
                    selected={date}
                    dateFormat='dd/MM/yyyy'
                    onChange={(date) => {
                        setInputState({...inputState, date: date})
                    }}
                />
            </div>
            <div className='input'>
                <select className='selects input__control' required value={category} name="category" id="category" onChange={handleInput('category')}>
                    <option value="" disabled>Select Option</option>
                    <option value="education">Education</option>
                    <option value="groceries">Groceries</option>
                    <option value="health">Health</option>
                    <option value="subscriptions">Subscriptions</option>
                    <option value="clothing">Clothing</option>
                    <option value="travelling">Travelling</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div className='input'>
                <textarea className='input__control' name="description" value={description} placeholder='Add a Note' id='description' cols='30' rows="4" onChange={handleInput('description')}></textarea>
            </div>
            <div className='submit'>
                <Button 
                    className= "submit__btn"
                    name={'Add Expense'}
                    icon={plus}
                    bpad={'0.8rem 1.6rem'}
                    bRad={'30px'}
                    bg={'rgba(34, 34, 96, 0.4)'}
                    color={'#fff'}
                />
            </div>
        </form>
    );
};

export default ExpenseForm;