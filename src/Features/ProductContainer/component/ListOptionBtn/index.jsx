import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'
import LabelText from '../Labels/ChoiceBtn';
ListOpitonBtn.propTypes = {
    listOption:PropTypes.array.isRequired,//listOption=['text']
    onChange:PropTypes.func.isRequired,
    itemStyle:PropTypes.object,
    style:PropTypes.object,
};

function ListOpitonBtn({onChange,listOption,option,itemStyle={},style={}}) {
   
    return (
        <div className="oder__list-options-btn" style={style}>
            {listOption.map((item,index)=>(
                <LabelText style={itemStyle}   choice={index===option} onClick={()=>{onChange(index)}} key={index}  text={item}  />
            ))}
        </div>
    );
}

export default ListOpitonBtn;