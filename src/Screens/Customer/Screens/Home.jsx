import React, { useEffect } from "react";
import Navbar from "../CommonComponent/Navbar";
import HeroSection from "./HeroSection/HeroSection";
import PartnerCarousel from "./Carousel/PartnerCarousel";
import WorkOverview from "./WorkOverview/WorkOverview";
import Goals from "./Goal/Goals";
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
                    <Goals />
                    <Slider />
                    <Layer />
                </div>
                <div className="scroll" data-scroll></div>
            </div>
        </>
    )
}
export default Home