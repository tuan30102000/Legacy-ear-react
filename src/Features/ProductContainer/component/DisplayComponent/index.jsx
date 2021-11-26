import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.css'
import classNames from 'classnames';
DisplayComponent.propTypes = {
    showState:PropTypes.bool,
};

function DisplayComponent({ showState=false, children }) {
    return (
        <div className={classNames(style['display-wraper'], {
            [style.show]: showState
        })}>
            {children}
        </div>)
}

export default DisplayComponent;