import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/api";
import { AuthContext } from "../context/AuthContext";
import "../styles.css";

const Login = () => {
  const [role, setRole] = useState("USER");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/api/auth/login", {
        email,
        password,
        role,
      });

      const data = res.data;

      login({
        token: data.token,
        role: data.role,
        name: data.name,
        id: data.id,
      });

      if (data.role === "USER") {
        navigate("/user/dashboard");
      } else {
        navigate("/admin/dashboard");
      }
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Smart Complaint Management System</h2>

        <div className="role-toggle">
          <button
            className={role === "USER" ? "active" : ""}
            onClick={() => setRole("USER")}
          >
            User
          </button>
          <button
            className={role === "ADMIN" ? "active" : ""}
            onClick={() => setRole("ADMIN")}
          >
            Admin
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? "🙈" : "👁"}
            </span>
          </div>

          <button type="submit" className="primary-btn">
            Login
          </button>
        </form>

        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;