import React from "react";
import { FaMapMarkerAlt, FaMobileAlt } from "react-icons/fa";

function Navbar() {
    return (
        <>

            <div className="header">
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

        </>
    )
}
export default Navbar