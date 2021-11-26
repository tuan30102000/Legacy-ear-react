import React from 'react';
import PropTypes from 'prop-types';
import LabelCrical from '../Labels/LabelCrical';
import classNames from 'classnames'
import './style.scss';
ListOpitonsCrical.propTypes = {
    listData: PropTypes.array.isRequired,
    className: PropTypes.bool,
    name: PropTypes.string.isRequired,
    side: PropTypes.string.isRequired,
    currentside: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
};

function ListOpitonsCrical({ listData, currentside, name, side, title }) {
    return (
        <div className={classNames('list-options-crical__box',)}>
            <p className="option-title">
                {side + '-' + title}
            </p>
            <ul className='option-list-crical'>
                {listData.map((item, index) => (
                    <LabelCrical name={name} currentside={currentside} value={item} side={side} id={`${name}-${item.value}-${item.side}`} key={index} checkedState={index + 1 === 1} />
                ))}
            </ul>
        </div>
    );
}

export default ListOpitonsCrical;