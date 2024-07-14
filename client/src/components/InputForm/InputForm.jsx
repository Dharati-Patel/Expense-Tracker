import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './InputForm.scss';
import Button from "../Button/Button";
import { plus } from '../Icons/Icons';

const InputForm = ({ addIncome, getIncome, error }) => {
    const userId = localStorage.getItem('userId'); 
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
        addIncome(inputState);   
        getIncome();  
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
                    placeholder='Salary Title'
                    onChange={handleInput('title')}  />
            </div>
            <div className='input'>
                <input 
                    className='input__control'
                    type="text"
                    value={amount}
                    name={'amount'}
                    placeholder='Salary Amount'
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
                    <option value="salary">Salary</option>
                    <option value="freelancing">Freelancing</option>
                    <option value="investment">Investment</option>
                    <option value="stocks">Stocks</option>
                    <option value="bank">Bank Transfer</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div className='input'>
                <textarea className='input__control' name="description" value={description} placeholder='Add a Note' id='description' cols='30' rows="4" onChange={handleInput('description')}></textarea>
            </div>
            <div className='submit'>
                <Button 
                    className= "submit__btn"
                    name={'Add Income'}
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

export default InputForm;