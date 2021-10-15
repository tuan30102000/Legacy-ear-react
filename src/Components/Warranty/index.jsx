import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'
Warranty.propTypes = {

};

function Warranty(props) {
    return (
        <>
            <div className="warranty__box">
                <div className="warranty">
                    <h2 className="warranty__time">2</h2>
                    <p className="warranty__date">-year-</p>
                    <p className="warranty__type">warranty on components *</p>
                    <p className="warranty__note">* no questions asked</p>
                </div>
            </div>
            <div className="warranty__box">
                <div className="warranty">
                    <h2 className="warranty__time">60</h2>
                    <p className="warranty__date">-day-</p>
                    <p className="warranty__type">fitting warranty</p>
                    <p className="warranty__note" />
                </div>
            </div>
            <div className="warranty__box">
                <div className="warranty">
                    <h2 className="warranty__time">14</h2>
                    <p className="warranty__date">-day-</p>
                    <p className="warranty__type">or the return *</p>
                    <p className="warranty__note">* Covering only the cost of non-renewable materials for
                        production.</p>
                </div>
            </div>
            <div className="warranty__box">
                <div className="warranty">
                    <h2 className="warranty__time"><i className="fas fa-infinity" /></h2>
                    <p className="warranty__date">&nbsp;</p>
                    <p className="warranty__type">lifetime support</p>
                    <p className="warranty__note" />
                </div>
            </div>
        </>
    );
}

export default Warranty;