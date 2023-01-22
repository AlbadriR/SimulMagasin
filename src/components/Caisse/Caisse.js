import {  useContext } from "react";
import { MagasinContext } from "../Contexts/Context";
import classes from "./Caisse.module.css";
const Caisse = () => {
  const { dimensions } = useContext(MagasinContext);
    return <div style={{width:dimensions.width, height: dimensions.height}}>
         <div className={classes.caisseAttente}>
      <div className={classes.timer}></div>
    </div>
    </div>;
  };
  export default Caisse;
  