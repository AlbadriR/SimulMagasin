import { useEffect, useContext, useRef } from "react";
import { MagasinContext } from "../Contexts/Context";
import Client from "../Client/Client";
import classes from "./Magasin.module.css";

const Magasin = () => {
  const { numberOfClients } = useContext(MagasinContext);
  const { setDimensions } = useContext(MagasinContext);
  const ref = useRef(null);

  const initClients = () => {
    let clients = [];
    for (let i = 0; i <= numberOfClients; i++) {
      clients.push(<Client key={i}></Client>);
    }
    return clients;
  };

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: ref.current.clientWidth, // return the magasin width in px
        height: ref.current.clientHeight, // return the magasin height in px
      });
    };
    handleResize(); // On l'appelle une première fois pour initialiser les dimensions
    window.addEventListener("resize", handleResize); // si les dimensions changent, on les met à jour
  }, [setDimensions]);
  return (
    <div className={classes.magasin} ref={ref}>
      {initClients()}
    </div>
  );
};

export default Magasin;
