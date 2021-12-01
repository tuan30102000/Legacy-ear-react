import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import './style.scss'
LabelCrical.propTypes = {
    value: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    side: PropTypes.string,
    currentside: PropTypes.bool,
    forData: PropTypes.string,
    checkedState: PropTypes.bool,
};

function LabelCrical({ value, name, checkedState = false, currentside = false, side, forData = '' }) {
    const id = `${name}-${side}-${value}`
    const forDataProp = forData ? { fordat: forData } : {}

    return (
        <li className="option-crical">
            <input {...{ ...forDataProp }} currentside={currentside ? 'choose' : 'none'} defaultChecked={checkedState} type="radio" id={id} value={value} name={name + '-' + side} />
            <label htmlFor={id}></label>
        </li>
    );
}

export default LabelCrical;