import { useEffect, useContext, useRef, useState } from "react";
import { MagasinContext } from "../Contexts/Context";
import Client from "../Client/Client";
import classes from "./Magasin.module.css";

const Magasin = () => {
  const { numberOfClients } = useContext(MagasinContext);
  const { setDimensions } = useContext(MagasinContext);
  const [clients, setClients] = useState([]);
  const ref = useRef(null);

  useEffect(() => {
    let newClients = [];
    for (let i = 0; i < numberOfClients; i++) {
      newClients.push(<Client key={i} />);
    }
    setClients(newClients);
  }, [numberOfClients]);

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: ref.current.clientWidth,
        height: ref.current.clientHeight,
      });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setDimensions]);

  return (
    <div className={classes.magasin} ref={ref}>
      {clients.map((client) => {
        return client;
      })}
    </div>
  );
};

export default Magasin;
