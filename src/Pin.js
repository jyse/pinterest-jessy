import React from "react";
import "./Pin.css";

function Pin(props) {
  let { id, description, height, term, urls } = props;

  let sizePin = "small";
  if (height >= 4000) {
    sizePin = "medium";
  } else {
    sizePin = "small";
  }

  return (
    <div className="pin">
      <div className="pin__container">
        <div className={`pin__container ${sizePin}`}>
          <img src={urls?.regular ? urls.full : urls} alt="pin" />
        </div>
      </div>
    </div>
  );
}

export default Pin;
