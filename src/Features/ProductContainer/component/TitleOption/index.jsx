import React from 'react';
import PropTypes from 'prop-types';
import style from  './style.module.css'
OptionTitle.propTypes = {
    content:PropTypes.string.isRequired,
};

function OptionTitle({content}) {
    return (
       <p className={style['option-title']} >
           {content}
       </p>
    );
}

export default OptionTitle;