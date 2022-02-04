import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import ProductList from './component/ProductList';
import ProductCategoryPage from './page/ProductCategoryPage';
import ProducDetailPage from './page/ProductDetailPage';
import ProductOderPage from './page/ProductOderPage';
import ProductPage from './page/ProductPage';
import './style.scss';
ProductContainer.propTypes = {

};

function ProductContainer(props) {
    const Macth = useRouteMatch()

    return (
        <main className='container__home'>

            <Switch>

                <Route path={Macth.path + '/sen'}>
                    <ProductPage type='sen' title='SEN' />
                </Route>
                <Route path={Macth.path + '/dongson'}>
                    <ProductPage type='dongson' title='Đông Sơn' />
                </Route>
                <Route path={Macth.path + '/oder' + '/:id'}>
                    <ProductOderPage />
                </Route>
                <Route path={Macth.path + '/:productId'}>
                    <ProducDetailPage />
                </Route>
                <Route path={Macth.path}>
                    <ProductCategoryPage />
                </Route>
                {/* <Route path={Macth.path}>
                <ProductOderPage />
            </Route> */}
            </Switch>
        </main>

    );
}

export default ProductContainer;