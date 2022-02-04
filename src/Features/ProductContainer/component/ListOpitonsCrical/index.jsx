import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import LabelCrical from '../Labels/LabelCrical';
import OptionTitle from '../TitleOption';
import './style.scss';
ListOpitonsCrical.propTypes = {
    listData: PropTypes.array.isRequired,
    className: PropTypes.bool,
    name: PropTypes.string.isRequired,
    side: PropTypes.string.isRequired,
    currentside: PropTypes.bool.isRequired,
    title: PropTypes.string,
    currentType: PropTypes.bool,
    fordata: PropTypes.string,
    color: PropTypes.array,
};

function ListOpitonsCrical({ listData, forData = '', color=['transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent'], currentside, name, side, currentType = true, title = 'Choose your option' }) {
    console.log(Array.isArray(color))
    return (
        <div className={classNames('list-options-crical__box',)}>
            <OptionTitle content={(side ? side + '-' : '') + title} />
            <ul className='option-list-crical'>
                {listData.map((item, index) => (
                    <LabelCrical color={'#'+color[index]} forData={forData} name={name} currentside={currentside && currentType} value={item} side={side} id={`${name}-${item.value}-${item.side}`} key={index} checkedState={index + 1 === 1} />
                ))}
            </ul>
        </div>
    );
}

export default ListOpitonsCrical;