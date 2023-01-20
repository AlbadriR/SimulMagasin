import { useState, useEffect } from "react";
import classes from "./Client.module.css";
const Client = (props) => {
  const [translateX, setTranslateX] = useState(Math.random() * 50);
  const [translateY, setTranslateY] = useState(Math.random() * 30);
  const [directionX, setDirectionX] = useState(Math.random() * 2 - 1);
  const [directionY, setDirectionY] = useState(Math.random() * 2 - 1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextX = translateX + 10 * directionX;
      const nextY = translateY + 10 * directionY;
      if (nextX + 50 > props.width || nextX < 0) {
        setDirectionX(-directionX);
      }
      if (nextY + 50 > props.height || nextY < 0) {
        setDirectionY(-directionY);
      }
      setTranslateX(nextX);
      setTranslateY(nextY);
    }, 20);
    return () => clearInterval(intervalId);
  }, [
    translateX,
    translateY,
    directionX,
    directionY,
    props.width,
    props.height,
  ]);

  return (
    <div
      className={classes.client}
      style={{ transform: `translate(${translateX}px, ${translateY}px)` }}
    >
      <div className={classes.center}>{props.tempRestant}</div>
    </div>
  );
};

export default Client;
