"use client";

import React, { useState, useEffect } from "react";
import itemsData from "./items.json";
import NewItem from '../week-6/new-item';
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";

const Page = () => {
    const [selectedItemName, setSelectedItemName] = useState('');

    const [items, setItems] = useState([]);
    const handleAddItem = (newItem) => {
        setItems((prevItems) => [...prevItems, newItem]);
      };

    const handleItemSelect = (itemName) => {
        const cleanedItemName = itemName.split(',')[0].trim().replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
        setSelectedItemName(cleanedItemName);
    };

    return (
        <div className='flex space-x-40 bg-black text-white'>            
            <div className='text-left w-[400px]'>
                <h1 className='text-3xl font-bold mb-6 m-5'>Shopping List</h1>
                <NewItem onAddItem={handleAddItem} />
                <ItemList onItemSelect={handleItemSelect} />                
            </div>
            <div>
                <h1 className="text-2xl font-bold p-6">Meal Ideas</h1>
                <h2>Here are some meal ideas using {selectedItemName}:</h2>
                <div className='bg-slate-900'>
                <MealIdeas ingredient={selectedItemName} />
                </div>                
            </div>
        </div>
    );
};

export default Page;
