import React from "react";
import Navbar from "../CommonComponent/Navbar";
import HeroSection from "./HeroSection/HeroSection";
import PartnerCarousel from "./Carousel/PartnerCarousel";
import WorkOverview from "./WorkOverview/WorkOverview";
import Goals from "./Goal/Goals";

function Home (){
    return(
        <>
        <Navbar/>
        <HeroSection/>
        <PartnerCarousel/>
        <WorkOverview/>
        <Goals/>
        </>
    )
}
export default Home