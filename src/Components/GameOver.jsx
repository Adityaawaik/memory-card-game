import React, { useContext } from "react";
import { GameMethods } from "../Store/GameContext";

const GameOver = () => {
  const { bestScore } = useContext(GameMethods);
  return (
    <div className="game-over-contaienr">
      <h2 className="game-over">GAME OVER</h2>
      <h2 className="user-best-score">Your Best Score is : {bestScore}</h2>

      <div className="restart-game-btn">
        <button className="restart">Restart</button>
      </div>
    </div>
  );
};

export default GameOver;
