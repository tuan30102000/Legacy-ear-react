import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'
import DisplayComponent from '../DisplayComponent';
import Shell from '../TypeComponents/Shell';
import ManyType from '../TypeComponents/ManyType';
import TypeText from '../TypeComponents/TypeText';
AllChoice.propTypes = {
    data: PropTypes.object.isRequired,
    option:PropTypes.number.isRequired,
};
function AllChoice({ data,option }) {
    return (
        <div className='all-choie' >
            <DisplayComponent showState={option === 0}>
                <Shell data={data.shell} />
            </DisplayComponent>
            <DisplayComponent showState={option === 1}>
                <ManyType data={data.faceplate} />
            </DisplayComponent>
            <DisplayComponent showState={option === 2}>
                <ManyType data={data.artwork} />
            </DisplayComponent>
            <DisplayComponent showState={option === 3}>
                <TypeText data={data.cable} />
            </DisplayComponent>
            <DisplayComponent showState={option === 4}>
                <TypeText data={data.material} />
            </DisplayComponent>
        </div>
    );
}

export default AllChoice;