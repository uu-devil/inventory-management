import React from 'react';

function Filter({ filterItems }) {
  return (
    <div>
      <select onChange={(e) => filterItems(e.target.value)}>
        <option value="">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Clothing">Clothing</option>
        <option value="Food">Food</option>
      </select>
    </div>
  );
}

export default Filter;