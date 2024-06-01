import PageTemplate from "../components/PageTemplate";
import data from "../data/data.json";
import zenkouji from "../assets/zenkouji.jpeg";

const Zenkouji = () => {
  return (
    <PageTemplate
      name={data.zenKouji.name}
      description={data.zenKouji.description}
      option1={data.zenKouji.options[1]}
      opttion2={data.zenKouji.options[2]}
      image={zenkouji}
    />
  );
};

export default Zenkouji;
