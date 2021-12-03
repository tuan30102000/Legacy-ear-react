import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.scss'
import classNames from 'classnames';
InputField.propTypes = {
    name: PropTypes.string.isRequired,
    TypeElm: PropTypes.string,
    formName: PropTypes.string.isRequired,
    register: PropTypes.func.isRequired,
    formState: PropTypes.object.isRequired,
    text: PropTypes.string,
};

function InputField({ name, register, formState, formName, text = '', TypeElm = 'input' }) {

    const [inputState, setInputState] = useState(false)
    const handleInputFocus = () => setInputState(true)
    const handleInputBlur = (e) => {
        if (e.target.value === '') {
            setInputState(false)
        }
    }

    const hasError = formState.errors[name]
    return (
        <>
            <div className={classNames({
                [`${formName}-form__box form__box ${formName}-${name}`]: true,
                active: inputState,
                invalid: hasError,
                ['textarea']: TypeElm === 'textarea'
            })}>
                <TypeElm
                    type="text"
                    className="form__input-elm"
                    placeholder=" "
                    id={`${formName}-${name}`}
                    {...register(name)}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                />
                <label htmlFor={`${formName}-${name}`} className="form__label-elm">{text ? text : name}</label>
                <div className="input-line" />
                {hasError && <span className="form-message" >
                    {formState.errors[name]?.message}
                </span>}
            </div>
        </>
    );
}

export default InputField;