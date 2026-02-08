import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Gallery.css';

const Gallery = () => {
    const [filter, setFilter] = useState('All');
    const galleryRef = useRef(null);

    const filters = ['All', 'Food', 'Ambiance', 'Desserts', 'Drinks', 'Event'];

    const galleryItems = [
        { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=600&auto=format&fit=crop", cat: "Food", title: "Main Dining Area", date: "26/10/2023" },
        { src: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop", cat: "Food", title: "Kitchen", date: "01/12/2023" },
        { src: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?q=80&w=600&auto=format&fit=crop", cat: "Desserts", title: "Dessert Station", date: "14/02/2024" },
        { src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=600&auto=format&fit=crop", cat: "Ambiance", title: "Private Dining Room", date: "20/04/2024" },
        { src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=600&auto=format&fit=crop", cat: "Ambiance", title: "Indoor Seating", date: "15/11/2023" },
        { src: "https://images.unsplash.com/photo-1560624052-449f5ddf0c31?q=80&w=600&auto=format&fit=crop", cat: "Ambiance", title: "Outdoor Patio", date: "05/01/2024" },
        { src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=600&auto=format&fit=crop", cat: "Drinks", title: "Bar Area", date: "08/03/2024" },
        { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=600&auto=format&fit=crop", cat: "Food", title: "Main Dining Area", date: "10/05/2024" },
    ];

    const filteredItems = filter === 'All' ? galleryItems : galleryItems.filter(item => item.cat === filter);

    useEffect(() => {
        if (galleryRef.current) {
            gsap.fromTo(galleryRef.current.children,
                { scale: 0.9, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.5, stagger: 0.05 }
            );
        }
    }, [filter]);

    return (
        <div className="gallery-page">
            <div className="gallery-hero">
                <h1>Gallery</h1>
                <p>A visual journey through our culinary creations and ambiance</p>

                <div className="gallery-filters">
                    {filters.map(f => (
                        <button
                            key={f}
                            className={`gallery-btn ${filter === f ? 'active' : ''}`}
                            onClick={() => setFilter(f)}
                        >
                            {f}
                        </button>
                    ))}
                </div>
            </div>

            <div className="premium-gallery-grid" ref={galleryRef}>
                {filteredItems.map((item, index) => (
                    <div className="gallery-card" key={index}>
                        <img src={item.src} alt={item.title} />
                        <div className="gallery-info">
                            <span style={{ fontSize: '0.7rem', color: '#ff4d6d' }}>📍 {item.title}</span>
                            <h3>{item.title}</h3>
                            <p>📅 {item.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
