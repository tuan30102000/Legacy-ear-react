import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import ProductCategoryPage from './page/ProductCategoryPage';
import './style.scss';
ProductContainer.propTypes = {

};

function ProductContainer(props) {
    const Macth = useRouteMatch()
    
    return (
        <Switch>
            <Route path={Macth.path}>
                <ProductCategoryPage />
            </Route>
        </Switch>
    );
}

export default ProductContainer;