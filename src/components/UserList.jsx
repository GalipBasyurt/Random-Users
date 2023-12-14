import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleUser from "./SingleUser";

const UserList = () => {
  const [users, setUsers] = useState([]);

  async function getUsers() {
    try {
      const response = await axios.get("https://randomuser.me/api/?results=5");
      setUsers(response.data.results);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="user-list">
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <SingleUser user={user} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
