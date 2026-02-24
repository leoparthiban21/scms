import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";
import StatusBadge from "../components/StatusBadge";

const ComplaintDetails = () => {
  const { id } = useParams();
  const [complaint, setComplaint] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await API.get("/api/user/complaints");
    const found = res.data.find((c) => c.id == id);
    setComplaint(found);
  };

  if (!complaint) return <p>Loading...</p>;

  return (
    <div className="card">
      <h2>{complaint.title}</h2>
      <p><b>Description:</b> {complaint.description}</p>
      <p><b>Category:</b> {complaint.category}</p>
      <p><b>Date:</b> {new Date(complaint.createdAt).toLocaleString()}</p>
      <StatusBadge status={complaint.status} />
      {complaint.resolutionNote && (
        <p><b>Resolution:</b> {complaint.resolutionNote}</p>
      )}
    </div>
  );
};

export default ComplaintDetails;