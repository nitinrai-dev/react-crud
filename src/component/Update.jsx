import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Update = () => {
  const [ID, setID] = useState(null);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();
  const KEY = import.meta.env.VITE_MOCK_API;

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setName(localStorage.getItem("Name"));
    setLocation(localStorage.getItem("Location"));
  }, []);

  const updateAPIData = async () => {
    try {
      await axios.put(`https://${KEY}.mockapi.io/users/${ID}`, {
        name,
        location,
      });
      navigate('/read');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="create-form">
        <div>
          <label>Name</label>
          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Location</label>
          <input
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <button type="submit" onClick={updateAPIData}>
          Update
        </button>
      </div>
    </div>
  );
};

export default Update;
