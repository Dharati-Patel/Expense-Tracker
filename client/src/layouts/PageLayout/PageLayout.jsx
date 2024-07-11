import './PageLayout.scss';
import React, {useState} from 'react';
import Navigation from  '../../components/Navigation/Navigation';

const PageLayout = () => {
    const [active, setActive] = useState(1)

    return(
        <main className="pagelayout">
            <div className='mainlayout'>
                <Navigation active={active} setActive={setActive} />
            </div>
            
        </main>
    );
}

export default PageLayout;