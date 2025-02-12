import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import img from "../../../../../Assets/banner-1.webp";
// import workimg1 from "../../../../../Assets/banner-2.jpeg"
// import workimg2 from "../../../../../Assets/banner-3.jpeg"
import image1 from "../../../../../Assets/slider-1.jpeg";
import image2 from "../../../../../Assets/slider-2.jpeg";
import image3 from "../../../../../Assets/slider-3.jpeg";
import "swiper/css";
import "swiper/css/pagination";

function WorkOverview() {
    return (
        <div className="work-view d-flex justify-content-center">
            <div className="work-view-img mt-5 mb-5 text-center">
                {/* Main Banner Image */}
                <img src={img} alt="Main Banner" className="img-fluid main-banner" />
                 {/* Category Buttons */}
                    {/* <div className="flex-btn mt-3">
                        <Button variant="dark" className="m-2 py-2 px-4">E-Commerce</Button>
                        <Button variant="dark" className="m-2 py-2 px-4">Web Site Design</Button>
                        <Button variant="dark" className="m-2 py-2 px-4">Shopify</Button>
                    </div> */}
                <div className="work-view-carousel">
                    <div className="container my-5 work-width">
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 2800, disableOnInteraction: false }}
                            modules={[Autoplay, Pagination]}
                            className="mySwiper"
                            style={{ '--swiper-navigation-color': 'transparent', '--swiper-navigation-size': '0px' }}
                        >
                            <SwiperSlide>
                                <img src={image1} className="d-block w-100" alt="Slide 1" />
                                {/* <div className="carousel-caption">
                                    <h5>First Slide</h5>
                                </div> */}
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={image2} className="d-block w-100" alt="Slide 2" />
                                {/* <div className="carousel-caption">
                                    <h5>Second Slide</h5>
                                </div> */}
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={image3} className="d-block w-100" alt="Slide 3" />
                                {/* <div className="carousel-caption">
                                    <h5>Third Slide</h5>
                                </div> */}
                            </SwiperSlide>
                            
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorkOverview;



