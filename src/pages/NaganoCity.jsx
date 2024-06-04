import data from "../data/data.json";
import PageTemplate from "../components/PageTemplate";
import nagano_city from "../assets/nagano_city.jpeg";

const NaganoCity = () => {
  return (
    <div>
      <PageTemplate
        name={data.naganoCity.name}
        description={data.naganoCity.description}
        option1={data.naganoCity.options[1]}
        option2={data.naganoCity.options[2]}
        option1Link="../zenkouji"
        option2Link="../starbucks"
        image={nagano_city}
      />
    </div>
  );
};

export default NaganoCity;
