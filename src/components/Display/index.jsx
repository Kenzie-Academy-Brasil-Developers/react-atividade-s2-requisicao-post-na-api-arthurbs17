import { Paper } from "@material-ui/core";
const Display = ({ isLoggedIn }) => {
  return (
    <div>
      {isLoggedIn === true ? (
        <Paper>
          <p>Usuário existente</p>
        </Paper>
      ) : (
        <Paper>
          <p>Usuário não registrado!</p>
        </Paper>
      )}
    </div>
  );
};

export default Display;
