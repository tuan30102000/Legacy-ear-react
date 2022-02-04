import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'
import { ApiUrl } from '../../../../Constants/ApiUrl';

ItemCollection.propTypes = {
    caption:PropTypes.string,
    imgSrc:PropTypes.string,
    faceplate:PropTypes.string,
    color:PropTypes.string,
};

function ItemCollection({ caption = 'Craft Six', imgSrc = 'https://www.craftears.com/remote/direct_uploads/1604160854_nlfmnfjodhcggdec2.jpeg', faceplate = 'Brown Galaxy', color = 'Wood' }) {
    return (
        <div className="item-collection__wraper">
            <img className="item-collection__img" src={ApiUrl.srcStart + imgSrc} />
            <div className="item-collection__info">
                <h4 className="item-collection__des">{caption}</h4>
                <div className="item-collection__details">
                    <div className="item-collection__faceplate">
                        <p className="item-collection__cap">FacePlate</p>
                        <p className="item-collection__bold">{faceplate}</p>
                    </div>
                    <div className="item-collection__faceplate">
                        <p className="item-collection__cap">Color:</p>
                        <p className="item-collection__bold">{color}</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ItemCollection;