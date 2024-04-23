
import React, { useState, useEffect } from "react";

const ItemsArray = require('./items.json');
console.log(ItemsArray);

const ItemList = ({ items }) => {
  const [sortBy, setSortBy] = useState('name');
  const [sortedItems, setSortedItems] = useState([]);

  useEffect(() => {
    sortItems();
  }, [sortBy, items]);

  const sortItems = () => {
    const sorted = [...items];
    ItemsArray.sort((a, b) => {
      if (sortBy === "category") {
        return a.name.localeCompare(b.name);
      } else if (sortBy === "name") {
        return a.category.localeCompare(b.category);
      }
    });
    setSortedItems(sorted);
  };

  return (    
    <div>
      <div class="inline-flex flex-row">
        <div className="py-1 px-2 p-4 m-2"><h2>Sort by:</h2></div>
        <div><button onClick={() => setSortBy("name")} className="bg-orange-700 hover:bg-orange-500 text-white py-1 px-8 p-4 m-2">Name</button>
        </div>
        <div><button onClick={() => setSortBy("category")} className="bg-orange-700 hover:bg-orange-500 text-white py-1 px-6 p-4 m-2">Category</button>        
        </div>
      </div>  
      
      <ul className='list-none'>
        {ItemsArray.map((item, index) => (
          <li key={index} className='p-2 m-4 bg-slate-900 max-w-1/2'>
            <h2 className='text-xl font-bold'>{`${item.name}`}</h2>
            <div className='text-sm'>
              Buy {`${item.quantity}`} in {`${item.category}`}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
