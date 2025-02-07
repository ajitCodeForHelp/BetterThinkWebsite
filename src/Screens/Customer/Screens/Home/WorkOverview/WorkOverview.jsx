import React from "react";
import { Button, } from "react-bootstrap";
import img from "../../../../../Assets/banner-1.webp";
import image1 from "../../../../../Assets/slider-1.jpeg";
import image2 from "../../../../../Assets/slider-2.jpeg";
import image3 from "../../../../../Assets/slider-3.jpeg";
// import workimg1 from "../../../../../Assets/banner-2.jpeg"
// import workimg2 from "../../../../../Assets/banner-3.jpeg"
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min"; // Bootstrap JS

function WorkOverview() {
    return (
        <>

            <div className="work-view d-flex justify-content-center" style={{ minHeight: "100vh",overflow:"hidden" }} data-gole>
                <div className="work-view-img mt-5 mb-5 text-center">
                    {/* Main Banner Image */}
                    <img src={img} alt="img" className="img-fluid main-banner" />

                    {/* Category Buttons */}
                    <div className="flex-btn mt-3">
                        <Button variant="dark" className="m-2 py-2 px-4">E-Commerce</Button>
                        <Button variant="dark" className="m-2 py-2 px-4">Web Site Design</Button>
                        <Button variant="dark" className="m-2 py-2 px-4">Shopify</Button>
                    </div>
                    <div className="work-view-carousel ">

                        <div class="container my-5 work-width">
                            <div class="ombre-externe">
                                <div class="ombre-interne">
                                    <div id="carouselExampleCaptions" class="carousel slide " data-bs-ride="carousel">
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <img src={image1} class="d-block w-100 peinture-ombre-interne-fine" alt="..." />
                                                <div class="carousel-caption">
                                                    <h5>
                                                        First slide
                                                    </h5>
                                                    <p>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="carousel-item">
                                                <img src={image2} class="d-block w-100" alt="..." />
                                                <div class="carousel-caption">
                                                    <h5>
                                                        Second slide
                                                    </h5>
                                                    <p>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="carousel-item">
                                                <img src={image3} class="d-block w-100" alt="..." />
                                                <div class="carousel-caption">
                                                    <h5>
                                                        Third slide
                                                    </h5>
                                                    <p>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Previous</span>
                                        </button>
                                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Next</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WorkOverview;

