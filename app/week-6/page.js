"use client";

import React, { useState, useEffect } from "react";
import itemsData from "./items.json";
import NewItem from '../week-6/new-item';
import ItemList from "./item-list";


export default function Home() {
    const [items, setItems] = useState([]);

    const handleAddItem = (newItem) => {
      setItems((prevItems) => [...prevItems, newItem]);
    };
  
    return (
        <main className='bg-gray-950 text-white min-h-screen flex items-center'>
            <div className='text-left w-[400px]'>
                <h1 className='text-3xl font-bold mb-6 m-5'>Shopping List</h1>
                <NewItem onAddItem={handleAddItem} />
                <ItemList items={items} />                
            </div>
        </main>
    );
}
