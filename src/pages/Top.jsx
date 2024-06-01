import { Link } from "react-router-dom";
import Button from "../components/Button";

import arukuma from "../assets/arukuma.png";

const Top = () => {
  return (
    <div className="bg-green-100 min-h-screen font-poppins">
      <div className="bg-cyan-100 w-11/12 min-h-screen mx-auto shadow-lg flex flex-col justify-around items-center pb-24">
        <div className="bg-white rounded shadow-lg">
          <h1 className="text-4xl p-3 text-green-950 font-bold">
            Nagano Quest!
          </h1>
        </div>
        <div className="flex justify-center">
          <img src={arukuma} alt="arukuma" className="size-3/4" />
        </div>
        <Link to="welcome">
          <Button text="Start" />
        </Link>
      </div>
    </div>
  );
};

export default Top;
