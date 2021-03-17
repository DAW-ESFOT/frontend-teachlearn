import React, { useEffect, useState } from "react";
import withAuth from "@/hocs/withAuth";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { Button, Grid, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import api from "@/lib/api";
import translateMessage from "../constants/messages";
import Routes from "../constants/routes";
import { Link as MuiLink } from "@material-ui/core";
import Link from "next/link";
import styles from "@/styles/Login.module.css";
import Container from "@material-ui/core/Container";
import swal from "sweetalert";
import AddCommentIcon from "@material-ui/icons/AddComment";

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
    padding: 20,
    borderRadius: 5,
  },
  container: {
    textAlign: "center",
  },
  submit: {
    margin: theme.spacing(2, 0, 2),
    backgroundColor: theme.palette.secondary.main,
  },
  main: {
    textAlign: "center",
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
      swal({
        title: "Comentario registrado!",
        icon: "success",
        button: "Aceptar",
        timer: "3000",
      });
      return response;
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        swal({
          title: translateMessage(error.response.data.error),
          icon: "error",
          button: "Aceptar",
        });
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
        <Container component="main" maxWidth="xs" className={classes.container}>
          <h1>
            Nuevo Comentario <AddCommentIcon styles={{ fontSize: 40 }} />
          </h1>
          <img
            src="https://www.socialchef.es/wp-content/uploads/thumb-3150402_1280-1280x640.jpg"
            alt="img comment"
            height={250}
            width={400}
          />
          <br />
          <br />
          <br />
          <form
            className={classes.form}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Grid container className={classes.main}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="text"
                  inputRef={register}
                  label="Ingrese su comentario"
                  name="text"
                  autoComplete="text"
                />
                <br />
                <br />
              </Grid>
              <Grid item xs={12}>
                <Grid>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    Comentar
                  </Button>
                  <br />
                  <br />
                </Grid>
                <Grid>
                  <Link href={Routes.PROFILE} passHref>
                    <MuiLink>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={props.onCancel}
                      >
                        Cancelar
                      </Button>
                    </MuiLink>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </form>
          <br />
          <br />
        </Container>
        <br />
        <br />
      </div>
      <br />
      <br />
    </>
  );
};

export default withAuth(AddComment);
