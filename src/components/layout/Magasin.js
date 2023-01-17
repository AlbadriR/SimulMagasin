import { useEffect, useState, useRef } from "react";
import Client from "./Client";
import classes from "./css/Magasin.module.css";
import { useLocation } from "react-router-dom";

const Magasin = () => {
  const location = useLocation();

  const [number, setNumber] = useState(10);
  const ref = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (ref.current) {
      setDimensions({
        width: ref.current.clientWidth, // return the magasin width in px
        height: ref.current.clientHeight, // return the magasin height in px
      });
    }

    let intervalId;
    if (number > 0) {
      intervalId = setInterval(() => {
        setNumber(number - 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [number, ref]);
  return (
    <div className={classes.magasin} ref={ref}>
      <Client
        tempRestant={number}
        width={dimensions.width}
        height={dimensions.height}
      ></Client>
      <Client tempRestant={number}></Client>
      <Client tempRestant={number}></Client>
    </div>
  );
};

export default Magasin;
