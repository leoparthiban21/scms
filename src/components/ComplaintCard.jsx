import StatusBadge from "./StatusBadge";

const ComplaintCard = ({ complaint, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <h3>{complaint.title}</h3>
      <p>Category: {complaint.category}</p>
      <p>Date: {new Date(complaint.createdAt).toLocaleDateString()}</p>
      <StatusBadge status={complaint.status} />
    </div>
  );
};

export default ComplaintCard;