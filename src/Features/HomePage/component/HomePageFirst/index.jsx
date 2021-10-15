import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'
import imgUrl from '../../../../assets/image/backgroundhomepage.JPG'
HomePageFirst.propTypes = {

};

function HomePageFirst(props) {
    const styleBg={
        backgroundImage: 'url(' + imgUrl + ')',
    }
    return (
        <div className="layuot container__home-page1 pdt-162" style={styleBg}>
            <div className="home-page1__over-play"></div>
            <div className="layuot-box home-page1__box grid-col-12">

                <h1 className="home-page1__title pos-rel-z1">
                    <span>Perfectly</span>
                    <span>Crafted</span>
                    <span>Sound!</span>
                </h1>
                <h6 className="home-page1__subtitle pos-rel-z1">
                    Custom In-ear Monitors
                </h6>
                <div className="home-page1__btn-wraper pos-rel-z1">
                    <a href="#" className="home-page1__btn">Exlore</a>
                </div>
            </div>
        </div>
    );
}

export default HomePageFirst;