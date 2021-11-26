import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'
import SideChoice from '../SideChoice';
import ListOpitonsCrical from '../ListOpitonsCrical';
ShellComponent.propTypes = {

};

function ShellComponent({ data, }) {
    return (
        <SideChoice
            Component={ListOpitonsCrical}
            componentProp={{
                listData: data.value,
                name: 'shell',
                title: 'CHOOSE A SHELL COLOR'
            }} />
    );
}

export default ShellComponent;