import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'
import { Link } from 'react-router-dom';
import tdImg from '../../../../assets/image/td.jpg'
import {ApiUrl} from '../../../../Constants/ApiUrl'
ProductCard.propTypes = {
    imgSrc: PropTypes.string,
    location: PropTypes.string,
    name: PropTypes.string,
    descriptio: PropTypes.array,
};

function ProductCard({ location = '#', imgSrc = tdImg, name = 'craft <span>two</span> universal', caption = ['Two BA drivers', 'Pure excellence. Reinforced lows.'], minPrice = 1000, maxPrice = 2000 }) {
    return (
        <>
            <Link to={location} className="product-card__link-wraper">
                <img src={ApiUrl.srcStart + imgSrc} alt="" className="product-card__img" />
                <div className="product-card__info pos-rel-z1">
                    <h5 className="product-card__name" dangerouslySetInnerHTML={{ __html: name }}></h5>
                    {caption.map((item, index) => (
                        <p key={index} className="product-card__des">{item}</p>
                    ))}
                    {/* <p className="product-card__des">{des1}</p>
                    <p className="product-card__des">{des2}</p> */}
                    <p className="product-card__price">Starting at {minPrice} EUR ({maxPrice} PLN)</p>
                </div>
            </Link>
        </>
    );
}

export default ProductCard;