import data from "../data/data.json";
import PageTemplate from "../components/PageTemplate";
import matsumoto_station_area from "../assets/matsumoto_station.jpeg";

const MatsumotoStationArea = () => {
  return (
    <PageTemplate
      name={data.matsumotoStation.name}
      description={data.matsumotoStation.description}
      option1={data.matsumotoStation.options[1]}
      option2={data.matsumotoStation.options[2]}
      option1Link="../outinmatsumoto"
      option2Link="../naganocity"
      image={matsumoto_station_area}
    />
  );
};

export default MatsumotoStationArea;
