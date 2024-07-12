import Chart from '../../components/Chart/Chart';
import { useGlobalContext } from '../../components/GlobalContext/GlobalContext';
import { dollar } from '../../components/Icons/Icons';
import './Dashboard.scss';

const Dashboard = () => {
    const {totalExpense, totalIncome, totalBalance} = useGlobalContext();
    return(
        <main className='dashboard'>
            <div className='dashboard__container'>
                <h1 className='dashboard__title'>All Transactions</h1>
                <div className='stats__container'>
                    <div className='chart__container'>
                        <Chart/>
                        <div className='amount__container'>
                            <div className='amount__income'>
                                <h2>Total Income</h2>
                                <p>
                                    {dollar} {totalIncome()}
                                </p>
                            </div>
                            <div className='amount__expense'>
                                <h2>Total Expense</h2>
                                <p>
                                    {dollar} {totalExpense()}
                                </p>
                            </div>
                            <div className='balance'>
                                <h2>Total Balance</h2>
                                <p>
                                    {dollar} {totalBalance()}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Dashboard;