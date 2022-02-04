import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'
DetailPageThird.propTypes = {
    title: PropTypes.string,
    description: PropTypes.array,
};

function DetailPageThird({ title = '', description = [] }) {
    return (
        <div className="container-detail-page3__wraper layuot">
            <div className="layuot-box detail-page3__box grid-col-12">
                <h3 className="detail-page3__title">{title}</h3>
                {description.map((item, i) => (<p key={i} className="detail-page3__content">
                    {item}
                </p>))}
                {/* <p className="detail-page3__content">
                    Our six-driver earphone was designed to deliver neutral sound, with perfect balance, redefined
                    low
                    frequencies, and smooth but detailed trebles. Clear, big sounding, lifelike bass meets full-body
                    and
                    organic mids, all completed by smooth, extended, detailed but never harsh highs. The highest
                    resolution, extreme depth, very wide soundstage, and surprising dynamics is something that makes
                    our
                    C6 model stand out.
                </p>
                <p className="detail-page3__content">
                    RASEN Bass ™ (Reference Acoustic Spiral Enhanced Bass) - Patent-pending solution, precisely
                    calculated and designed 3D printed structure, that creates low-end notes as realistic as a true
                    subwoofer.
                </p>
                <p className="detail-page3__content">
                    SES™ (Space Expanse System) - Our very own field-specific, 3D printed, horn-loaded tweeter which
                    was
                    tuned in a very particular bandwidth.
                </p> */}
            </div>
        </div>
    );
}

export default DetailPageThird;