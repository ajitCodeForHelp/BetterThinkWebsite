// src/components/Layer.js
import React from 'react';
import './Style.scss';
import quot1 from "../../../Assets/quot3.avif";
import quot2 from "../../../Assets/quot1.jpeg";
import quot3 from "../../../Assets/quot2.jpeg";

const Layer = () => (

    <div className="layer active" data-layer>
        <div className="layer_title">
            <p data-layer-text>
                {/* Our IT company bridges dreams and innovation, delivering solutions that transform futures. */}
                <span>Our</span> company
                <em></em>
                <span>bridges</span>
                <br />
                <span>
                    dreams<em></em>and
                </span>{' '}
                innovation, <span>delivering<br /> solutions</span>{' '}
                <span>that</span>{' '}
                <span>transform</span>
                <em></em>
                futures <span>industry</span>
            </p>
        </div>
        <img
            width="612"
            height="459"
            src={quot1}
            data-src={quot1}
            alt=""
        />
        <img
            width="612"
            height="340"
            src={quot2}
            data-src={quot2}
            alt=""
        />
        <img
            width="612"
            height="459"
            src={quot3}
            data-src={quot3}
            alt=""
        />
        <video playsInline autoPlay muted loop>
            <source
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/fashion.webm"
                type="video/webm"
            />
            <source
                src="http://thenewcode.com/assets/videos/fashion.mp4"
                type="video/mp4"
            />
        </video>
    </div>
);

export default Layer;