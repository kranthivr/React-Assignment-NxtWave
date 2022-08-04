import React from "react";
import { NavBar } from "../styles/NavBar.styled";
import image from "../images/image.svg";
import logo from "../images/nxtwave.svg";

export const NavigationBar = () => {
  return (
    <NavBar>
      <img className="logo" src={logo} alt="Next Wave Logo" />
      <img className="profilePic" src={image} alt="profile pic" />
    </NavBar>
  );
};
