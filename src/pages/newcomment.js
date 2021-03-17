import React, { useEffect, useState } from "react";
import withAuth from "@/hocs/withAuth";
import { useAuth } from "@/lib/auth";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { Button, Grid, TextField } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import api from "@/lib/api";
import translateMessage from "../constants/messages";
import Routes from "../constants/routes";
//import Link from "@material-ui/core/Link";
import { Link as MuiLink } from "@material-ui/core";
import Link from "next/link";
import styles from "@/styles/Login.module.css";
import Container from "@material-ui/core/Container";

const schema = yup.object().shape({
  text: yup.string().required("Ingrese el comentario"),
});

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
  paper: {
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    padding: 20,
    borderRadius: 5,
  },
  submit: {
    margin: theme.spacing(2, 0, 2),
    backgroundColor: theme.palette.secondary.main,
  },
  textField: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
    width: 200,
  },
}));

//const schema = yup.object().shape({});

const AddComment = (props) => {
  const classes = useStyles();
  const { register, handleSubmit, control, errors } = useForm();
  const [name, setName] = useState("");

  const onSubmit = async (data) => {
    console.log("data", data);
    const user = withAuth();
    const commentData = { ...data, user };
    console.log("Comment", commentData);
    try {
      const response = await api.post("/comments", commentData);
      console.log("Data Comment", response);
      <Alert variant="outlined" severity="success">
        Comentario registrado con éxito!
      </Alert>;
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

  return (
    <>
      <div className={classes.paper}>
        <Container component="main" maxWidth="xs" className={styles.container}>
          <form
            className={classes.form}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="text"
                  inputRef={register}
                  label="Ingrese un comentario"
                  name="text"
                  autoComplete="text"
                />
              </Grid>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Comentar
              </Button>
              <Grid xs={6} spacing={2} align="right">
                <Link href={Routes.PROFILE} passHref>
                  <MuiLink>
                    <Button onClick={props.onCancel} variant="contained">
                      Cancelar
                    </Button>
                  </MuiLink>
                </Link>
              </Grid>
            </Grid>
          </form>
        </Container>
      </div>
    </>
  );
};

export default withAuth(AddComment);
