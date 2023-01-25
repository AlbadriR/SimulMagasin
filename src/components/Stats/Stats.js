import classes from "./Stats.module.css";
import { useContext, useEffect, useRef, useState } from "react";
import { MagasinContext } from "../Contexts/Context";
const Stats = () => {
  const { timer } = useContext(MagasinContext);
  return (
    <div className={classes.Stats}>
      <p> ________________________________________ </p>
      <p>Caisses : </p>
      <p>Temps avant ouverture : {}</p>
      <p>Clients sans caisse : {}</p>
      <p>Places disponibles : {}</p>
      <p>Nombre de clients : {}</p>
      <p>Temp moyen d'attent : {}</p>
      <p>Heure : {timer}</p>
      <p> ________________________________________ </p>
    </div>
  );
};

export default Stats;
