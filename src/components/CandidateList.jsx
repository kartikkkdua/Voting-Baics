const CandidateList = ({ candidates, onVote }) => {
    const totalVotes = candidates.reduce((sum, candidate) => sum + candidate.votes, 0) || 1;

    return (
      <div className="candidate-list">
        {candidates.map((candidate) => {
          const votePercentage = ((candidate.votes / totalVotes) * 100).toFixed(1);
          return (
            <div key={candidate.id} className="candidate-card">
              <h2>{candidate.name}</h2>
              <p>Votes: {candidate.votes}</p>
              <div className="progress-bar">
                <div className="progress" style={{ width: `${votePercentage}%` }}></div>
              </div>
              <button onClick={() => onVote(candidate.id)}>Vote</button>
            </div>
          );
        })}
      </div>
    );
    
};
export default CandidateList;
