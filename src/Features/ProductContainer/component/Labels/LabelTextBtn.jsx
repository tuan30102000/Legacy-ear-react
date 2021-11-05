import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'
LabelText.propTypes = {
    name:PropTypes.string.isRequired,
    value:PropTypes.string.isRequired,
    labelText:PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired,
    checked:PropTypes.bool.isRequired,
};

function LabelText({name,value,labelText,onChange,checked}) {
    const id=name+value
    return (
        <li className='option-text'>
           <input checked={checked} onChange={onChange} name={name} type="radio" id={id} /> 
           <label htmlFor={id}>{labelText}</label>
        </li>
    );
}

export default LabelText;