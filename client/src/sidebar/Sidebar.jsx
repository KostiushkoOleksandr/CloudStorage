import React from "react";
import "./sidebar.css";
import Person from "../assets/img/person-circle-outline.svg";

const Sidebar = () => {
  return (
    <div className="sideBar">
      <div className="sideBar__section">
        <img src={Person} alt="" className="sidebar_icon" />
      </div>
    </div>
  );
};

export default Sidebar;
