import React from 'react';
import { FaWhatsapp, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-col">
                    <h3>Urban <span>Baik</span></h3>
                    <p>Where culinary excellence meets family warmth. Experience the finest dining in a welcoming atmosphere.</p>
                    <div className="social-icons">
                        <a href="#"><FaFacebook /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaTwitter /></a>
                    </div>
                </div>
                <div className="footer-col">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/menu">Menu</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/gallery">Gallery</a></li>
                        <li><a href="/reservation">Reservations</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Contact Info</h4>
                    <p>📍 Kamboh ka pul near Nishat stdio, District-Saharanpur, City-Saharanpur 247001</p>
                    <p>📞 +91 (886) 593-1131</p>
                    <p>✉️ info@urbanbaik.com</p>
                </div>
                <div className="footer-col">
                    <h4>Opening Hours</h4>
                    <p>🕕 Monday - Friday: 11:00 AM - 10:00 PM</p>
                    <p>🕕 Saturday - Sunday: 10:00 AM - 11:00 PM</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Urban Baik Family Restaurant. All rights reserved.</p>
            </div>
            <a href="https://wa.me/1234567890" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
            </a>
        </footer>
    );
};

export default Footer;
