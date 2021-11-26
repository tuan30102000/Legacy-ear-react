import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import DisplayComponent from '../DisplayComponent';
import ChoiceBtn from '../Labels/ChoiceBtn';
import './style.scss';
SideChoice.propTypes = {
    Component: PropTypes.func.isRequired,
};

function SideChoice({ Component, componentProp }) {
    const [choice, setchoice] = useState(false)
    return (
        <div className='choice-side'>
            <p className="option-title">
                CONFIGURE LEFT AND RIGHT SIDE SEPARATELY
            </p>
            <div className="choice-side__list-btn">
                <ChoiceBtn  onClick={() => setchoice(true)} text='yes' choice={choice} />
                <ChoiceBtn  onClick={() => setchoice(false)} text='no' choice={!choice}/>
                {/* <div className={classNames('choice-side__btn', { active: choice })} onClick={() => setchoice(true)}>Yes</div>
                <div className={classNames('choice-side__btn', { active: !choice })} onClick={() => setchoice(false)}>No</div> */}
            </div>
            <div className="options-box">
                <div className="options-both">
                    <DisplayComponent showState={!choice}>
                        <Component {...{ ...componentProp, side: 'both', currentside: !choice }} />
                    </DisplayComponent>
                </div>
                <div className="options-double-side">
                    <DisplayComponent showState={choice}>
                        <Component {...{ ...componentProp, side: 'right', currentside: choice }} />
                        <Component {...{ ...componentProp, side: 'left', currentside: choice }} />
                    </DisplayComponent>
                </div>
            </div>
        </div>
    );
}

export default SideChoice;