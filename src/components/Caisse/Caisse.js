import { useContext, useState, useRef, useEffect } from "react";
import { MagasinContext } from "../Contexts/Context";
import classes from "./Caisse.module.css";
const Caisse = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const caisseRef = useRef();
  const { dimensions } = useContext(MagasinContext);

  useEffect(() => {
    if (props.queue > 0) {
      setIsEmpty(false);
    }
    if (props.queue === 0) {
      setIsEmpty(true);
    }
  }, [props.queue]);
  return (
    <div
      ref={caisseRef}
      style={{ width: dimensions.width, height: dimensions.height }}
    >
      <div className={classes.caisseAttente}>
        {[...Array(props.queue)].map((i) => (
          <div key={i} className={classes.client}></div>
        ))}
        <div className={isEmpty ? classes.caisseEmpty : classes.caisseNotEmpty}>
          <div className={classes.timer}>{0}</div>
        </div>
      </div>
    </div>
  );
};
export default Caisse;
