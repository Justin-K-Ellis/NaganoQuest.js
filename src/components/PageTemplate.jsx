import Button from "./Button";
import { Link } from "react-router-dom";

const PageTemplate = (props) => {
  return (
    <div
      id="outer-container"
      className="bg-green-100 min-h-screen font-poppins flex flex-col"
    >
      <header className="text-xl p-2 font-bold bg-white shadow-lg">
        <Link to="/">Nagano Quest</Link>
      </header>
      <img src={props.image} alt="" className="object-cover w-full h-36" />
      <div id="content-container" className="flex flex-col m-3 gap-6">
        <h1 className="text-3xl my-1 font-bold">{props.name}</h1>
        <div>{props.description}</div>
        <div id="choices" className="flex flex-col gap-2">
          <Link to={props.option1Link}>
            <Button text={props.option1} />
          </Link>
          <Link to={props.option2Link}>
            <Button text={props.option2} />
          </Link>
        </div>
      </div>
      <footer className="fixed bottom-0 w-full flex">
        <Link to="/" className="justify-center items-center mx-auto my-4">
          <Button text="Restart" className="" />
        </Link>
      </footer>
    </div>
  );
};

export default PageTemplate;
