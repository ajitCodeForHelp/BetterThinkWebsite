import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "../../../../../Assets/icon-1.svg";
import img2 from "../../../../../Assets/icon-2.svg";
import img3 from "../../../../../Assets/icon-3.svg";
import img4 from "../../../../../Assets/icon-4.svg";
import img5 from "../../../../../Assets/icon-5.svg";

const services = [
  { img: img1, title: "Branding and Identity Design" },
  { img: img2, title: "Web Design and Development" },
  { img: img3, title: "App Design and Development" },
  { img: img4, title: "Digital Marketing Services" },
  { img: img5, title: "Digital Accessibility Compliance" }
];

const ServicesSection = () => {
  return (
    <>
      <div className="d-flex service-section">
        {services.map((service, index) => (
          <div
            key={index}
            className="text-center p-5 box service-a"
            style={{
              backgroundColor: "#ff6600",
              width: "400px",
              maxWidth: "100%",
              borderRight: "1px solid white"
            }}
          >
            <div
              className="d-flex justify-content-center align-items-center mb-3"
              style={{
                width: "100px",
                height: "100px",
                margin: "0 auto"
              }}
            >
              <img src={service.img} alt={service.title} />
            </div>
            <h5 className="text-black">{service.title}</h5>
          </div>
        ))}
      </div>
    </>
  );
};

export default ServicesSection;


