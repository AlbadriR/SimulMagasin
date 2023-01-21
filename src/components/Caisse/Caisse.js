import classes from "./Caisse.module.css";
import { useContext } from "react";
import { MagasinContext } from "../Contexts/Context";
const Caisse = () => {
  const { caisses, setCaisses } = useContext(MagasinContext);
  const numberOfCaisse = (numberOfCaisse) => {
    for (let i = 0; i < numberOfCaisse; i++) {
      setCaisses.push(
        <div key={i} className={classes.caisseAttente}>
          <div className={classes.timer}></div>
        </div>
      );
    }
    return caisses;
  };
  return <div className={classes.pointDeVente}>{numberOfCaisse(13)}</div>;
};

export default Caisse;
