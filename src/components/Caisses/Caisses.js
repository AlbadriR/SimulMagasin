import classes from "./Caisses.module.css";
import { useContext, useEffect, useRef, useState } from "react";
import { MagasinContext } from "../Contexts/Context";
import Caisse from "../Caisse/Caisse";
const Caisses = () => {
  const [caisses, setCaisses] = useState([]);
  const { inQueue } = useContext(MagasinContext);
  const numberOfCaisse = 13;
  const MaxQueue = 5;
  let oldQueue = 0;
  useEffect(() => {
    const newCaisses = [];
    for (let i = 0; i < numberOfCaisse; i++) {
      newCaisses.push({ id: i, queue: 0, maxQueue: 5 });
    }
    setCaisses(newCaisses);
  }, []);

  useEffect(() => {
    const incrementQueue = () => {
      setCaisses((prevCaisses) => {
        const newCaisses = [...prevCaisses];
        for (let i = 0; i <= numberOfCaisse; i++) {
          if (newCaisses[i].queue < MaxQueue) {
            newCaisses[i] = {
              ...newCaisses[i],
              queue: newCaisses[i].queue + 1,
            };
            break;
          }
        }
        return newCaisses;
      });
    };

    incrementQueue();
  }, [inQueue]);

  return (
    <div className={classes.pointDeVente}>
      {caisses.map((caisse) => (
        <Caisse
          key={caisse.id}
          queue={caisse.queue}
          maxQueue={caisse.maxQueue}
        />
      ))}
    </div>
  );
};

export default Caisses;
