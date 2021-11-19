import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import './style.scss'
LabelCrical.propTypes = {
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    side: PropTypes.string,
    currentSide:PropTypes.bool.isRequired,
};

function LabelCrical({ value, name, id, checkedState = false,currentSide }) {
    return (
        <li className="option-crical">
            <input currentSide={currentSide} defaultChecked={checkedState} type="radio" id={id} value={value} name={name} />
            <label htmlFor={id}></label>
        </li>
    );
}

export default LabelCrical;