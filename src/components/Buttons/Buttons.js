import classes from "./Buttons.module.css";
const Buttons = (props) => {
  return (
    <div className={classes.Buttons}>
      <button onClick={() => props.onAddClients(5)}>Ajouter 5 clients</button>
      <button onClick={() => props.onAddTime(1)}>Ajouter 1H</button>
    </div>
  );
};

export default Buttons;
