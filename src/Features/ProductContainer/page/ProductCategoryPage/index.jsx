import React from 'react';
import CategoryProductLink from '../../component/CategoryProductLink';
import './style.scss';
import senImg from '../../../../assets/image/sen.JPG'
import tdImg from '../../../../assets/image/td.jpg'
ProductCategoryPage.propTypes = {

};

function ProductCategoryPage(props) {
    return (
        <div className="category-product__wraper layuot">
            <div className="category-product-box">
                <CategoryProductLink name='sen' src={senImg} location={'sen'}/>
                <CategoryProductLink name='trống đồng' src={tdImg} location={'trongdong'}/>
            </div>
        </div>
    );
}

export default ProductCategoryPage;