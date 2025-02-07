import React, { useEffect, useRef } from "react";
import Navbar from "../CommonComponent/Navbar";
import HeroSection from "./Home/HeroSection/HeroSection";
import PartnerCarousel from "./Home/Carousel/PartnerCarousel";
import WorkOverview from "./Home/WorkOverview/WorkOverview";
import Goals from "./Home/Goal/Goals";
import ClientReviewsCarousel from "./Home/ClientReviewsCarousel/ClientReviewsCarousel";
import ServicesSection from "./Home/ServicesSection/ServicesSection";
import Footer from "../CommonComponent/Footer";
import Sketch from "../../../Utilities/Sketch";
import Slider from "../CommonComponent/SliderUi";
import "../CommonComponent/Style.scss";
import Layer from "../CommonComponent/TextLayer";

function Home() {
    const contentRef = useRef(null);
    const scrollRef = useRef(null);
    useEffect(() => {
        const updateScrollHeight = () => {
            if (contentRef.current && scrollRef.current) {
                scrollRef.current.style.height = `${contentRef.current.clientHeight}px`;
            }
        };

        // Call the function on mount to set the initial height.
        updateScrollHeight();

        // Add event listener for window resize.
        window.addEventListener('resize', updateScrollHeight);

        // Remove the event listener on cleanup.
        return () => {
            window.removeEventListener('resize', updateScrollHeight);
        };
    }, []);
    useEffect(() => {
        const sketch = new Sketch();
    }, []);
    return (
        <>
            <div id="main">
                <div ref={contentRef} className="contentt" data-content>
                    <Navbar />
                    <HeroSection />
                    <PartnerCarousel />
                    <WorkOverview />
                    <Slider />
                    <ServicesSection />
                    <Goals />
                    <ClientReviewsCarousel />
                    <Layer />
                    <Footer />
                </div>
                <div ref={scrollRef} className="scroll" data-scroll></div>
            </div>

        </>
    )
}
export default Home