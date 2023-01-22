import classes from "./Caisses.module.css";
import { useContext, useEffect } from "react";
import { MagasinContext } from "../Contexts/Context";
import Caisse from "../Caisse/Caisse";
const Caisses = () => {
  const { caisses } = useContext(MagasinContext);
  const numberOfCaisse = 13;
 
useEffect(() => {
  for (let i = 0; i < numberOfCaisse; i++) {
    caisses.push(
    <Caisse key={i}></Caisse>
  );
}
},[]);
  return <div className={classes.pointDeVente}>{caisses}</div>;
};

export default Caisses;
