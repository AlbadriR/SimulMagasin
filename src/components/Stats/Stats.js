import classes from "./Stats.module.css";
import { useContext, useEffect, useRef, useState } from "react";
import { MagasinContext } from "../Contexts/Context";
const Stats = () => {
  const { hour, setHour } = useContext(MagasinContext);
  const { inQueue } = useContext(MagasinContext);
  const { numberOfClients } = useContext(MagasinContext);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMinutes((prevMinutes) => {
        if (prevMinutes >= 10) {
          setHour(hour + 1);
          return prevMinutes - 10;
        }
        return prevMinutes + 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [minutes]);

  return (
    <div className={classes.Stats}>
      <p> ________________________________________ </p>
      <p>Caisses : </p>
      <p>Temps avant ouverture : {}</p>
      <p>Clients sans caisse : {numberOfClients - inQueue}</p>
      <p>Places disponibles : {}</p>
      <p>Nombre de clients : {numberOfClients}</p>
      <p>Temp moyen d'attent : {}</p>
      <p>
        Heure : {hour}H{minutes}
      </p>
      <p> ________________________________________ </p>
    </div>
  );
};

export default Stats;
