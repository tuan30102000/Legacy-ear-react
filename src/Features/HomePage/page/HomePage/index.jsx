import React from 'react';
import HomePageFirst from '../../component/HomePageFirst';
import HomePageFourth from '../../component/HomePageFourth';
import HomePageSecond from '../../component/HomePageSecond';
import HomePageThird from '../../component/HomePageThird';
import './style.scss';
HomePage.propTypes = {

};

function HomePage(props) {
    return (
        <>
            <HomePageFirst />
            <HomePageSecond />
            <HomePageThird />
            <HomePageFourth />
        </>
    );
}

export default HomePage;