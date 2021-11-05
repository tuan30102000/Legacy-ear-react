import React from 'react';
import FormRegister from '../../component/FormAuth/RegisterForm';
import './style.scss';
RegisterPage.propTypes = {

};

function RegisterPage(props) {
    return (
        <div className='layuot container__login pdt-162'>
            <div className="layuot-box form__auth-wraper">
                <FormRegister />
            </div>
        </div>
    );
}

export default RegisterPage;