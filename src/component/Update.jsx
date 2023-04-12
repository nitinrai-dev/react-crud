import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Update = () => {
  const [formData, setFormData] = useState({
    id: null,
    name: "",
    location: "",
  });
  const navigate = useNavigate();
  const KEY = import.meta.env.VITE_MOCK_API;

  useEffect(() => {
    setFormData({
      id: localStorage.getItem("ID"),
      name: localStorage.getItem("Name"),
      location: localStorage.getItem("Location"),
    });
  }, []);

  const handleUpdate = async () => {
    try {
      await axios.put(`https://${KEY}.mockapi.io/users/${formData.id}`, formData);
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
    <div>
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
        <button type="submit" onClick={handleUpdate}>
          Update
        </button>
      </div>
    </div>
  );
};

export default Update;