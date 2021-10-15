import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'
import HomePage from './page/HomePage';
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