import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Add = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
  });
  const navigate = useNavigate();
  const KEY = import.meta.env.VITE_MOCK_API;

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(`https://${KEY}.mockapi.io/users`, formData);
      navigate('/read');
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="location">Location</label>
        <input
          id="location"
          name="location"
          type="text"
          value={formData.location}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Add;