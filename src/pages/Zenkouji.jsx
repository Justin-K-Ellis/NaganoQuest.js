import PageTemplate from "../components/PageTemplate";
import data from "../data/data.json";
import zenkouji from "../assets/zenkouji.jpeg";

const Zenkouji = () => {
  return (
    <PageTemplate
      name={data.zenKouji.name}
      description={data.zenKouji.description}
      option1={data.zenKouji.options[1]}
      option2={data.zenKouji.options[2]}
      option1Link="../zenkoujitunnel"
      option2Link="../icecream"
      image={zenkouji}
    />
  );
};

export default Zenkouji;
