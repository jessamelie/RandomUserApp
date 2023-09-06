import React, { useEffect, useState } from "react";
import Cards from "./Cards";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [filterGender, setFilterGender] = useState("");
  const [sortAge, setSortAge] = useState("ascending");


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

  const handleSort = () => {
    setSortAge (sortAge === "asc" ? "desc" : "asc");
  };

  const sortedUsers = users.sort((a,b) => {
    const ageA = parseInt(a.dob.age);
    const ageB = parseInt(b.dob.age);
    if (sortAge === "ascending") {
      return ageA - ageB;
    } else {
      return ageB - ageA;
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
          <option value="">Everybody</option>
          <option value="male">Men</option>
          <option value="female">Women</option>
        </select>
        
        <button onClick={handleSort}>
          Trier par âge ({sortAge === "asc" ? "Croissant" : "Décroissant"})
        </button>
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
