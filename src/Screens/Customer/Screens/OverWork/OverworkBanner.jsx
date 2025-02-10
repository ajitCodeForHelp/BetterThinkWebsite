import React from "react";
import img from "../../../../Assets/overwork-banner.webp"

function OverworkBanner() {

    return (
        <>
            <div className="hero-section">
                <div className="hero-text-section d-flex .mt-5">
                    <div className="hero-flex hero-flexx">
                        <div className="hero-b d-flex justify-content-between align-items-center w-100">
                            <div className="hero-text">
                                <h4>Portfolio</h4>
                                    <h2  className="animated-text">Crafted With Love</h2>
                                    <h2  className="animated-text">Built With Passion</h2>
                            </div>
                            <div className="hero-image">
                                <img src={img} alt="Laptop Mockup" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default OverworkBanner