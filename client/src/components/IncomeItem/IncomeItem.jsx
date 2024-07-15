import Button from '../Button/Button';
import DateFormate from '../DateFormate/DateFormate';
import { calendar, comment, trash, dollar, money, freelance, stocks, users, card, piggy, book, food, medical, tv, clothing, circle } from '../Icons/Icons';
import './IncomeItem.scss';

const IncomeItem = ({
    id, 
    title,
    amount,
    date,
    category,
    description,
    deleteItem,
    indicatorColor,
    type
}) => {

    const categoryIcon = () => {
        switch(category) {
            case 'salary':
                return money;
            case 'freelancing':
                return freelance;
            case 'investment':
                return stocks;
            case 'stocks':
                return users;
            case 'bank':
                return card;
            case 'other':
                return piggy;
            default:
                return '';
        }
    }

    const ExpenseIcon = () => {
        switch(category) {
            case 'education':
                return book;
            case 'groceries':
                return food;
            case 'health':
                return medical;
            case 'subscriptions':
                return tv;
            case 'clothing':
                return clothing;
            case 'travelling':
                return freelance;
            case 'other':
                return circle;
            default:
                return '';
        }
    }

    return(
        <div className='incomeItem'>
            <div className='incomeItem__icon' > 
                {type === 'expense' ? ExpenseIcon() : categoryIcon()}
            </div>
            <div className='incomeItem__content'>
                <h5 className='incomeItem__title'>{title}</h5>
                <div className='incomeItem__inner'>
                    <div className='inner'>
                        <p className='inner__text'>{dollar} {amount}</p>
                        <p className='inner__text'>{calendar} <DateFormate date={date} /></p>
                        <p className='inner__text'>
                            {comment}
                            {description}
                        </p>
                    </div>
                    <div className='incomeItem__btn'>
                        <Button 
                            icon={trash}
                            bpad={'1rem'}
                            bRad={'50%'}
                            bg={'rgba(34, 34, 96, 1)'}
                            color={'#fff'}
                            iColor={'#fff'}
                            hColor={'rgba(34, 34, 96, 0.4)'}
                            onClick={() => deleteItem(id)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IncomeItem;