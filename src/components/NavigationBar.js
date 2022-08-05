import React from "react";
import { NavBar } from "../styles/NavBar.styled";
import image from "../images/image.svg";
import logo from "../images/nxtwave.svg";
import { Link } from "react-router-dom";

export const NavigationBar = () => {
  return (
    <NavBar>
      <Link to="/">
        <img className="logo" src={logo} alt="Next Wave Logo" />
      </Link>
      <img className="profilePic" src={image} alt="profile pic" />
    </NavBar>
  );
};
