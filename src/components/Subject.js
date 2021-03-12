import React from "react";
import useSWR from "swr";
import { fetcher } from "@/lib/utils";
import { makeStyles } from "@material-ui/core/styles";
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const Subject = ({ subjectId }) => {
    const { data, error } = useSWR(`/subjects`, fetcher);

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    if (error) return <div>No se pudo cargar los datos</div>;
    if (!data) return <div>Cargando datos...</div>;
    // render data
    return (
        <Grid container direction="row" justify="space-between">
            {data.data.map((subject) => (
                <Card className={classes.root} variant="outlined">
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Materias en Teachlearn
                        </Typography>
                        <Typography variant="h5" component="h2">
                            {subject.name}
                        </Typography>
                        <Typography variant="body2" component="p">
                            {subject.level}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </Grid>
    );
};

export default Subject;

