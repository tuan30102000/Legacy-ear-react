import React, { useEffect } from 'react';
import CategoryProductLink from '../../component/CategoryProductLink';
import './style.scss';
import senImg from '../../../../assets/image/sen.JPG'
import tdImg from '../../../../assets/image/td.jpg'
ProductCategoryPage.propTypes = {

};

function ProductCategoryPage(props) {
    useEffect(() => {
        document.documentElement.scrollTop = 0
        return () => {
        }
    }, [])
    return (
        <div className="category-product__wraper layuot">
            <div className="category-product-box">
                <CategoryProductLink name='Sen' src={senImg} location={'sen'} />
                <CategoryProductLink name='Đông sơn' src={tdImg} location={'dongson'} />
            </div>
        </div>
    );
}

export default ProductCategoryPage;