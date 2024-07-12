import Chart from '../../components/Chart/Chart';
import './Dashboard.scss';

const Dashboard = () => {
    return(
        <main className='dashboard'>
            <div className='dashboard__container'>
                <h1 className='dashboard__title'>All Transactions</h1>
                <div className='stats__container'>
                    <div className='chart__container'>
                        <Chart/>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Dashboard;