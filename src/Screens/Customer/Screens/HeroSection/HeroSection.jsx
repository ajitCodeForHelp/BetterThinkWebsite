import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import img from "../../../../Assets/laptop.svg"

function HeroSection() {
    return (

        <>
            <div className="hero-section">


                {/* Navigation Bar */}
                <div className="hero-nav">
                    <div className="logo">
                        <span className="black">Better</span>
                        <span className="white">Think</span>
                        <span className="black">IT</span>
                        <span className="white">Solution</span>
                    </div>
                    <nav>
                        <span>Services <span><FaChevronDown /></span></span>
                        <span>E-Commerce</span>
                        <span>Development</span>
                    </nav>
                    <button className="cta-button custom-btn btn-15">
                        Let’s get Started <FaArrowRight className="arrow-icon" />
                    </button>
                </div>

                <div className="hero-text-section d-flex .mt-5">
                   <div className="hero-flex">
                   <div className="hero-text">
                        <h1>
                            <span className="animated-text">we dream</span> <br />
                            <span className="animated-text">we design</span> <br />
                            <span className="animated-text">we develop</span> <br />
                            <span className="animated-text">we deliver<span className="underscore">_</span></span>
                        </h1>
                    </div>

                    {/* Right Side: Image */}
                    <div className="hero-image">
                        <img src={img} alt="Laptop Mockup" />
                    </div>
                   </div>
                </div>
            </div>
            <div className="hero-section-b pt-5">
                <h1 className="d-flex inline">
                Globally recognized full service eCommerce agency.
                We help brands grow.
                </h1>
            </div>
        </>
    )
}
export default HeroSection