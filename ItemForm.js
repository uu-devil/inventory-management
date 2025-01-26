import React, { useState, useEffect } from 'react';

function ItemForm({ addItem, editItem, itemToEdit }) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState('');

  // Pre-fill form if itemToEdit is provided
  useEffect(() => {
    if (itemToEdit) {
      setName(itemToEdit.name);
      setCategory(itemToEdit.category);
      setQuantity(itemToEdit.quantity);
    }
  }, [itemToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { name, category, quantity: parseInt(quantity) };
    if (itemToEdit) {
      editItem({ ...newItem, id: itemToEdit.id });  // Pass updated item with the same id
    } else {
      addItem(newItem);
    }
    // Reset form
    setName('');
    setCategory('');
    setQuantity('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        required
      />
      <button type="submit">{itemToEdit ? 'Update Item' : 'Add Item'}</button>
    </form>
  );
}

export default ItemForm;