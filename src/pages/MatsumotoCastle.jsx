import data from "../data/data.json";
import PageTemplate from "../components/PageTemplate";
import matsumoto_castle from "../assets/matsumoto_castle.jpeg";

export const MatsumotoCastle = () => {
  return (
    <PageTemplate
      name={data.matsumotoCastle.name}
      description={data.matsumotoCastle.description}
      option1={data.matsumotoCastle.options[1]}
      option2={data.matsumotoCastle.options[2]}
      option1Link="../matsumotostationarea"
      option2Link="../matsumotomuseum"
      image={matsumoto_castle}
    />
  );
};

export default MatsumotoCastle;
