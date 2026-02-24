import React, { useEffect, useState } from "react";
import AdminSummaryCards from "../components/AdminSummaryCards";
import ComplaintsTable from "../components/ComplaintsTable";
import ComplaintFilters from "../components/ComplaintFilters";
import Pagination from "../components/Pagination";

const AdminDashboard = () => {
  const [complaints, setComplaints] = useState([]);
  const [filteredComplaints, setFilteredComplaints] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/admin/complaints")
      .then(res => res.json())
      .then(data => {
        setComplaints(data);
        setFilteredComplaints(data);
      });
  }, []);

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>

      <AdminSummaryCards complaints={complaints} />

      <ComplaintFilters 
        complaints={complaints}
        setFilteredComplaints={setFilteredComplaints}
      />

      <ComplaintsTable 
        complaints={filteredComplaints}
        setComplaints={setComplaints}
      />

      <Pagination 
        data={filteredComplaints}
        setFilteredComplaints={setFilteredComplaints}
      />
    </div>
  );
};

export default AdminDashboard;