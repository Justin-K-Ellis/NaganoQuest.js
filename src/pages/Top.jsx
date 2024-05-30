import { Link } from "react-router-dom";

import arukuma from "../assets/arukuma.png";

const Top = () => {
  return (
    <div className="bg-green-400 min-h-screen">
      <div className="bg-cyan-300 w-4/5 min-h-screen mx-auto shadow-lg flex flex-col justify-around items-center pb-24">
        <div className="bg-white rounded shadow-lg">
          <h1 className="text-4xl p-3 text-green-950">Nagano Quest!</h1>
        </div>
        <div className="flex justify-center">
          <img src={arukuma} alt="arukuma" className="size-3/4" />
        </div>
        <button className="bg-white rounded shadow-lg text-3xl p-2 text-green-950">
          <Link to="naganocity">Start</Link>
        </button>
      </div>
    </div>
  );
};

export default Top;
