import React, { useEffect, useState } from "react";
import useSWR from "swr";
import withAuth from "@/hocs/withAuth";
import { useAuth } from "@/lib/auth";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Button,
  Grid,
  TextField,
  Select,
  InputBase,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "@/lib/api";
import translateMessage from "../constants/messages";
import Routes from "../constants/routes";
//import Link from "@material-ui/core/Link";
import { Link as MuiLink } from "@material-ui/core";
import Link from "next/link";
import styles from "@/styles/Login.module.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
//import { Alert, AlertTitle } from "@material-ui/lab";

const schema = yup.object().shape({
  name: yup.string().required("Ingrese una Materia"),
  level: yup.string().required("Escoja un nivel"),
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
  control: {
    padding: theme.spacing(2),
  },
  root2: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(2, 0, 2),
    backgroundColor: theme.palette.secondary.main,
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
    width: 200,
  },
}));

//const schema = yup.object().shape({});

const AddSubject = (props) => {
  const classes = useStyles();
  const { register, handleSubmit, control, errors } = useForm();
  const [name, setName] = useState("");

  const onSubmit = async (data) => {
    console.log("data", data);
    const user = withAuth();
    const subjectData = { ...data, user };
    console.log("Subject", subjectData);
    try {
      const response = await api.post("/subjects", subjectData);
      console.log("Data Subject", response);
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
                  id="name"
                  inputRef={register}
                  label="Nombre de la Materia"
                  name="name"
                  autoComplete="name"
                />
              </Grid>
              <Grid item xs={12}>
                <Select
                  native
                  name="level"
                  id="level"
                  inputRef={register}
                  variant="outlined"
                  required
                  fullWidth
                >
                  <option arial-label="None"></option>
                  <option>Seleccione....</option>
                  <option value="basic">Escuela</option>
                  <option value="highSchool">Colegio</option>
                </Select>
              </Grid>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Crear
              </Button>
              <Grid xs={6} spacing={2} align="right">
                <Link href={Routes.SUBJECTS} passHref>
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

export default withAuth(AddSubject);
