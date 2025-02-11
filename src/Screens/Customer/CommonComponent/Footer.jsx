import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import img from "../../../Assets/customer-icon.webp"
import { FaArrowRight } from "react-icons/fa";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdMessage } from "react-icons/md";

const Footer = () => {
    return (
        <>
            <div className="cta-section">
                <Container>
                    <div className="align-items-center d-flex justify-content-between flex-wrap cta-section-st">
                        <div className="animation-h">
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

            <footer className="footer text-light " style={{ backgroundColor: "#222" }}>
                <Container>
                    <Row className="justify-content-between">
                        {/* Left Section */}
                        <Col md={6} className="mb-4">
                            <h6 className="fw-bold mb-4" style={{ color: "#f7931e", fontSize: "1.2rem" }}>Get in Touch</h6>
                            <div className=" name d-flex align-items-center mb-3" style={{ fontSize: "1.8rem" }}>
                                <div className="img me-2" style={{ width: "12%" }}>
                                    <img src={img} alt="Profile" className="rounded-circle me-2 bg-white" style={{ width: "100%" }} />
                                </div>
                                <div >
                                    <strong>We are happy to assist you</strong>
                                </div>
                            </div>
                            <p className="no mb-4" style={{ fontSize: "1.2rem", marginTop: "25px" }}>
                                <FaPhoneAlt className="me-2" style={{ color: "#f7931e" }} /> +1131212123
                            </p>
                            <p className="no mb-4" style={{ fontSize: "1.2rem" }}>
                                <FaEnvelope className="me-2" style={{ color: "#f7931e" }} /> qweqwr@gamil.com
                            </p>
                            <p className="no mb-4" style={{ fontSize: "1.2rem" }}>
                                <FaMapMarkerAlt className="me-2" style={{ color: "#f7931e" }} /> <strong>New York Office</strong>
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
                            <Link to="/">
                                <h6 className="footer-page-a fw-bold fst-italic text-light mb-4" style={{ fontSize: "2.2rem" }}>Home</h6>
                            </Link>
                            <Link to="/overwork">
                                <h5 className="footer-page fw-bold mb-4" style={{ fontSize: "2.2rem", color: "#f7931e" }}>Our Work</h5>
                            </Link>
                            <Link to="/aboutus">
                                <h5 className="footer-page fw-bold mb-4" style={{ fontSize: "2.2rem", color: "#f7931e" }}>About Us</h5>
                            </Link>
                            <h5 className="footer-page fw-bold mb-4" style={{ fontSize: "2.2rem", color: "#f7931e" }}>Blog</h5>
                            <h5 className="footer-page fw-bold mb-4" style={{ fontSize: "2.2rem", color: "#f7931e" }}>Careers</h5>

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
                    </Row>
                </Container>
            </footer>
            <Link to="/contactform">
            <div className="position-fixed z-3 m-auto" style={{ right: "20px", bottom: "20px" }}>
                <div className="rounded-circle d-flex justify-content-center align-item-center fs-3 messagee" style={{ backgroundColor: "#ff7b02", color: "#222", height: "50px", width: "50px", paddingTop: "12px",cursor:"pointer" }}><MdMessage /></div>
            </div>
            </Link>
        </>
    );
};

export default Footer;

