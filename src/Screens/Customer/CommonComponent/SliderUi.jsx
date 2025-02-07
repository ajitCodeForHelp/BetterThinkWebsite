// src/components/Slider.js
import React from 'react';
import './Style.scss';
import slider1 from "../../../Assets/work1.png";
import slider2 from "../../../Assets/work2.png";
import slider3 from "../../../Assets/work1.png";

const Slider = () => (

    <div className="slider" data-slider>
        <div className="slider_title">
            {/* <span>OUR</span> <span>WORK</span> */}
        </div>
        <div className="slider_inner" data-slider-inner>
            <div className="slider_slide" data-slider-slide>
                <img
                    width="612"
                    height="459"
                    src={slider1}
                    data-src={slider1}
                    alt="image"
                />
            </div>
            <div className="slider_slide" data-slider-slide>
                <img
                    width="612"
                    height="408"
                    src={slider2}
                    data-src={slider2}
                    alt="image"
                />
            </div>
            <div className="slider_slide" data-slider-slide>
                <img
                    width="509"
                    height="339"
                    src={slider3}
                    data-src={slider3}
                    alt="imge"
                />
            </div>
            <div className="slider_slide" data-slider-slide>
                <img
                    width="509"
                    height="339"
                    src={slider3}
                    data-src={slider3}
                    alt="img"
                />
            </div>
            <div className="slider_slide" data-slider-slide>
                <img
                    width="612"
                    height="459"
                    src={slider2}
                    data-src={slider2}
                    alt="imge"
                />
            </div>
            <div className="slider_slide" data-slider-slide>
                <img
                    width="612"
                    height="459"
                    src={slider1}
                    data-src={slider1}
                    alt="imge"
                />
            </div>
        </div>
    </div>

);

export default Slider;