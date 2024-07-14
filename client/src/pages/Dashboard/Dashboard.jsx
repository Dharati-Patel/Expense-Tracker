import { useEffect } from 'react';
import Chart from '../../components/Chart/Chart';
import { useGlobalContext } from '../../components/GlobalContext/GlobalContext';
import { dollar } from '../../components/Icons/Icons';
import './Dashboard.scss';
import History from '../../components/History/History';

const Dashboard = () => {
    const {totalExpense, totalIncome, totalBalance, getIncome, getExpense} = useGlobalContext();

    useEffect(() => {
        getIncome()
        getExpense()
    }, [])

    return(
        <main className='dashboard'>
            <div className='dashboard__container'>
                <h1 className='dashboard__title'>All Transactions</h1>
                <div className='stats__container'>
                    <div className='chart__container'>
                        <Chart/>
                        <div className='amount'>
                            <div className='amount__income'>
                                <h2 className='amount__title'>Total Income</h2>
                                <p className='amount__amount'>
                                    {dollar} {totalIncome()}
                                </p>
                            </div>
                            <div className='amount__expense'>
                                <h2 className='amount__title'>Total Expense</h2>
                                <p className='amount__amount'>
                                    {dollar} {totalExpense()}
                                </p>
                            </div>
                            <div className='amount__balance'>
                                <h2 className='amount__title'>Total Balance</h2>
                                <p className='amount__balance--total'>
                                    {dollar} {totalBalance()}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='history__container'>
                        <History />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Dashboard;