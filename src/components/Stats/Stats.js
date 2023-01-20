import classes from "./Stats.module.css";
const Stats = () => {
  return (
    <div className={classes.Stats}>
      <p> ________________________________________ </p>
      <p>Caisses : </p>
      <p>Temps avant ouverture : {}</p>
      <p>Clients sans caisse : {}</p>
      <p>Places disponibles : {}</p>
      <p>Nombre de clients : {}</p>
      <p>Temp moyen d'attent : {}</p>
      <p>Heure : {}</p>
      <p> ________________________________________ </p>
    </div>
  );
};

export default Stats;
