import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

const CreateComplaint = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/api/user/complaints", form);
    alert("Complaint Submitted!");
    navigate("/user/dashboard");
  };

  return (
    <div className="form-card">
      <h2>Create Complaint</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Title"
          required
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          required
          onChange={handleChange}
        />
        <input
          name="category"
          placeholder="Category"
          required
          onChange={handleChange}
        />
        <button className="primary-btn">Submit</button>
      </form>
    </div>
  );
};

export default CreateComplaint;