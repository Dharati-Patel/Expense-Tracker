import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './InputForm.scss';
import Button from "../Button/Button";
import { plus } from '../Icons/Icons';

const BASE_URL = import.meta.env.VITE_API_URL;

const InputForm = ({ addIncome }) => {
    const [inputState, setInputState] = useState({
        title: '',
        amount: '',
        date: '',
        category: '',
        description: ''
    });

    const { title, amount, date, category, description } = inputState;

    const handleInput = name => e => {
        setInputState({...inputState, [name]: e.target.value});
    };

    const handleSubmit = async e => {
        e.preventDefault();
        const userId = localStorage.getItem('userId'); 
        if (!userId) {
            console.error('User ID not found');
            return;
        }
        console.log(`user found: ${userId}`);
        const incomeData = { ...inputState, user: userId };
        try {
            console.log("enter");
            await addIncome(incomeData);
        } catch (err) {
            console.error(err);
        }
        
       
    };

    return(
        <form className='form__input' onSubmit={handleSubmit}>
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
                {/* <button className='submit__btn' type="submit">Add Income</button> */}
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

























// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// const InputForm = () => {

//     const [inputState, setInputState] = useState({
//         title: '',
//         amount: '',
//         date: '',
//         category: '',
//         description: ''
//     });

//     const { title, amount, date, category, description } = inputState;

//     const handleInput = name => e => {
//         setInputState({...inputState, [name]: e.target.value})
//     };

//     const handleSubmit = e => {
//         e.preventDefault();
//     };

//     return(
//         <form className='form__input' onSubmit={handleSubmit}>
//             <div className='input__control'>
//                 <input 
//                     type="text"
//                     value={title}
//                     name={'title'}
//                     placeholder='Salary Title'
//                     onChange={handleInput('title')}  />
//             </div>
//             <div className='input__control'>
//                 <input 
//                     type="text"
//                     value={amount}
//                     name={'amount'}
//                     placeholder='Salary Amount'
//                     onChange={handleInput('amount')}  />
//             </div>
//             <div className='input__control'>
//                 <DatePicker 
//                     id='date'
//                     placeholderText='Enter A Date'
//                     selected={date}
//                     dateFormat='dd/mm/yyyy'
//                     onChange={(date) => {
//                         setInputState({...inputState, date: date})
//                     }}
//                 />
//             </div>
//             <div className='selects input__control'>
//                 <select required value={category} name="category" id="category" onChange={handleInput('category')}>
//                     <option value="" disabled>Select Option</option>
//                     <option value="salary">Salary</option>
//                     <option value="freelancing">Freelancing</option>
//                     <option value="investment">Investment</option>
//                     <option value="stocks">Stocks</option>
//                     <option value="bank">BAnk Transfer</option>
//                     <option value="other">Other</option>
//                 </select>
//             </div>
//             <div className='input__control'>
//                 <textarea name="description" value={description} placeholder='Add a Note' id='description' cols='30' rows="4" onChange={handleInput('description')}></textarea>
//             </div>
//             <div className='submit-btn'>
//                 <button>Add Income</button>
//             </div>
//         </form>
//     );
// };

// export default InputForm;