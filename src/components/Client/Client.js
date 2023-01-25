import { useState, useEffect, useContext, useRef } from "react";
import { MagasinContext } from "../Contexts/Context";
import classes from "./Client.module.css";
import { SettingsContext } from "../Contexts/SettingsContext";
const Client = () => {
  const { maxTempCourse } = useContext(SettingsContext);
  const { minTempCourse } = useContext(SettingsContext);
  const { valeurEnCaisse, setValeurEnCaisse } = useContext(MagasinContext);
  const [translateX, setTranslateX] = useState(Math.random() * 50);
  const { removedClient, setremovedClient } = useContext(MagasinContext);
  const [isInQueue, setIsInQueue] = useState(false);
  const [translateY, setTranslateY] = useState(Math.random() * 30);
  const [directionX, setDirectionX] = useState(Math.random() * 2 - 1);
  const [directionY, setDirectionY] = useState(Math.random() * 2 - 1);
  const clientRef = useRef();
  const { dimensions } = useContext(MagasinContext);
  const rdn = Math.floor(Math.random() * maxTempCourse);
  const [timer, setTimer] = useState(rdn < minTempCourse ? minTempCourse : rdn);
  const { inQueue, setInQueue } = useContext(MagasinContext);
  const [ThisvaleurEnCaisse, setThisvaleurEnCaisse] = useState(
    Math.floor(timer / 5)
  );

  const color = () => {
    switch (true) {
      case timer > 50:
        return "white";
      case timer > 40:
        return "#f2f2f2";
      case timer > 30:
        return "#d9d9d9";
      case timer > 20:
        return "#a9a9a9";
      case timer > 10:
        return "#696969";
      case timer > 0:
        return "#282828";
      case timer == 0:
        return "red";
      default:
        return "red";
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextX = translateX + 5 * directionX;
      const nextY = translateY + 5 * directionY;
      if (nextX + 50 > dimensions.width || nextX < 0) {
        setDirectionX(-directionX);
      }
      if (nextY + 50 > dimensions.height || nextY < 0) {
        setDirectionY(-directionY);
      }
      setTranslateX(nextX);
      setTranslateY(nextY);
    }, 20);
    return () => {
      clearInterval(intervalId);
    };
  }, [
    translateX,
    translateY,
    directionX,
    directionY,
    dimensions.width,
    dimensions.height,
  ]);

  useEffect(() => {
    let intervalTimer;
    intervalTimer = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
      if (timer <= 0) {
        if (!isInQueue) {
          console.log("before" + inQueue);
          setInQueue(inQueue + 1);

          setremovedClient(false);
          //setValeurEnCaisse([...valeurEnCaisse, ThisvaleurEnCaisse]);
          clientRef.current.remove();
        }
        setIsInQueue(true);
        // fully remove client from dom
      }
      if (timer > 10) {
        clientRef.current.style.color = "black";
      }
      //console.log(caisses[0]);
    }, 1000);

    return () => clearInterval(intervalTimer);
  }, [timer]);
  return (
    <div
      ref={clientRef}
      style={{
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        backgroundColor: color(),
        position: "absolute",
        transform: `translate(${translateX}px, ${translateY}px)`,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "12px",
          color: timer == 0 ? "black" : "rgb(190, 45, 45)",
        }}
      >
        {timer}
      </div>
    </div>
  );
};

export default Client;
