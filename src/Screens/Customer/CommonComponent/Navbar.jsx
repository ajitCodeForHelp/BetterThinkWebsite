import React, { useEffect, useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { FaMapMarkerAlt, FaMobileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { Button, Offcanvas } from "react-bootstrap";

function Navbar() {
    const [toggleProfileMenu, setToggleProfileMenu] = useState(false);

    const profileMenuRef = useRef();
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (!profileMenuRef?.current?.contains(event.target)) {
                setToggleProfileMenu(false)
            }
        }
        document.addEventListener("mousedown", handleOutsideClick)
    }, [profileMenuRef])




    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>

            <div className="headerr">
                <div className="location">
                    <FaMapMarkerAlt className="icon" />
                    <span>Jaipur</span>
                    {/* <span>Los Angeles</span>
                    <span>London</span>
                    <span>Dubai</span>
                    <span>New Delhi</span> */}
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
                    <div className="res">
                        <nav>

                            <div className="profile-status" ref={profileMenuRef}>
                                <Link className="profile" id="profileIcon" onClick={() => {
                                    setToggleProfileMenu(!toggleProfileMenu)
                                }}>
                                    <span >Services <span><FaChevronDown /></span></span>
                                </Link>
                                <div className={`profile-menu ${toggleProfileMenu ? "show" : ""}`} id="profileMenu" >
                                    <ul>
                                        <li><Link>My Profile</Link></li>
                                        <li><Link>Settings</Link></li>
                                        <li><Link>Log Out</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <span>E-Commerce</span>
                            <span>Development</span>
                        </nav>
                        <Link to="/contactform">
                            <button className="cta-button custom-btn btn-15">
                                Let’s get Started <FaArrowRight className="arrow-icon" />
                            </button>
                        </Link>
                    </div>
                    <nav>

                        <div className="profile-status" ref={profileMenuRef}>
                            <Link className="profile" id="profileIcon" onClick={() => {
                                setToggleProfileMenu(!toggleProfileMenu)
                            }}>
                                <span >Services <span><FaChevronDown /></span></span>
                            </Link>
                            <div className={`profile-menu ${toggleProfileMenu ? "show" : ""}`} id="profileMenu" >
                                <ul>
                                    <li><Link>E-Commerce</Link></li>
                                    <li><Link>Web Development</Link></li>
                                    <li><Link>UI/UX</Link></li>
                                </ul>
                            </div>
                        </div>
                        <span>E-Commerce</span>
                        <span>Development</span>
                    </nav>
                    <Link to="/contactform">
                        <button className="cta-button custom-btn btn-15">
                            Let’s get Started <FaArrowRight className="arrow-icon" />
                        </button>
                    </Link>
                    <div className="res-slider-btn">
                        {/* <h2><AiOutlineMenu /></h2> */}
                        <div>
                            {/* Button to Open Side Menu */}
                            <h2 className="mt-3" onClick={handleShow}><AiOutlineMenu /></h2>
                            {/* <Button variant="dark" onClick={handleShow} className="mt-3">

                            </Button> */}

                            {/* Side Menu */}
                            <Offcanvas show={show} onHide={handleClose} placement="end">
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title>
                                        <div className="hero-nav">
                                            {/* <span className="fw-bold text-primary">mobikasa</span> */}
                                            <div className="logo logo-a fw-bold ">
                                                <span className="black">Better</span>
                                                <span className="white">Think</span>
                                                <span className="black">IT</span>
                                                <span className="white">Solution</span>
                                            </div>
                                        </div>
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <nav>
                                        <ul className="list-unstyled">
                                            <li className="mb-3">
                                                <a href="#services" className="text-decoration-none text-dark fw-bold">
                                                    Services
                                                </a>
                                            </li>
                                            <li className="mb-3">
                                                <a href="#ecommerce" className="text-decoration-none text-dark fw-bold">
                                                    E-Commerce
                                                </a>
                                            </li>
                                            <li className="mb-3">
                                                <a href="#development" className="text-decoration-none text-dark fw-bold">
                                                    Development
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                    <div className="mt-4 res-2">
                                        <Link to="/contactform">
                                            <Button className="w-100 fw-bold start-btn" style={{backgroundColor:"#f7931e", color:"white", outline:"none", border:"none"}}>
                                                Let’s get Started →
                                            </Button>
                                        </Link>

                                    </div>
                                    <div className="mt-4">
                                        <p className="mb-1">
                                            <i className="bi bi-telephone-fill me-2"></i>+1-646-880-4504
                                        </p>
                                        <p className="mb-0">
                                            <i className="bi bi-geo-alt-fill me-2"></i>
                                            135 Madison Ave, 8th FL <br /> New York, NY 10016
                                        </p>
                                    </div>
                                </Offcanvas.Body>
                            </Offcanvas>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Navbar