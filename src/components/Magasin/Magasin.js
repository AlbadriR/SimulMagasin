import { useEffect, useState, useRef } from "react";
import Client from "../Client/Client";
import classes from "./Magasin.module.css";

const Magasin = (props) => {
  const [timer, setTimer] = useState(10);
  const [numberOfClients, setnumberOfClients] = useState(10);
  const ref = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const addClients = (n) => {
    setnumberOfClients(numberOfClients + n);
  };

  const addTime = (n) => {
    setTimer(timer + n);
  };

  const initClients = () => {
    let clients = [];
    for (let i = 0; i < numberOfClients; i++) {
      clients.push(
        <Client
          tempRestant={timer}
          width={dimensions.width}
          height={dimensions.height}
        ></Client>
      );
    }
    return clients;
  };
  useEffect(() => {
    if (ref.current) {
      setDimensions({
        width: ref.current.clientWidth, // return the magasin width in px
        height: ref.current.clientHeight, // return the magasin height in px
      });
    }

    let intervalId;
    if (timer > 0) {
      intervalId = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [timer, ref, numberOfClients]);
  return (
    <div className={classes.magasin} ref={ref}>
      {initClients()}
    </div>
  );
};

export default Magasin;
