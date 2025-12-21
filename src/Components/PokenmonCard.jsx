import React, { useContext } from "react";
import { GameMethods } from "../Store/GameContext";

const PokenmonCard = ({ card }) => {
  const { handleCardClicked } = useContext(GameMethods);

  return (
    <>
      <div onClick={() => handleCardClicked(card.id)} className="pokemon-card">
        <div className="pokemon-card-image">
          <img
            className="pokemon-image"
            src={card.sprites.front_default}
            alt={card.name}
          />
        </div>
        <div className="pokemon-card-content">
          <h2 className="pokemon-name">Name : {card.name}</h2>
          <h2 className="pokemon-abilities">
            Abilities :
            {card.abilities.map((abilities) => abilities.ability.name)}
          </h2>
        </div>
      </div>
    </>
  );
};

export default PokenmonCard;
