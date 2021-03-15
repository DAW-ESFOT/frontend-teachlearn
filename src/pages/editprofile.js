import React, {useEffect, useState} from "react";
import useSWR from "swr";
import {fetcher} from "@/lib/utils";
import Loading from "@/components/Loading";
import withAuth from "@/hocs/withAuth";
import {withStyles, makeStyles} from "@material-ui/core/styles";
import { Button, Icon, InputBase, TextField } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

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

    const classes = useStyles();
    const {data, error} = useSWR(`/users/${props.id}`, fetcher);
    console.log("data", data)
    const [state, setState] = useState("");

    if (error) return <div>No se pueden cargar los datos del usuario a modificar</div>;
    if (!data) return <Loading/>;

    const handleChange = (event) => {
        setState(event.target.value);
    };
    const onSubmit = async (data) => {
        console.log("data",data)
    }

    console.log("Id del usuario", props.id);

    return (
        <>
            <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="flex-start"
            >
                <h2>Edicion del usuario #{data.id}</h2>
                <Icon color="secondary" onClick={props.onHandleCloseModal}>cancelar</Icon>
            </Grid>
            <form className={classes.root} autoComplete="off">
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <p>Nombre:</p>
                        <TextField
                            id="outlined-multiline-static"
                            multiline
                            rows={8}
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