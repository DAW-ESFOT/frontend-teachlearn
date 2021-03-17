import React, {useEffect, useState} from "react";
import useSWR from "swr";
import {fetcher} from "@/lib/utils";
import Loading from "@/components/Loading";
import withAuth from "@/hocs/withAuth";
import {withStyles, makeStyles} from "@material-ui/core/styles";
import { Button, Icon, InputBase, TextField } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

import {useAuth} from "@/lib/auth";
import {useForm} from "react-hook-form";
import api from "@/lib/api";
import translateMessage from "../constants/messages";

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
    const {data, error} = useSWR(`/users/`+ user.id, fetcher);
    console.log("data", data)
    const { register, handleSubmit, control, errors } = useForm();

    const [state, setState] = useState("");

    if (error) return <div>No se pueden cargar los datos del usuario a modificar</div>;
    if (!data) return <Loading/>;

    const handleChange = (event) => {
        setState(event.target.value);
    };


    const onSubmit = async (data) => {
        console.log("data", data);
        try {
            const response = await api.put("/users/"+user.id, data);
            console.log("user", response);
            return response;
        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                alert(translateMessage(error.response.data.error));
                console.log(error.response.data);
                return Promise.reject(error.response);
                // return error.response;
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

    console.log("Id del usuario", user.id);


    return (
        <>
            <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="flex-start"
            >

                <h2>Edicion del usuario {data.name}</h2>

            </Grid>
            <form className={classes.root} autoComplete="off" onSubmit={handleSubmit(onSubmit)}>

                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <p>Nombre:</p>
                        <TextField
                            id="outlined-multiline-static"
                            multiline
                            rows={8}
                            name = "name"
                            inputRef={register}

                            defaultValue={data.name}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <p>Apellido:</p>
                        <TextField
                            id="outlined-multiline-static"
                            multiline
                            rows={8}
                            name="last_name"
                            inputRef={register}
                            defaultValue={data.last_name}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <p>Telefono:</p>
                        <TextField
                            id="outlined-multiline-static"
                            multiline
                            rows={8}
                            name="phone"
                            inputRef={register}

                            defaultValue={data.phone}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <p>Biografia:</p>
                        <TextField
                            id="outlined-multiline-static"
                            multiline
                            rows={8}
                            name="biography"
                            inputRef={register}

                            defaultValue={data.biography}
                            variant="outlined"
                        />
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