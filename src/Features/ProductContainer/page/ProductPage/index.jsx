import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useFetch from '../../../../hook/useFetch';
import productApi from '../../../../api/productApi';
import './style.scss'
import ProductList from '../../component/ProductList';
ProductPage.propTypes = {
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

function ProductPage({ type, title }) {
    // const [params, setparam] = useState({})
    const { data, loadState } = useFetch(productApi.getAll, { type, })
    return (
        <div className="layuot container__product-page-wraper pdt-162">
            <div className="layuot-box product-page__box">
                <h1 className="product-page__tile">{title}</h1>
                <ProductList data={data} />
            </div>
        </div>
    );
}

export default ProductPage;