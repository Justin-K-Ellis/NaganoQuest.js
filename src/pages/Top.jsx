import { Link } from "react-router-dom";
// import { useState } from "react";
import Button from "../components/Button";
import PlayerNameContext from "../PlayerNameContext";
import arukuma from "../assets/arukuma.png";
import { useContext } from "react";

const Top = () => {
  const [playerName, setPlayerName] = useContext(PlayerNameContext);
  function handleChange(event) {
    const name = event.target.value;
    setPlayerName(name);
  }

  return (
    <div className="bg-green-100 min-h-screen font-poppins">
      <div className="bg-cyan-100 w-11/12 md:w-7/12 min-h-screen mx-auto shadow-lg flex flex-col justify-around items-center pb-24">
        <div className="bg-white rounded shadow-lg">
          <h1 className="text-4xl p-3 text-green-950 font-bold">
            Nagano Quest!
          </h1>
        </div>
        <div className="flex justify-center">
          <img src={arukuma} alt="arukuma" className="size-1/2" />
        </div>
        <div className="flex flex-col gap-2 justify-center items-center">
          <p className="text-2xl">Welcome {playerName}</p>
          <form>
            <input
              type="text"
              placeholder="Your name"
              className="p-1 shadow-md rounded text-xl text-center"
              onChange={handleChange}
            />
          </form>
        </div>
        <Link to="welcome">
          <Button text="Start" />
        </Link>
      </div>
    </div>
  );
};

export default Top;
