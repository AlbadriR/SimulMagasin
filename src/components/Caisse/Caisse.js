import classes from "./Caisse.module.css";
const Caisse = () => {
  const numberOfCaisse = (numberOfCaisse) => {
    let caisses = [];
    for (let i = 0; i < numberOfCaisse; i++) {
      caisses.push(
        <div className={classes.caisseAttente}>
          <div className={classes.timer}></div>
        </div>
      );
    }
    return caisses;
  };
  return <div className={classes.pointDeVente}>{numberOfCaisse(13)}</div>;
};

export default Caisse;
