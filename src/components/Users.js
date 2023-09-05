import React, { useEffect, useState } from "react";

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
      {users.map((person) => (
        <div className="usersCard">
            <h1>{person.picture.medium}</h1>
            <h1>{person.name.first}</h1>
            <h1>{person.name.last}</h1>
            <h1>{person.location.country}</h1>
        </div>
      ))}
    </div>
  );
};

export default Users;
