import React from 'react';
import Slider from 'react-slick';
import SliderCarosel from '../SliderCarosel';
import './style.scss';
HomePageFifth.propTypes = {

};

function HomePageFifth(props) {
    return (
        <div className="layuot container__home-page5" >
            <div className="layuot-box home-page5__box grid-col-12">
                <SliderCarosel />
            </div>
        </div>
    );
}

export default HomePageFifth;