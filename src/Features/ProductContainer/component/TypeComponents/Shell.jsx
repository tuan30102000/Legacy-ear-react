import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'
import SideChoice from '../SideChoice';
import ListOpitonsCrical from '../ListOpitonsCrical';
Shell.propTypes = {
    data: PropTypes.object.isRequired,
};

function Shell({ data, }) {
    return (
        <SideChoice
            Component={ListOpitonsCrical}
            componentProp={{
                listData: data.value,
                name: data.name,
                title: 'CHOOSE A SHELL COLOR',
                forData:data.name,
                color:data.color,
            }} />
    );
}

export default Shell;