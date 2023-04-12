import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Add = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const KEY = import.meta.env.VITE_MOCK_API;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      await axios.post(`https://${KEY}.mockapi.io/users`, formData);
      setIsLoading(false);
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
          placeholder="Enter your name"
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
          placeholder="Enter your location"
          value={formData.location}
          onChange={handleChange}
        />
      </div>
      <button type="submit" disabled={isLoading}>{isLoading ? "Adding..." : "Submit"}</button>
    </form>
  );
};

export default Add;