import React from "react";
import { Route } from "react-router-dom";
import header1 from "../images/header1.png";
import header2 from "../images/header2.png";
import header3 from "../images/header3.png";
import header4 from "../images/header4.png";
import "../styles/Header.css";
const Header = () => {
  return (
    <>
      <Route path="/" render={() => <img src={header1} alt="xx"></img>} />
      <Route
        path="/projects"
        render={() => <img src={header2} alt="xx"></img>}
      />
      <Route
        path="/technologies"
        render={() => <img src={header3} alt="xx"></img>}
      />
      <Route
        path="/contact"
        render={() => <img src={header4} alt="xx"></img>}
      />
    </>
  );
};
export default Header;
