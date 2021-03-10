import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useAuth } from "@/lib/auth";
import withoutAuth from "@/hocs/withoutAuth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape(
    {
        email: yup
            .string()
            .email("Ingrese un email válido")
            .required("Ingrese su email."),
        password: yup.string().required("Ingrese su clave"),
    });

const Login = () => {
    const {login}  = useAuth();
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data) => {
        console.log("data", data);
        try {
            const userData = await login(data);

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

    function Copyright() {
        return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
            Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
        );
    }
  
    const useStyles = makeStyles((theme) => (
        {
            root: {
            height: '100vh',
            },
            image: {
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor:
                theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            },
            paper: {
            margin: theme.spacing(8, 4),
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
            marginTop: theme.spacing(1),
            },
            submit: {
            margin: theme.spacing(3, 0, 2),
            },
        }));
    
    
        const classes = useStyles();
    
        return (
            <Grid container component="main" className={classes.root}>
                <CssBaseline />
                <Grid item xs={false} sm={4} md={7} className={classes.image} />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                    Inicio de Sesión
                    </Typography>
                    <form className={classes.form} onSubmit={handleSubmit(onSubmit)} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            inputRef={register}
                            label="Correo Electrónico"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <p>{errors.email?.message}</p>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            inputRef={register}
                            name="password"
                            label="Contraseña"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Recordar"
                        />
                        <Button
                            type='submit'
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}

                        >
                            Iniciar sesión
                        </Button>
                        <Grid container>
                            <Grid item xs>
                            <Link href="#" variant="body2">
                                ¿Olvidó la contraseña?
                            </Link>
                            </Grid>
                            <Grid item>
                            <Link href="../register" variant="body2">
                                {"¿No tiene una cuenta? Registrese"}
                            </Link>
                            </Grid>
                        </Grid>
                        <Box mt={5}>
                            <Copyright />
                        </Box>
                    </form>
                </div>
                </Grid>
            </Grid>
            );
    };
export default withoutAuth(Login);