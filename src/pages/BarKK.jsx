import data from "../data/data.json";
import PageTemplate from "../components/PageTemplate";
import bar_kk from "../assets/bar_kk.jpeg";

const BarKK = () => {
  return (
    <PageTemplate
      name={data.kamiKaze.name}
      description={data.kamiKaze.description}
      option1={data.kamiKaze.options[1]}
      option2={data.kamiKaze.options[2]}
      option1Link="../leavekk"
      option2Link="../stayatkk"
      image={bar_kk}
    />
  );
};

export default BarKK;
