
import React, { useState } from 'react';
import './Navbar.css';
import Typewriter from "typewriter-effect";

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleToggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
            <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Welcome to VIP School")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("Education is the Most Powerfull Weapon")
                      .deleteAll()
                      .typeString("Learning Never Ends")
                      .deleteAll()
                      .typeString("Education is the Most Powerfull Weapon")
                      .start();
                  }}
                />
            </div>
            <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/services">Academics</a>
                <a href="/contact">Our Infrastructure</a>
                <a href="/contact">Gallary</a>
                <a href="/contact">Contact</a>
                <button>Admission</button>
            </div>
            <div className="navbar-toggle" onClick={handleToggleMenu}>
                ☰
            </div>
        </nav>
    );
};

export default Navbar;


