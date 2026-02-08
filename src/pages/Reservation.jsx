import React, { useState } from 'react';
import { FaCheckCircle, FaClipboardCheck, FaRegClock } from 'react-icons/fa';
import './Reservation.css';

const Reservation = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
        notes: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Table Requested for ${formData.name}. We will confirm shortly via SMS/Email.`);
    };

    return (
        <div className="reservation-page">
            <div className="reservation-hero">
                <h1>Reserve Your Table</h1>
                <p>Secure your spot for an unforgettable dining experience</p>
            </div>

            <div className="reservation-content">
                <div className="reservation-info">
                    <h2>Why Reserve With Us?</h2>

                    <div className="reserve-benefit">
                        <div className="benefit-icon"><FaCheckCircle /></div>
                        <div className="benefit-text">
                            <h4>Guaranteed Seating</h4>
                            <p>Skip the wait and enjoy immediate seating at your preferred time.</p>
                        </div>
                    </div>

                    <div className="reserve-benefit">
                        <div className="benefit-icon"><FaCheckCircle /></div>
                        <div className="benefit-text">
                            <h4>Special Occasions</h4>
                            <p>Let us know about birthdays, anniversaries, or celebrations.</p>
                        </div>
                    </div>

                    <div className="reserve-benefit">
                        <div className="benefit-icon"><FaClipboardCheck /></div>
                        <div className="benefit-text">
                            <h4>Dietary Preferences</h4>
                            <p>Inform us of any dietary restrictions or special requests.</p>
                        </div>
                    </div>

                    <div className="reserve-benefit">
                        <div className="benefit-icon"><FaRegClock /></div>
                        <div className="benefit-text">
                            <h4>Flexible Timing</h4>
                            <p>Choose from available time slots that work best for you.</p>
                        </div>
                    </div>

                    <div className="policy-card">
                        <h3>Reservation Policy</h3>
                        <ul>
                            <li>Reservations are held for 15 minutes past the booking time.</li>
                            <li>For parties of 8 or more, please call us directly.</li>
                            <li>Cancellations should be made at least 2 hours in advance.</li>
                            <li>We accommodate dietary restrictions with advance notice.</li>
                        </ul>
                    </div>
                </div>

                <div className="reservation-form-container">
                    <h2>Book Your Table</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="form-label">Full Name *</label>
                            <input
                                type="text"
                                name="name"
                                className="form-field"
                                placeholder="John Doe"
                                required
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-grid-row">
                            <div className="form-group">
                                <label className="form-label">Email *</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="form-field"
                                    placeholder="john@example.com"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Phone *</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    className="form-field"
                                    placeholder="+1 (234) 567-890"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="form-grid-row">
                            <div className="form-group">
                                <label className="form-label">Date *</label>
                                <input
                                    type="date"
                                    name="date"
                                    className="form-field"
                                    required
                                    value={formData.date}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Time *</label>
                                <input
                                    type="time"
                                    name="time"
                                    className="form-field"
                                    required
                                    value={formData.time}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Number of Guests *</label>
                            <select
                                name="guests"
                                className="form-field"
                                value={formData.guests}
                                onChange={handleChange}
                            >
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(num => (
                                    <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                                ))}
                            </select>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Special Requests</label>
                            <textarea
                                name="notes"
                                className="form-field"
                                rows="3"
                                placeholder="Dietary restrictions, allergies, special occasions, seating preferences..."
                                value={formData.notes}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <button type="submit" className="res-btn">Confirm Reservation</button>
                        <span className="form-note">By submitting, you agree to receive confirmation via email and SMS.</span>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Reservation;
