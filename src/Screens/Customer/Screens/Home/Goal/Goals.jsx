import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { FaTools, FaLightbulb, FaChartLine } from "react-icons/fa";

function Goals() {
  return (
    <>
      <div className="" style={{ backgroundColor: "#222", color: "#fff", padding: "4rem 0rem 3rem" }}>
        <div className="d-flex justify-content-center align-items-center mb-3" style={{ color: "#f9a825",fontSize:"1.4rem" }}>
        <h1 style={{ color: "#f9a825",fontSize:"3rem" }}>Over Service</h1>
        </div>
        <Container style={{ maxWidth: "1200px", }}>
          <div className=" d-flex justify-content-between " style={{flexWrap:"wrap"}}>
            {/* Build Section */}
            <Col md={4} className="mb-4 w-25">
              <div>
                <div className="d-flex align-items-center">
                  <FaTools size={40} color="#f9a825" className="mb-3 me-3" />
                  <h3 style={{ color: "#f9a825", font:"2.5rem" }}>
                  Web Development</h3>
                </div>
                <p style={{fontSize:"1.2rem"}}>
                  With a dedicated team, we build exceptional projects, focusing on
                  quality, transparency, efficient management, and innovative
                  solutions to ensure complete client satisfaction and success.
                </p>
              </div>
            </Col>

            {/* Maintain Section */}
            <Col md={4} className="mb-4">
              <div>
                <div className="d-flex align-items-center">
                  <FaLightbulb size={40} color="#f9a825" className="mb-3 me-3" />
                  <h3 style={{ color: "#f9a825",font:"2.5rem" }}>Custom Solutions</h3>
                </div>
                <p style={{fontSize:"1.2rem"}}>
                  We maintain websites and apps with a commitment to quality,
                  reliability, and proactive management, ensuring they run
                  smoothly and meet ongoing client needs.
                </p>
              </div>
            </Col>

            {/* Grow Section */}
            <Col md={4} className="mb-4">
              <div>
                <div className="d-flex align-items-center">
                  <FaChartLine size={40} color="#f9a825" className="mb-3 me-3" />
                  <h3 style={{ color: "#f9a825",font:"2.5rem" }}>Mobile Apps</h3>
                </div>
                <p style={{fontSize:"1.2rem"}}>
                  We help businesses grow by enhancing their digital presence,
                  optimizing performance, and implementing strategies that drive
                  engagement, conversions, and long-term success.
                </p>
              </div>
            </Col>
            <Col md={4} className="mb-4 ">
              <div>
                <div className="d-flex align-items-center">
                  <FaTools size={40} color="#f9a825" className="mb-3 me-3" />
                  <h3 style={{ color: "#f9a825", font:"2.5rem" }}>
                  UI/UX Design</h3>
                </div>
                <p style={{fontSize:"1.2rem"}}>
                  With a dedicated team, we build exceptional projects, focusing on
                  quality, transparency, efficient management, and innovative
                  solutions to ensure complete client satisfaction and success.
                </p>
              </div>
            </Col>
            <Col md={4} className="mb-4 ">
              <div>
                <div className="d-flex align-items-center">
                  <FaTools size={40} color="#f9a825" className="mb-3 me-3" />
                  <h3 style={{ color: "#f9a825", font:"2.5rem" }}>
                  Online Marketing</h3>
                </div>
                <p style={{fontSize:"1.2rem"}}>
                  With a dedicated team, we build exceptional projects, focusing on
                  quality, transparency, efficient management, and innovative
                  solutions to ensure complete client satisfaction and success.
                </p>
              </div>
            </Col>
            <Col md={4} className="mb-4 ">
              <div>
                <div className="d-flex align-items-center">
                  <FaTools size={40} color="#f9a825" className="mb-3 me-3" />
                  <h3 style={{ color: "#f9a825", font:"2.5rem" }}>
                  Accessibility</h3>
                </div>
                <p style={{fontSize:"1.2rem"}}>
                  With a dedicated team, we build exceptional projects, focusing on
                  quality, transparency, efficient management, and innovative
                  solutions to ensure complete client satisfaction and success.
                </p>
              </div>
            </Col>
          </div>
        </Container>
      </div>
    </>
  )
}
export default Goals