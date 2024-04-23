"use client";

import React, { useState } from 'react';

const NewItem = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");

  const onAddItem = (newItem) => {
    console.log(newItem);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newItem = {
      id: generateId(),
      name,
      quantity,
      category
      };
 
      onAddItem(newItem);
      setName("");
      setQuantity(1);
      setCategory("Produce");

  }
  const generateId = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input className='py-2 px-4 m-2 mt-8 text-black border-gray-200 border-2 rounded border-spacing-1 w-full' placeholder='Item name' type="text" value={name} onChange={(e) => setName(e.target.value)} required/>
        </label>

        <br />
        <label>
          <input className='py-2 px-4 m-2 text-black border-gray-200 border-2 rounded border-spacing-1 w-full' type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)}
          min="1" max="99" required />
        </label>
        <br />
        <label>
        <select className='py-2 px-4 m-2 text-black border-gray-200 border-2 rounded border-spacing-1 w-full' value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen foods">Frozen Foods</option>
            <option value="canned goods">Canned Goods</option>
            <option value="dry goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </label>
        <br />
        <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 m-2 rounded w-full">+</button>
      </form>
    </div>
  );
};

export default NewItem;


