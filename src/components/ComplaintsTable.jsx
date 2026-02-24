import React, { useState } from "react";

const ComplaintsTable = ({ complaints, setComplaints }) => {

  const handleStatusChange = (id, newStatus, resolutionNote) => {

    if (newStatus === "Resolved" && !resolutionNote) {
      alert("Resolution note is mandatory!");
      return;
    }

    fetch(`http://localhost:8080/api/admin/update-status/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        status: newStatus,
        resolutionNote: resolutionNote
      })
    })
    .then(res => res.json())
    .then(updatedComplaint => {

      // ✅ Instant UI Update
      const updatedList = complaints.map(c =>
        c.id === id ? updatedComplaint : c
      );

      setComplaints(updatedList);
    });
  };

  return (
    <table border="1" width="100%">
      <thead>
        <tr>
          <th>ID</th>
          <th>User</th>
          <th>Category</th>
          <th>Status</th>
          <th>Resolution Note</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {complaints.map(c => (
          <tr key={c.id}>
            <td>{c.id}</td>
            <td>{c.userName}</td>
            <td>{c.category}</td>

            <td>
              <select
                defaultValue={c.status}
                onChange={(e) =>
                  handleStatusChange(
                    c.id,
                    e.target.value,
                    prompt("Enter resolution note (Required if Resolved)")
                  )
                }
              >
                <option>Pending</option>
                <option>In Progress</option>
                <option>Resolved</option>
              </select>
            </td>

            <td>{c.resolutionNote || "-"}</td>

            <td>Update</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ComplaintsTable;