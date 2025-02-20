import React, { useState } from "react";

const AdminPanel = ({ onAddCandidate }) => {
  const [newCandidate, setNewCandidate] = useState("");

  const handleAddCandidate = () => {
    if (newCandidate.trim() === "") return;
    onAddCandidate(newCandidate);
    setNewCandidate("");
  };

  return (
    <div>
      <h3>Admin Panel</h3>
      <input 
        type="text" 
        value={newCandidate} 
        onChange={(e) => setNewCandidate(e.target.value)}
        placeholder="Enter candidate name"
      />
      <button onClick={handleAddCandidate}>Add Candidate</button>
    </div>
  );
};

export default AdminPanel;
