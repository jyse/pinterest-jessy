import React from "react";
import Pin from "./Pin";
import "./Mainboard.css";

function Mainboard(props) {
  let { pins } = props;

  return (
    <div className="mainboard">
      {pins.map((pin) => {
        let { urls } = pin;
        return <Pin urls={urls} />;
      })}
    </div>
  );
}

export default Mainboard;
