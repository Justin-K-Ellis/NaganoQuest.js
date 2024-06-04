import data from "../data/data.json";
import BadEndingTemplate from "../components/BadEndingTemplate";
import stay_at_kk from "../assets/stay_at_kk.jpeg";

const LeaveKK = () => {
  return (
    <BadEndingTemplate
      name={data.stayAtKK.name}
      description={data.stayAtKK.description}
      ending={data.stayAtKK.ending}
      image={stay_at_kk}
    />
  );
};

export default LeaveKK;
