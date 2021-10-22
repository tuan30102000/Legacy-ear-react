import React from 'react';
import HomePage from './page/HomePage';
import './style.scss';
HomeContainer.propTypes = {

};

function HomeContainer(props) {
    return (
        <div className='container__home'>
            <HomePage />
        </div>
    );
}

export default HomeContainer;