import classes from "./Caisses.module.css";
import { useContext, useEffect, useRef, useState } from "react";
import { MagasinContext } from "../Contexts/Context";
import { SettingsContext } from "../Contexts/SettingsContext";
import Caisse from "../Caisse/Caisse";
const Caisses = () => {
  const [caisses, setCaisses] = useState([]);
  const { inQueue } = useContext(MagasinContext);
  const { maxCaisse, setMaxCaisse } = useContext(SettingsContext);
  const { valeurEnCaisse, setValeurEnCaisse } = useContext(MagasinContext);
  const { removedClient, setremovedClient } = useContext(MagasinContext);
  const numberOfCaisse = 13;
  const MaxQueue = 5;
  let oldQueue = 0;
  useEffect(() => {
    const newCaisses = [];
    for (let i = 0; i < maxCaisse; i++) {
      newCaisses.push({ id: i, queue: 0 /*valEnCaisse: []*/ });
    }
    setCaisses(newCaisses);
  }, []);

  useEffect(() => {
    const incrementQueue = () => {
      setCaisses((prevCaisses) => {
        console.log("after" + inQueue);
        const newCaisses = [...prevCaisses];
        for (let i = 0; i <= numberOfCaisse; i++) {
          if (newCaisses[i].queue < MaxQueue) {
            if (removedClient) {
              newCaisses[i] = {
                ...newCaisses[i],
                queue: newCaisses[i].queue - removedClient,
                /*valEnCaisse: [...valeurEnCaisse],*/
              };
            } else {
              newCaisses[i] = {
                ...newCaisses[i],
                queue: newCaisses[i].queue + 1,
                /*valEnCaisse: [...valeurEnCaisse],*/
              };
            }

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
          valEnCaisse={caisse.valEnCaisse}
        />
      ))}
    </div>
  );
};

export default Caisses;
