import React from 'react';
import LabelCrical from '../LabelCrical';
import classNames from 'classnames'
import './style.scss';
ListOpitons.propTypes = {
    
};

function ListOpitons({className=true,name}) {
    return (
        <div className={classNames({hide:className})}>
            <p>{name}</p>
            <ul>
                <LabelCrical value='1' name={'shell'+name} side='both' checkedState={true} />
                <LabelCrical value='2' name={'shell'+name} side='both' />
                <LabelCrical value='5' name={'shell'+name} side='both' />
                <LabelCrical value='3' name={'shell'+name} side='both' />
                <LabelCrical value='4' name={'shell'+name} side='both' />
            </ul>
        </div>
    );
}

export default ListOpitons;