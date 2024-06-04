import data from "../data/data.json";
import GoodEndingTemplate from "../components/GoodEndingTemplate";
import matsumoto_museum from "../assets/matsumoto_museum.jpeg";

const MatsumotoMuseum = () => {
  return (
    <GoodEndingTemplate
      name={data.matsumotoMuseum.name}
      description={data.matsumotoMuseum.description}
      ending={data.matsumotoMuseum.ending}
      image={matsumoto_museum}
    />
  );
};

export default MatsumotoMuseum;
