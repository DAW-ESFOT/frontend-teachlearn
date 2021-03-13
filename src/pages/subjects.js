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
        maxWidth: 345,
        marginBottom: 40,
    },
    media: {
        height: 140,
    },
    title: {
        overflow: "hidden",
        display: "-webkit-box",
        "-webkit-line-clamp": 2,
        "-webkit-box-orient": "vertical",
    },
    body: {
        overflow: "hidden",
        display: "-webkit-box",
        "-webkit-line-clamp": 3,
        "-webkit-box-orient": "vertical",
    },
});
const Subject = ({ subjects }) => {
    const { data, error } = useSWR(`/subjects`, fetcher);

    if (error) return <div>No se pudo cargar los datos</div>;
    if (!data) return <div>Cargando datos...</div>;
    // render data
    return (
        <Grid container direction="row" justify="space-between">
            {data.data.map((subject) => (
                <CardContent key={subject.id}>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                        className={classes.title}
                        >
                        {subjects.title}
                    </Typography>
                </CardContent>

            ))}
        </Grid>
        /*<table>
            <tbody>
            {data.data.map((subject) => (
                <tr key={subject.id}>
                    <td>{subject.name}</td>
                    <td>{subject.level}</td>
                </tr>
            ))}
            </tbody>
        </table>
*/
    );
};

export default Subject;