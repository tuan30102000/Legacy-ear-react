import React from 'react';
import HomePageFifth from '../../component/HomePageFifth';
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
            <HomePageFifth/>
        </>
    );
}

export default HomePage;