import React, { useEffect, useRef } from "react";
import Navbar from "../CommonComponent/Navbar";
import HeroSection from "./Home/HeroSection/HeroSection";
import WorkOverview from "./Home/WorkOverview/WorkOverview";
import Goals from "./Home/Goal/Goals";
import ClientReviewsCarousel from "./Home/ClientReviewsCarousel/ClientReviewsCarousel";
import ServicesSection from "./Home/ServicesSection/ServicesSection";
import Footer from "../CommonComponent/Footer";

const Home = () => {
    const sectionsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show"); // Add class when visible
                    } else {
                        entry.target.classList.remove("show"); // Remove class when not visible
                    }
                });
            },
            { threshold: 0.1 } // Adjust threshold for better responsiveness
        );

        sectionsRef.current.forEach((section) => {
            if (section) observer.observe(section);
        });

        // Cleanup the observer on unmount
        return () => {
            sectionsRef.current.forEach((section) => {
                if (section) observer.unobserve(section);
            });
        };
    }, []);

    return (
        <>

            <Navbar />

            {/* Add ref to each section */}
            <div ref={(el) => (sectionsRef.current[0] = el)} className="fade-in">
                <HeroSection />
            </div>



            {/* <div ref={(el) => (sectionsRef.current[1] = el)} className="fade-in">
                <PartnerCarousel />
            </div> */}

            <div ref={(el) => (sectionsRef.current[2] = el)} className="fade-in">
                <WorkOverview />
            </div>

            <div ref={(el) => (sectionsRef.current[3] = el)} className="fade-in">
                <ServicesSection />
            </div>

            <div ref={(el) => (sectionsRef.current[4] = el)} className="fade-in">
                <Goals />
            </div>

            <div ref={(el) => (sectionsRef.current[5] = el)} className="fade-in">
                <ClientReviewsCarousel />
            </div>

            <Footer />
        </>
    );
};

export default Home;



