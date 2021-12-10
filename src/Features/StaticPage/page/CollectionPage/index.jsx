import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'
import ItemCollection from '../../component/ItemCollection';
CollectionPage.propTypes = {

};

function CollectionPage(props) {
    const data = [1, 1, 1, 1, 1, 1]
    return (
        <div className="layuot container__product-title-wraper pdt-162">
            <div className="layuot-box container__product-title">
                <h1 className="product-tile">Our <span>Monitors</span></h1>
                <div className="grid-col-12 container__product">
                    {data.map((item, key) => <ItemCollection />)}
                </div>
            </div>
        </div>
    );
}

export default CollectionPage;