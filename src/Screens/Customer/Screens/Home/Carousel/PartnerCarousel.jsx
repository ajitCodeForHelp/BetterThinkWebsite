import React from "react";
import img from "../../../../../Assets/pearson.png"
function PartnerCarousel() {

    const partners = [
        { img: img, alt: "Google Cloud" },
        { img: img, alt: "Google Partner" },
        { img: img, alt: "Azure" },
        { img: img, alt: "AWS" },
        { img: img, alt: "HubSpot" },
        { img: img, alt: "IAAP" }
    ];

    return (
        <>
            <div className="partner-carousel d-flex justify-content-end ">
               <div className=" d-flex mt-4 mb-4 align-items-center"style={{width:"90%"}}>
               <div className="text">
                    <h4>Trusted by Hundreds of Partners</h4>
                </div>
                <div className="carousel d-flex w-100 ">
                    <marquee behavior="smooth" direction="left" className="d-flex ">
                        <div className="d-flex">
                            {partners.map((itm) => (
                                <div className="partner-logos d-flex">
                                    <img src={itm.img} alt="Dd" className="partner-logo w-75 p-3" />
                                </div>
                            ))}
                        </div>
                    </marquee>
                </div>
               </div>
            </div>
        </>
    );
}

export default PartnerCarousel;
