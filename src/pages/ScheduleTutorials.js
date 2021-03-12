import React from 'react';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Button from '@material-ui/core/Button';
import Tutorials from "@/components/Tutorials";



    const Schedule= () =>{

    const [value,setValue]=React.useState(0)
    const handleTabs=(e,val)=>{
        console.warn(val)
        setValue(val)
    }

    return(
        <div>
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

                                <Tutorials/>

                    </LinkTab>
                    <LinkTab value={value} index={1}>

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
                        label="text"
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
                        label="Next appointment"
                        type="datetime-local"
                        defaultValue="2017-05-24T10:30"

                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </form>
            </div>
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
