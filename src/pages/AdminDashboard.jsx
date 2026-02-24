import React, { useEffect, useState } from "react";
import AdminSummaryCards from "../components/AdminSummaryCards";
import ComplaintsTable from "../components/ComplaintsTable";
import ComplaintFilters from "../components/ComplaintFilters";
import Pagination from "../components/Pagination";

const AdminDashboard = () => {
  const [complaints, setComplaints] = useState([]);
  const [filteredComplaints, setFilteredComplaints] = useState([]);

  useEffect(() => {
  const dummyData = [
    {
      id: 1,
      userName: "Arun",
      category: "Electrical",
      status: "Pending",
      resolutionNote: ""
    },
    {
      id: 2,
      userName: "Kumar",
      category: "Water",
      status: "In Progress",
      resolutionNote: ""
    },
    {
      id: 3,
      userName: "Divya",
      category: "Internet",
      status: "Resolved",
      resolutionNote: "Router replaced"
    }
  ];

  setComplaints(dummyData);
  setFilteredComplaints(dummyData);
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