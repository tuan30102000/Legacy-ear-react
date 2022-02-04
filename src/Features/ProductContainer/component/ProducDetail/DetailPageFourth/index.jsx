import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'
DetailPageFourth.propTypes = {
    parameter: PropTypes.array,
};

function DetailPageFourth({ parameter = [] }) {
    return (
        <div className="container-detail-page4__wraper layuot">
            <div className="layuot-box detail-page4__box grid-col-12">
                <h3 className="detail-page4__title">Specification</h3>
                <div className="detail-page4__info-product">
                    {parameter.map((item, key) => 
                        <div key={key} className="detail-page4__parameter">
                            <h3 className="detail-page4__specification">{item.specification}</h3>
                            <p className="detail-page4-caption">{item.caption}</p>
                        </div>
                    )}

                    {/* <div className="detail-page4__parameter">
                        <h3 className="detail-page4__specification">15Hz-22kHz</h3>
                        <p className="detail-page4-caption">Frequency response</p>
                    </div>
                    <div className="detail-page4__parameter">
                        <h3 className="detail-page4__specification">10 Ohms @ 1kHz</h3>
                        <p className="detail-page4-caption">Impedance</p>
                    </div>
                    <div className="detail-page4__parameter">
                        <h3 className="detail-page4__specification">-26 dB</h3>
                        <p className="detail-page4-caption">Noise Isolation</p>
                    </div>
                    <div className="detail-page4__parameter">
                        <h3 className="detail-page4__specification">4-way</h3>
                        <p className="detail-page4-caption">Electrical Crossover</p>
                    </div>
                    <div className="detail-page4__parameter">
                        <h3 className="detail-page4__specification">3 Bore</h3>
                        <p className="detail-page4-caption">Acoustical Design</p>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default DetailPageFourth;