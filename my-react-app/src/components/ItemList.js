// src/components/ItemList.js
import React, { useState, useEffect } from 'react';

function ItemList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/items')
      .then(response => response.json())
      .then(data => setItems(data));
  }, []);

  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

export default ItemList;
