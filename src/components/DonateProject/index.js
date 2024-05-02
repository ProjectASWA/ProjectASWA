import React, { useEffect } from 'react';
import './index.css'

function ScrollingNumberTransition() {
    useEffect(() => {
        const sections = document.querySelectorAll('.number-section');
        window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;

            // Calculate the position to switch between sections
            const switchPositions = Array.from(sections).map(section => section.offsetTop - (windowHeight / 2));

            // Find the active section
            let activeSectionIndex = switchPositions.findIndex(position => scrollPosition < position);
            if (activeSectionIndex === -1) {
                activeSectionIndex = switchPositions.length; // If not found, set to last section
            }

            // Update background color
            sections.forEach((section, index) => {
                section.style.backgroundColor = (index === activeSectionIndex - 1) ? '#83D816' : 'white';
            });
        });
    }, []);

    return (
        <div className="main-body-container">
            <div className="arrange-container-numbers">
                <div className="arrange-column-wise">
                    <span className="number-section" id="section1">1</span>
                    <hr className="horizontalLine" />
                </div>
                <h1>Hello World</h1>
            </div>
            <div className="arrange-container-numbers">
                <div className="arrange-column-wise">
                    <span className="number-section" id="section2">2</span>
                    <hr className="horizontalLine" />
                </div>
                <h1>Hello World</h1>
            </div>
            <div className="arrange-container-numbers">
                <div className="arrange-column-wise">
                    <span className="number-section" id="section3">3</span>
                    <hr className="horizontalLine" />
                </div>
                <h1>Hello World</h1>
            </div>
            <div className="arrange-container-numbers">
                <div className="arrange-column-wise">
                    <span className="number-section" id="section4">4</span>
                    <hr className="horizontalLine" />
                </div>
                <h1>Hello World</h1>
            </div>
        </div>
    );
}

export default ScrollingNumberTransition;
