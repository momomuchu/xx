import React from 'react';
import KeyBindings from './KeyBindings';
import './styles.css'
import AddKeyBinding from './addKeyBinding';

function App() {
  const [keyBindings, setKeyBindings] = React.useState([]);

  const handleAddKeyBinding = (binding) => {
    setKeyBindings([...keyBindings, binding]);
  };
  return (
    <div className="App">
      <h1>Game Key Bindings</h1>
      <KeyBindings />

    </div>
  );
}

export default App;
