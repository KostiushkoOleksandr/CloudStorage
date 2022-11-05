import React from "react";
import "./sidebar.css";
import Person from "../assets/img/person-circle-outline.svg";

const Sidebar = () => {
  return (
    <img src={Person} alt="" className="sidebar_icon" />
  );
};

export default Sidebar;
