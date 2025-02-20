import React from "react";

const VoteButton = ({ onVote }) => {
  return (
    <button onClick={onVote} style={{ padding: "8px 16px", cursor: "pointer" }}>
      Vote
    </button>
  );
};

export default VoteButton;
