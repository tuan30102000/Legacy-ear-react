import React from 'react';
import ProductLink from '../ProductLink';
import './style.scss';
HomePageSecond.propTypes = {

};

function HomePageSecond(props) {
    return (
        <div className="layuot container__home-page2" id="ciem">
            <div className="layuot-box home-page2__box grid-col-12">
                <h3 className="home-page2__title">Our CIEM'S</h3>
                <div className="home-page2__product">
                    <ProductLink />
                </div>
                <div className="home-page2__product">
                    <ProductLink location='/product' />
                </div>
            </div>
        </div>
    );
}

export default HomePageSecond;