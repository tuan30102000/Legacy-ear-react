import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import CollectionPage from './page/CollectionPage';
import ContactPage from './page/ContactPage';
import HomePage from './page/HomePage';
import './style.scss';
StaticPage.propTypes = {

};

function StaticPage() {
    const Match=useRouteMatch()
    return (
        <div className='container__home'>
            <Switch>
                <Route path={Match.path} exact component={HomePage}  />
                <Route path={Match.path+'contact'} component={ContactPage} />
                <Route path={Match.path+'collection'} component={CollectionPage} />
            </Switch>
        </div>
    );
}

export default StaticPage;