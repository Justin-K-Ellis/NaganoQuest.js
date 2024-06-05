import data from "../data/data.json";
import PageTemplate from "../components/PageTemplate";
import the_south from "../assets/the_south.jpeg";

const TheSouth = () => {
  return (
    <PageTemplate
      name={data.theSouth.name}
      description={data.theSouth.description}
      option1={data.theSouth.options[1]}
      option2={data.theSouth.options[2]}
      option1Link="../kiso"
      option2Link="../suwa"
      image={the_south}
    />
  );
};

export default TheSouth;
