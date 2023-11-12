const KeyBinding = ({ binding, index, handleVote, votes }) => {
  return (
    <div className="key-binding">
      <p className="key-binding-action">{binding.action}</p>
      <p>
        {binding.keys.map((key, keyIndex) => (
          <span key={keyIndex}>
            <a className="kbc-button">{key}</a>
            {keyIndex < binding.keys.length - 1 && <span> + </span>}
          </span>
        ))}
      </p>
      <div>
        <button 
          onClick={() => handleVote(index, 'up')} 
          className={`vote-button vote-button-up ${votes.userVoteType === 'up' ? 'voted' : ''}`}
        >
          ↑ 
        </button>
        <span className="vote-count">{votes.upvotes}</span>
        <button 
          onClick={() => handleVote(index, 'down')} 
          className={`vote-button vote-button-down ${votes.userVoteType === 'down' ? 'voted' : ''}`}
        >
          ↓ 
        </button>
        <span className="vote-count">{votes.downvotes}</span>
      </div>
    </div>
  );
};
export default KeyBinding;
