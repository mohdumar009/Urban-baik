import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    Urban <span>Baik</span>
                </Link>
                <div className="menu-icon" onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
                <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <NavLink to="/" className="nav-links" onClick={toggleMenu}>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/menu" className="nav-links" onClick={toggleMenu}>Menu</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" className="nav-links" onClick={toggleMenu}>About Us</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/gallery" className="nav-links" onClick={toggleMenu}>Gallery</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" className="nav-links" onClick={toggleMenu}>Contact</NavLink>
                    </li>
                    <li className="nav-btn">
                        <Link to="/reservation" className="btn-primary" onClick={toggleMenu}>Reserve Table</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
