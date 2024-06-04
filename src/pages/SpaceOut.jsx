import data from "../data/data.json";
import BadEndingTemplate from "../components/BadEndingTemplate";
import space_out from "../assets/space_out.jpeg";

const SpaceOut = () => {
  return (
    <BadEndingTemplate
      name={data.spaceOut.name}
      description={data.spaceOut.description}
      image={space_out}
      ending={data.spaceOut.ending}
    />
  );
};

export default SpaceOut;
