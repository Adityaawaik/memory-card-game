import "./App.css";
import GameHeading from "./Components/GameHeading";
import PokemonCardList from "./Components/PokemonCardList";
import GameProvider from "./Store/GameApiStorage";
import GameOver from "./Components/GameOver";
import { useContext } from "react";
import { GameMethods } from "./Store/GameContext";
import Loading from "./Components/Loading";

function App() {
  const { tab, fetching } = useContext(GameMethods);

  return (
    <>
      <GameHeading />
      {fetching && <Loading />}
      {!tab ? <PokemonCardList /> : <GameOver />}
    </>
  );
}

export default App;
