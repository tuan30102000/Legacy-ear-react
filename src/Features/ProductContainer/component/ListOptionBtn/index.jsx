import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'
import LabelText from '../Labels/ChoiceBtn';
ListOpitonBtn.propTypes = {
    listOption:PropTypes.array.isRequired,
    onChange:PropTypes.func,
};

function ListOpitonBtn({onChange,listOption,option,itemStyle={}}) {
    return (
        <ul className="oder__list-options-btn">
            {listOption.map((item,index)=>(
                <LabelText style={itemStyle}  choice={index===option} onClick={()=>{onChange(index)}} key={index}  text={item}  />
            ))}
        </ul>
    );
}

export default ListOpitonBtn;