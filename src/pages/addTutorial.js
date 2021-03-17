import React, { useEffect, useRef, useState } from "react";
import useSWR from "swr";
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
import Link from "@material-ui/core/Link";
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
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
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

const schema = yup.object().shape({
  hour: yup.string().required("Escoja una hora "),
  date: yup.date().required("Escoja un fecha"),
  observation: yup.string().required("Escriba una observación"),
  topic: yup.string().required("Escriba un tema"),
  price: yup.number().required("Ponga el precio"),
  image: yup.string().required("Escoja su comprobante de pago"),
  duration: yup
    .number()
    .required("Escriba en numeros cuanto va a durar la tuturoria"),
  subject_id: yup.number().required("Que materia quiere"),
});

const AddTutorial = (props) => {
  const { user } = useAuth();
  const classes = useStyles();
  const { register, handleSubmit } = useForm();
  const [name, setName] = useState("");
  const [image, setImage] = React.useState(null);
  const fileInputRef = useRef();

  const onSubmit = async (data) => {
    console.log("data", data.image[0]);

    const tutorialData = { ...data, teacher_id: null, image };
    console.log("Tutorial", tutorialData);
    const formData = new formData();
    formData.append("date", data.date);
    formData.append("hour", data.hour);
    formData.append("observation", data.observation);
    formData.append("topic", data.topic);
    formData.append("price", data.price);
    formData.append("duration", data.duration);
    formData.append("subject_id", data.subject_id);

    try {
      const response = await api.post("/tutorials", tutorialData);
      console.log("Data Tutorial", response);
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

  const handleImage = (imageFile) => {
    //<input type="file" ref={fileInputRef}/>
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
          <Grid container>
            <Grid item xs={12} md={6}>
              <TextField
                variant="outlined"
                type="date"
                required
                fullWidth
                id="date"
                label=""
                name="date"
                autoComplete="date"
                inputRef={register}
              />
            </Grid>
            <Grid xs={12} md={6}>
              <TextField
                id="time"
                name="hour"
                label="Hora de reserva"
                //defaultValue="7:30"
                className={classes.textField}
                variant="outlined"
                color="primary"
                margin="normal"
                inputRef={register}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300,
                }}
              />
            </Grid>

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
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="topic"
                label="Tema"
                name="topic"
                autoComplete="topic"
                inputRef={register}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                type="number"
                id="price"
                //defaultValue="10"
                inputRef={register}
                label="precio"
                name="price"
                //disabled
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Button component="label">
                Seleccione la imagen de comprobante de pago
                <input type="file" name="image" type="file" ref={register} />
              </Button>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                type="number"
                id="duration"
                //defaultValue="1"
                inputRef={register}
                label="duracion"
                name="duration"
                //disabled
              />
            </Grid>
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
            </Grid>

            <Grid xs={6} spacing={2}>
              <Button
                onSubmit={handleSubmit(onSubmit)}
                onClick={props.onCancel}
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Crear
              </Button>
            </Grid>
            <Grid xs={6} spacing={2} align="right">
              <Button onClick={props.onCancel} variant="contained">
                <Link href={Routes.PROFILE}>Cancelar</Link>
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </>
  );
};

export default withAuth(AddTutorial);
