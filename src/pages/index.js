import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import CommentIcon from '@material-ui/icons/Comment';
import StepContent from '@material-ui/core/StepContent';
import {
  Card,
  CardActionArea,
  CardContent,
} from "@material-ui/core";
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

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
    root3: {
      maxWidth: 345,
      marginBottom: 40,
    },
    cont:{
        background: '#27AE60',
        color:'#000000',
    },
    paper: {
      background: '#27AE60',
      fontSize:15,
    },
    control: {
      padding: theme.spacing(2),
    },
    root: 
    {
      maxWidth: 1000,
      flexGrow: 1,
      alignContent: 'center',
      paddingLeft:250,
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      height: 50,
      paddingLeft: theme.spacing(4),
      backgroundColor: theme.palette.background.default,
    },
    img: {
      height: 300,
      display: 'block',
      maxWidth: 1200,
      overflow: 'hidden',
      width: '100%',
    },
    funcstudent:
    {
      height: 300,
      width: 1200,
      flexGrow: 1,
    },
    functeacher:
    {
      height: 300,
      width: 1200,
      flexGrow: 1,
    },
    instfuc:
    {     
      background:'#2E5857',
    },
    inst:
    {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: '#000000',
      background: '#2E5857',
    },
    secontitle:
    {
    alignItems: 'right',
    },
    root2: {
      width: '100%',
    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    actionsContainer: {
      marginBottom: theme.spacing(2),
    },
    resetContainer: {
      padding: theme.spacing(3),
    },
    body: {
      overflow: "hidden",
      display: "-webkit-box",
      "-webkit-line-clamp": 2,
      "-webkit-box-orient": "vertical",
    },
    root3: {
      maxWidth: 345,
      marginBottom: 40,
    },
  }));

  function getSteps() {
    return ['Registro', 'Agendar una tutoría', 'Pagar tutoría', 'Conectarse a la tutoría'];
  };

  function getStepContent(step) {
    switch (step) {
      case 0:
        return `Se registra como estudiante dando clic en el botón REGISTRO y complete el formulario`;
      case 1:
        return 'De clic en agendar cita, se le redigirá a otra ventana donde especificarás la materia y los temas donde tengas dificultades.';
      case 2:
        return `Luego de concretar el horario, la materia y los temas, deberá cancelar el valor por la tutoría sea por depósito o tranferencia.`;
      case 3:
        return `Conectarse por la plataforma digital de Zoom en el horario acordado con el profesor.`;
      default:
        return 'Unknown step';
    }
  };

  function getSteps2() {
    return ['Registro', 'Cargar Curriculum', 'Aceptar tutorías', 'Conectarse a la tutoría'];
  };

  function getStepContent2(step) {
    switch (step) {
      case 0:
        return `Se registra como profesor dando clic en el botón REGISTRO y complete el formulario`;
      case 1:
        return 'Suba la evidencia que comprueba el nivel de estudio requerido para poder dar una clase en vez validada la información se activará su cuenta, recibirá un correo confirmando que el proceso esté completo.';
      case 2:
        return `Recibirá notificaciones acerca de estudiantes solicitando tutorías de las materias que registre acepta siempre y cuando estés seguro que no tiene ningún problema con el horario.`;
      case 3:
        return `Conectarse por la plataforma digital de Zoom en el horario acordado con el estudiante, luego de la tutoría, tendrá que subir la evidencia de que la tutoría se ha completó para que pueda tener su paga.`;
      default:
        return 'Unknown step';
    }
  }

const Home=({comments}) => {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep0, setActiveStep0] = React.useState(0);
  const [activeStep, setActiveStep] = React.useState(0);
  const [activeStep2, setActiveStep2] = React.useState(0);
  const maxSteps = tutorialSteps.length;
  const steps = getSteps();
  const steps2 = getSteps2();

  const handleNext0 = () => {
    setActiveStep0((prevActiveStep0) => prevActiveStep0 + 1);
  };

  const handleBack0 = () => {
    setActiveStep0((prevActiveStep0) => prevActiveStep0 - 1);
  };
  const handleReset0 = () => {
    setActiveStep0(0);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleReset = () => {
    setActiveStep(0);
  };

  const handleNext2 = () => {
    setActiveStep2((prevActiveStep2) => prevActiveStep2 + 1);
  };

  const handleBack2 = () => {
    setActiveStep2((prevActiveStep2) => prevActiveStep2 - 1);
  };
  const handleReset2 = () => {
    setActiveStep2(0);
  };
  
  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  
  
    return (
        <>
          <div className={classes.root}>                
            <Paper square elevation={0} className={classes.header}>
              <Typography>{tutorialSteps[activeStep0].label}</Typography>
            </Paper>
            <AutoPlaySwipeableViews
              axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
              index={activeStep0}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {tutorialSteps.map((step, index) => (
                <div key={step.label}>
                  {Math.abs(activeStep0 - index) <= 2 ? (
                    <img className={classes.img} src={step.imgPath} alt={step.label} />
                  ) : null}
                </div>
              ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
              steps={maxSteps}
              position="static"
              variant="text"
              activeStep={activeStep0}
              nextButton={
                <Button size="small" onClick={handleNext0} disabled={activeStep0 === maxSteps - 1}>
                  Siguiente
                  {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                </Button>
              }
              backButton={
                <Button size="small" onClick={handleBack0} disabled={activeStep0 === 0}>
                  {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                  Anterior
                </Button>
              }
            />
          </div>
          <div className={classes.root2}>
                <h1>
                  <CastForEducationIcon style={{ fontSize: 40 }}/>
                    ¿Cómo funciona para alumnos?
                </h1>
            <Stepper activeStep={activeStep} orientation="vertical">
              {steps.map((label, index) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                  <StepContent>
                    <Typography>{getStepContent(index)}</Typography>
                    <div className={classes.actionsContainer}>
                      <div>
                        <Button
                          disabled={activeStep === 0}
                          onClick={handleBack}
                          className={classes.button}
                        >
                          Anterior
                        </Button>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={handleNext}
                          className={classes.button}
                        >
                          {activeStep === steps.length - 1 ? 'Finalizar' : 'Siguiente'}
                        </Button>
                      </div>
                    </div>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length && (
              <Paper square elevation={0} className={classes.resetContainer}>
                <Typography>Y eso es todo! :)</Typography>
                <Button onClick={handleReset} className={classes.button}>
                  Reiniciar
                </Button>
              </Paper>
            )}
        </div>
        <div className={classes.root2}>
                <h1>
                  <CastForEducationIcon style={{ fontSize: 40 }}/>
                    ¿Cómo funciona para tutores?
                </h1>
            <Stepper activeStep2={activeStep2} orientation="vertical">
              {steps2.map((label, index) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                  <StepContent>
                    <Typography>{getStepContent2(index)}</Typography>
                    <div className={classes.actionsContainer}>
                      <div>
                        <Button
                          disabled={activeStep2 === 0}
                          onClick={handleBack2}
                          className={classes.button}
                        >
                          Anterior
                        </Button>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={handleNext2}
                          className={classes.button}
                        >
                          {activeStep2 === steps2.length - 1 ? 'Finalizar' : 'Siguiente'}
                        </Button>
                      </div>
                    </div>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
            {activeStep2 === steps2.length && (
              <Paper square elevation={0} className={classes.resetContainer}>
                <Typography>Y eso es todo! :)</Typography>
                <Button onClick={handleReset2} className={classes.button}>
                  Reiniciar
                </Button>
              </Paper>
            )}
        </div>
        <h1 style={{fontSize:25}}>Comentarios de nuestro usuarios <CommentIcon style={{ fontSize: 40 }}/></h1>
        <Grid container direction="row" justify="space-between">          
          {comments.map((comment)=>(
            <Card className={classes.root3}>
              <CardActionArea style={{background:'#4DCD2F'}}>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h1"
                  className={classes.comment}
                  style={{ fontSize: 15 }}
                >
                  {comment.text}
                </Typography>                
              </CardContent>
            </CardActionArea>           
          </Card>
            ))}
        </Grid> 
        <Grid className={classes.root1}>                          
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
             <Grid container spacing={3}>
                <Grid item xs>
                   <Paper className={classes.paper}>Imagen 1</Paper>
                   </Grid>
                      <Grid item xs>
                          <Paper className={classes.paper}>Imagen 2</Paper>
                      </Grid>
                      <Grid item xs>
                          <Paper className={classes.paper}>Imagen 3</Paper>
                      </Grid>
                      <Grid item xs>
                          <Paper className={classes.paper}>Imagen 4</Paper>
                      </Grid>
                </Grid>                                                      
        </Grid>
    
      </>
  )
};
export default Home;

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/comments`);
  const comms = await res.json();

  const comments = comms.data;

  return {
    props: {
      comments,
    },
  };
}
