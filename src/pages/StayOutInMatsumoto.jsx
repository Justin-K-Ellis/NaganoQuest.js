import data from "../data/data.json";
import GoodEndingTemplate from "../components/GoodEndingTemplate";
import out_in_matsumoto from "../assets/out_in_matsumoto.jpeg";

const StayOutInMatsumoto = () => {
  return (
    <GoodEndingTemplate
      name={data.stayOutInMatsumoto.name}
      description={data.stayOutInMatsumoto.description}
      ending={data.stayOutInMatsumoto.ending}
      image={out_in_matsumoto}
    />
  );
};

export default StayOutInMatsumoto;
