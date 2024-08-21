// src/components/HeroSection.js
import React from 'react';


const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="content">
                <div className="greeting">
                    <span style={{fontSize:'22px' }} >👋 Hi There! I'm Aldino</span>
                </div>
                <h2>A <span>Backend Engineer</span> I Help Startups <span>Launch</span> And Grow Their <span>Products</span> </h2>
                <p style={{fontSize:'26px', fontFamily: 'wwDigital, sans-serif' }}>
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
