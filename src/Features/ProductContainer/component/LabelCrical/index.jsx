import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import './style.scss'
LabelCrical.propTypes = {
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    side:PropTypes.string,
};

function LabelCrical({ value, name, side='',checkedState=false }) {
    const id=name + '-'+side+''+ value
    const ref=useRef()
    return (
        <li className="option-crical">
            <input ref={ref} defaultChecked={checkedState} type="radio" id={id} value={value} name={name} />
            <label htmlFor={id}></label>
        </li>
    );
}

export default LabelCrical;