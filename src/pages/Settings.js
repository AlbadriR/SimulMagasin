//stackoverflow.com/questions/52238637/react-router-how-to-pass-data-between-pages-in-react/68967670#68967670
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { GlobalStyles } from "@mui/material";
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
  const [maxClient, setMaxClient] = useState(0);
  const [maxCaisse, setMaxCaisse] = useState(0);
  const [maxTempCourse, setMaxTempCourse] = useState(0);
  const [minTempCourse, setMinTempCourse] = useState(0);
  const [maxTempAttenteCaisse, setMaxTempAttenteCaisse] = useState(0);
  const [clientParHeure, setClientParHeure] = useState(0);
  const toMagasin = () => {
    navigate("/", {
      /*faire passer les données d'un form*/
    });
  };
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
            <label>Nombre de client maximum : </label>
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
            <label>Nombre de client maximum : </label>
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
            <label>Nombre de client maximum : </label>
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
