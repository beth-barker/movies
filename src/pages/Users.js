import React from "react";
import Nav from "../components/Nav";
import "../styles/users.css";

function Users(props) {
  const userArray = ["BB", "CB", "RW", "AB"];

  return (
    <div>
      <Nav />
      <h1>Users</h1>
      {userArray.map((user) => (
        <button className="user-btn">{user}</button>
      ))}
    </div>
  );
}

export default Users;
