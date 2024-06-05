import { Link } from "react-router-dom";

import Button from "../components/Button";
import kamikouchi from "../assets/kamikouchi.jpeg";

const WelcomePage = () => {
  return (
    <div className="bg-green-100 min-h-screen font-poppins">
      <header className="text-xl p-2 font-bold bg-white shadow-lg">
        Nagano Quest
      </header>
      <img
        src={kamikouchi}
        alt=""
        className="object-cover w-full h-36 md:h-56"
      />
      <div
        id="content-container"
        className="flex flex-col m-3 gap-6 md:mx-auto md:w-7/12"
      >
        <h1 className="text-3xl my-1 font-bold">Welcome to Nagano!</h1>
        <div className="text-justify">
          Here we are in Nagano, the roof of Japan. Also known as Shinshu and
          Shinano no Kuni, you can start your journey at one of these four
          locations:
        </div>
        <div id="choices" className="flex flex-col gap-2">
          <Link to="../naganocity">
            <Button text="Nagano City" />
          </Link>
          <Link to="../uedacity">
            <Button text="Ueda City" />
          </Link>
          <Link to="../matsumotocity">
            <Button text="Matsumoto City" />
          </Link>
          <Link to="../thesouth">
            <Button text="The South" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
