import PropTypes from 'prop-types';
import React from 'react';
import ChoiceType from '../ChoiceType';
import SideChoice from '../SideChoice';
import './style.scss';
ManyType.propTypes = {
    data: PropTypes.object.isRequired,
};

function ManyType({ data }) {
    const componentProp = {
        data: data.listOption,
        // title:'',
        name: data.name,
        forData:data.name
    }
    // console.log(method.filterArr(data.listOption, 'name'))
    // console.log(data.listOption,data)
    return (
        <SideChoice Component={ChoiceType} componentProp={componentProp} />
    );
}

export default ManyType;