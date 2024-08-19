// src/components/HeroSection.js
import React from 'react';


const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="content">
                <div className="greeting">
                    <span >👋 Hi There! I'm Aldino</span>
                </div>
                <h1>A <span>Backend Engineer</span> I Help Startups Launch And Grow Their Products</h1>
                <p style={{ fontFamily: 'wwDigital, sans-serif' }}>
                    Over 3yrs+ of professional experience working with several programming tools to deliver quality results to clients. 
                    I have expert knowledge in frontend engineering, software testing, and web3 development.
                </p>
            </div>
            <div className="avatar">
                {/* Add the avatar image here */}
            </div>
        </section>
    );
};

export default HeroSection;
