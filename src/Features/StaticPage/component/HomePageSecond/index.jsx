import React from 'react';
import ProductLink from '../ProductLink';
import './style.scss';
HomePageSecond.propTypes = {

};

function HomePageSecond(props) {
    return (
        <div className="container__home-page2" id="ciem">
            <p className="home-page2__title">
                Out ciem
            </p>
            <div className="home-page2__box">
                {/* <div className="home-page2__product"> */}

                <ProductLink location='/contact' title='Your custom' />
                {/* </div> */}
                {/* <div className="home-page2__product"> */}
                <ProductLink location='/product' title='My custom' />
                {/* </div> */}
            </div>
        </div>
    );
}

export default HomePageSecond;