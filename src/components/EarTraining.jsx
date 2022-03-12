import React from "react";
import { tones } from "../constants";

export default function EarTraining() {
  function bangNote() {
    let randomIndex = Math.floor(Math.random() * 37);
    let { audioFile } = tones[randomIndex];
    let audioPath = `/audio/${audioFile}`;
    new Audio(audioPath).play();
  }
  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={bangNote}>Click Me</button>
    </div>
  );
}
