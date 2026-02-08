import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaUtensils, FaClock, FaStar, FaQuoteLeft, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import './Home.css';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const heroRef = useRef(null);
    const artRef = useRef(null);
    const offerRef = useRef(null);
    const selectionRef = useRef(null);

    useEffect(() => {
        // Hero Animation
        const tl = gsap.timeline();
        tl.fromTo('.hero-subtitle', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, delay: 0.3 })
            .fromTo('.hero-title', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.6")
            .fromTo('.hero-desc', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.6")
            .fromTo('.cta-group', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.4");

        // Art Section
        gsap.fromTo('.art-text',
            { x: -50, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, scrollTrigger: { trigger: '.art-dining', start: 'top 80%' } }
        );
        gsap.fromTo('.art-image',
            { x: 50, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, scrollTrigger: { trigger: '.art-dining', start: 'top 80%' } }
        );

        // Offers
        gsap.fromTo('.offer-card',
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, scrollTrigger: { trigger: '.seasonal-offers', start: 'top 75%' } }
        );

        // Selection
        gsap.fromTo('.selection-item',
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, scrollTrigger: { trigger: '.chefs-selection', start: 'top 75%' } }
        );

    }, []);

    const chefSelection = [
        { id: 1, name: "Margherita Pizza", price: "₹1,190", desc: "Tomato, mozzarella, basil", img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=600&auto=format&fit=crop" },
        { id: 2, name: "Pepperoni Pizza", price: "₹1,360", desc: "Spicy pepperoni, cheese", img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=600&auto=format&fit=crop" },
        { id: 3, name: "Classic Beef Burger", price: "₹1,275", desc: "Angus beef, cheddar", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop" },
        { id: 4, name: "Spicy Chicken Burger", price: "₹1,190", desc: "Fried chicken, spicy sauce", img: "https://images.unsplash.com/photo-1615297928064-24977384d0f9?q=80&w=600&auto=format&fit=crop" },
        { id: 5, name: "Club Sandwich", price: "₹1,020", desc: "Turkey, bacon, lettuce", img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=600&auto=format&fit=crop" },
        { id: 6, name: "Grilled Halloumi Sandwich", price: "₹1,105", desc: "Halloumi, roasted peppers", img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=600&auto=format&fit=crop" }, // Reuse for now
    ];

    return (
        <div className="home-container">
            {/* Hero Section */}
            <section className="hero" ref={heroRef}>
                <div className="hero-content">
                    <span className="hero-subtitle">Urban Baik</span>
                    <h1 className="hero-title">Family Restaurant</h1>
                    <p className="hero-desc">
                        Where culinary excellence meets the warmth of family traditions.
                        Experience a symphony of flavors in an atmosphere of refined elegance.
                    </p>
                    <div className="cta-group">
                        <Link to="/reservation" className="btn-gold">Reserve Table</Link>
                        <Link to="/menu" className="btn-outline">Explore Menu</Link>
                    </div>
                </div>
            </section>

            {/* Intro Section - Art of Dining */}
            <section className="art-dining">
                <div className="art-container">
                    <div className="art-text" ref={artRef}>
                        <h2>The Art of</h2>
                        <span className="gold-text">Modern Dining</span>
                        <p>
                            At Urban Baik, we believe that dining is not just about sustenance, but about connection.
                            Our philosophy is rooted in the belief that every meal tells a story.
                        </p>
                        <p>
                            Every dish is a masterpiece, crafted with passion and served with pride.
                            From our kitchen to your table, we bring you an experience to remember.
                        </p>
                        <div className="stat-row">
                            <div className="stat">
                                <h4>15+</h4>
                                <p>Years Experience</p>
                            </div>
                            <div className="stat">
                                <h4>20+</h4>
                                <p>Master Chefs</p>
                            </div>
                        </div>
                    </div>
                    <div className="art-image">

                        <img src="public\chef.png" alt="Chef Plating" />

                    </div>
                </div>
            </section>

            {/* Seasonal Offers */}
            <section className="seasonal-offers">
                <div className="section-header-left">
                    <span className="subtitle">Specials</span>
                    <h2 className="title-large">Seasonal Offers</h2>
                </div>
                <div className="offers-grid" ref={offerRef}>
                    <div className="offer-card">
                        <img src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=800&auto=format&fit=crop" alt="Breakfast" />
                        <div className="offer-overlay">
                            <h3>Weekend Brunch Bonanza</h3>
                            <p>Enjoy our exclusive weekend buffet with unlimited coffee.</p>
                        </div>
                    </div>
                    <div className="offer-card">
                        <img src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop" alt="Steak Deal" />
                        <div className="offer-overlay">
                            <h3>Midweek Dinner Deal</h3>
                            <p>20% off on all main courses every Wednesday.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Chef's Selection */}
            <section className="chefs-selection">
                <div className="selection-container">
                    <div className="selection-text">
                        <span className="subtitle">The Menu</span>
                        <h2>Chef's Selection</h2>
                        <p style={{ color: '#888', marginTop: '1rem' }}>
                            Our chef's recommendations for the season.
                            Curated to perfection.
                        </p>
                        <Link to="/menu" className="btn-outline" style={{ borderColor: '#D4AF37', color: '#D4AF37', marginTop: '2rem', display: 'inline-block' }}>View Full Menu</Link>
                    </div>
                    <div className="selection-grid" ref={selectionRef}>
                        {chefSelection.map((item) => (
                            <div key={item.id} className="selection-item">
                                <img src={item.img} alt={item.name} />
                                <div className="selection-details">
                                    <div className="dish-name">
                                        <h4>{item.name}</h4>
                                        <span className="dish-price">{item.price}</span>
                                    </div>
                                    <p className="dish-desc">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Guest Experiences */}
            <section className="guest-experiences">
                <FaStar style={{ color: '#D4AF37', fontSize: '1.5rem' }} />
                <h2 className="title-large" style={{ marginTop: '1rem' }}>Guest Experiences</h2>
                <div className="reviews-grid">
                    <div className="review-card-modern">
                        <p className="review-text">"The ambiance is unmatched. A perfect place for family gatherings. The staff made us feel like royalty."</p>
                        <div className="reviewer-info">
                            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" className="reviewer-img" />
                            <div className="reviewer-name">
                                <h5>Robert Boyle</h5>
                                <span>Food Critic</span>
                            </div>
                        </div>
                    </div>
                    <div className="review-card-modern">
                        <p className="review-text">"Every bite was a flavor explosion. The Tiramisu is a must-try. Highly recommended!"</p>
                        <div className="reviewer-info">
                            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" className="reviewer-img" />
                            <div className="reviewer-name">
                                <h5>Sarah Jenkins</h5>
                                <span>Loyal Customer</span>
                            </div>
                        </div>
                    </div>
                    <div className="review-card-modern">
                        <p className="review-text">"Service was impeccable and the wine list is extensive. Will definitely be returning soon."</p>
                        <div className="reviewer-info">
                            <img src="https://randomuser.me/api/portraits/men/85.jpg" alt="User" className="reviewer-img" />
                            <div className="reviewer-name">
                                <h5>Michael Chen</h5>
                                <span>Food Blogger</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reserve Footer */}
            <section className="reserve-footer">
                <div className="reserve-content">
                    <div className="reserve-text">
                        <h2 className="title-large">Reserve Your Experience</h2>
                        <p>Book a table fast and easily. We look forward to hosting you.</p>
                        <Link to="/reservation" className="btn-gold" style={{ marginTop: '2rem', display: 'inline-block' }}>Book A Table</Link>
                    </div>
                    <div className="reserve-info">
                        <div className="info-row">
                            <FaMapMarkerAlt className="info-icon" />
                            <div style={{ color: '#fff' }}>
                                <strong>Location</strong><br />
                                <span style={{ color: '#aaa', fontSize: '0.9rem' }}>123 Culinary Street, Food District</span>
                            </div>
                        </div>
                        <div className="info-row">
                            <FaPhone className="info-icon" />
                            <div style={{ color: '#fff' }}>
                                <strong>Contact</strong><br />
                                <span style={{ color: '#aaa', fontSize: '0.9rem' }}>+91 (886) 593-1131</span>
                            </div>
                        </div>
                        <div className="info-row">
                            <FaClock className="info-icon" />
                            <div style={{ color: '#fff' }}>
                                <strong>Open</strong><br />
                                <span style={{ color: '#aaa', fontSize: '0.9rem' }}>11:00 AM - 11:00 PM</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
