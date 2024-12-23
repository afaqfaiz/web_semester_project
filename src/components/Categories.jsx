import React, { useState } from 'react';
import '../assets/css/Categories.css';

const categoriesdata = [
    { name: 'Beachfront', icon: '🏖️' },
    { name: 'Cabin', icon: '🏕️' },
    { name: 'Trending', icon: '🔥' },
    { name: 'Popular', icon: '🌟' },
    { name: 'Rooms', icon: '🚪' },
    { name: 'Bed & Breakfast', icon: '🍳' },
    { name: 'Top Cities', icon: '🌆' },
    { name: 'Historical Homes', icon: '🏛️' },
    { name: 'Arctic', icon: '❄️' },
    { name: 'Countryside', icon: '🌄' },
    { name: 'Island', icon: '🏝️' },
    { name: 'Caves', icon: '🕳️' },
    { name: 'Amazing Pools', icon: '🏊' },
];

const Categories = ({ setsentcatigory }) => {
    const [activeCategory, setactiveCategory] = useState('');

    const handleCategoryClick = (categoryName) => {
        setactiveCategory(categoryName);
        setsentcatigory(categoryName);
        console.log('Selected category:', categoryName);
    };

    return (
        <div className="categories-container">
            {categoriesdata.map((category) => (
                <button
                    key={category.name}
                    className={`category-button ${activeCategory === category.name ? 'active' : ''}`}
                    onClick={() => handleCategoryClick(category.name)}
                >
                    <span className="category-icon">{category.icon}</span>
                    <span className="category-label">{category.name}</span>
                </button>
            ))}
        </div>
    );
};

export default Categories;
