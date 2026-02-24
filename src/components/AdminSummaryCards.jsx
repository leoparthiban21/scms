import React from "react";

const AdminSummaryCards = ({ complaints }) => {
  const total = complaints.length;
  const pending = complaints.filter(c => c.status === "Pending").length;
  const inProgress = complaints.filter(c => c.status === "In Progress").length;
  const resolved = complaints.filter(c => c.status === "Resolved").length;

  return (
    <div className="summary-cards">
      <div className="card">Total: {total}</div>
      <div className="card">Pending: {pending}</div>
      <div className="card">In Progress: {inProgress}</div>
      <div className="card">Resolved: {resolved}</div>
    </div>
  );
};

export default AdminSummaryCards;