import React from "react";
import { tones } from "../constants";

export const GameRound = ({ currentTone, setRandomTone }) => {
  function getRandomTone() {
    let randomIndex = Math.floor(Math.random() * 37);
    setRandomTone(tones[randomIndex]);
  }

  function playNote() {
    new Audio(`/audio/${currentTone.audioFile}`).play();
    console.log(currentTone);
  }

  return (
    <div>
      <h1>{currentTone.note}</h1>
      <button onClick={playNote}>Play</button>
      <button onClick={getRandomTone}>Randomizer</button>
    </div>
  );
};
