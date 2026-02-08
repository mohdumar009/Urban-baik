import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaHeart, FaUsers, FaAward, FaSeedling } from 'react-icons/fa';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const storyRef = useRef(null);
    const valuesRef = useRef(null);

    useEffect(() => {
        // Hero
        gsap.fromTo('.about-hero h1', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 0.3 });

        // Story
        gsap.fromTo('.story-text',
            { x: -50, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, scrollTrigger: { trigger: '.about-section', start: 'top 75%' } }
        );
        gsap.fromTo('.story-img',
            { x: 50, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, scrollTrigger: { trigger: '.about-section', start: 'top 75%' } }
        );

        // Values
        gsap.fromTo('.value-card',
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, scrollTrigger: { trigger: '.values-section', start: 'top 75%' } }
        );

    }, []);

    return (
        <div className="about-page">
            <div className="about-hero">
                <div>
                    <h1>Our Story</h1>
                    <p>A journey of culinary passion and family tradition</p>
                </div>
            </div>

            <section className="about-section">
                <div className="story-grid">
                    <div className="story-text" ref={storyRef}>
                        <h2>Where It All Began</h2>
                        <p>
                            Urban Baik Family Restaurant was born from a simple dream: to create a place where exceptional food meets genuine hospitality.
                            Founded in 2010, our restaurant has become a beloved destination for families seeking memorable dining experiences.
                        </p>
                        <p>
                            Our name "Baik" means "good" in Indonesian, reflecting our commitment to goodness in every aspect – from the quality of our ingredients to the warmth of our service.
                            We believe that great food has the power to bring people together and create lasting memories.
                        </p>
                        <p>
                            Over the years, we've stayed true to our roots while continuously evolving our menu to incorporate diverse flavors and contemporary techniques.
                            Each dish tells a story, and every meal is an opportunity to share our passion with you.
                        </p>
                    </div>
                    <div className="story-img">
                        <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop" alt="Restaurant Interior" />
                    </div>
                </div>
            </section>

            <section className="values-section">
                <h2 style={{ color: '#fff', fontSize: '3rem' }}>Our Values</h2>
                <p style={{ color: '#aaa' }}>The principles that guide everything we do</p>
                <div className="values-grid" ref={valuesRef}>
                    <div className="value-card">
                        <FaHeart className="value-icon" />
                        <h3>Passion for Food</h3>
                        <p>Every dish is crafted with love and dedication to culinary excellence.</p>
                    </div>
                    <div className="value-card">
                        <FaUsers className="value-icon" />
                        <h3>Family First</h3>
                        <p>Creating a warm, welcoming atmosphere where families feel at home.</p>
                    </div>
                    <div className="value-card">
                        <FaAward className="value-icon" />
                        <h3>Quality Ingredients</h3>
                        <p>We source only the finest, freshest ingredients for our dishes.</p>
                    </div>
                    <div className="value-card">
                        <FaSeedling className="value-icon" />
                        <h3>Expert Chefs</h3>
                        <p>Our talented team brings years of culinary expertise to every plate.</p>
                    </div>
                </div>
            </section>

            <section className="team-section">
                <h2 style={{ color: '#fff', fontSize: '3rem' }}>Meet Our Team</h2>
                <p style={{ color: '#aaa' }}>The talented individuals behind your exceptional dining experience</p>
                <div className="team-grid">
                    <div className="team-card">
                        <img src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=600&auto=format&fit=crop" alt="Chef Antoine" className="team-img" />
                        <div className="team-info">
                            <h3>Chef Antoine Dubois</h3>
                            <span className="team-role">Head Chef</span>
                            <p className="team-desc">Specialty: Modern French Cuisine</p>
                            <p style={{ color: '#999', fontSize: '0.85rem', marginTop: '0.5rem' }}>With over 20 years of experience in Michelin-starred kitchens across Europe, Chef Dubois brings a passion for classic French techniques blended with modern culinary innovation. His philosophy centers on fresh, seasonal ingredients.</p>
                        </div>
                    </div>
                    <div className="team-card">
                        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop" alt="Maria Rodriguez" className="team-img" />
                        <div className="team-info">
                            <h3>Maria Rodriguez</h3>
                            <span className="team-role">Restaurant Manager</span>
                            <p className="team-desc">Specialty: Guest Experience & Operations Management</p>
                            <p style={{ color: '#999', fontSize: '0.85rem', marginTop: '0.5rem' }}>Maria oversees all front-of-house operations, ensuring every guest enjoys an impeccable dining experience. Her warm demeanor and exceptional organizational skills keep the restaurant running smoothly.</p>
                        </div>
                    </div>
                    <div className="team-card">
                        <img src="https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?q=80&w=600&auto=format&fit=crop" alt="Chef Isabella" className="team-img" />
                        <div className="team-info">
                            <h3>Chef Isabella Rossi</h3>
                            <span className="team-role">Pastry Chef</span>
                            <p className="team-desc">Specialty: Artisan Pastries & Desserts</p>
                            <p style={{ color: '#999', fontSize: '0.85rem', marginTop: '0.5rem' }}>Isabella's creations are a delightful blend of art and flavor. Trained in Italy, she specializes in exquisite desserts that provide a perfect conclusion to any meal, from delicate tarts to rich chocolate masterpieces.</p>
                        </div>
                    </div>
                    <div className="team-card">
                        <img src="https://images.unsplash.com/photo-1556157382-97eda2d6229b?q=80&w=600&auto=format&fit=crop" alt="Kenji Tanaka" className="team-img" />
                        <div className="team-info">
                            <h3>Kenji Tanaka</h3>
                            <span className="team-role">Sommelier</span>
                            <p className="team-desc">Specialty: Wine Pairing & Cellar Management</p>
                            <p style={{ color: '#999', fontSize: '0.85rem', marginTop: '0.5rem' }}>Kenji's extensive knowledge of wines from around the world allows him to expertly pair the perfect vintage with each dish. He is dedicated to guiding guests through our curated wine list to enhance their culinary journey.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
