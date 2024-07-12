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
import DateFormate from '../DateFormate/DateFormate';
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
    console.log(incomes)
    const data = {
        labels: incomes.map((inc) => {
            const {date} = inc
            return DateFormate(date)
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