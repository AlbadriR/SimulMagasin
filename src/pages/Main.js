import { useState } from "react";
import Magasin from "../components/Magasin/Magasin";
import Caisse from "../components/Caisses/Caisses";
import Stats from "../components/Stats/Stats";
import Buttons from "../components/Buttons/Buttons";
import { MagasinContext } from "../components/Contexts/Context";
const Main = () => {
  const [numberOfClients, setnumberOfClients] = useState(10);
  const [numberOfCaisses, setNumberOfCaisses] = useState(10);
  const [removedClient, setremovedClient] = useState(false);
  const [valeurEnCaisse, setValeurEnCaisse] = useState([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [hour, setHour] = useState(1);
  const [caisses] = useState([]);
  const [inQueue, setInQueue] = useState(null);
  return (
    <div
      className="main"
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <MagasinContext.Provider
        value={{
          numberOfClients,
          setnumberOfClients,
          hour,
          setHour,
          dimensions,
          setDimensions,
          caisses,
          inQueue,
          setInQueue,
          numberOfCaisses,
          setNumberOfCaisses,
          valeurEnCaisse,
          setValeurEnCaisse,
          removedClient,
          setremovedClient,
        }}
      >
        <Magasin></Magasin>
        <Caisse></Caisse>
        <Stats></Stats>
        <Buttons></Buttons>
      </MagasinContext.Provider>
    </div>
  );
};

export default Main;
