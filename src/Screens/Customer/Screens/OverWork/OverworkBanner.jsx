import React, { useEffect, useState } from "react";
import img from "../../../../Assets/overwork-banner.webp"

function OverworkBanner() {
    const lines = ["Crafted With Love", "Built With Passion_"];
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
                            <h4>Portfolio</h4>
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
        </>
    )
}
export default OverworkBanner