import { RouterProvider } from "react-router-dom";
import Router from "./Router";
import PlayerNameContext from "./PlayerNameContext";
import { useState } from "react";

const App = () => {
  const [playerName, setPlayerName] = useState("Traveler");
  return (
    <PlayerNameContext.Provider value={[playerName, setPlayerName]}>
      <RouterProvider router={Router} />;
    </PlayerNameContext.Provider>
  );
};

export default App;
