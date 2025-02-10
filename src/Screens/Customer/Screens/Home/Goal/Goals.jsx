import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaTools, FaLightbulb, FaChartLine } from "react-icons/fa";

function Goals() {
  const services = [
    { icon: <FaTools size={40} color="#f9a825" />, title: "Web Development", description: "With a dedicated team, we build exceptional projects, focusing on quality, transparency, efficient management, and innovative solutions to ensure complete client satisfaction and success." },
    { icon: <FaLightbulb size={40} color="#f9a825" />, title: "Custom Solutions", description: "We maintain websites and apps with a commitment to quality, reliability, and proactive management, ensuring they run smoothly and meet ongoing client needs." },
    { icon: <FaChartLine size={40} color="#f9a825" />, title: "Mobile Apps", description: "We help businesses grow by enhancing their digital presence, optimizing performance, and implementing strategies that drive engagement, conversions, and long-term success." },
    { icon: <FaTools size={40} color="#f9a825" />, title: "UI/UX Design", description: "With a dedicated team, we build exceptional projects, focusing on quality, transparency, efficient management, and innovative solutions to ensure complete client satisfaction and success." },
    { icon: <FaTools size={40} color="#f9a825" />, title: "Online Marketing", description: "With a dedicated team, we build exceptional projects, focusing on quality, transparency, efficient management, and innovative solutions to ensure complete client satisfaction and success." },
    { icon: <FaTools size={40} color="#f9a825" />, title: "Accessibility", description: "With a dedicated team, we build exceptional projects, focusing on quality, transparency, efficient management, and innovative solutions to ensure complete client satisfaction and success." },
  ];

  return (
    <div className="goal-section" style={{ backgroundColor: "#222", color: "#fff", padding: "4rem 0rem 3rem" }}>
      <div className="d-flex justify-content-center align-items-center mb-3" style={{ color: "#f9a825", fontSize: "1.4rem" }}>
        <h1 style={{ color: "#f9a825", fontSize: "3rem" }}>Our Services</h1>
      </div>
      <div className="container" style={{ maxWidth: "1200px" }}>
        <div className="row d-flex justify-content-between flex-wrap">
          {services.map((service, index) => (
            <div key={index} className="col-md-4 mb-4 goal-col">
              <div>
                <div className="d-flex align-items-center">
                  {service.icon}
                  <h3 style={{ color: "#f9a825", fontSize: "2rem", marginLeft: "1rem" }}>{service.title}</h3>
                </div>
                <p style={{ fontSize: "1.2rem" }}>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Goals;
