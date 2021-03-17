//import Users from "@/components/Users";
import Modals from "@/components/Modals";
import React from "react";
import withAuth from "@/hocs/withAuth";
import {useAuth} from "@/lib/auth";
import { makeStyles } from '@material-ui/core/styles';
import {Grid,Typography,Avatar} from '@material-ui/core';
import { deepOrange } from '@material-ui/core/colors';
import Routes from "src/constants/routes";
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Button, Link as MuiLink } from "@material-ui/core";
import Link from "next/link";

const StyledMenu = withStyles({
    paper: {
      border: '1px solid #d3d4d5',
    },
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />
  ));
  
  const StyledMenuItem = withStyles((theme) => ({
    root: {
      '&:focus': {
        backgroundColor: theme.palette.primary.main,
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
          color: theme.palette.common.white,
        },
      },
    },
  }))(MenuItem);

const Profile = () => {

    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
          '& > *': {
            margin: theme.spacing(1),
          },
        },
        improfile: {
          color: theme.palette.getContrastText(deepOrange[500]),
          backgroundColor: '#000000',
          width:150,
          height:150,
        },      
        buttonss:{
            textAlign:'center',
        },  
      }));

    const {user} = useAuth();
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <div className={classes.root}>
                        <Avatar className={classes.improfile}>{user.name}</Avatar>                    
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant='h4'>Información:</Typography><br /><br />
                    <Typography varian='h6'><strong>Nombre:</strong> {user.name}</Typography><br />
                    <Typography varian='h6'><strong>Apellido:</strong> {user.last_name}</Typography><br />
                    <Typography varian='h6'><strong>Correo electronico:</strong> {user.email}</Typography><br />
                    <Typography varian='h6'><strong>Cumpleaños:</strong> {user.birthday}</Typography><br />
                    <Typography varian='h6'><strong>Celular:</strong> {user.phone}</Typography><br />
                    <Typography varian='h6'><strong>Biografía:</strong> {user.biography}</Typography><br />

                </Grid>
                <br/><br/><br/>
                <Grid item xs={3} className={classes.buttonss}>
                    <div>
                        <Button
                            aria-controls="customized-menu"
                            aria-haspopup="true"
                            variant="contained"
                            color="primary"
                            onClick={handleClick}
                        >
                            Opciones
                        </Button>
                        <StyledMenu
                            id="customized-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <StyledMenuItem>
                                <Link href={Routes.SCHEDULE} passHref>
                                    <MuiLink>
                                        <Button>Registrar Tutoría</Button>
                                    </MuiLink>
                                </Link>
                            </StyledMenuItem>
                            <StyledMenuItem>
                                <Link href={Routes.EDITPROFILE} passHref>
                                    <MuiLink>
                                        <Button>Editar mi perfil</Button>
                                    </MuiLink>
                                </Link>
                            </StyledMenuItem>
                            <StyledMenuItem>
                                <Link href={Routes.ADDTUTORIA} passHref>
                                    <MuiLink>
                                        <Button>Registrar Tutoría</Button>
                                    </MuiLink>
                                </Link>
                            </StyledMenuItem>
                            <StyledMenuItem>
                                <Modals/>
                            </StyledMenuItem>
                        </StyledMenu>
                    </div>
                </Grid>
                <br /><br /><br />
            </Grid>
        </>
    );
};
export default withAuth(Profile);
//<h1>{data.name}</h1>
//<p>{data.last_name}</p>
//<p>{data.email}</p>
