import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import img from "../../../../../Assets/pearson.png"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function ClientReviewsCarousel() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);

    const onAutoplayTimeLeft = (s, time, progress) => {
        if (progressCircle.current) {
            progressCircle.current.style.setProperty("--progress", 1 - progress);
        }
        if (progressContent.current) {
            progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
        }
    };

    return (
        <div className="client-review w-100 text-light"  style={{ backgroundColor: "#222", padding: "0rem 0rem 4rem"}}>
            <div className="text-light p-4" style={{ width: "80%" }}>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2800,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    className="mySwiper"
                >
                    <SwiperSlide >
                        <div
                            className="d-flex justify-content-around align-items-center"
                            style={{
                                backgroundColor: "#f7931e",
                                borderRadius: "20px",
                                padding: "2rem",
                                color: "#000",
                            }}
                        >
                             <div className="img">
                                <img src={img} alt="" />
                            </div>
                            <div style={{ maxWidth: "600px", }}>
                                <h6 className="mb-3">Our Client Reviews</h6>
                                <p style={{ fontSize: "1.7rem" }}>
                                    <strong>
                                        "MOBIKASA has significantly enhanced our core website pages,
                                        leading to a noticeable increase in both add-to-cart actions
                                        and conversion rates. We’re thrilled with the improvements!"
                                    </strong>
                                </p>
                                <p className="mt-4">- Danetti</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className="d-flex justify-content-around align-items-center"
                            style={{
                                backgroundColor: "#f7931e",
                                borderRadius: "20px",
                                padding: "2rem",
                                color: "#000",
                            }}
                        >
                             <div className="img">
                                <img src={img} alt="" />
                            </div>
                            <div style={{ maxWidth: "600px",  }}>
                                <h6 className="mb-3">Our Client Reviews</h6>
                                <p style={{ fontSize: "1.7rem" }}>
                                    <strong>
                                        "MOBIKASA has significantly enhanced our core website pages,
                                        leading to a noticeable increase in both add-to-cart actions
                                        and conversion rates. We’re thrilled with the improvements!"
                                    </strong>
                                </p>
                                <p className="mt-4">- Danetti</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className="d-flex justify-content-around align-items-center"
                            style={{
                                backgroundColor: "#f7931e",
                                borderRadius: "20px",
                                padding: "2rem",
                                color: "#000",
                            }}
                        >
                            <div className="img">
                                <img src={img} alt="" />
                            </div>
                            <div style={{ maxWidth: "600px", }}>
                                <h6 className="mb-3">Our Client Reviews</h6>
                                <p style={{ fontSize: "1.7rem" }}>
                                    <strong>
                                        "MOBIKASA has significantly enhanced our core website pages,
                                        leading to a noticeable increase in both add-to-cart actions
                                        and conversion rates. We’re thrilled with the improvements!"
                                    </strong>
                                </p>
                                <p className="mt-4">- Danetti</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Add more slides here if needed */}
                </Swiper>

                {/* <div className="autoplay-progress" slot="container-end">
        <svg viewBox="0 0 48 48" ref={progressCircle}>
          <circle cx="24" cy="24" r="20"></circle>
        </svg>
        <span ref={progressContent}></span>
      </div> */}
            </div>
        </div>

    );
}

export default ClientReviewsCarousel;
