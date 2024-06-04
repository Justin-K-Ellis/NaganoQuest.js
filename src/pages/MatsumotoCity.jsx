import data from "../data/data.json";
import PageTemplate from "../components/PageTemplate";
import matsumoto_city from "../assets/matsumoto_city.jpeg";

const MatsumotoCity = () => {
  return (
    <PageTemplate
      name={data.matsumoto.name}
      description={data.matsumoto.description}
      option1={data.matsumoto.options[1]}
      option2={data.matsumoto.options[2]}
      option1Link="../matsumotocastle"
      option2Link="../matsumotomuseum"
      image={matsumoto_city}
    />
  );
};

export default MatsumotoCity;
