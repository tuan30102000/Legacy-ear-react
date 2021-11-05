import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import classNames from 'classnames'
TextField.propTypes = {
    name: PropTypes.string.isRequired,
    register: PropTypes.func.isRequired,
    plhd: PropTypes.string,
};

function TextField({ name, register, plhd = 'nhap tia day', formState }) {
    const isError = !!formState?.errors[name]
    return (
        <div className={classNames({
            'form__auth-group': true,
            invalid:isError
        })}>
            <p>{name}</p>
            <div className="input-box">
                <i className="fal fa-user"></i>
                <input type="text" placeholder={plhd} {...register(name)} />
            </div>
            {isError && <span className='error-message'>{formState.errors[name]?.message}</span>}
        </div>
    );
}

export default TextField;
