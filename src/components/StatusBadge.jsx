const StatusBadge = ({ status }) => {
  const getClass = () => {
    if (status === "PENDING") return "badge pending";
    if (status === "IN_PROGRESS") return "badge progress";
    if (status === "RESOLVED") return "badge resolved";
  };

  return <span className={getClass()}>{status}</span>;
};

export default StatusBadge;