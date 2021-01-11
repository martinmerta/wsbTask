import React from "react";
import "../styles/Navigation.css";
import { NavLink } from "react-router-dom";
const list = [
  { name: "O nas", path: "/", exact: true },
  { name: "Portfolio", path: "/projects" },
  { name: "Technologie", path: "/technologies" },
  { name: "Kontakt", path: "/contact" },
];
const Navigation = () => {
  const menuList = list.map((item) => (
    <li key={item.name}>
      <NavLink to={item.path} exact={item.exact ? item.exact : false}>
        {item.name}
      </NavLink>
    </li>
  ));
  return (
    <nav className="nav nav_main">
      <ul>{menuList}</ul>
    </nav>
  );
};
export default Navigation;
