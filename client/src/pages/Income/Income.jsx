import React, {useState, useEffect} from 'react';
import InputForm from '../../components/InputForm/InputForm';
import './Income.scss';
import axios from 'axios';
import IncomeItem from '../../components/IncomeItem/IncomeItem';

const BASE_URL = import.meta.env.VITE_API_URL;

const Income = () => {
    
    const [incomes, setIncomes] = useState([]);
    const [error, setError] = useState(null);
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

    useEffect(() => {
        getIncome();
    }, []);

    return(
        <section className='income'>
            <h1 className='income__title'>Incomes</h1>
            <div className='income__content'>
                <div className='form__conatiner'>
                    <InputForm addIncome={addIncome} getIncome={getIncome} incomes={incomes} deleteIncome={deleteIncome}/>
                </div>
                <div className='income__display'>
                    {incomes.map((income) => {
                        const {_id, title, amount, date, category, description} = income;
                        return <IncomeItem 
                            key={_id}
                            id={_id}
                            title={title}
                            description={description}
                            amount={amount} date={date}
                            category={category}
                            indicatorColor='green'
                            deleteItem={deleteIncome}
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

export default Income;