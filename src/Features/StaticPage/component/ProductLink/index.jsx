import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'
import { Link } from 'react-router-dom';
import tdImg from '../../../../assets/image/td.jpg'
ProductLink.propTypes = {
    imgSrc: PropTypes.string,
    location:PropTypes.string,
    title:PropTypes.string,

};

function ProductLink({ location='#', imgSrc=tdImg,title }) {
    return (
        <>
            <Link to={location} className="product-link__box">
                <img src={imgSrc} alt="" className="product-link__img" />
                <p className="product-link__title">{title}</p>
            </Link>
        </>
    );
}

export default ProductLink;