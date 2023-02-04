import Die from "./Die";
import React, { useState } from "react";
import DieHelper from "../helpers/DieHelper";
import "../styles/RollDice.css";

function RollDice() {
  const [dice1, setDice1] = useState(["one"]);
  const [dice2, setDice2] = useState(["six"]);
  const [rolling, setRolling] = useState(false);

  return (
    <div>
      <div className="RollDice">
        <div className="RollDice-container">
          <Die value={dice1} rolling={rolling} />
          <Die value={dice2} rolling={rolling} />
        </div>
        <button
          className="RollDice-button"
          onClick={(e) => {
            onRolling(e, setDice1, setDice2, setRolling);
          }}
          disabled={rolling}
        >
          {rolling ? "Rolling..." : "Roll a Dice!"}
        </button>
      </div>
    </div>
  );
}

function onRolling(e, setDice1, setDice2, setRolling) {
  e.preventDefault();
  setRolling(true);
  setTimeout(() => {
    setDice1(
      DieHelper.sides[Math.floor(Math.random() * DieHelper.sides.length)]
    );
    setDice2(
      DieHelper.sides[Math.floor(Math.random() * DieHelper.sides.length)]
    );
  }, 500);
  setTimeout(() => {
    setRolling(false);
  }, 1000);
}

export default RollDice;
