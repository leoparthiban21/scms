import React, { useState } from "react";

const ComplaintFilters = ({ complaints, setFilteredComplaints }) => {
  const [status, setStatus] = useState("");
  const [category, setCategory] = useState("");

  const applyFilters = () => {
    let filtered = complaints;

    if (status) {
      filtered = filtered.filter(c => c.status === status);
    }

    if (category) {
      filtered = filtered.filter(c => c.category === category);
    }

    setFilteredComplaints(filtered);
  };

  return (
    <div style={{ margin: "20px 0" }}>
      <select onChange={(e) => setStatus(e.target.value)}>
        <option value="">Filter by Status</option>
        <option>Pending</option>
        <option>In Progress</option>
        <option>Resolved</option>
      </select>

      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="">Filter by Category</option>
        <option>Electrical</option>
        <option>Water</option>
        <option>Internet</option>
      </select>

      <button onClick={applyFilters}>Apply</button>
    </div>
  );
};

export default ComplaintFilters;