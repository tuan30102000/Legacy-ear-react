import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import LoginPage from './page/LoginPage';
import RegisterPage from './page/RegisterPage';
import './style.scss';
AuthenticationContainer.propTypes = {

};

function AuthenticationContainer(props) {
    const Match = useRouteMatch()

    return (
        <Switch>
            <Route path={Match + '/login'} component={LoginPage} />
            <Route path={Match + '/register'} component={RegisterPage} />
        </Switch>
    );
}

export default AuthenticationContainer;