import React from 'react';

function ItemTable({ items, editItem, deleteItem }) {
  const sortItems = (items) => {
    return [...items].sort((a, b) => a.quantity - b.quantity);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Quantity</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {sortItems(items).map(item => (
          <tr key={item.id} style={{ backgroundColor: item.quantity < 10 ? 'red' : 'white' }}>
            <td>{item.name}</td>
            <td>{item.category}</td>
            <td>{item.quantity}</td>
            <td>
              <button onClick={() => editItem(item)}>Edit</button>
              <button onClick={() => deleteItem(item.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ItemTable;