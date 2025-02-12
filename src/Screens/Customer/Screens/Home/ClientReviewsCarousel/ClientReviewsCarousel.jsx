import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import img from "../../../../../Assets/pearson.png";
import Bgimg from "../../../../../Assets/line-background-footer.webp"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function ClientReviewsCarousel() {
  const reviews = [
    {
      img: img,
      text: "MOBIKASA has significantly enhanced our core website pages, leading to a noticeable increase in both add-to-cart actions and conversion rates. We’re thrilled with the improvements!",
      author: "Danetti",
    },
    {
      img: img,
      text: "MOBIKASA has significantly enhanced our core website pages, leading to a noticeable increase in both add-to-cart actions and conversion rates. We’re thrilled with the improvements!",
      author: "John Doe",
    },
    {
      img: img,
      text: "MOBIKASA has significantly enhanced our core website pages, leading to a noticeable increase in both add-to-cart actions and conversion rates. We’re thrilled with the improvements!",
      author: "Jane Smith",
    },
  ];

  return (
    <div className="client-review w-100 text-light" style={{ backgroundColor: "#222", padding: "3rem 0rem 4rem" }}>
      <div className="client-wd text-light p-4" style={{ width: "80%" }}>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2800,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div
                className="client-slide d-flex justify-content-around align-items-center"
                style={{
                  backgroundColor: "#f7931e",
                  borderRadius: "20px",
                  padding: "2rem",
                  color: "#000",
                }}
              >
                <div className="img w-100">
                  <img src={review.img} alt="" className="w-100" />
                </div>
                <div style={{ maxWidth: "600px" }}>
                  <h6 className="mb-3">Our Client Reviews</h6>
                  <p style={{ fontSize: "1.7rem" }}>
                    <strong>{`"${review.text}"`}</strong>
                  </p>
                  <p className="mt-4">- {review.author}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="bg-img">
        <img src={Bgimg} alt="bg-img" />
      </div>
    </div>
  );
}

export default ClientReviewsCarousel;


