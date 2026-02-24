import { useEffect, useState } from "react";
import API from "../services/api";
import ComplaintCard from "../components/ComplaintCard";
import { useNavigate } from "react-router-dom";

const MyComplaints = () => {
  const [complaints, setComplaints] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await API.get("/api/user/complaints");
    setComplaints(res.data);
  };

  return (
    <div>
      <h2>My Complaints</h2>
      {complaints.map((c) => (
        <ComplaintCard
          key={c.id}
          complaint={c}
          onClick={() => navigate(`/user/complaints/${c.id}`)}
        />
      ))}
    </div>
  );
};

export default MyComplaints;