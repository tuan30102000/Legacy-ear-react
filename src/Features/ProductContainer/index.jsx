import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
// import ProductCategoryPage from './page/ProductCategoryPage';
import ProducDetailPage from './page/ProductDetailPage';
import './style.scss';
ProductContainer.propTypes = {

};

function ProductContainer(props) {
    const Macth = useRouteMatch()
    
    return (
        <Switch>
            {/* <Route path={Macth.path}>
                <ProductCategoryPage />
            </Route> */}
            <Route path={Macth.path}>
                <ProducDetailPage />
            </Route>
        </Switch>
    );
}

export default ProductContainer;