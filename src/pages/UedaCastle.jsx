import data from "../data/data.json";
import PageTemplate from "../components/PageTemplate";
import ueda_castle from "../assets/ueda_castle.jpeg";

const UedaCastle = () => {
  return (
    <PageTemplate
      name={data.uedaCastle.name}
      description={data.uedaCastle.description}
      option1={data.uedaCastle.options[1]}
      option2={data.uedaCastle.options[2]}
      option1Link="../matsumotocity"
      option2Link="../barKK"
      image={ueda_castle}
    />
  );
};

export default UedaCastle;
