import React from "react";
import useSWR from "swr";
import { fetcher } from "@/lib/utils";
import Loading from "@/components/Loading";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardContent,
} from "@material-ui/core";
import { Button, Link as MuiLink } from "@material-ui/core";
import Link from "next/link";
import Carousel from "@/components/Carousel";
import Instructionone from "@/components/Instructionone";
import Instructiontwo from "@/components/Instructiontwo";
import CastForEducationIcon from "@material-ui/icons/CastForEducation";
import GroupIcon from "@material-ui/icons/Group";
import CommentIcon from "@material-ui/icons/Comment";
import Routes from "../constants/routes";
import Image from "next/image";
import Comments from "@/components/Comments";

const useStyles = makeStyles((theme) => ({
  root1: {
    flexGrow: 1,
    textAlign: "center",
  },
  root2: {
    width: "100%",
  },
  root3: {
    maxWidth: 345,
    marginBottom: 40,
    background: "#27AE60",
  },
  root4: {
    textAlign: "center",
  },
  card: {
    background: "#27AE60",
  },
  paper: {
    background: "#27AE60",
    fontSize: 15,
  },
  tittle: {
    textAlign: "center",
  },
  secontitle: {
    alignItems: "right",
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  body: {
    overflow: "hidden",
    display: "-webkit-box",
    "-webkit-line-clamp": 2,
    "-webkit-box-orient": "vertical",
  },
}));

const comments = ({ comments }) => {
  const classes = useStyles();

  const { data, error } = useSWR(`/comments`, fetcher);

  if (error) return <div>No se pudo cargar los datos</div>;
  if (!data) return <div>Cargando datos...</div>;
  // render data
  return (
    <>
      <div>
        {data ? (
          <div>
            {data.data.map((comment) => (
              <Card className={classes.root3}>
                <CardActionArea style={{ background: "#4DCD2F" }}>
                  <CardContent className={classes.card}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h1"
                      className={classes.comment}
                      style={{ fontSize: 15 }}
                    ></Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
};

export default comments;
