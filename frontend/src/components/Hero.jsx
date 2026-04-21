import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-content">
                <h1 className="hero-title">Welcome to Our Freelance Marketplace</h1>
                <p className="hero-statistics">Join over 10,000 freelancers and clients!</p>
                <div className="hero-buttons">
                    <button className="hero-button">Get Started</button>
                    <button className="hero-button">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;