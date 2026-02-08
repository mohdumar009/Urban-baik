import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Menu.css';

const Menu = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const menuGridRef = useRef(null);

    const categories = ['All', 'Starters', 'Main Course', 'Desserts', 'Drinks'];

    const menuItems = [
        {
            id: 1,
            category: 'Starters',
            name: "Bruschetta",
            price: "$8.50",
            desc: "Toasted artisan bread topped with vine-ripened tomatoes, fresh basil, garlic, and extra virgin olive oil.",
            img: "https://images.unsplash.com/photo-1572695157363-bc31c50556e0?q=80&w=600&auto=format&fit=crop",
            tags: ["Vegetarian", "Classic"]
        },
        {
            id: 2,
            category: 'Starters',
            name: "Calamari Fritti",
            price: "$12.00",
            desc: "Crispy fried squid rings dusted with seasoned flour, served with our signature spicy marinara sauce.",
            img: "https://images.unsplash.com/photo-1604909052743-94e838986d24?q=80&w=600&auto=format&fit=crop",
            tags: ["Seafood", "Popular"]
        },
        {
            id: 3,
            category: 'Main Course',
            name: "Grilled Ribeye Steak",
            price: "$28.00",
            desc: "Prime 12oz ribeye steak, grilled to your preference, served with truffle mashed potatoes and roasted asparagus.",
            img: "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=600&auto=format&fit=crop",
            tags: ["Meat", "Chef's Choice"]
        },
        {
            id: 4,
            category: 'Main Course',
            name: "Chicken Alfredo",
            price: "$18.50",
            desc: "Creamy fettuccine pasta tossed with grilled chicken breast, garlic, and authentic parmesan cheese.",
            img: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?q=80&w=600&auto=format&fit=crop",
            tags: ["Pasta", "Comfort Food"]
        },
        {
            id: 5,
            category: 'Main Course',
            name: "Margherita Pizza",
            price: "$14.00",
            desc: "Traditional Neapolitan pizza with San Marzano tomato sauce, fresh mozzarella di bufala, and basil.",
            img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=600&auto=format&fit=crop",
            tags: ["Vegetarian", "Pizza"]
        },
        {
            id: 6,
            category: 'Desserts',
            name: "Tiramisu",
            price: "$9.00",
            desc: "Classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cream, dusted with cocoa.",
            img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=600&auto=format&fit=crop",
            tags: ["Sweet", "Classic"]
        },
        {
            id: 7,
            category: 'Desserts',
            name: "Chocolate Lava Cake",
            price: "$10.50",
            desc: "Rich chocolate cake with a molten center, served warm with a scoop of vanilla bean ice cream.",
            img: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?q=80&w=600&auto=format&fit=crop",
            tags: ["Sweet", "Hot & Cold"]
        },
        {
            id: 8,
            category: 'Drinks',
            name: "Mojito",
            price: "$8.00",
            desc: "Refreshing cocktail with white rum, sugar, lime juice, soda water, and mint.",
            img: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?q=80&w=600&auto=format&fit=crop",
            tags: ["Cocktail", "Refreshing"]
        },
        {
            id: 9,
            category: 'Drinks',
            name: "Iced Cappuccino",
            price: "$6.00",
            desc: "Chilled double shot espresso with milk and milk foam, served over ice.",
            img: "https://images.unsplash.com/photo-1517701604599-bb29b5c73553?q=80&w=600&auto=format&fit=crop",
            tags: ["Coffee", "Cold"]
        },
        {
            id: 10,
            category: 'Starters',
            name: "Garlic Prawns",
            price: "$14.00",
            desc: "Juicy prawns sautéed in garlic, butter, and white wine sauce.",
            img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=600&auto=format&fit=crop",
            tags: ["Seafood", "Spicy"]
        }
    ];

    const filteredItems = activeCategory === 'All'
        ? menuItems
        : menuItems.filter(item => item.category === activeCategory);

    useEffect(() => {
        // Animate items on change
        if (menuGridRef.current) {
            gsap.fromTo(menuGridRef.current.children,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 }
            );
        }
    }, [activeCategory]);

    return (
        <div className="menu-page">
            <div className="menu-hero">
                <div className="hero-text">
                    <h1>Our Menu</h1>
                    <p>Discover a world of flavors crafted with passion</p>
                </div>
            </div>

            <div className="menu-content">
                <div className="category-filter">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                            onClick={() => setActiveCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="menu-grid-premium" ref={menuGridRef}>
                    {filteredItems.map(item => (
                        <div className="menu-card" key={item.id}>
                            <div className="card-img-container">
                                <img src={item.img} alt={item.name} />
                            </div>
                            <div className="card-details">
                                <div className="card-header">
                                    <h3>{item.name}</h3>
                                    <span className="card-price">{item.price}</span>
                                </div>
                                <p className="card-desc">{item.desc}</p>
                                <div className="card-tags">
                                    {item.tags.map((tag, i) => (
                                        <span key={i} className="tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Menu;
