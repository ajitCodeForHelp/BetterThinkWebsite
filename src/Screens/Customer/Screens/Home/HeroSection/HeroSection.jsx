import React, { useEffect, useState } from "react";
import img from "../../../../../Assets/laptop.svg"

function HeroSection() {
    const lines = ["we dream", "we design", "we develop", "we deliver_"];
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
                            {displayedLines.map((line, index) => (
                                <h1 key={index} className="animated-text">{line}</h1>
                            ))}
                            <h1 className="animated-text">{currentText}</h1>
                        </div>

                        {/* Right Side: Image */}
                        <div className="hero-image">
                            <img src={img} alt="Laptop Mockup" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero-section-b pt-5">
                <h1 className="d-flex inline">
                    Globally recognized full service eCommerce agency.
                    We help brands grow.
                </h1>
            </div>
        </>
    )
}
export default HeroSection