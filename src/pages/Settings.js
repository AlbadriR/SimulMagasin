//stackoverflow.com/questions/52238637/react-router-how-to-pass-data-between-pages-in-react/68967670#68967670
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { GlobalStyles } from "@mui/material";
import { SettingsContext } from "../components/Contexts/SettingsContext";

const Settings = () => {
  const navigate = useNavigate();
  const useStyles = GlobalStyles((theme) => ({
    container: {
      display: "flex",
      flexWrap: "wrap",
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: "100%",
    },
  }));
  const { maxClient, setMaxClient } = useContext(SettingsContext);
  const { maxCaisse, setMaxCaisse } = useContext(SettingsContext);
  const { maxTempCourse, setMaxTempCourse } = useContext(SettingsContext);
  const { minTempCourse, setMinTempCourse } = useContext(SettingsContext);
  const { maxTempAttenteCaisse, setMaxTempAttenteCaisse } =
    useContext(SettingsContext);
  const { clientParHeure, setClientParHeure } = useContext(SettingsContext);
  const toMagasin = () => {
    navigate("/", {});
  };
  useEffect(() => {
    setClientParHeure([
      0, 0, 0, 0, 10, 20, 30, 50, 60, 70, 80, 90, 100, 80, 20, 60, 40, 30, 20,
      10, 0, 0, 0, 0,
    ]);
  }, []);
  return (
    <div>
      <div className={useStyles.container}>
        <TableRow>
          <TableCell>
            <label>Nombre de client maximum : </label>
          </TableCell>
          <TableCell>
            <TextField
              id="maxClient"
              variant="outlined"
              onChange={(e) => setMaxClient(e.target.value)}
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <label>Nombre de caisses maximum : </label>
          </TableCell>
          <TableCell>
            <TextField
              id="maxCaisse"
              variant="outlined"
              onChange={(e) => setMaxCaisse(e.target.value)}
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <label>Temp maximum en course : </label>
          </TableCell>
          <TableCell>
            <TextField
              id="maxTempCourse"
              variant="outlined"
              onChange={(e) => setMaxTempCourse(e.target.value)}
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <label>Temp minimum en course : </label>
          </TableCell>
          <TableCell>
            <TextField
              id="maxTempCourse"
              variant="outlined"
              onChange={(e) => setMinTempCourse(e.target.value)}
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <label>Temp attente max avant file caisse : </label>
          </TableCell>
          <TableCell>
            <TextField
              id="maxTempCourse"
              variant="outlined"
              onChange={(e) => setMaxTempAttenteCaisse(e.target.value)}
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <label>Nombre de client par heure : </label>
          </TableCell>
          <TableCell>
            <TextField
              id="maxTempCourse"
              variant="outlined"
              //onChange={(e) => setClientParHeure(e.target.value)}
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell></TableCell>
          <TableCell>
            <Button
              onClick={() => {
                toMagasin();
              }}
              variant="contained"
              endIcon={<SendIcon />}
            >
              Appliquer
            </Button>
          </TableCell>
        </TableRow>
      </div>
    </div>
  );
};

export default Settings;
