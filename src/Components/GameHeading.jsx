import React, { useContext } from "react";
import { GameMethods } from "../Store/GameContext";

const GameHeading = () => {
  const { score, bestScore } = useContext(GameMethods);

  return (
    <>
      <header>
        <h1 className="game-heading">Pokemon Memory Game</h1>
        <h2 className="warning">
          Click once for glory. Click twice for tragedy. Your fingers have been
          warned.
        </h2>
      </header>
      <div className="game-score">
        <h2 className="score">Score : {score}</h2>
        <h2 className="best-score">Best Score : {bestScore} </h2>
      </div>
    </>
  );
};

export default GameHeading;
