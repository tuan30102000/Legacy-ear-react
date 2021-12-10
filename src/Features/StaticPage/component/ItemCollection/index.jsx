import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'
ItemCollection.propTypes = {

};

function ItemCollection({des='Craft Six',cap1='Facpelate:',cap2='Color:',src='https://www.craftears.com/remote/direct_uploads/1604160854_nlfmnfjodhcggdec2.jpeg',bold1='Brown Galaxy',bold2='Wood'}) {
    return (
        <div className="product-wraper">
            <img className="product-work__img" src={src}/>
                <div className="product-work__info">
                    <h4 className="product-work__des">{des}</h4>
                    <div className="product-work__details">
                        <div className="product-work__faceplate">
                            <p className="product-work__cap">{cap1}</p>
                            <p className="product-work__bold">{bold1}</p>
                        </div>
                        <div className="product-work__faceplate">
                            <p className="product-work__cap">{cap2}</p>
                            <p className="product-work__bold">{bold2}</p>
                        </div>
                    </div>
                </div>

        </div>
    );
}

export default ItemCollection;