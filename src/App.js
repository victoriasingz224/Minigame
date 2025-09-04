/** MAKE SURE TO FORK THE PROJECT BEFORE EDITING (top right button) */
/** There are 10 TO-DO's to complete below! Use your React knowledge to complete the tasks. */

import "./styles.css";
import React, { useState } from "react";

function GoatRace() {
  // TO-DO: using useState(), make the variable goat1Position and the setter setGoat1Position (init to 0)
  [goat1Position, setGoat1Position] = useState(0);

  // TO-DO: using useState(), make the variable goat2Position and the setter setGoat2Position (init to 0)
  [goat2Position, setGoat2Position] = useState(0);

  const [winner, setWinner] = useState("");

  const FINISH_LINE = 10; // 10 steps to win
  const STEP_SIZE = 1; // Play around with this!

  const moveGoat1 = () => {
    // TO-DO: create a new const variable called newPosition and set it to the position of goat1 incremented by STEP_SIZE
    const newPosition = goat1Position + STEP_SIZE;

    // Check win state
    if (newPosition >= FINISH_LINE && !winner) {
      setWinner("🐐 Goat 1 Wins! 🎉");
      setGoat1Position(FINISH_LINE);
    } else {
      // TO-DO: use setGoat1Position(...) to update goat1's position with the new position
      setGoat1Position(newPosition);
    }
  };

  const moveGoat2 = () => {
    // TO-DO: create a new const variable called newPosition and set it to the position of goat2 incremented by STEP_SIZE
    const newPosition = goat2Position + STEP_SIZE;
    // Check win state
    if (newPosition >= FINISH_LINE && !winner) {
      setWinner("🐐 Goat 2 Wins! 🎉");
      setGoat2Position(FINISH_LINE);
    } else {
      // TO-DO: use setGoat2Position(...) to update goat2's position with the new position
      setGoat2Position(newPosition);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>🐐 Goat Racing Championship! 🐐</h1>

      {/* Race Track */}
      <div
        style={{ margin: "20px 0", fontFamily: "monospace", fontSize: "24px" }}
      >
        {/* Goat 1 Track */}
        <div>
          {"🟫".repeat(goat1Position)}🐐
          {"⬜".repeat(FINISH_LINE - goat1Position)} 🏁
          <span style={{ marginLeft: "10px" }}>Steps: {goat1Position}</span>
        </div>

        {/* Goat 2 Track */}
        <div>
          {"🟫".repeat(goat2Position)}🐐
          {"⬜".repeat(FINISH_LINE - goat2Position)} 🏁
          <span style={{ marginLeft: "10px" }}>Steps: {goat2Position}</span>
        </div>
      </div>

      {/* Buttons */}
      <div>
        <button
          onClick={moveGoat1} // TO-DO: replace "null" with the function we should call when we click this button
          disabled={winner}
          style={{ margin: "10px", padding: "10px 20px", fontSize: "16px" }}
        >
          Move Goat 1! 🐐
        </button>
        <button
          onClick={moveGoat2} // TO-DO: replace "null" with the function we should call when we click this button
          disabled={winner}
          style={{ margin: "10px", padding: "10px 20px", fontSize: "16px" }}
        >
          Move Goat 2! 🐐
        </button>
      </div>

      {/* Winner */}
      {winner && (
        <div
          style={{ fontSize: "32px", textAlign: "center", marginTop: "20px" }}
        >
          {winner}
        </div>
      )}

      {/* Reset Button */}
      {winner && (
        <button
          onClick={() => {
            // TO-DO: reset goat position for both goats
            setGoat1Position(0);
            setGoat2Position(0);
            // TO-DO: reset winner
            setWinner("");
          }}
          style={{ display: "block", margin: "20px auto", padding: "10px" }}
        >
          New Race! 🏁
        </button>
      )}
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <GoatRace />
    </div>
  );
}
