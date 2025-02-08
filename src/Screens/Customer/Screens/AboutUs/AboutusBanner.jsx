import React, { useEffect, useState } from "react";
import img from "../../../../Assets/about-banner.webp"

function AboutusBanner() {
    const lines = ["Creating a distinct value", "and polishing brand assets", "from the inside and out_"];
    const [displayedLines, setDisplayedLines] = useState([]);
    const [currentText, setCurrentText] = useState("");
    const [lineIndex, setLineIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        if (lineIndex < lines.length) {
            if (charIndex < lines[lineIndex].length) {
                setTimeout(() => {
                    setCurrentText((prev) => prev + lines[lineIndex][charIndex]);
                    setCharIndex((prev) => prev + 1);
                }, 150);
            } else {
                setTimeout(() => {
                    setDisplayedLines((prev) => [...prev, currentText]); // Add line to displayed list
                    setCurrentText(""); // Reset current text
                    setCharIndex(0);
                    setLineIndex((prev) => prev + 1);
                }, 500);
            }
        } else {
            setTimeout(() => {
                setDisplayedLines([]);
                setCurrentText("");
                setLineIndex(0);
                setCharIndex(0);
            }, 2000); // Delay before restarting
        }
    }, [charIndex, lineIndex, currentText]);
    return (
        <>
            <div className="hero-section">
                <div className="hero-text-section d-flex .mt-5">
                    <div className="hero-flex">
                        <div className="hero-text">
                            <h4>About Us</h4>
                            {displayedLines.map((line, index) => (
                                <h2 key={index} className="animated-text">{line}</h2>
                            ))}
                            <h1 className="animated-text">{currentText}</h1>
                        </div>
                        <div className="hero-image">
                            <img src={img} alt="Laptop Mockup" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="exprince-section">
            <div className=" container  text-center w-100 " style={{backgroundColor:"#222", color:"white"}}>
                <div className="row pt-4 pb-4">
                    <div className="col-md-3 col-sm-6">
                        <h2>100+</h2>
                        <h4>EMPLOYEES</h4>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h2>4</h2>
                        <h4>LOCATIONS</h4>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h2>11+</h2>
                        <h4>YEARS</h4>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h2>300+</h2>
                        <h4>CUSTOMERS</h4>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}
export default AboutusBanner