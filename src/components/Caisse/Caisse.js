import { useContext, useState, useRef, useEffect } from "react";
import { MagasinContext } from "../Contexts/Context";
import classes from "./Caisse.module.css";
const Caisse = (props) => {
  const { numberOfClients, setnumberOfClients } = useContext(MagasinContext);
  const [isActive, setIsActive] = useState(false);
  const [timerCaisse, settimerCaisse] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const caisseRef = useRef();
  const { dimensions } = useContext(MagasinContext);
  const [timer, setTimer] = useState(props.queue);
  const { inQueue, setInQueue } = useContext(MagasinContext);
  const { removedClient, setremovedClient } = useContext(MagasinContext);
  useEffect(() => {
    setTimer(props.queue);
    if (props.queue > 0) {
      setIsEmpty(false);
      for (let i = 0; i < props.queue; i++) {
        setTimeout(() => {
          if (timer > 0) {
            //console.log("b" + inQueue);
            setInQueue(inQueue - 1);
            //setnumberOfClients(numberOfClients - 1);
            setremovedClient(true);
            //console.log("a" + inQueue);
          }
        }, /*props.valEnCaisse[i] * */ 3000);
      }
    }
    if (props.queue === 0) {
      setIsEmpty(true);
    }
    if (isEmpty) {
    }
  }, [props.queue]);

  useEffect(() => {
    let intervalTimer;
    if (timerCaisse < 0) {
      settimerCaisse(3);
    }
    intervalTimer = setInterval(() => {
      if (!isEmpty) {
        settimerCaisse((timerCaisse) => timerCaisse - 1);
      } else {
        settimerCaisse(null);
      }
    }, 1000);
    return () => clearInterval(intervalTimer);
  }, [timerCaisse, props.queue]);
  return (
    <div
      ref={caisseRef}
      style={{ width: dimensions.width, height: dimensions.height }}
    >
      <div className={classes.caisseAttente}>
        {props.queue > 0
          ? [...Array(props.queue)].map((i) => (
              <div key={i} className={classes.client}></div>
            ))
          : null}
        <div className={isEmpty ? classes.caisseEmpty : classes.caisseNotEmpty}>
          <div className={classes.timer}>{timerCaisse}</div>
        </div>
      </div>
    </div>
  );
};
export default Caisse;
