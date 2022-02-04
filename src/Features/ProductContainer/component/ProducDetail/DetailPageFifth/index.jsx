import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'
import StepOder from '../StepOder';
import { Link } from 'react-router-dom';
import ProductCard from '../../ProductCard';
DetailPageFifth.propTypes = {
    props: PropTypes.object,
};

function DetailPageFifth(props={}) {
    return (
        <div className="container-detail-page5__wraper layuot">
            <div className="layuot-box detail-page5__box grid-col-12">
                <p className="detail-page5__title">Order Now!</p>
                <div className="detail-page5__card-product">
                    <ProductCard {...props} />
                </div>
                <div className="detail-page5__list-steps">
                    <StepOder />
                </div>
                <div className="detail-page5__btn">
                    <Link to='/contact' className="button-oder">
                        <span>Customize</span><i className="fas fa-arrow-right" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default DetailPageFifth;