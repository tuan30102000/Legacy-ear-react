import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.scss'
import classNames from 'classnames';
PasswordField.propTypes = {
    name: PropTypes.string.isRequired,
    register: PropTypes.func.isRequired,
    plhd:PropTypes.string,
};
function PasswordField({ name, register,plhd='vui long dien tai day',formState }) {
    const [inputType, setInputType] = useState(true)
    const isError = !!formState?.errors[name]
    return (
        <div className={classNames({
            'form__auth-group': true,
            invalid:isError
        })}>
            <p>{name}</p>
            <div className="input-box">
            <i className="fal fa-lock"></i>
                <input type={inputType ? 'password' : 'text'}
                placeholder={plhd}
                    {...register(name, {
                        shouldUnregister: true
                    })} />
                <i onClick={() => {
                    setInputType((now) => !now)
                }}
                    className={classNames({
                        "fal fa-eye-slash": !inputType,
                        "fal fa-eye": inputType,

                    })}></i>
            </div>
            {isError && <span className='error-message'>{formState.errors[name]?.message}</span>}
        </div>
    );
}

export default PasswordField;