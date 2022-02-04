import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'
import ProductCard from '../ProductCard';
ProductList.propTypes = {
    data: PropTypes.object,
};

function ProductList({ data }) {
    return (
        <div className='grid-col-12 product-page__list-card'>
            {data.map((item, i) => (
                <div key={item._id} className="product-page__card">
                    <ProductCard
                        location={item._id}
                        imgSrc={item.imgSrc}
                        caption={item.caption}
                        minPrice={item.minPrice}
                        maxPrice={item.maxPrice}
                        name={item.name} />
                </div>
            ))}
        </div>
    );
}

export default ProductList;