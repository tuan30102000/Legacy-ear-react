import React from 'react';
import LabelCrical from '../LabelCrical';
import classNames from 'classnames'
import './style.scss';
ListOpitonsCrical.propTypes = {
    listData: PropTypes.array.isRequired,
    className: PropTypes.bool,
    name: PropTypes.string.isRequired,
    side: PropTypes.string.isRequired,
    currentSide: PropTypes.bool.isRequired,
};

function ListOpitonsCrical({ listData, className = true, name, side, currentSide }) {
    return (
        <div className={classNames({ hide: !className })}>
            <ul>
                {listData.map((item, index) => (
                    <LabelCrical currentSide={currentSide} value={item.value} side={side} id={`${name}-${item.value}-${item.side}`} key={index} checkedState={index + 1 === 1} />
                ))}
            </ul>
        </div>
    );
}

export default ListOpitonsCrical;