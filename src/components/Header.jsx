import React from "react";
import { NavLink } from "react-router-dom";
import imagePath from "./logo.png";

const Header = () => {
  return (
    <div className="Header">
      <div className="logoHeader">
        <img src={imagePath} alt="LogoKasa" />
      </div>
      <div className="navHeader">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/About"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          A propos
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
