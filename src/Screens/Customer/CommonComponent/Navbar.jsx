import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { FaMapMarkerAlt, FaMobileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>

            <div className="headerr">
                <div className="location">
                    <FaMapMarkerAlt className="icon" />
                    <span>New York</span>
                    <span>Los Angeles</span>
                    <span>London</span>
                    <span>Dubai</span>
                    <span>New Delhi</span>
                </div>

                {/* Contact Section */}
                <div className="contact">
                    <FaMobileAlt className="icon" />
                    <span>+12345678901</span>
                </div>
            </div>
            <div className="hero-section">
                <div className="hero-nav">
                  <Link to="/">
                  <div className="logo">
                        <span className="black">Better</span>
                        <span className="white">Think</span>
                        <span className="black">IT</span>
                        <span className="white">Solution</span>
                    </div>
                  </Link>
                    <nav>
                        <span>Services <span><FaChevronDown /></span></span>
                        <span>E-Commerce</span>
                        <span>Development</span>
                    </nav>
                   <Link to="/contactform">
                   <button className="cta-button custom-btn btn-15">
                        Let’s get Started <FaArrowRight className="arrow-icon" />
                    </button>
                   </Link>
                </div>
            </div>

        </>
    )
}
export default Navbar