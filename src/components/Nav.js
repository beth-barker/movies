import { React } from "react";
import "../styles/nav.css";
import { NavLink } from "react-router-dom";

function Nav(props) {
  return (
    <div className="nav">
      <NavLink to="/profile">
        <button className="prof-btn">BB</button>
      </NavLink>
    </div>
  );
}

export default Nav;
