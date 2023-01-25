import { useState, useEffect, useContext, useRef } from "react";
import { MagasinContext } from "../Contexts/Context";
import classes from "./Client.module.css";
const Client = () => {
  const [translateX, setTranslateX] = useState(Math.random() * 50);
  const [isInQueue, setIsInQueue] = useState(false);
  const [translateY, setTranslateY] = useState(Math.random() * 30);
  const [directionX, setDirectionX] = useState(Math.random() * 2 - 1);
  const [directionY, setDirectionY] = useState(Math.random() * 2 - 1);
  const clientRef = useRef();
  const { dimensions } = useContext(MagasinContext);
  const [timer, setTimer] = useState(Math.floor(Math.random() * 40));

  const { inQueue, setInQueue } = useContext(MagasinContext);
  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextX = translateX + 10 * directionX;
      const nextY = translateY + 10 * directionY;
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
          setInQueue(inQueue + 1);
          clientRef.current.remove();
        }
        setIsInQueue(true);
        // fully remove client from dom
      }

      //console.log(caisses[0]);
    }, 1000);

    return () => clearInterval(intervalTimer);
  }, [timer]);
  return (
    <div
      ref={clientRef}
      className={classes.client}
      style={{ transform: `translate(${translateX}px, ${translateY}px)` }}
    >
      <div className={classes.center}>{timer}</div>
    </div>
  );
};

export default Client;
