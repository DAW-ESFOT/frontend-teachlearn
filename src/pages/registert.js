import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useForm } from "react-hook-form";
import withoutAuth from "@/hocs/withoutAuth";
import { useAuth } from "@/lib/auth";
import {Select, MenuItem} from "@material-ui/core";


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        JEGY - Empresa de Desarrollo
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Register = () => {
  const classes = useStyles();
  const { register: doRegister } = useAuth();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
      console.log("data", data);
      try {
          const userData = await doRegister(data);

          console.log("userData", userData);
      } catch (error) {
          if (error.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              alert(error.response.message);
              console.log(error.response);
          } else if (error.request) {
              // The request was made but no response was received
              // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
              // http.ClientRequest in node.js
              console.log(error.request);
          } else {
              // Something happened in setting up the request that triggered an Error
              console.log("Error", error.message);
          }
          console.log(error.config);
      }
  };
  
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="name"
                type="text"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Nombre"
                autoFocus
                inputRef={register}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                type="text"
                id="last_mame"
                label="Apellido"
                name="last_mame"
                autoComplete="lname"
                inputRef={register}
              />
            </Grid>
            <Grid item xs={12} >
              <TextField
                variant="outlined"
                type="date"
                required
                fullWidth
                id="birthday"
                label="Cumpleaños"
                name="birthday"
                autoComplete="lname"
                inputRef={register}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                type="email"
                label="Correo Electrónico"
                name="email"
                autoComplete="email"
                inputRef={register}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                type="number"
                id="phone"
                label="Teléfono"
                name="phone"
                autoComplete="phone"
                inputRef={register}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                inputRef={register}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password_confirmation"
                label="Confirmación de contraseña"
                type="password"
                id="password_confirmation"
                autoComplete="current-password"
                inputRef={register}
              />
            </Grid>
            <Grid item xs={12}>
                <Select
                    name="role" 
                    id="role"
                    inputRef={register}
                    variant="outlined"
                    required
                    fullWidth
                >
                    <MenuItem 
                        disableUnderline={true}
                        disabled>
                    <em>Sleccione</em>
                    </MenuItem>
                    <MenuItem value='ROLE_STUDENT'>Estudiante</MenuItem>
                    <MenuItem value='ROLE_TEACHER'>Tutor</MenuItem>
                </Select>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Registrar
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="../register" variant="body2">
                ¿Ya tiene una cuenta?, Inicie sesión
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
};
export default withoutAuth(Register);