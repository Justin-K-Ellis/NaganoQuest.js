import data from "../data/data.json";
import BadEndingTemplate from "../components/BadEndingTemplate";
import ice_cream from "../assets/ice_cream.jpeg";

const IceCream = () => {
  return (
    <BadEndingTemplate
      name={data.iceCream.name}
      description={data.iceCream.description}
      image={ice_cream}
      ending={data.iceCream.ending}
    />
  );
};

export default IceCream;
