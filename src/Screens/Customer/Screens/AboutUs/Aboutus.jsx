import React, { useEffect, useRef } from "react";
import Navbar from "../../CommonComponent/Navbar";
import Footer from "../../CommonComponent/Footer";
import AboutusBanner from "./AboutusBanner";

function Aboutus (){
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
    return(
        <>
        <Navbar/>
        <div ref={(el) => (sectionsRef.current[1] = el)} className="fade-in">
        <AboutusBanner/>
        </div>
        <Footer/>

        </>
    )
}
export default Aboutus