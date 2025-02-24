import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the CSS file

const Header = () => {
    return (
        <header>
            <h1>My Resume Website</h1>
            <nav>
                <ul className="nav-list">
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/experience">Experience</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;