import './Chart.scss';
import React from 'react';
import {Chart as ChartJs, 
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend,
        ArcElement,
} from 'chart.js';
import {Line} from 'react-chartjs-2';
import {useGlobalContext} from '../GlobalContext/GlobalContext';

ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
)

const Chart = () => {

    const {incomes, expenses} = useGlobalContext();

    const data = {
        labels: incomes.map((inc) => {
            const {date} = inc
            const formatDate = new Date(date);
            const day = String(formatDate.getUTCDate()).padStart(2, '0');
            const month = String(formatDate.getUTCMonth() + 1).padStart(2, '0'); // Months are zero-based
            const year = formatDate.getUTCFullYear();
            const formattedDate = `${day}/${month}/${year}`;
            return formattedDate;
        }),

        datasets: [
            {
                label: 'Income',
                data: [
                    ...incomes.map((income) => {
                        const {amount} = income
                        return amount
                    })
                ],
                backgroundColor: 'green',
                tension: 0.2
            },
            {
                label: 'Expense',
                data: [
                    ...expenses.map((expense) => {
                        const {amount} = expense
                        return amount
                    })
                ],
                backgroundColor: 'red',
                tension: 0.2
            }
        ]
    }

    return(
        <div className='chart'>
            <Line data={data}/>
        </div>
    );
};

export default Chart;