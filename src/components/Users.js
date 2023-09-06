import React, { useEffect, useState } from "react";
import Cards from "./Cards";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [filterGender, setFilterGender] = useState(""); // État du filtre par genre

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const responseURL = await fetch(
          "https://randomuser.me/api/?results=50"
        );
        const data = await responseURL.json();
        console.log(data);
        setUsers(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);

  const filteredUsers = users.filter((user) => {
    if (filterGender === "") {
      return true;
    } else {
      return user.gender === filterGender;
    }
  });

  return (
    <div>
      <div className="randomUsers">
        <h2>Random Users</h2>
      </div>
      <div>
        <label>Filtrer par genre: </label>
        <select
          onChange={(e) => setFilterGender(e.target.value)}
          value={filterGender}
        >
          <option value="">Tous</option>
          <option value="male">Homme</option>
          <option value="female">Femme</option>
        </select>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {filteredUsers.map((user, index) => (
          <Cards key={index} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Users;
