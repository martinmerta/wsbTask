import React from "react";
import { Route } from "react-router-dom";
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";
import Tech from "../pages/Tech";
import Contact from "../pages/Contact";

const Page = () => {
  return (
    <>
      <Route path="/" exact component={About} />
      <Route path="/projects" exact component={Portfolio} />
      <Route path="/technologies" exact component={Tech} />
      <Route path="/contact" exact component={Contact} />
    </>
  );
};
export default Page;
