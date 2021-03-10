import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const tutorialSteps = [
    {
      label: 'San Francisco – Oakland Bay Bridge, United States',
      imgPath:
        'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
      label: 'Bird',
      imgPath:
        'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
      label: 'Bali, Indonesia',
      imgPath:
        'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
    },
    {
      label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
      imgPath:
        'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
      label: 'Goč, Serbia',
      imgPath:
        'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    },
  ];

const useStyles = makeStyles((theme) => ({
    root1: {
      flexGrow: 1,
      textAlign:'center',
    },
    cont:{
        background: '#27AE60',
        color:'#000000',
    },
    paper: {
      height: 140,
      width: 1200,
      background: '#27AE60',
    },
    control: {
      padding: theme.spacing(2),
    },
    root: {
        maxWidth: 400,
        flexGrow: 1,
      },
      header: {
        display: 'flex',
        alignItems: 'center',
        height: 50,
        paddingLeft: theme.spacing(4),
        backgroundColor: theme.palette.background.default,
      },
      img: {
        height: 255,
        maxWidth: 400,
        overflow: 'hidden',
        display: 'block',
        width: '100%',
        
      },
      funcstudent:{
        height: 300,
        width: 1200,
        flexGrow: 1,
      },
      functeacher:{
        height: 300,
        width: 1200,
        flexGrow: 1,
      },
      instfuc:{
          
        background:'#2E5857',
      },
      inst:{
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }
  }));

export default function Home() {
    const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
    return (
        <>
            <div className={classes.root}>
                <Paper square elevation={0} className={classes.header}>
                    <Typography>{tutorialSteps[activeStep].label}</Typography>
                </Paper>
                <img
                    className={classes.img}
                    src={tutorialSteps[activeStep].imgPath}
                    alt={tutorialSteps[activeStep].label}
                />
                <MobileStepper
                    steps={maxSteps}
                    position="static"
                    variant="text"
                    activeStep={activeStep}
                    nextButton={
                    <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                        Next
                        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                    </Button>
                    }
                    backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                        Back
                    </Button>
                    }
                />
        </div>
        <div className={classes.instfuc}>
        <div className={classes.funcstuden}>
            <h1>¿Cómo funciona para alumnos?</h1>
            <Grid container spacing={3}>
                <Grid item xs>
                    <Paper className={classes.inst}>
                        1.- Registro
                        Se registra como estudiante dando clic en el botón REGISTRO y complete el formulario
                        </Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.inst}>
                        2.- Agendar una tutoría
                        De clic en agendar cita, se le redigirá a otra ventana donde especificarás la materia y los temas donde tengas dificultades.
                        </Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.inst}>
                        3.- Pagar tutoría
                        Luego de concretar el horario, la materia y los temas, deberá cancelar el valor por la tutoría sea por depósito o tranferencia.
                        </Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.inst}>
                        4.- Pagar tutoría
                        Conectarse por la plataforma digital de Zoom en el horario acordado con el profesor.
                        </Paper>
                </Grid>
            </Grid>
        </div>
        <div className={classes.functeacher}>
            <h1>¿Cómo funciona para profesores?</h1>
            <Grid container spacing={3}>
                <Grid item xs>
                    <Paper className={classes.inst}>
                        1.- Registro
                        Se registra como profesor dando clic en el botón REGISTRO y complete el formulario
                        </Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.inst}>
                        2.- Cargar Curriculum
                        Suba la evidencia que comprueba el nivel de estudio requerido para poder dar una clase en vez validada la información se activará su cuenta, recibirá un correo confirmando que el proceso esté completo.
                        </Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.inst}>
                        3.- Acepta tutoías
                        Recibirá notificaciones sobre las tutorías acerca de estudiantes solicitando las tutorías de las materias que registre acepta siempre y cuando estés seguro que no tiene ningún problema con el horario.
                        </Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.inst}>
                        4.- Conectarse a la tutoría
                        Conectarse por la plataforma digital de Zoom en el horario acordado con el estudiante, luego de la tutoría, tendrá que subir la evidencia de que la tutoría se ha completó para que pueda tener su paga.
                        </Paper>
                </Grid>
            </Grid>
        </div>
        </div>
        <div className={classes.root1}>
            <Grid  container className={classes.root} spacing={3}>
                <Grid>

                </Grid>
                <Grid item xs={12} className={classes.cont}>
                    <Paper className={classes.paper}>
                        Somos JEGY una empresa desarrolladora de software que se inició como un grupo de amigos estudiantes de la carrera 
                        de Tecnología Superior en Desarrollo de Software de la Escuela Politécnica Nacional, TEACHlearn surgió como 
                        proyecto del semestres debido a las complicaciones que surgieron debido a la pandemia por el COVID-19 y en vista 
                        que los estudiantestenían vacíos que deja la educación online se pensó desarrollar un sistema que permita a los 
                        estudiantes solicitar una tutoría personalizada referente a la materia o materias y temas específicos donde ellos 
                        supongan que necesitan un esfuerzo adicional, otra motivación que impulsó a la creación de este proyecto se debe a 
                        que los estudiantes universitarios no disponen de fuentes de ingreso por ello, se busca que los profesores 
                        encargados de las tutorías sean estudiantes universitarios o también personas con conocimientos sólidos sobre las 
                        materias en las cuales los estudiantes tienen probelas ho en día. TEACHlearn busca consolidarse como una aplicación 
                        de apoyo para la mayoría de estudiantes.
                        </Paper>
                        <Paper className={classes.paper}>DESARROLLADORES: </Paper>
                        <Grid item xs={3}>
                            <Paper className={classes.paper}>Imagen 1</Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className={classes.paper}>Imagen 1</Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className={classes.paper}>Imagen 1</Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className={classes.paper}>Imagen 1</Paper>
                        </Grid>
                </Grid>

            </Grid>
        </div>
    
    </>
  )
}
