import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import LabelText from '../Labels/LabelText';
import OptionTitle from '../TitleOption';
import './style.scss';
ListOpitonsText.propTypes = {
    listValue: PropTypes.array.isRequired,
    className: PropTypes.bool,
    name: PropTypes.string.isRequired,
    side: PropTypes.string,
    currentside: PropTypes.bool,
    title: PropTypes.string,
    currentType: PropTypes.bool,
    listText: PropTypes.array.isRequired,//[text]
    style: PropTypes.object,
    forData:PropTypes.string,

};

function ListOpitonsText({ style = {},forData='' ,listValue, listText, currentside = true, name, side, currentType = true, title = 'Choose your option' }) {
    return (
        <div className={classNames('list-options-text__box',)}>
            <OptionTitle content={(side ? side + '-' : '') + title} />
            <ul style={style} className='option-list-text'>
                {listValue.map((item, i) => (
                    <LabelText forData={forData} key={i} currentside={true} text={listText[i]} currentside={currentside && currentType} checkedState={i === 0} name={name} value={item} />
                ))}
            </ul>
        </div>
    );
}

export default ListOpitonsText;