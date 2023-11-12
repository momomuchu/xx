import React, { useState } from 'react';
import 'keyboard-css';

// Example data
const keyBindingsData1 = [
  { "action": "move_forward", "keys": ["w"] },
  { "action": "move_back", "keys": ["s"] },
  { "action": "move_left", "keys": ["a"] },
  { "action": "move_right", "keys": ["d"] },
  { "action": "fast_travel", "keys": ["v"] },
  { "action": "witcher_sense", "keys": ["left_alt"] },
  { "action": "jump", "keys": ["space"] },
  { "action": "dodge", "keys": ["alt"] },
  { "action": "roll", "keys": ["space", "space"] },
  { "action": "sprint", "keys": ["left_shift"] },
  { "action": "walk", "keys": ["left_ctrl"] },
  { "action": "draw_steel_sword", "keys": ["1"] },
  { "action": "draw_silver_sword", "keys": ["2"] },
  { "action": "sheath_sword", "keys": ["c"] },
  { "action": "select_sign", "keys": ["q"] },
  { "action": "use_sign", "keys": ["right_mouse_button"] },
  { "action": "quick_access_item", "keys": ["r"] },
  { "action": "consume_quick_access_item", "keys": ["f"] },
  { "action": "use_witcher_senses", "keys": ["left_alt"] },
  { "action": "interact", "keys": ["e"] },
  { "action": "lock_on_target", "keys": ["z"] },
  { "action": "parry", "keys": ["right_mouse_button"] },
  { "action": "counterattack", "keys": ["right_mouse_button", "right_mouse_button"] },
  { "action": "use_crossbow", "keys": ["middle_mouse_button"] },
  { "action": "call_horse", "keys": ["x"] },
  { "action": "gallop", "keys": ["left_shift"] },
  { "action": "canter", "keys": ["left_shift"] },
  { "action": "dismount", "keys": ["e"] },
  { "action": "camera_center", "keys": ["c"] },
  { "action": "toggle_book", "keys": ["b"] },
  { "action": "open_map", "keys": ["m"] },
  { "action": "pause_menu", "keys": ["escape"] },
  { "action": "open_inventory", "keys": ["i"] },
  { "action": "open_character_panel", "keys": ["k"] },
  { "action": "open_meditation", "keys": ["n"] },
  { "action": "open_journal", "keys": ["j"] },
  { "action": "open_crafting", "keys": ["o"] },
  { "action": "open_alchemy", "keys": ["l"] },
  { "action": "quick_save", "keys": ["f5"] },
  { "action": "quick_load", "keys": ["f9"] },
  { "action": "show_hide_hud", "keys": ["home"] }
]
;

import KeyBinding from './KeyBinding'; // Import KeyBinding component
import { handleVote } from './utils'


const KeyBindings = () => {
    const [keyBindingsData, setKeyBindingsData] = useState(keyBindingsData1);
  const [votes, setVotes] = useState(keyBindingsData.map(() => ({
    upvotes: 0,
    downvotes: 0,
    userVoteType: null
  })));
  const [action, setAction] = useState('');
  const [keys, setKeys] = useState('');
  const handleVote = (index, type) => {
    const newVotes = [...votes];
    const vote = newVotes[index];

  
    // If user hasn't voted yet, simply add the vote
    if (vote.userVoteType === null) {
      if (type === 'up') {
        vote.upvotes += 1;
      } else {
        vote.downvotes += 1;
      }
      vote.userVoteType = type;
    } else if (vote.userVoteType !== type) {
      // If user is changing their vote
      if (type === 'up') {
        vote.upvotes += 1;
        vote.downvotes -= 1;
      } else {
        vote.downvotes += 1;
        vote.upvotes -= 1;
      }
      vote.userVoteType = type;
    }
    // If user clicks the same button again, no action is taken
  
    setVotes(newVotes);
  };
  const handleAddKeyBinding = (newBinding) => {
    setKeyBindingsData([...keyBindingsData, newBinding]);
    setVotes([...votes, { upvotes: 0, downvotes: 0, userVoteType: null }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!action || !keys) {
      alert('Please provide both action and keys.');
      return;
    }
    handleAddKeyBinding({ action, keys: keys.split(',').map(key => key.trim()) });
    setAction('');
    setKeys('');
  };

  return (
    <div className="key-bindings-container">
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

      {keyBindingsData.map((binding, index) => (
        <KeyBinding
          key={index}
          binding={binding}
          index={index}
          handleVote={handleVote}
          votes={votes[index]}
        />
      ))}
    </div>
  );
};

export default KeyBindings;