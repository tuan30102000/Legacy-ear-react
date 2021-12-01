import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'
LabelText.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    side: PropTypes.string,
    currentside: PropTypes.bool,
    checkedState: PropTypes.bool,
    style: PropTypes.object,
    forData:PropTypes.string,
};

function LabelText({ name, value, text, onChange, checkedState = false, side = '', currentside = false, style = {}, forData = '' }) {
    const id = name + '' + value + (side ? '-' + side : '')
    const forDataProp = forData ? { fordata:forData } : {}
    return (
        <li className='option-text'>
            <input currentside={currentside ? 'choose' : 'none'} {...{ ...forDataProp }} defaultChecked={checkedState} onChange={onChange} value={value} name={name} type="radio" id={id} />
            <label style={style} htmlFor={id}>{text}</label>
        </li>
    );
}

export default LabelText;