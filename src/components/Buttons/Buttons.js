import classes from "./Buttons.module.css";
import { useContext, useEffect } from "react";
import { MagasinContext } from "../Contexts/Context";
import { SettingsContext } from "../Contexts/SettingsContext";
const Buttons = () => {
  const { numberOfClients, setnumberOfClients } = useContext(MagasinContext);
  const { hour, setHour } = useContext(MagasinContext);
  const { maxClient } = useContext(SettingsContext);
  const { clientParHeure } = useContext(SettingsContext);
  const addClients = (n) => {
    setnumberOfClients(numberOfClients + n);
  };
  setInterval(addClients.bind(this, clientParHeure), 60000);

  const addTime = (n) => {
    setHour(hour + n);
  };
  return (
    <div className={classes.Buttons}>
      <button onClick={() => addClients(maxClient <= 0 ? 5 : maxClient)}>
        Ajouter {maxClient <= 0 ? 5 : maxClient} clients
      </button>
      <button onClick={() => addTime(1)}>Ajouter 1H</button>
    </div>
  );
};

export default Buttons;
