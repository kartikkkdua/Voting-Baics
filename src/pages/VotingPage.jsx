import React, { useState, useEffect } from "react";
import CandidateList from "../components/CandidateList";
import AdminPanel from "../components/AdminPanel";
import { saveToStorage, loadFromStorage } from "../utils/storage";

const VotingPage = () => {
  const [candidates, setCandidates] = useState(() => loadFromStorage());

  useEffect(() => {
    saveToStorage(candidates);
  }, [candidates]);

  const handleVote = (id) => {
    if (window.confirm("Are you sure you want to vote for this candidate?")) {
      setCandidates((prevCandidates) =>
        prevCandidates.map((c) => c.id === id ? { ...c, votes: c.votes + 1 } : c)
      );
    }
  };

  const handleResetVotes = () => {
    if (window.confirm("Do you really want to reset all votes?")) {
      setCandidates((prevCandidates) => prevCandidates.map(c => ({ ...c, votes: 0 })));
    }
  };

  const handleAddCandidate = (name) => {
    setCandidates([...candidates, { id: Date.now(), name, votes: 0 }]);
  };

  const totalVotes = candidates.reduce((sum, c) => sum + c.votes, 0);
  const leadingCandidate = candidates.reduce((max, c) => (c.votes > max.votes ? c : max), { votes: 0 });

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2> Voting Machine</h2>
      <h3>Leading Candidate: {leadingCandidate.votes > 0 ? leadingCandidate.name : "No votes yet"}</h3>
      <h3>Total Votes: {totalVotes}</h3>
    {leadingCandidate && (
      <div className="leaderboard">
        <h2> Current Leader by:({leadingCandidate.votes} votes)</h2>
      </div>
    )}
    <CandidateList candidates={candidates} onVote={handleVote} />
      <CandidateList candidates={candidates} onVote={handleVote} />

      <button onClick={handleResetVotes} style={{ background: "red", color: "white", padding: "8px 16px", cursor: "pointer", marginTop: "10px" }}>
        Reset Votes
      </button>

      <AdminPanel onAddCandidate={handleAddCandidate} />
    </div>
  );
};

export default VotingPage;
