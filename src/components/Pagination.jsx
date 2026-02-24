import React, { useState, useEffect } from "react";

const Pagination = ({ data, setFilteredComplaints }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    setFilteredComplaints(data.slice(start, end));
  }, [currentPage, data]);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <div style={{ marginTop: "20px" }}>
      {Array.from({ length: totalPages }, (_, i) => (
        <button key={i} onClick={() => setCurrentPage(i + 1)}>
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;