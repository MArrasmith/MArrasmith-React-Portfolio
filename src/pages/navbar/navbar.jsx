import React from 'react';
import './Navbar.css';
import menuBtn from './hamburger-menu.svg';

function Navbar() {
    return (
        <div class="nav-container">
            <div class="nav-name">
                <div>Michael Arrasmith</div>
                <img alt="menu" src={menuBtn} class="menu-btn" />
            </div>
            <div class="nav-links">
                <a href="#home">Home</a>
                <a href="#aboutme">About Me</a>
                <a href="#technologies">Technologies</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#resume">Resume</a>
                <a href="#contact">Contact</a>
            </div>
        </div>
    )
}

export default Navbar