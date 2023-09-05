import React, { useEffect, useState } from "react";
import Cards from "./Cards";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const responseURL = await fetch("https://randomuser.me/api/");
        const data = await responseURL.json();
        console.log(data);
        setUsers(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  });

  return (
    <div>
      <div className="randomUsers">
        <h2>Random Users</h2>
      </div>
      {users.map((user, index) => (
        <Cards key={index} user={user}/>
      ))}
    </div>
  );
};

export default Users;
