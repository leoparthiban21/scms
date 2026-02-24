import { Link, Outlet, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "../styles.css";

const AdminLayout = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <>
      <header className="header">
        <Link to="/admin/dashboard">Dashboard</Link>
        <Link to="/admin/complaints">All Complaints</Link>
        <button onClick={handleLogout}>Logout</button>
      </header>
      <div className="content">
        <Outlet />
      </div>
    </>
  );
};

export default AdminLayout;