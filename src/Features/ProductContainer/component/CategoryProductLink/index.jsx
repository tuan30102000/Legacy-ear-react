import PropTypes from 'prop-types';
import React from 'react';
import { useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import './style.scss';

CategoryProductLink.propTypes = {
    src: PropTypes.string.isRequired,
    namep:PropTypes.string,
    location:PropTypes.string,
};

function CategoryProductLink({ location = '#', name='sen', src }) {
    const Macth = useRouteMatch()
    return (
        <Link to={Macth.path+'/'+location} className="category-product__link">
            <div className="category-product__link-over-play" />
            <img src={src} alt="" className="category-product__link-bg" />
            <h2>{name}</h2>
        </Link>
    );
}

export default CategoryProductLink;