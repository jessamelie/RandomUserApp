import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import '../style/Users.css';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [filterGender, setFilterGender] = useState("");
  const [sortAge, setSortAge] = useState("asc");


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
  },[]);

  
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
    if (sortAge === "asc") {
      return ageA - ageB;
    } else {
      return ageB - ageA;
    }
  });



  return (
    <div>
      <div className="randomUsers">
        <h3>Who will be your next crush? 💘</h3>
      </div>
      <div className="crushSearching">
        <label className="genderFilter"> I want to see </label>
        <select className="genderSelector"
          onChange={(e) => setFilterGender(e.target.value)}
          value={filterGender}
        >
          <option value=""> Everybody </option>
          <option value="male"> Men </option>
          <option value="female"> Women </option>
        </select>
by
        <button className="ageButton" onClick={handleSort}>
          ({sortAge === "asc" ? "decreasing" : "creasing"})
        </button>
        age
      </div>

      <div className="userContainer">
        {filteredUsers.map((user, index) => (
          <Cards key={index} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Users;
