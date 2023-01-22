import { useState } from "react";
import Magasin from "../components/Magasin/Magasin";
import Caisse from "../components/Caisses/Caisses";
import Stats from "../components/Stats/Stats";
import Buttons from "../components/Buttons/Buttons";
import { MagasinContext } from "../components/Contexts/Context";
const Main = () => {
  const [numberOfClients, setnumberOfClients] = useState(10);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [timer, setTimer] = useState(1);
  const [caisses] = useState([]);
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
          timer,
          setTimer,
          dimensions,
          setDimensions,
          caisses,
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
