import React, { useState } from "react";
import { GameRound } from "./GameRound";

export const EarTraining = () => {
  const [randomTone, setRandomTone] = useState({
    audioFile: "",
    freq: "",
    note: "",
  });

  return (
    <div>
      <GameRound currentTone={randomTone} setRandomTone={setRandomTone} />
    </div>
  );
};
