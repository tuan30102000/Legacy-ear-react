import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'
import classNames from 'classnames';
ChoiceBtn.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    style:PropTypes.object,
};

function ChoiceBtn({ onClick, text,choice,style=null }) {
    const handleClick = () => {
        if (onClick) {
            onClick()
        }
    }
    return (
        <div style={style}  className={classNames('choice-btn', { active: choice })} onClick={handleClick}>{text}</div>
    );
}

export default ChoiceBtn;