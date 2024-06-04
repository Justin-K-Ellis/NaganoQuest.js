import data from "../data/data.json";
import BadEndingTemplate from "../components/BadEndingTemplate";
import leave_kk from "../assets/leave_kk.jpeg";

const LeaveKK = () => {
  return (
    <BadEndingTemplate
      name={data.leaveKK.name}
      description={data.leaveKK.description}
      ending={data.leaveKK.ending}
      image={leave_kk}
    />
  );
};

export default LeaveKK;
