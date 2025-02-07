import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "../../../../../Assets/icon-1.svg"
import img2 from "../../../../../Assets/icon-2.svg"
import img3 from "../../../../../Assets/icon-3.svg"
import img4 from "../../../../../Assets/icon-4.svg"
import img5 from "../../../../../Assets/icon-5.svg"
const ServicesSection = () => {


    return (
        <>
            <div className="d-flex service-section ">
                <div
                    className="text-center p-5 box"
                    style={{
                        backgroundColor: "#ff6600",
                        width: "400px",
                        maxWidth: "100%",
                        borderRight:"1px solid white"
                    }}
                >
                    <div
                        className="d-flex justify-content-center align-items-center mb-3"
                        style={{
                            width: "100px",
                            height: "100px",
                            margin: "0 auto",
                        }}
                    >
                        <img src={img1} alt="icon1"  />
                      
                    </div>
                    <h5 className="text-black">Branding and Identity Design</h5>
                </div>
                <div
                    className="text-center p-5 box"
                    style={{
                        backgroundColor: "#ff6600",
                        width: "400px",
                        maxWidth: "100%",
                         borderRight:"1px solid white"
                    }}
                >
                    <div
                        className="d-flex justify-content-center align-items-center mb-3"
                        style={{
                            width: "100px",
                            height: "100px",
                            margin: "0 auto",
                        }}
                    >
                        <img src={img2} alt="icon2"  />
                    </div>
                    <h5 className="text-black">Web Design and Development</h5>
                </div>
                <div
                    className="text-center p-5 box"
                    style={{
                        backgroundColor: "#ff6600",
                        width: "400px",
                        maxWidth: "100%",
                         borderRight:"1px solid white"
                    }}
                >
                    <div
                        className="d-flex justify-content-center align-items-center mb-3"
                        style={{
                            width: "100px",
                            height: "100px",
                            margin: "0 auto",
                        }}
                    >
                       <img src={img3} alt="icon3"  />
                    </div>
                    <h5 className="text-black">App Design and Development</h5>
                </div>
                <div
                    className="text-center p-5 box"
                    style={{
                        backgroundColor: "#ff6600",
                        width: "400px",
                        maxWidth: "100%",
                         borderRight:"1px solid white"
                    }}
                >
                    <div
                        className="d-flex justify-content-center align-items-center mb-3"
                        style={{
                            width: "100px",
                            height: "100px",
                            margin: "0 auto",
                        }}
                    >
                      <img src={img4} alt="icon4"  />
                    </div>
                    <h5 className="text-black">Digital Marketing Services</h5>
                </div>
                <div
                    className="text-center p-5 box"
                    style={{
                        backgroundColor: "#ff6600",
                        width: "400px",
                        maxWidth: "100%",
                         borderRight:"1px solid white"
                    }}
                >
                    <div
                        className="d-flex justify-content-center align-items-center mb-3"
                        style={{
                            width: "100px",
                            height: "100px",
                            margin: "0 auto",
                        }}
                    >
                         <img src={img5} alt="icon5"  />
                    </div>
                    <h5 className="text-black">Digital Accessibility Compliance</h5>
                </div>
                
            </div>

        </>
    );
};
export default ServicesSection

