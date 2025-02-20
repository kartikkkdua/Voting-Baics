import React, { useState, useEffect } from "react";
import CandidateList from "../components/CandidateList";
import { saveToStorage, loadFromStorage } from "../utils/storage";

const VotingPage = () => {
  const [candidates, setCandidates] = useState(() => loadFromStorage());

  useEffect(() => {
    saveToStorage(candidates);
  }, [candidates]);

  // Handle Voting
  const handleVote = (id) => {
    if (window.confirm("Are you sure you want to vote for this candidate?")) {
      setCandidates((prevCandidates) =>
        prevCandidates.map((c) => (c.id === id ? { ...c, votes: c.votes + 1 } : c))
      );
    }
  };

  // Handle Reset Votes
  const handleResetVotes = () => {
    if (window.confirm("Do you really want to reset all votes?")) {
      const resetCandidates = candidates.map((c) => ({ ...c, votes: 0 }));
      setCandidates(resetCandidates);
      saveToStorage(resetCandidates);
    }
  };

  // Handle Adding New Candidate
  const handleAddCandidate = (name) => {
    if (!name.trim()) {
      alert("Candidate name cannot be empty!");
      return;
    }
    const newCandidate = { id: Date.now(), name, votes: 0 };
    const updatedCandidates = [...candidates, newCandidate];
    setCandidates(updatedCandidates);
    saveToStorage(updatedCandidates);
  };

  // Handle Removing Candidate
  const handleRemoveCandidate = (id) => {
    if (window.confirm("Are you sure you want to remove this candidate?")) {
      const updatedCandidates = candidates.filter((c) => c.id !== id);
      setCandidates(updatedCandidates);
      saveToStorage(updatedCandidates);
    }
  };

  // Calculate Total Votes
  const totalVotes = candidates.reduce((sum, c) => sum + c.votes, 0);

  // Find Leading Candidate
  const leadingCandidate = candidates.reduce(
    (max, c) => (c.votes > max.votes ? c : max),
    { votes: 0 }
  );

  return (
    <div className="voting-container">
      <h2>🗳️ Voting Machine</h2>
      <h3>Total Votes: <span className="highlight">{totalVotes}</span></h3>

      {leadingCandidate.votes > 0 && (
        <div className="leaderboard">
          <h3>🏆 Leading Candidate: <span className="highlight">{leadingCandidate.name} ({leadingCandidate.votes} votes)</span></h3>
        </div>
      )}

      <CandidateList candidates={candidates} onVote={handleVote} onRemove={handleRemoveCandidate} />

      <button className="reset-button" onClick={handleResetVotes}>
        🔄 Reset Votes
      </button>

    </div>
  );
};

export default VotingPage;
