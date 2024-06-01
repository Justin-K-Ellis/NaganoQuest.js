import PageTemplate from "../components/PageTemplate";
import data from "../data/data.json";
import ueda_city from "../assets/arukuma.png";

const UedaCity = () => {
  return (
    <PageTemplate
      name={data.uedaCity.name}
      description={data.uedaCity.description}
      option1={data.uedaCity.options[1]}
      option2={data.uedaCity.options[2]}
      option1Link=""
      option2Link=""
      image={ueda_city}
    />
  );
};

export default UedaCity;
