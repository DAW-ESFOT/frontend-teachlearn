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

const Register = () => {
    const { register: doRegister } = useAuth();
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        console.log("data", data);
        try {
            const userData = await doRegister({ ...data, role: "ROLE_USER" });

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

        const classes = useStyles();

        return (
            <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                Registro
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit(onSubmit)} noValidate>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        autoComplete="fname"
                        name="name"
                        variant="outlined"
                        required
                        fullWidth
                        id="name"
                        label="Nombre"
                        autoFocus
                        ref={register}
                    />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="lastName"
                        label="Apellido"
                        name="lastName"
                        autoComplete="lname"
                        ref={register}
                    />
                    </Grid>
                    <Grid item xs={12} >
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="birthday"
                        label="Fecha de Nacimiento"
                        name="birthday"
                        autoComplete="bname"
                        ref={register}
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        label="Correo Electrónico"
                        name="email"
                        autoComplete="email"
                        ref={register}
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="phone"
                        label="Número de celular"
                        name="phone"
                        autoComplete="pname"
                        ref={register}
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="password"
                        label="Contraseña"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        ref={register}
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="password_confirmation"
                        label="Confirmación de Contraseña"
                        type="password"
                        id="password_confirmation"
                        autoComplete="current-password"
                        ref={register}
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="role"
                        label="Tipo de usuario"
                        type="role"
                        id="role"
                        ref={register}
                    />
                    </Grid>
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Resgistrar
                </Button>
                <Grid container justify="flex-end">
                    <Grid item>
                    <Link href="#" variant="body2">
                        ¿Tiene una cuenta?, Inicie Sesión
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