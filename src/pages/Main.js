import Magasin from "../components/Magasin/Magasin";
import Caisse from "../components/Caisse/Caisse";
import Stats from "../components/Stats/Stats";
import Buttons from "../components/Buttons/Buttons";
const Main = () => {
  return (
    <div
      className="main"
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Magasin></Magasin>
      <Caisse></Caisse>
      <Stats></Stats>
      <Buttons></Buttons>
    </div>
  );
};

export default Main;
