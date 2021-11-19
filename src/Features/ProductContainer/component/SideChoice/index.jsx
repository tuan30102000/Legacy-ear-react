import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.scss'
import classNames from 'classnames';
SideChoice.propTypes = {

};

function SideChoice({ name, children }) {
    const [choice, setchoice] = useState(false)

    return (
        <div className='box-side'>
            <div className="btn__side">
                <div className={classNames('btn-choice-side', { [style.active]: choice })} onClick={() => setchoice(true)}>Yes</div>
                <div className={classNames('btn-choice-side', { [style.active]: !choice })} onClick={() => setchoice(false)}>No</div>
            </div>
            
        </div>
    );
}

export default SideChoice;