import React from 'react'
import { useState } from 'react';
import './Categories.css'

const categoriesdata=[
    {name: 'Beachfront',icon:'🏖️'},
    {name: 'Cabin',icon:'🏕️'},
    {name: 'Trending',icon:'🔥'},
    {name: 'Popular',icon:'🌟'},
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
const Categories=()=> {
    const[activeCategory,setactiveCategory]=useState('');
   
  return (
    <div className="categories-container">
        {
            //every time onclick button is clicked, the button is rerendedred by the  
            //map function and where the  activecategory is equal to category.name 
            //it makes its class acive 

        categoriesdata.map((category)=>(
            <button
            key={category.name}
            className={`category-button ${activeCategory===category.name?'active':''}`}
            onClick={()=>setactiveCategory(category.name)}
            >
            <span className="category-icon">{category.icon}</span>
            <span className="category-label">{category.name}</span>

            </button>
        ))}
    </div>
  );
};
export default Categories;
