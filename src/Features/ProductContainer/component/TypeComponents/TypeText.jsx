import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'
import ListOpitonsText from '../ListOpitonsText';
TypeText.propTypes = {

};

function TypeText({ data }) {
    return (
        <div>
            {data.options.map((item, i) => (
                <ListOpitonsText forData={data.name} key={i} listValue={item.value} title={item.name} listText={item.text} name={item.name} />
            ))}
        </div>
    );
}

export default TypeText;