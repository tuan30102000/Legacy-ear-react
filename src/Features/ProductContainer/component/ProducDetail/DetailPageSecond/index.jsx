import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'
DetailPageSecond.propTypes = {
    caption: PropTypes.string,
    description: PropTypes.string,
    subSrc: PropTypes.array,

};

function DetailPageSecond({ caption = '', description = '', subSrc = [] }) {
    return (
        <div className="container-detail-page2__wraper layuot">
            <div className="layuot-box detail-page2__box grid-col-12">
                <h3 className="detail-page2__title">{caption}</h3>
                <p className="detail-page2__des">{description}
                </p>
                {
                    subSrc.map((item, i) => (
                        <div key={i} className="detail-page2__img-wraper"><img src={item} alt="" className="detail-page2__img" /></div>
                    ))
                }
                {/* <div className="detail-page2__img-wraper"><img src="https://www.craftears.com/remote/direct_uploads/1609950373_IMG_4445-2.jpg" alt="" className="detail-page2__img" /></div>
                <div className="detail-page2__img-wraper"><img src="https://www.craftears.com/remote/direct_uploads/1609950425_IMG_4196-2.jpg" alt="" className="detail-page2__img" /></div> */}
            </div>
        </div>
    );
}

export default DetailPageSecond;