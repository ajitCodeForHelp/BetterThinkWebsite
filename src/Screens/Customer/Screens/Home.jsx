import React, { useEffect } from "react";
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
    useEffect(() => {
        const sketch = new Sketch();
    }, []);
    return (
        <>
            <div id="main">
                <div className="contentt" data-content>
                    <Navbar />
                    <HeroSection />
                    <PartnerCarousel />
                    <WorkOverview />
                    <ServicesSection />
                    <Goals />
                    <Slider />
                    <Layer />
                    <ClientReviewsCarousel />
                    <Footer />
                </div>
                <div className="scroll" data-scroll></div>
            </div>

        </>
    )
}
export default Home