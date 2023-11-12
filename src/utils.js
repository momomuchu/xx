export const handleVote = (index, type) => {
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