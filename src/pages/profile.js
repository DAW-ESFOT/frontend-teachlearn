//import Users from "@/components/Users";
import Tutorials from "@/components/Tutorials";
import React from "react";
import withAuth from "@/hocs/withAuth";
import {useAuth} from "@/lib/auth";
import { makeStyles } from '@material-ui/core/styles';
import {Grid,Typography,Avatar} from '@material-ui/core';
import { deepOrange } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';

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
          backgroundColor: deepOrange[500],
          width:150,
          height:150,
        },      
        buttonss:{
            textAlign:'center',
        },  
      }));

    const {user} = useAuth();
    const classes = useStyles();
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <div className={classes.root}>
                        <Avatar className={classes.improfile}>{user.name}</Avatar>                    
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant='h4'>Información:</Typography>
                    <Typography varian='h6'>Nombre: {user.name}</Typography><Typography varian='h6'>Apellido: {user.last_name}</Typography>                                                        
                    <Typography varian='h6'>Cumpleaños: {user.birthday}</Typography>
                    <Typography varian='h6'>Celular: {user.phone}</Typography>                
                    <Typography varian='h6'>Biografía: {user.biography}</Typography>                         
                </Grid>
                <Grid item xs={3} className={classes.buttonss}>
                    <Button variant="contained" color="primary" disableElevation>Editar mi perfil</Button><br /><br />
                    <Button variant="contained" color="primary" disableElevation>Reservar una tutoría</Button>
                </Grid>
                <Tutorials/><br /><br /><br />
            </Grid>
        </>
    );
};
export default withAuth(Profile);
//<h1>{data.name}</h1>
//<p>{data.last_name}</p>
//<p>{data.email}</p>
