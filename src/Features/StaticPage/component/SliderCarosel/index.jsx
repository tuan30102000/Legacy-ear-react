import React, { useState } from 'react';
import Slider from 'react-slick';
import './style.scss';
import rose1 from '../../../../assets/image/rose1.jpg'
import rose2 from '../../../../assets/image/rose2.jpg'
import rose3 from '../../../../assets/image/rose3.jpg'
import classNames from 'classnames';
SliderCarosel.propTypes = {

};
const listImgSlide = [rose1, rose2, rose3]
function SliderCarosel(props) {
    const settings = {
        settings:'unslick'
        // className: "center",
        // centerMode: true,
        // infinite: true,
        // centerPadding: "100px",
        // slidesToShow: 2,
        // speed: 500,
        // beforeChange:(crr,next)=>setImgIndex(next),
    };

    const [imgIndex, setImgIndex] = useState(0)
    return (
        <div className="clip-box">
            <Slider {...settings}>

                {
                    listImgSlide.map((item, index) => (
                        <div className={classNames({
                            clip:true,
                            active:index===imgIndex
                        })} key={index}>
                            <img src={item} alt="" />
                            <div className="content">

                                <h6>Post Title One</h6>
                                <p>Lope Pham</p>
                            </div>
                        </div>
                    ))
                }

            </Slider>
        </div>

    );
}

export default SliderCarosel;