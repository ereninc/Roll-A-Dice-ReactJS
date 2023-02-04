import React from "react";
import "../styles/Die.css";

function Die(props) {
  return (
    <div>
      <i
        className={`Die fas fa-dice-${props.value} ${
          props.rolling ? "Die-rolling" : ""
        }`}
      />
    </div>
  );
}

export default Die;
