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
               <div className=" caruosel-wd d-flex mt-4 mb-4 align-items-center"style={{width:"90%"}}>
               <div className="text">
                    <h4>Trusted by Hundreds of Partners</h4>
                </div>
                <div className="carousel d-flex w-100 ">
                    <marquee behavior="smooth" direction="left" className="d-flex ">
                        <div className="d-flex w">
                            {partners.map((itm) => (
                                <div className="partner-logos d-flex w-75" style={{marginRight:"10px"}}>
                                    <img src={itm.img} alt="Dd" className="partner-logo w-100" />
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
