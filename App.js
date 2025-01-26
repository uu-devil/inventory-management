import React, { useState } from 'react';
import ItemTable from './components/ItemTable';
import ItemForm from './components/ItemForm';
import Filter from './components/Filter';

function App() {
  const [inventory, setInventory] = useState([
    { id: 1, name: 'Item 1', category: 'Electronics', quantity: 5 },
    { id: 2, name: 'Item 2', category: 'Clothing', quantity: 15 },
    { id: 3, name: 'Item 3', category: 'Food', quantity: 2 },
  ]);
  const [filterCategory, setFilterCategory] = useState('');
  const [itemToEdit, setItemToEdit] = useState(null);

  const addItem = (item) => {
    setInventory([...inventory, { ...item, id: Date.now() }]);
  };

  const editItem = (updatedItem) => {
    setInventory(inventory.map(item => (item.id === updatedItem.id ? updatedItem : item)));
    setItemToEdit(null);  // Reset editing state after submission
  };

  const deleteItem = (id) => {
    setInventory(inventory.filter(item => item.id !== id));
  };

  const filterItems = (category) => {
    setFilterCategory(category);
  };

  const filteredInventory = filterCategory
    ? inventory.filter(item => item.category === filterCategory)
    : inventory;

  return (
    <div className="App">
      <h1>Inventory Management</h1>
      <Filter filterItems={filterItems} />
      <ItemForm addItem={addItem} editItem={editItem} itemToEdit={itemToEdit} />
      <ItemTable
        items={filteredInventory}
        editItem={setItemToEdit}  // Set the item to be edited
        deleteItem={deleteItem}
      />
    </div>
  );
}

export default App;