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
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button className="bg-blue-500 rounded-lg py-4 px-12" onClick={playNote}>
        Play
      </button>
      <button
        className="bg-blue-500 rounded-lg py-4 px-12"
        onClick={getRandomTone}
      >
        Randomizer
      </button>
    </div>
  );
};
