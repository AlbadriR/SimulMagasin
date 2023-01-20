import classes from "./Buttons.module.css";
import { useContext } from "react";
import { MagasinContext } from "../Contexts/Context";
const Buttons = () => {
  const { numberOfClients, setnumberOfClients } = useContext(MagasinContext);
  const { timer, setTimer } = useContext(MagasinContext);
  const addClients = (n) => {
    setnumberOfClients(numberOfClients + n);
    console.log(numberOfClients);
  };

  const addTime = (n) => {
    setTimer(timer + n);
  };
  return (
    <div className={classes.Buttons}>
      <button onClick={() => addClients(5)}>Ajouter 5 clients</button>
      <button onClick={() => addTime(1)}>Ajouter 1H</button>
    </div>
  );
};

export default Buttons;
