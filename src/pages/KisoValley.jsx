import data from "../data/data.json";
import GoodEndingTemplate from "../components/GoodEndingTemplate";
import kiso from "../assets/kiso.jpeg";

const KisoValley = () => {
  return (
    <GoodEndingTemplate
      name={data.kiso.name}
      description={data.kiso.description}
      ending={data.kiso.ending}
      image={kiso}
    />
  );
};

export default KisoValley;
