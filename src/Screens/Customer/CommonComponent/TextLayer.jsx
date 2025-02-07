// src/components/Layer.js
import React from 'react';
import './Style.scss';

const Layer = () => (
    
    <div className="layer active" data-layer>
        <div className="layer_title">
            <p data-layer-text>
                <span>Lorem</span> Ipsum
                <em></em>
                <span>is</span>
                <br />
                <span>
                    simply<em></em>dummy
                </span>{' '}
                text <span>of<br /> the</span>{' '}
                <span>printing</span>{' '}
                <span>and</span>
                <em></em>
                typesetting <span>industry</span>
            </p>
        </div>
        <img
            width="612"
            height="459"
            src="https://media.istockphoto.com/photos/beautiful-young-girl-with-nice-sincere-smile-picture-id1188264202?k=20&m=1188264202&s=612x612&w=0&h=Msb2jSOhw2oj2IbFT_RrIWMrk59vcybbzhsdosTXYMM="
            data-src="https://media.istockphoto.com/photos/beautiful-young-girl-with-nice-sincere-smile-picture-id1188264202?k=20&m=1188264202&s=612x612&w=0&h=Msb2jSOhw2oj2IbFT_RrIWMrk59vcybbzhsdosTXYMM="
            alt=""
        />
        <img
            width="612"
            height="340"
            src="https://media.istockphoto.com/photos/young-beautiful-woman-on-dark-background-picture-id475384433?k=20&m=475384433&s=612x612&w=0&h=sU3x4NPuKJGflOCX2khUKI2zXPFFwpHmL2DqhcyMc3E="
            data-src="https://media.istockphoto.com/photos/young-beautiful-woman-on-dark-background-picture-id475384433?k=20&m=475384433&s=612x612&w=0&h=sU3x4NPuKJGflOCX2khUKI2zXPFFwpHmL2DqhcyMc3E="
            alt=""
        />
        <img
            width="612"
            height="459"
            src="https://media.istockphoto.com/photos/portrait-of-a-beautiful-young-woman-posing-against-a-brown-background-picture-id1324035745?k=20&m=1324035745&s=612x612&w=0&h=68QT5DIMLRXEcC1aZUzAZWBI79KtCbgcTGHiObooSfo="
            data-src="https://media.istockphoto.com/photos/portrait-of-a-beautiful-young-woman-posing-against-a-brown-background-picture-id1324035745?k=20&m=1324035745&s=612x612&w=0&h=68QT5DIMLRXEcC1aZUzAZWBI79KtCbgcTGHiObooSfo="
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