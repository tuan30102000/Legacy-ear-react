import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'
import { Link } from 'react-router-dom';
import tdImg from '../../../../assets/image/td.jpg'
ProductLink.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    location:PropTypes.string,
    name:PropTypes.string,
    des1:PropTypes.string,
    des2:PropTypes.string,
};

function ProductLink({ location='#', imgSrc=tdImg, name='craft <span>two</span> universal', des1='Two BA drivers', des2='Hear everything. Breakthrough in availability.',price }) {
    return (
        <>
            <Link to={location} className="product__link">
                <img src={imgSrc} alt="" className="product__img" />
                <div className="product__info pos-rel-z1">
                    <h5 className="product__name" dangerouslySetInnerHTML={{__html:name}}></h5>
                    <p className="product__des">Two BA drivers</p>
                    <p className="product__des">Hear everything. Breakthrough in availability.</p>
                    <p className="product__price">Starting at {price} EUR (1500 PLN)</p>
                </div>
            </Link>
        </>
    );
}

export default ProductLink;