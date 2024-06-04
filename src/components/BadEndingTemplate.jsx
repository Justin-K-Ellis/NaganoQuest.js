import Button from "./Button";
import { Link } from "react-router-dom";
import { useContext } from "react";
import PlayerNameContext from "../PlayerNameContext";

const PageTemplate = (props) => {
  const playerName = useContext(PlayerNameContext);

  return (
    <div
      id="outer-container"
      className="bg-green-100 min-h-screen font-poppins flex flex-col"
    >
      <header className="text-xl p-2 font-bold bg-white shadow-lg">
        <Link to="/">Nagano Quest</Link>
      </header>
      <img src={props.image} alt="" className="object-cover w-full h-36" />
      <div
        id="content-container"
        className="flex flex-col m-3 gap-6 md:w-7/12 md:mx-auto"
      >
        <h1 className="text-3xl my-1 font-bold">{props.name}</h1>
        <div className="text-justify">{props.description}</div>
        <div id="choices" className="flex flex-col gap-2 items-center">
          <p className="bg-orange-500 rounded shadow-lg text-xl text-center p-2 md:max-w-md">
            {props.ending}
            <br />
            Too bad, {playerName}.
          </p>
        </div>
      </div>
      <footer className="fixed bottom-0 w-full flex">
        <Link to="/" className="justify-center items-center mx-auto my-4">
          <Button text="Try Again" className="" />
        </Link>
      </footer>
    </div>
  );
};

export default PageTemplate;
