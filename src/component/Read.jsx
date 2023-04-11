import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Read = () => {
  const [APIData, setAPIData] = useState([]);
  const KEY = import.meta.env.VITE_MOCK_API;

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `https://${KEY}.mockapi.io/users`
      );
      setAPIData(response.data);
    };
    getData();
  }, []);

  const setData = ({ id, name, location }) => {
    localStorage.setItem("ID", id);
    localStorage.setItem("Name", name);
    localStorage.setItem("Location", location);
  };

  const onDelete = async (id) => {
    await axios.delete(
      `https://${KEY}.mockapi.io/users/${id}`
    );
    setAPIData(APIData.filter((data) => data.id !== id));
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Location</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {APIData.map(({ id, name, location }) => {
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{location}</td>
                <td>
                  <Link to={"/update"}>
                    <button onClick={() => setData({ id, name, location })}>
                      Update
                    </button>
                  </Link>
                  <button className="delete--button" onClick={() => onDelete(id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Read;