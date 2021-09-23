import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Grid, Paper, TextField } from "@material-ui/core";
import axios from "axios";

const Login = ({ setIsLoggedIn, setShowStatus }) => {
  const schema = yup.object().shape({
    username: yup.string().required("*Campo obrigatório."),
    password: yup.string().required("*Campo obrigatório."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleFormLogin = (data) => {
    axios
      .post("https://kenzieshop.herokuapp.com/sessions/", data)
      .then((response) => {
        if (response.statusText === "OK") {
          setIsLoggedIn(true);
        }
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    setShowStatus(true);
    console.log(data);
  };

  return (
    <Grid container align="center" justifyContent="center">
      <Paper elevation={3}>
        <form onSubmit={handleSubmit(handleFormLogin)}>
          <div>
            <TextField
              type="text"
              label="username"
              variant="outlined"
              size="small"
              color="primary"
              margin="dense"
              {...register("username")}
              error={!!errors.username}
              helperText={errors.username?.message}
            />
          </div>
          <div>
            <TextField
              type="password"
              label="senha"
              variant="outlined"
              size="small"
              color="primary"
              margin="dense"
              {...register("password")}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
          </div>
          <Button type="submit" variant="outlined" size="small">
            Entrar
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default Login;
