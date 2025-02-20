const CandidateList = ({ candidates, onVote }) => {
  const totalVotes = candidates.reduce((sum, candidate) => sum + candidate.votes, 0);

  return (
    <div className="candidate-list">
      {candidates.map((candidate) => {
        const votePercentage = totalVotes > 0 ? ((candidate.votes / totalVotes) * 100).toFixed(1) : 0;

        return (
          <div key={candidate.id} className="candidate-card">
            <h2>{candidate.name}</h2>
            <p>Votes: {candidate.votes} ({votePercentage}%)</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${votePercentage}%` }}></div>
            </div>
            <button className="vote-button" onClick={() => onVote(candidate.id)}>✅ Vote</button>
          </div>
        );
      })}
    </div>
  );
};

export default CandidateList;
