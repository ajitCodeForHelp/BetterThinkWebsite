import React from "react";
import { Container, Col } from "react-bootstrap";
import img from "../../../Assets/customer-icon.webp"
import { FaArrowRight } from "react-icons/fa";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaLinkedinIn, } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className="cta-section">
                <Container>
                    <div className="align-items-center d-flex justify-content-between ">
                        <div className="animation-h" >
                            <h2 className="cta-text">Whatever your goal, <br /> let’s get started.</h2>
                        </div>
                        <Link to="/contactform">
                   <button className="cta-button custom-btn btn-15">
                        Let’s get Started <FaArrowRight className="arrow-icon" />
                    </button>
                   </Link>
                    </div>
                </Container>
            </div>
            <footer className="footer text-light py-5" style={{ backgroundColor: "#222", }}>
                <Container>
                    <div className="justify-content-between d-flex">
                        <Col md={6} className="mb-4">
                            <h6 className=" fw-bold mb-4" style={{ color: "#f7931e ", fontSize: "1.2rem" }} >Get in Touch</h6>
                            <div className="d-flex align-items-center mb-3" style={{ fontSize: "1.8rem" }}>
                                <div className=" me-2" style={{ width: "12%" }} >
                                    <img src={img} alt="Profile" className="rounded-circle me-2 bg-white " style={{ width: "100%" }} />
                                </div>
                                <div>
                                    <strong>We are happy to assist you</strong>
                                </div>
                            </div>
                            <p className="mb-4 " style={{ fontSize: "1.2rem", marginTop: "25px" }}>
                                <FaPhoneAlt className=" me-2" style={{ color: "#f7931e " }} /> +1131212123
                            </p>
                            <p className="mb-4" style={{ fontSize: "1.2rem" }}>
                                <FaEnvelope className=" me-2" style={{ color: "#f7931e " }} /> qweqwr@gamil.com

                            </p>
                            <p className="mb-4" style={{ fontSize: "1.2rem" }}>
                                <FaMapMarkerAlt className=" me-2" style={{ color: "#f7931e " }} /> <strong>New York Office</strong>
                            </p>
                            <p style={{ fontSize: "1.2rem" }}>135 Madison Ave, 8th FL, New York, NY 10016</p>

                            <div className="footer-logo">
                                <span className="black">Better</span>
                                <span className="white">Think</span>
                                <span className="black">IT</span>
                                <span className="white">Solution</span>
                            </div>

                        </Col>

                        {/* Right Section */}
                        <Col md={4} className="text-md-end">
                            <h6 className="footer-page-a fw-bold fst-italic text-light mb-4" style={{ fontSize: "2.2rem" }}>Home</h6>
                            <h5 className="footer-page fw-bold mb-4" style={{ fontSize: "2.2rem", color: "#f7931e " }}>Our Work</h5>
                            <h5 className="footer-page fw-bold mb-4" style={{ fontSize: "2.2rem", color: "#f7931e " }}>About Us</h5>
                            <h5 className="footer-page fw-bold mb-4" style={{ fontSize: "2.2rem", color: "#f7931e " }}>Blog</h5>
                            <h5 className="footer-page fw-bold mb-4" style={{ fontSize: "2.2rem", color: "#f7931e " }}>Careers</h5>

                            {/* Social Media Links */}
                            <div className="mt-3 d-flex justify-content-md-end justify-content-start">
                                <button className="btn btn-outline-light me-2" style={{ fontSize: "1.1rem" }}>
                                    <FaFacebookF />
                                </button>
                                <button className="btn btn-outline-light me-2">
                                    <FaInstagram />
                                </button>
                                <button className="btn btn-outline-light me-2">
                                    <FaLinkedinIn />
                                </button>
                            </div>
                        </Col>
                    </div>
                </Container>
            </footer>
        </>
    );
};

export default Footer;
