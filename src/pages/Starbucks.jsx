import data from "../data/data.json";
import PageTemplate from "../components/PageTemplate";
import starbucks from "../assets/starbucks.jpeg";

const Starbucks = () => {
  return (
    <PageTemplate
      name={data.starbucks.name}
      description={data.starbucks.description}
      option1={data.starbucks.options[1]}
      option2={data.starbucks.options[2]}
      option1Link="../spaceout"
      option2Link="../welcome"
      image={starbucks}
    />
  );
};

export default Starbucks;
