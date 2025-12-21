import { createContext } from "react";

const defaultContext = {
  cardInformation: [],
  score: 0,
  bestScore: 0,
  fetching: false,
  shuffleCards: () => {},
  handleCardClicked: () => {},
};

export const GameMethods = createContext(defaultContext);
