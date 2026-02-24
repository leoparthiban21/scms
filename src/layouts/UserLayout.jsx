import { Link, Outlet, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "../styles.css";

const UserLayout = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <>
      <header className="header">
        <Link to="/user/dashboard">Dashboard</Link>
        <Link to="/user/create">Create Complaint</Link>
        <Link to="/user/complaints">My Complaint</Link>
        <button onClick={handleLogout}>Logout</button>
      </header>
      <div className="content">
        <Outlet />
      </div>
    </>
  );
};

export default UserLayout;