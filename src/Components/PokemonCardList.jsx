import React, { useContext } from "react";
import { GameMethods } from "../Store/GameContext";
import PokenmonCard from "./PokenmonCard";

const PokemonCardList = () => {
  const { cardInformation, shuffleCards } = useContext(GameMethods);

  return (
    <div onClick={shuffleCards} className="all-cards">
      {cardInformation?.map((card, index) => (
        <PokenmonCard key={index} card={card} />
      ))}
    </div>
  );
};

export default PokemonCardList;
