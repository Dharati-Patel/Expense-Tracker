import './Chart.scss';
import React from 'react';
import { Chart as ChartJs, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useGlobalContext } from '../GlobalContext/GlobalContext';

ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);

const Chart = () => {
    const { incomes, expenses } = useGlobalContext();

    const formatDate = (date) => {
        const d = new Date(date);
        const day = String(d.getUTCDate()).padStart(2, '0');
        const month = String(d.getUTCMonth() + 1).padStart(2, '0'); 
        const year = d.getUTCFullYear();
        return `${day}/${month}/${year}`;
    };

    const allDates = [...new Set([...incomes, ...expenses].map((item) => formatDate(item.date)))].sort((a, b) => new Date(a.split('/').reverse().join('-')) - new Date(b.split('/').reverse().join('-')));

    const incomeData = allDates.map(date => {
        const income = incomes.find(inc => formatDate(inc.date) === date);
        return income ? income.amount : 0;
    });

    const expenseData = allDates.map(date => {
        const expense = expenses.find(exp => formatDate(exp.date) === date);
        return expense ? expense.amount : 0;
    });

    const data = {
        labels: allDates,
        datasets: [
            {
                label: 'Income',
                data: incomeData,
                backgroundColor: 'rgba(0, 255, 0, 0.5)',
                borderColor: 'rgba(0, 255, 0, 1)',
                fill: false,
                tension: 0.2
            },
            {
                label: 'Expense',
                data: expenseData,
                backgroundColor: 'rgba(255, 0, 0, 0.5)',
                borderColor: 'rgba(255, 0, 0, 1)',
                fill: false,
                tension: 0.2
            }
        ]
    };

    return (
        <div className='chart'>
            <Line data={data} />
        </div>
    );
};

export default Chart;