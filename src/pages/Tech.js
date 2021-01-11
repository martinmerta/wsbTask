import React from "react";
import js from "../images/js.png";
import python from "../images/python.png";
import pandas from "../images/pandas.png";
import react from "../images/react.png";

const Tech = () => {
  return (
    <>
      <h2>Technologie w których pracujemy</h2>
      <section className="section section_page">
        <img src={js} alt="javascript logo" />
        <p>JavaScript</p>
        <img src={react} alt="react js logo" />
        <p>React</p>
        <img src={python} alt="python logo" />
        <p>Python</p>
        <img src={pandas} alt="pandas library logo" />
        <p>Pandas</p>
      </section>
    </>
  );
};
export default Tech;
