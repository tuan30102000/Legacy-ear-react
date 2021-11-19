import React, { Children, useState } from 'react';
import PropTypes from 'prop-types';
import './style.scss'
import classNames from 'classnames';
SideChoice.propTypes = {
    Component:PropTypes.func.isRequired,
};

function SideChoice({ name, Component, componentProp }) {
    const [choice, setchoice] = useState(false)
    return (
        <div className='box-side'>
            <div className="btn__side">
                <div className={classNames('btn-choice-side', { active: choice })} onClick={() => setchoice(true)}>Yes</div>
                <div className={classNames('btn-choice-side', { active: !choice })} onClick={() => setchoice(false)}>No</div>
            </div>
            <div className="options-box">
                <Component {...{ ...componentProp,name,side:'both',currentside:choice}}  />
            </div>
        </div>
    );
}

export default SideChoice;