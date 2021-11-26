import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import './style.scss'
LabelCrical.propTypes = {
    value: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    side: PropTypes.string,
    currentside:PropTypes.bool.isRequired,
};

function LabelCrical({ value, name, checkedState = false,currentside,side }) {
    const id=`${name}-${side}-${value}`
    return (
        <li className="option-crical">
            <input currentside={currentside?'choose':'none'} defaultChecked={checkedState} type="radio" id={id} value={value} name={name+'-'+side} />
            <label htmlFor={id}></label>
        </li>
    );
}

export default LabelCrical;