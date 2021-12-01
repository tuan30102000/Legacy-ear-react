import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.scss'
import DisplayComponent from '../DisplayComponent';
import ListOpitonBtn from '../ListOptionBtn';
import ListOpitonsCrical from '../ListOpitonsCrical';
import method from '../../../../Constants/method';
import OptionTitle from '../TitleOption';
import CSSPRO from '../../../../Constants/CSSENV';
ChoiceType.propTypes = {
    data: PropTypes.array,
    currentside: PropTypes.bool.isRequired,
    forData: PropTypes.string,
    side: PropTypes.string,
    title: PropTypes.string,
};

function ChoiceType({ side, data, currentside, title = '', name, forData = '' }) {
    const [currentShowIndex, setcurrentShowIndex] = useState(0)
    const style={ /* minWidth: CSSPRO.MIN_WIDTH_CHOICE_TYPE */ }
    return (
        <div className='type-choice'>

            <OptionTitle content={side} />
            <ListOpitonBtn itemStyle={{style}} onChange={setcurrentShowIndex} option={currentShowIndex} listOption={method.filterArr(data, 'name')} />

            {data.map((item, i) => (

                <DisplayComponent key={i} showState={currentShowIndex === i} >
                    <ListOpitonsCrical forData={forData} currentside={currentside} currentType={currentShowIndex === i} listData={item.Value} name={name + '-' + item.name} side={side} title={title + name + '-' + item.name} />
                </DisplayComponent>


            ))}
        </div>
    );
}

export default ChoiceType;