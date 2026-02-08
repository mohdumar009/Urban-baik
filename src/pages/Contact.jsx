import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaWhatsapp, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message Sent! Thank you for contacting Urban Baik.");
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    return (
        <div className="contact-page">
            <div className="contact-hero">
                <h1>Get In Touch</h1>
                <p>We'd love to hear from you. Reach out for reservations, inquiries, or feedback</p>
            </div>

            <div className="contact-layout">
                <div className="contact-info-panel">
                    <h2>Contact Information</h2>

                    <div className="info-group">
                        <div className="icon-box"><FaMapMarkerAlt /></div>
                        <div className="info-text">
                            <h3>Address</h3>
                            <p>123 Urban Street, Downtown District</p>
                            <p>City 12345, State</p>
                        </div>
                    </div>

                    <div className="info-group">
                        <div className="icon-box"><FaPhoneAlt /></div>
                        <div className="info-text">
                            <h3>Phone</h3>
                            <p>+1 (234) 567-890</p>
                        </div>
                    </div>

                    <div className="info-group">
                        <div className="icon-box"><FaEnvelope /></div>
                        <div className="info-text">
                            <h3>Email</h3>
                            <p>info@urbanbaik.com</p>
                        </div>
                    </div>

                    <div className="info-group">
                        <div className="icon-box"><FaClock /></div>
                        <div className="info-text">
                            <h3>Opening Hours</h3>
                            <p>Monday - Friday: 11:00 AM - 10:00 PM</p>
                            <p>Saturday - Sunday: 10:00 AM - 11:00 PM</p>
                        </div>
                    </div>

                    <div className="quick-contact">
                        <h4>Quick Contact</h4>
                        <p>For immediate assistance, reach us via WhatsApp</p>
                        <button className="whatsapp-btn">
                            <FaWhatsapp style={{ marginRight: '8px' }} /> Chat on WhatsApp
                        </button>
                    </div>
                </div>

                <div className="contact-form-panel">
                    <h2>Send Us a Message</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="form-label">Your Name *</label>
                            <input
                                type="text"
                                name="name"
                                className="form-field"
                                placeholder="John Doe"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Email Address *</label>
                            <input
                                type="email"
                                name="email"
                                className="form-field"
                                placeholder="john@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Phone Number</label>
                            <input
                                type="tel"
                                name="phone"
                                className="form-field"
                                placeholder="+1 (234) 567-890"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Message *</label>
                            <textarea
                                name="message"
                                className="form-field"
                                rows="5"
                                placeholder="Tell us how we can help you..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="btn-send">
                            <FaPaperPlane style={{ marginRight: '8px' }} /> Send Message
                        </button>
                    </form>
                </div>
            </div>

            <div className="map-container">
                {/* Placeholder Map */}
                <div style={{ width: '100%', height: '100%', background: '#222', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <h3 style={{ color: '#666' }}>Find Us Here</h3>
                    <p style={{ color: '#444', marginTop: '10px', fontSize: '0.9rem' }}>Visit us at our location in the heart of the city</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
