import React, { useEffect, useState } from "react";
import withAuth from "@/hocs/withAuth";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, TextField, Select } from "@material-ui/core";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import api from "@/lib/api";
import translateMessage from "../constants/messages";
import Routes from "../constants/routes";
import { Link as MuiLink } from "@material-ui/core";
import Link from "next/link";
import styles from "@/styles/Login.module.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import swal from "sweetalert";
import AddBoxIcon from "@material-ui/icons/AddBox";

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
    padding: 20,
    borderRadius: 5,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(2),
    textAlign: "center",
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
  buttons: {
    textAlign: "center",
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
      swal({
        title: "Materia registrada!",
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
        <h1>
          Ingreso de nueva Materia <AddBoxIcon styles={{ fontSize: 25 }} />
        </h1>
        <img
          src="https://blog.paessler.com/hubfs/824814-5-Things-to-consider-FB.RZ.png"
          alt="new subject"
          height={250}
          width={450}
        />
        <br />
        <br />
        <Container component="main" maxWidth="xs" className={styles.container}>
          <form
            className={classes.form}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Grid container>
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
                <br />
                <br />
              </Grid>
              <Grid item xs={12} className={classes.buttons}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Crear
                </Button>
                <br />
                <br />
                <Link href={Routes.SUBJECTS} passHref>
                  <MuiLink>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={props.onCancel}
                      variant="contained"
                    >
                      Cancelar
                    </Button>
                  </MuiLink>
                </Link>
                <br />
                <br />
              </Grid>
            </Grid>
          </form>
          <br />
          <br />
        </Container>
        <br />
        <br />
      </div>
    </>
  );
};

export default withAuth(AddSubject);
