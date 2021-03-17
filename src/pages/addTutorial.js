import React, { useEffect, useRef, useState } from "react";
import useSWR from "swr";
import swal from "sweetalert";
import { fetcher } from "@/lib/utils";
import { useRouter } from "next/router";
import Loading from "@/components/Loading";
import withAuth from "@/hocs/withAuth";
import { useAuth } from "@/lib/auth";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "@/lib/api";
import translateMessage from "../constants/messages";
import Routes from "../constants/routes";
import { Link as MuiLink } from "@material-ui/core";
import Link from "next/link";
import styles from "@/styles/Login.module.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
//import { Alert, AlertTitle } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#B4B29E",
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
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: theme.palette.secondary.main,
  },
  buttons: {
    textAlign: "center",
  },
  main: {
    textAlign: "flex",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  topicc: {
    backgroundColor: "#B4B29E",
  },
}));

const schema = yup.object().shape({});

const AddTutorial = (props) => {
  const { user } = useAuth();
  const classes = useStyles();
  const { register, handleSubmit } = useForm();
  const [name, setName] = useState("");
  const [image, setImage] = React.useState(null);
  const fileInputRef = useRef();

  const onSubmit = async (data) => {
    console.log("data", data);
    const newTutorial = {
      date: data.date,
      hour: data.hour,
      observation: data.observation,
      topic: data.topic,
      price: data.price,
      image: data.image[0],
      duration: data.duration,
      subject_id: data.subject_id,
    };
    const formData = new FormData();
    formData.append("date", newTutorial.date);
    formData.append("hour", newTutorial.hour);
    formData.append("observation", newTutorial.observation);
    formData.append("topic", newTutorial.topic);
    formData.append("price", newTutorial.price);
    formData.append("image", newTutorial.image);
    formData.append("duration", newTutorial.duration);
    formData.append("subject_id", newTutorial.subject_id);

    console.log("formData", formData);
    console.log("Nueva tutoria", newTutorial);

    try {
      const response = await api.post("/tutorials", formData);
      console.log("Data Tutorial", response);
      swal({
        title: "Tutoría registrada! ...Revise su correo",
        text: "Por favor revise su correo",
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
          title: "No se pudo registrar la tutoría",
          text: translateMessage(error.response.data.error),
          icon: "error",
          button: "Aceptar",
          timer: "2000",
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

  const handleImage = (imageFile) => {
    setImage(imageFile);
    console.log("image", imageFile);
  };

  return (
    <>
      <div className={classes.paper}>
        <form
          className={classes.root}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Grid container className={classes.main}>
            <Grid item xs={12} md={5} spacing={1}>
              <TextField
                variant="outlined"
                type="date"
                className={classes.log1}
                required
                id="date"
                label=""
                name="date"
                autoComplete="date"
                inputRef={register}
              />
              <br />
              <br />
              <TextField
                id="time"
                md={5}
                className={classes.log2}
                name="hour"
                label="Hora de reserva"
                className={classes.textField}
                variant="outlined"
                color="primary"
                inputRef={register}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300,
                }}
              />
              <br />
              <br />
            </Grid>

            <br />
            <br />
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="observation"
                inputRef={register}
                label="Observación"
                name="observation"
                autoComplete="observation"
              />
              <br />
              <br />
            </Grid>

            <Grid item xs={12}>
              <TextField
                className={classes.topicc}
                variant="outlined"
                required
                fullWidth
                id="topic"
                label="Tema"
                name="topic"
                autoComplete="topic"
                inputRef={register}
              />
              <br />
              <br />
            </Grid>
            <br />
            <br />
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                type="number"
                id="price"
                defaultValue="10"
                inputRef={register}
                label="Precio: $10 x hora"
                name="price"
                disabled
              />
              <br />
              <br />
            </Grid>
            <br />
            <br />
            <Grid item xs={12}>
              <Button component="label" variant="contained" color="primary">
                Seleccionar Imagen
                <input
                  type="file"
                  fullWidth
                  name="image"
                  id="image"
                  ref={register}
                  onChange={(e) => handleImage(e.target.files[0])}
                  hidden
                />
              </Button>
            </Grid>
            <br />
            <br />
            <br />
            <br />
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                type="number"
                id="duration"
                defaultValue={1}
                inputRef={register}
                label="duración de la tutoría (x Hora)"
                name="duration"
              />
              <br />
              <br />
            </Grid>
            <br />
            <br />
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                type="tex"
                id="subject_id"
                inputRef={register}
                label="Materia"
                name="subject_id"
              />
              <br />
              <br />
            </Grid>
            <br />
            <br />
            <Grid item xs={12} spacing={2} className={classes.buttons}>
              <Button
                onClick={props.onCancel}
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Crear
              </Button>
              <br />
              <br />

              <Link href={Routes.PROFILE}>
                <MuiLink>
                  <Button
                    onClick={props.onCancel}
                    variant="contained"
                    color="primary"
                  >
                    Ir a mi perfil
                  </Button>
                </MuiLink>
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </>
  );
};

export default withAuth(AddTutorial);
