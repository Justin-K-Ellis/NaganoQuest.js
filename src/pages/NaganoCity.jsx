import data from "../data/data.json";

const NaganoCity = () => {
  return (
    <div>
      <h1>{data.naganoCity.name}</h1>
      <p>{data.naganoCity.description}</p>
      <button>{data.naganoCity.options[1]}</button>
      <button>{data.naganoCity.options[2]}</button>
    </div>
  );
};

export default NaganoCity;
