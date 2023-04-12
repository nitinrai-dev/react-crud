import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Update = () => {
  const [formData, setFormData] = useState({
    id: null,
    name: "",
    location: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const KEY = import.meta.env.VITE_MOCK_API;

  useEffect(() => {
    setFormData({
      id: localStorage.getItem("ID"),
      name: localStorage.getItem("Name"),
      location: localStorage.getItem("Location"),
    });
  }, []);

  const handleUpdate = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      await axios.put(`https://${KEY}.mockapi.io/users/${formData.id}`, formData);
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
    <form onSubmit={handleUpdate}>
      <div className="create-form">
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
        <button type="submit" disabled={isLoading}>{isLoading ? "Wait.." : "Update"}</button>
      </div>
    </form>
  );
};

export default Update;