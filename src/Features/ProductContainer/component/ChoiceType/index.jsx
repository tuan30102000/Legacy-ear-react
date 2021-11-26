import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.scss'
import DisplayComponent from '../DisplayComponent';
ChoiceType.propTypes = {
    Component: PropTypes.func.isRequired,
    data: PropTypes.array,

};

function ChoiceType({ Component, ComponentProp, data = [] }) {
    const [currentShowIndex, setcurrentShowIndex] = useState(1)
    return (
        <div>

          

            {data.map((item, i) => (

                <DisplayComponent showState={currentShowIndex === i} >

                </DisplayComponent>


            ))}
        </div>
    );
}

export default ChoiceType;