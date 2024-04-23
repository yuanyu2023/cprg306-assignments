import React from 'react';
import ItemList from "./item-list";

const Item = ({ onSelect }) => {
    return(
        <div>
            <ItemList onSelect={onSelect} />
        </div>
    )    
};

export default Item;
