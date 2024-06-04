import data from "../data/data.json";
import GoodEndingTemplate from "../components/GoodEndingTemplate";
import zenkouji_tunnel from "../assets/zenkouji_tunnel.jpeg";

const ZenKoujiTunnel = () => {
  return (
    <GoodEndingTemplate
      name={data.zenkoujiTunnel.name}
      description={data.zenkoujiTunnel.description}
      image={zenkouji_tunnel}
      ending={data.zenkoujiTunnel.ending}
    />
  );
};

export default ZenKoujiTunnel;
