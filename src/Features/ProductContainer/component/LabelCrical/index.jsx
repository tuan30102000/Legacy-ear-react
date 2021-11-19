import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import './style.scss'
LabelCrical.propTypes = {
    value: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    side: PropTypes.string,
    currentside:PropTypes.bool.isRequired,
};

function LabelCrical({ value, name, id, checkedState = false,currentside }) {
    return (
        <li className="option-crical">
            <input currentside={currentside} defaultChecked={checkedState} type="radio" id={id} value={value} name={name} />
            <label htmlFor={id}></label>
        </li>
    );
}

export default LabelCrical;