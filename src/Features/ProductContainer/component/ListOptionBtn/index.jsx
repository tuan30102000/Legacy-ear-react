import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'
import LabelText from '../Labels/LabelTextBtn';
ListOpitonBtn.propTypes = {
    listOption:PropTypes.array.isRequired,
    onChange:PropTypes.func,
};

function ListOpitonBtn({onChange,listOption,option}) {
    return (
        <ul className="oder__list-options-btn">
            {listOption.map((item,index)=>(
                <LabelText  checked={item===option} onChange={()=>{onChange(item)}} key={index} value={item} labelText={item}  name='option-state'/>
            ))}
        </ul>
    );
}

export default ListOpitonBtn;