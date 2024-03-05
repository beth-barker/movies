import React from "react";
import "../styles/previewBar.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import bethPic from "../data/beth.png";
import PreviewWatched from "./PreviewWatched";
import PreviewToWatch from "./PreviewToWatch";
import { NavLink } from "react-router-dom";

function MoviePreviewBar(props) {
  return (
    <div className="p-preview-bar">
      <div className="p-prof">
        <img src={bethPic} alt="" className="p-prof-btn" />
        <p>
          Hi, Beth <MdKeyboardArrowDown />
        </p>
      </div>
      <NavLink to="/profile" className="p-profile-link">
        <h3>Watched Movies</h3>
      </NavLink>
      <div>
        <PreviewWatched />
      </div>
      <NavLink to="/profile" className="p-profile-link">
        <h3>To-Watch</h3>
      </NavLink>
      <div>
        <PreviewToWatch />
      </div>
    </div>
  );
}

export default MoviePreviewBar;

//pass in data to previewWatched to show three random
