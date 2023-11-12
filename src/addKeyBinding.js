import React, { useState } from 'react';

const AddKeyBinding = ({ onAdd }) => {
  const [action, setAction] = useState('');
  const [keys, setKeys] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!action || !keys) {
      alert('Please provide both action and keys.');
      return;
    }
    onAdd({ action, keys: keys.split(',').map(key => key.trim()) });
    setAction('');
    setKeys('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="action">Action:</label>
        <input
          id="action"
          type="text"
          value={action}
          onChange={(e) => setAction(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="keys">Keys (comma separated):</label>
        <input
          id="keys"
          type="text"
          value={keys}
          onChange={(e) => setKeys(e.target.value)}
        />
      </div>
      <button type="submit">Add Key Binding</button>
    </form>
  );
};

export default AddKeyBinding;
