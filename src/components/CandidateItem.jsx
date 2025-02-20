import React from "react";
import VoteButton from "./VoteButton";

const CandidateItem = ({ candidate, onVote }) => {
  return (
    <div style={{ marginBottom: "10px" }}>
      <h3>{candidate.name}: {candidate.votes} votes</h3>
      <VoteButton onVote={() => onVote(candidate.id)} />
    </div>
  );
};

export default CandidateItem;
