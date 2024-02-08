import { useState, useEffect } from 'react';
import './Navbar.css';
import menuBtn from "./menu.svg";


function Navbar() {
    const [showLinks, setShowLinks] = useState(true);
    const [showBtn, setShowBtn] = useState(false);
//adds a click event to the menu button to show the links
    const handleClick = () => setShowLinks(!showLinks);
//adds a resize event to the window to show the links if the window is larger than 768px
    window.addEventListener("resize", (e) => {
        if (e.target.innerWidth > 768) {
            setShowBtn(false);
            setShowLinks(true);
        } else {
            setShowBtn(true);
            setShowLinks(false);
        }
    })
//checks the window size on load to determine if the links should be shown or not
    useEffect(() => {
        if (window.innerWidth > 768) {
            setShowBtn(false);
            setShowLinks(true);
        } else {
            setShowBtn(true);
            setShowLinks(false);
        }
    },[]);
//returns the navbar with the menu button and links
    return (
        <div class="nav-container">
            <div class="nav-name">
                <div>Michael Arrasmith</div>
                {showBtn && (
                    <img alt="menu" src={menuBtn} onClick={handleClick}/>
                )}
            </div>
            {showLinks && (
                <div class="nav-links">
                    <a href="#about">About Me</a>
                    <a href="#technologies">Technologies</a>
                    <a href="#portfolio">Portfolio</a>
                    <a href="#resume">Resume</a>
                    <a href="#contact">Contact</a>
                </div>
            )}
        </div>
    )
}

export default Navbar