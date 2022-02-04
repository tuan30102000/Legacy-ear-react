import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'
DetailPageFirst.propTypes = {
name:PropTypes.string.isRequired,
caption:PropTypes.string.isRequired,
imgSrc:PropTypes.string.isRequired,
};

function DetailPageFirst({name,caption,imgSrc}) {
    return (
        <div className="container-detail-page1__wraper layuot pdt-185">
            <div className="layuot-box detail-page1__box grid-col-12">
                <h1 className="detail-page1__title">{name}</h1>
                <h3 className="detail-page1__driver">{caption}</h3>
                <div className="detail-page1__thumnail-wraper">
                    <img src={imgSrc} className="detail-page1__img-thumail" alt="" />
                </div>
            </div>
        </div>
    );
}

export default DetailPageFirst;