import React from "react";
import img from "../../../../Assets/about-banner.webp"

function AboutusBanner() {

    return (
        <>
           <div className="hero-section">
                <div className="hero-text-section d-flex .mt-5">
                    <div className="hero-flex hero-flexx">
                        <div className="hero-c d-flex justify-content-between align-items-center w-100">
                            <div className="hero-text">
                                <h4>Portfolio</h4>
                                    <h3  className="animated-text">Creating a distinct</h3>
                                    <h3  className="animated-text">value and polishing </h3>
                                    <h3  className="animated-text">brand assets</h3>
                            </div>
                            <div className="hero-image">
                                <img src={img} alt="Laptop Mockup" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="exprince-section">
            <div className=" container  text-center w-100 " style={{backgroundColor:"#222", color:"white"}}>
                <div className="row pt-4 pb-4">
                    <div className="col-md-3 col-sm-6">
                        <h2>100+</h2>
                        <h4>EMPLOYEES</h4>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h2>4</h2>
                        <h4>LOCATIONS</h4>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h2>11+</h2>
                        <h4>YEARS</h4>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h2>300+</h2>
                        <h4>CUSTOMERS</h4>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}
export default AboutusBanner