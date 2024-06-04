import PageTemplate from "../components/PageTemplate";
import data from "../data/data.json";
import ueda_city from "../assets/maruko.jpeg";

const UedaCity = () => {
  return (
    <PageTemplate
      name={data.uedaCity.name}
      description={data.uedaCity.description}
      option1={data.uedaCity.options[1]}
      option2={data.uedaCity.options[2]}
      option1Link="../uedacastle"
      option2Link="../barKK"
      image={ueda_city}
    />
  );
};

export default UedaCity;
