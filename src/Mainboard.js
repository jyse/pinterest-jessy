import React from "react";
import "./Mainboard.css";
import Pin from "./Pin";

function Mainboard(props) {
  let { pins } = props;
  return (
    <div className="mainboard">
      {pins.map((image, index) => {
        let { id, description, height, term, urls } = image;
        return <Pin key={index} id={id} height={height} urls={urls} />;
      })}
    </div>
  );
}

export default Mainboard;
