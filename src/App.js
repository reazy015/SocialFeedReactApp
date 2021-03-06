import React, { Fragment } from 'react';
import HeaderComponent from './components/HeaderComponent';
import FooterComponents from './components/FooterComponents';
import FunctionalFeedContainer from './components/FunctionalFeedContainer';
import FeedsWrapperContainer from './components/FeedsWrapperContainer';
import './App.css';

const App = () => {
    return (
        <Fragment>
            <HeaderComponent/>
            <main className='content'>
                <div className='container'>
                    <FunctionalFeedContainer
                        url={'http://api.massrelevance.com/MassRelDemo/kindle.json'}
                        step={3}
                        interval={3}
                    />
                </div>
            </main>
            <FooterComponents/>
        </Fragment>
    );
}

export default App;
