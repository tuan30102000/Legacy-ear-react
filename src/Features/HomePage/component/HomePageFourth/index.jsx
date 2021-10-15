import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'
import Warranty from '../../../../Components/Warranty';
HomePageFourth.propTypes = {

};

function HomePageFourth(props) {
    return (
        <div className="layuot container__home-page4">
            <div className="layuot-box home-page4__box grid-col-12">
                <h1 className="home-page4__title">The Guarantee</h1>
                <p className="home-page4__des">We know, that customer service is at least as important as sound quality.
                    Thats why we offer you the most friendly terms of warranty and the most extended support
                    possible</p>
                <Warranty />
            </div>
        </div>
    );
}

export default HomePageFourth;