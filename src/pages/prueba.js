import React, {useEffect, useState} from "react";
import useSWR from "swr";
import {fetcher} from "@/lib/utils";
import Loading from "@/components/Loading";
import withAuth from "@/hocs/withAuth";
import {withStyles, makeStyles} from "@material-ui/core/styles";
import { Button, Icon, InputBase, TextField } from "@material-ui/core";
import {useAuth} from "@/lib/auth";
import Grid from "@material-ui/core/Grid";
import api from "@/lib/api";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import Typography from "@material-ui/core/Typography";

const schema = yup.object().shape({
    name: yup.string().required(),
    last_name: yup.string().required(),

});
const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(3, 2, 2),
        backgroundColor: theme,
    },
    button2: {
        margin: theme.spacing(3, 2, 2),
        backgroundColor: theme,
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1),
    },
    bootstrapFormLabel: {
        fontSize: 18,
    },
    root2: {
        width: '100%',
        maxWidth: '36ch',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));

const EditUser = (props) => {


    const {user} = useAuth();

    const classes = useStyles();
    const {data, error} = useSWR(`/users/${user.id}`, fetcher);
    console.log("data", data)
    const [state, setState] = useState("");

    if (error) return <div>No se pueden cargar los datos del usuario a modificar</div>;
    if (!data) return <Loading/>;

    const handleChange = (event) => {
        setState(event.target.value);
    };

    const {regTutorial: doRegTutorial} = useAuth();
    const {regTutorial, handleSubmit, errors} = useForm({
            resolver: yupResolver(schema)});


    const onSubmit = async (data) => {
        console.log("data", data);
        try {
            const userData = await doRegTutorial(data);

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
        <>
            <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="flex-start"
            >
                <h2>Edicion del usuario #{data.name}</h2>

            </Grid>
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <p>Nombre:</p>
                        <TextField
                            id="outlined-multiline-static"
                            multiline
                            rows={8}
                            inputRef={regTutorial}
                            defaultValue={data.name}
                            variant="outlined"
                        />
                        <Typography color="primary">{errors.name?.message}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <p>Apellido:</p>
                        <TextField
                            id="outlined-multiline-static"
                            multiline
                            rows={8}
                            inputRef={regTutorial}
                            defaultValue={data.last_name}
                            variant="outlined"
                        />
                        <Typography color="primary">{errors.name?.message}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <p>Telefono:</p>
                        <TextField
                            id="outlined-multiline-static"
                            multiline
                            rows={8}
                            inputRef={regTutorial}
                            defaultValue={data.phone}
                            variant="outlined"
                        />
                        <Typography color="primary">{errors.name?.message}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <p>Biografia:</p>
                        <TextField
                            id="outlined-multiline-static"
                            multiline
                            rows={8}
                            inputRef={regTutorial}
                            defaultValue={data.biography}
                            variant="outlined"
                        />
                        <Typography color="primary">{errors.name?.message}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="secondary"
                            className={classes.submit}
                        >
                            Aceptar
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </>
    );
};

export default withAuth(EditUser);