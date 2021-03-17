import React from "react";
import Typography from "@material-ui/core/Typography";
import Map from "@/components/Map";
import Grid from "@material-ui/core/Grid";
import RoomIcon from "@material-ui/icons/Room";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import Button from "@material-ui/core/Button";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { useSpring, animated } from "react-spring/web.cjs";

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
  },
  subtitle: {
    textAlign: "center",
  },
  container: {
    textAlign: "center",
  },
  direction: {
    textAlign: "center",
  },
  contact: {
    padding: theme.spacing(2),
  },
  modal: {
    display: "flex",
    minHeight: 1000,
    minWidth: 1000,
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};
const Contact = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className={classes.title}>
        <h1>CONTÁCTANOS</h1>
      </div>
      <div className={classes.subtitle}>
        <h2>
          Bienvenido a nuestro sitio web. Estamos contentos de atender su
          requerimiento.
        </h2>
      </div>
      <Grid item xs={12} className={classes.contact} container spaccing={3}>
        <Grid item xs={7}>
          <img
            src="https://suempresa.com/wp-content/uploads/2020/03/asesoria-personalizada.png"
            alt="..."
            height={250}
            width={500}
          />
        </Grid>
        <Grid item xs={5}>
          <ul>
            <li>
              <a
                href="https://web.whatsapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon />
                <Typography variant="h7">02-201010 / 0961628542</Typography>
                <br />
                <br />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
                <Typography variant="h7">0961628542 / 0997918338</Typography>
                <br />
                <br />
              </a>
            </li>
            <li>
              <a
                href="https://mail.google.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MailOutlineIcon />
                <Typography variant="h7">yomara.diaz@epn.edu.ec</Typography>
                <br />
                <br />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
                <Typography variant="h7">TEACHlearn2021</Typography>
                <br />
                <br />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YouTubeIcon />
                <Typography variant="h7">
                  JEGY Empresa de Desarrollo de Software
                </Typography>
                <br />
                <br />
              </a>
            </li>
          </ul>
        </Grid>
      </Grid>
      <div className={classes.direction}>
        <RoomIcon style={{ fontSize: 40 }} />
        <Typography>Av. Ladrón de Guevara 253, Quito 170517</Typography>
        <Typography>-----</Typography>
        <Typography>
          Escuela Politécnica Nacional, Universidad pública de Quito
        </Typography>
        <br />
        <br />
        <Button variant="contained" color="primary" onClick={handleOpen}>
          Ver en el Mapa
        </Button>
        <Modal
          aria-labelledby="spring-modal-title"
          aria-describedby="spring-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <Map />
            </div>
          </Fade>
        </Modal>
      </div>
    </>
  );
};
export default Contact;
