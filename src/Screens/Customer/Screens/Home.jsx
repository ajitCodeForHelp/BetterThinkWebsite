import React from "react";
import Navbar from "../CommonComponent/Navbar";
import HeroSection from "./Home/HeroSection/HeroSection";
import PartnerCarousel from "./Home/Carousel/PartnerCarousel";
import WorkOverview from "./Home/WorkOverview/WorkOverview";
import Goals from "./Home/Goal/Goals";
import ClientReviewsCarousel from "./Home/ClientReviewsCarousel/ClientReviewsCarousel";
import ServicesSection from "./Home/ServicesSection/ServicesSection";
import Footer from "../CommonComponent/Footer";

function Home (){
    return(
        <>
        <Navbar/>
        <HeroSection/>
        <PartnerCarousel/>
        <WorkOverview/>
        <ServicesSection/>
        <Goals/>
        <ClientReviewsCarousel/>
      
        <Footer/>
        </>
    )
}
export default Home