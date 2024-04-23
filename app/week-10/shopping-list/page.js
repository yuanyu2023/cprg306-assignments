import React, { useState, useEffect } from 'react';
import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItem } from "./_services/shopping-list-service";

const ShoppingList = () => {
    const { user } = useUserAuth();
    const [items, setItems] = useState([]);

    useEffect(() => {
        const loadItems = async () => {
            if (user) {
                const userItems = await getItems(user.uid);
                setItems(userItems);
            }
        };

        loadItems();
    }, [user]);

    const handleAddItem = async (itemName) => {
        try {
            const newItemId = await addItem(user.uid, { name: itemName });
            setItems(prevItems => [...prevItems, { id: newItemId, data: { name: itemName } }]);
        } catch (error) {
            console.error('Error adding item:', error);
        }
    };

    return (
        <div>
            <h1>Shopping List</h1>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.data.name}</li>
                ))}
            </ul>
            <button onClick={() => handleAddItem("New Item")}>Add Item</button>
        </div>
    );
};

export default ShoppingList;
