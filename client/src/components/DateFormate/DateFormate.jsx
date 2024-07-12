import moment from 'moment';

const DateFormate = ({ date }) => {
    return moment(date).format('DD/MM/YYYY');
};

export default DateFormate;