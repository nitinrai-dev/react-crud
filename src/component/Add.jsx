import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Add = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();
  const KEY = import.meta.env.VITE_MOCK_API;

  const postData = async () => {
    try {
      await axios.post(`https://${KEY}.mockapi.io/users`, {
        name,
        location,
      });
      navigate('/read');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div>
        <label>Name</label>
        <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Location</label>
        <input
          placeholder="Location"
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <button type="submit" onClick={postData}>
        Submit
      </button>
    </>
  );
};

export default Add;