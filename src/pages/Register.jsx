import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import "../styles.css";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "USER",
  });

  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await API.post("/api/auth/register", form);
      alert("Registration successful!");
      navigate("/");
    } catch (err) {
      alert("Registration failed");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Register</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={handleChange}
          />

          <div className="password-field">
            <input
              type={showPass ? "text" : "password"}
              name="password"
              placeholder="Password"
              required
              onChange={handleChange}
            />
            <span onClick={() => setShowPass(!showPass)}>
              {showPass ? "🙈" : "👁"}
            </span>
          </div>

          <div className="password-field">
            <input
              type={showConfirm ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              required
              onChange={handleChange}
            />
            <span onClick={() => setShowConfirm(!showConfirm)}>
              {showConfirm ? "🙈" : "👁"}
            </span>
          </div>

          <select name="role" onChange={handleChange}>
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
          </select>

          <button type="submit" className="primary-btn">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;