import React from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <motion.div className="logo" whileHover={{ scale: 1.1 }}>
                <h1>Freelance Marketplace</h1>
            </motion.div>
            <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    );
};

export default Navbar;