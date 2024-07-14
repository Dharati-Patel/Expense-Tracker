import { useGlobalContext } from '../GlobalContext/GlobalContext';
import './History.scss';

const History = () => {
    const {transactionHistory} = useGlobalContext();

    const [...history] = transactionHistory();

    return(
        <div className='history'>
            <h2 className='history__text'>Recent History</h2>
            {history.map((item) => {
                const {_id, title, amount, type} = item;
                return(
                    <div key={_id} className='history__item'>
                        <p style={{
                            color: type === 'expense' ? 'red' : 'green'
                        }}>
                            {title}
                        </p>
                        <p style={{
                            color: type === 'expense' ? 'red' : 'green'
                        }}>
                            {
                                type === 'expense' ? `-${amount}` : `+${amount}`
                            }
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

export default History;