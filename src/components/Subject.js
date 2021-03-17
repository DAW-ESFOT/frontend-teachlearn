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
    paddingTop: 10,
    marginBottom: 40,
    backgroundColor: "#19857B",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
    overflow: "hidden",
    display: "-webkit-box",
    "-webkit-line-clamp": 3,
    "-webkit-box-orient": "vertical",
  },
  pos: {
    marginBottom: 12,
  },
  card: {
    textAlign: "center",
    justifyContent: "space-between",
  },
  main: {},
});

const Subject = ({ subjectId }) => {
  const { data, error } = useSWR(`/subjects`, fetcher);

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  if (error) return <div>No se pudo cargar los datos</div>;
  if (!data) return <div>Cargando datos...</div>;
  // render data
  return (
    <Grid
      container
      direction="row"
      className={classes.main}
      justify="space-between"
    >
      {data.data.map((subject) => (
        <Card className={classes.root} variant="outlined">
          <CardContent className={classes.card}>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
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
      <br />
      <br />
    </Grid>
  );
};

export default Subject;
