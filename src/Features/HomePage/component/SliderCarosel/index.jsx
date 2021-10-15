import React from 'react';
import Slider from 'react-slick';
import './style.scss';
import rose1 from '../../../../assets/image/rose1.jpg'
import rose2 from '../../../../assets/image/rose2.jpg'
import rose3 from '../../../../assets/image/rose3.jpg'
SliderCarosel.propTypes = {

};

function SliderCarosel(props) {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "100px",
        slidesToShow: 1,
        speed: 500,
    };

    return (
        <div className="clip-box">
            <Slider {...settings}>
                <div>
                    <div className="clip"
                        style={{ backgroundImage: 'url(' + rose1 + ')' }}>
                        <div className="content">
                            <h1>Post Title One</h1>
                            <p>Lope Pham</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="clip"
                        style={{ backgroundImage: 'url(' + rose2 + ')' }}>
                        <div className="content">
                            <h1>Post Title One</h1>
                            <p>Lope Pham</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="clip"
                        style={{ backgroundImage: 'url(' + rose3 + ')' }}>
                        <div className="content">
                            <h1>Post Title One</h1>
                            <p>Lope Pham</p>
                        </div>
                    </div>
                </div>

            </Slider>
        </div>

    );
}

export default SliderCarosel;