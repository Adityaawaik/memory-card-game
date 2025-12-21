import { useEffect, useState } from "react";
import { GameMethods } from "./GameContext";

const GameProvider = ({ children }) => {
  const [cardInformation, setCardInformation] = useState([]);
  const [cardClicked, setCardClicked] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);
    const fetchingApi = async () => {
      const pokemonApi = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=20"
      );
      const pokemonApiResponse1 = await pokemonApi.json();
      const pokemonApi2 = await pokemonApiResponse1.results.map((pokeApi) =>
        fetch(pokeApi.url)
      );
      const pokemonApiResponse2 = await Promise.all(pokemonApi2);
      const pokemonApiResponseGot = await Promise.all(
        pokemonApiResponse2.map((eachPokemonUrl) => eachPokemonUrl.json())
      );
      setCardInformation(pokemonApiResponseGot);
      setFetching(false);
    };
    fetchingApi();
  }, []);

  const shuffleCards = () => {
    const allCards = [...cardInformation];

    for (let i = allCards.length - 1; i > 0; i--) {
      const randomNum = Math.floor(Math.random() * i);
      [allCards[i], allCards[randomNum]] = [allCards[randomNum], allCards[i]];
    }
    setCardInformation(allCards);
  };

  const handleCardClicked = (id) => {
    if (cardClicked.includes(id)) {
      if (score > bestScore) setBestScore(score);
      setScore(0);
      setCardClicked([]);
      shuffleCards();
      return;
    }
    setCardClicked([...cardClicked, id]);
    setScore(score + 1);
    shuffleCards();
  };

  return (
    <GameMethods.Provider
      value={{
        cardInformation,
        score,
        bestScore,
        shuffleCards,
        handleCardClicked,
        fetching,
      }}
    >
      {children}
    </GameMethods.Provider>
  );
};

export default GameProvider;
