import React, {useState} from 'react';
import InputForm from '../../components/InputForm/InputForm';
import './Income.scss';

const BASE_URL = import.meta.env.VITE_API_URL;

const Income = () => {

    const [incomes, setIncomes] = useState([]);
    const [error, setError] = useState([null]);

    const addIncome = async income => {
        try {
            const response = await axios.post('http://localhost:8080/api/add-income', income);
            setIncomes([...incomes, response.data]);
            console.log(response.data);
        } catch (err) {
            setError(err.response.data.message);
        }
    }

    return(
        <section className='income'>
            <h1 className='income__title'>Incomes</h1>
            <div className='income__content'>
                <div className='form__conatiner'>
                    <InputForm addIncome={addIncome}/>
                </div>
                <div>
                {error && <div className="error-message">{error}</div>}
                </div>
            </div>
        </section>
    );
};

export default Income;