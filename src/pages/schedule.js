import React from 'react';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Routes from 'src/constants/routes';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => (
    {
        root: {
            textAlign:'center',
        },
       
    }));

    const Schedule= () =>{

    const [value,setValue]=React.useState(0)
    const handleTabs=(e,val)=>{
        console.warn(val)
        setValue(val)
    }
    const classes=useStyles();

    return(
        <div className={classes.root}>
            <div><h1 style={{textAlign:'center'}}>AGENDAR UNA TUTORIA</h1></div>
            <div><h2>Escoger una materia</h2>

                <div>
                    <h3>Tipo</h3>
                    <AppBar position="static" color="default">
                        <Tabs value={value} onChange={handleTabs}>
                        <Tab label="Primaria"/>
                        <Tab label="Secundaria"/>
                        <Tab label="Ofimática"/>
                        </Tabs>

                    </AppBar>
                    <LinkTab value={value} index={0}>
                            <Button
                                variant="contained"
                                color="primary">
                                materia primaria
                            </Button>
                    </LinkTab>
                    <LinkTab value={value} index={1}>
                        <Button
                            variant="contained"
                            color="primary">
                            materia secundaria
                        </Button>
                    </LinkTab>
                    <LinkTab value={value} index={2}>
                        <Button
                            variant="contained"
                            color="primary">
                            materia ofimatica
                        </Button>
                    </LinkTab>

                </div>

            </div>
            <div><h2>Tema en particular</h2>
                <form  noValidate autoComplete="off">
                    <TextField
                        id="outlined-name"
                        label="Tema en especial sobre la materia"
                        margin="normal"
                        variant="outlined"
                    />
                </form>
            </div>
            <div>
                <h3>Horario de la tutoria</h3>
                <form  noValidate>
                    <TextField
                        id="datetime-local"
                        label="Escoja el horario"
                        type="datetime-local"
                        defaultValue="2017-05-24T10:30"

                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </form>
            </div><br /><br /><br />
            <div >
                <Button variant="contained" color="primary">Reservar</Button><br /><br />
                <Link href={Routes.PROFILE}><Button variant="contained" color="primary">Regresar</Button></Link>
            </div>            
            <br /><br /><br />
        </div>
    );
} ;export default Schedule

function LinkTab(props){
const{children,value,index}=props;
return(<div>{
    value ===index &&(
    <h1>{children}</h1>)}
</div>)
}
