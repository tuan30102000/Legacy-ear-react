import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'
import defaultUrl from '../../../../assets/image/rose1.jpg'
ProductThumbnail.propTypes = {
    url: PropTypes.string,
};

function ProductThumbnail({ url=defaultUrl }) {
    return (
        <div className={'product-thumbnail'}>
            <img src={url} alt="" />
        </div>
    );
}

export default ProductThumbnail;