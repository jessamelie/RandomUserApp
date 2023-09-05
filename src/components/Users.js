import React, { useEffect, useState } from "react";

const Users = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const responseURL = await fetch("https://randomuser.me/api/");
        const data = await responseURL.json();
        console.log(data);
        setUser(data.results)
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  });

  return (
    <div className="randomUsers">
      <h2>Random Users</h2>
    </div>
  );
};

export default Users;
