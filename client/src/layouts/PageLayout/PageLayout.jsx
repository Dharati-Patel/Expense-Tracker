import './PageLayout.scss';
import React, {useState} from 'react';
import Navigation from  '../../components/Navigation/Navigation';
import Dashboard from '../../pages/Dashboard/Dashboard';
import Income from '../../pages/Income/Income';
import Expense from '../../pages/Expense/Expense';

const PageLayout = () => {
    const [active, setActive] = useState(1);

    const displayData = () => {
        switch(active) {
            case 1:
                return <Dashboard />
            case 2:
                return <Income />
            case 3: 
                return <Expense />
            default: 
                return <Dashboard />
        }
    }

    return(
        <main className="pagelayout">
            <div className='navlayout'>
                <Navigation active={active} setActive={setActive} />
            </div>
            <div className='mainlayout'>
                {displayData()}
            </div>
        </main>
    );
}

export default PageLayout;