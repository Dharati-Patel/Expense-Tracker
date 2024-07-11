import React, { Children, useState } from 'react';
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL;

const Global = React.createContext();

const GlobalContext = ({Children}) => {

    const [incomes, setIncomes] = useState([]);
    const [expenses, setExpenses] = useState([]);
    const [error, setError] = useState([null]);

    const addIncome = async (income) => {
        const response = await axios.post(`${BASE_URL}/api/add-income`, income)
            .catch((err) => {
                setError(err.response.data.message);
            })
    }

    return(
        <Global.Provider value={{
            addIncome,
        }}>
            {Children}
        </Global.Provider>
    );
}

export default GlobalContext;