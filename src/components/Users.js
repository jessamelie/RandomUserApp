import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import "../style/Users.css";

const Users = () => {
  // Initialize state variables using useState.
  const [users, setUsers] = useState([]);
  const [filterGender, setFilterGender] = useState("");
  const [sortAge, setSortAge] = useState("asc");

  // Use the useEffect hook to fetch user data
  useEffect(() => {
    const fetchUsers = async () => {
      // Fetch user data from an external API.
      try {
        const responseURL = await fetch(
          "https://randomuser.me/api/?results=50"
        );
        const data = await responseURL.json();
        console.log(data);
        // Set the fetched user data in the state variable 'users'.
        setUsers(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);

  // Filter users based on the selected gender filter.
  const filteredUsers = users.filter((user) => {
    if (filterGender === "") {
      return true; // Display all users if no filter is selected.
    } else {
      return user.gender === filterGender;
    }
  });

  // Handle sorting of users based on age (ascending or descending).
  const handleSort = () => {
    setSortAge(sortAge === "asc" ? "desc" : "asc");
  };

  // Sort users based on age.
  const sortedUsers = users.sort((a, b) => {
    const ageA = parseInt(a.dob.age);
    const ageB = parseInt(b.dob.age);
    if (sortAge === "asc") {
      return ageA - ageB; // Sort in ascending order.
    } else {
      return ageB - ageA; // Sort in descending order.
    }
  });

  return (
    <div>
      <div className="randomUsers">
        <h3>Who will be your next crush? 💘</h3>
      </div>
      <div className="crushSearching">
        <label className="genderFilter"> I want to see </label>
        <select
          className="genderSelector"
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
        {/* Map through filtered and sorted users and render Cards component for each user. */}
        {filteredUsers.map((user, index) => (
          <Cards key={index} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Users;
