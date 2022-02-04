import PropTypes from 'prop-types';
import React, { useState } from 'react';
import method from '../../../../Constants/method';
import DisplayComponent from '../DisplayComponent';
import ListOpitonsCrical from '../ListOpitonsCrical';
import ListOpitonBtn from '../ListOptionBtn';
import OptionTitle from '../TitleOption';
import './style.scss';
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
                    <ListOpitonsCrical forData={forData} currentside={currentside} currentType={currentShowIndex === i} color={item.color} listData={item.value} name={name + '-' + item.name} side={side} title={title + name + '-' + item.name} />
                </DisplayComponent>


            ))}
        </div>
    );
}

export default ChoiceType;