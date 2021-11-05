import React from 'react';
import FormLogin from '../../component/FormAuth/LoginForm';
import './style.scss';
LoginPage.propTypes = {

};

function LoginPage(props) {

    return (
        <div className='layuot container__login pdt-162'>
            <div className="layuot-box form__auth-wraper">
                <FormLogin />
            </div>
        </div>
    );
}

export default LoginPage;