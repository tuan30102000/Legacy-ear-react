import React from 'react';
import PropTypes from 'prop-types';
import LabelCrical from '../Labels/LabelCrical';
import classNames from 'classnames'
import './style.scss';
import OptionTitle from '../TitleOption';
ListOpitonsCrical.propTypes = {
    listData: PropTypes.array.isRequired,
    className: PropTypes.bool,
    name: PropTypes.string.isRequired,
    side: PropTypes.string.isRequired,
    currentside: PropTypes.bool.isRequired,
    title: PropTypes.string,
    currentType:PropTypes.bool,
    fordata:PropTypes.string,
};

function ListOpitonsCrical({ listData,forData='', currentside, name, side, currentType = true, title = 'Choose your option' }) {
    return (
        <div className={classNames('list-options-crical__box',)}>
            <OptionTitle content={(side ? side + '-' : '') + title} />
            <ul className='option-list-crical'>
                {listData.map((item, index) => (
                    <LabelCrical forData={forData} name={name} currentside={currentside && currentType} value={item} side={side} id={`${name}-${item.value}-${item.side}`} key={index} checkedState={index + 1 === 1} />
                ))}
            </ul>
        </div>
    );
}

export default ListOpitonsCrical;