import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor:'#B4B29E',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
    backgroundColor:'#B4B29E',
  },
  resetContainer: {
    padding: theme.spacing(3),
    backgroundColor:'#B4B29E',
  },
  Continst:{
    backgroundColor:'#B4B29E',
  },
}));

function getSteps() {
    return ['Registro', 'Cargar Curriculum', 'Aceptar tutorías', 'Conectarse a la tutoría'];
}

function getStepContent(step) {
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

function VerticalLinearStepper2() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} className={classes.Continst} orientation="vertical">
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
          <Typography>Y ya! así de fácil</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reiniciar
          </Button>
        </Paper>
      )}
    </div>
  );
}
export default VerticalLinearStepper2;