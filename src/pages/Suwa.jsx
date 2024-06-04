import data from "../data/data.json";
import GoodEndingTemplate from "../components/GoodEndingTemplate";
import lake_suwa from "../assets/lake_suwa.jpeg";

const KisoValley = () => {
  return (
    <GoodEndingTemplate
      name={data.suwa.name}
      description={data.suwa.description}
      ending={data.suwa.ending}
      image={lake_suwa}
    />
  );
};

export default KisoValley;
