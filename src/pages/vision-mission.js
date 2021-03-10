

import React from 'react';
import styles from '../styles/vision-mision.module.css'
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const Mision= () =>{
    return(
        <div>
            <div><h1 style={{textAlign: 'Center'}}>MISIÓN Y VISIÓN</h1></div>
            <div style={{marginLeft:90, marginRight:90}}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell><p>Generar, enseñar, difundir, aplicar e innovar conocimientos de nivel primario, secundario y
                            ofimática, enfocado en las materias de matemática, física, quimica, computacion, manejo
                            de microsoft office para el desarrollo sustentable de su modelo educativo para entornos vituales de aprendizaje
                            a fin de garantizar los principios de educación.</p>
                        </TableCell>
                        <TableCell align="center"><img src="http://gadgarzareal.gob.ec/wp-content/uploads/2019/09/vision.png" height={200}/></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                        <TableRow>
                            <TableCell align="center"><img src="https://guiaosc.org/wp-content/uploads/2018/01/misionicono.png" height={200}/></TableCell>
                            <TableCell align="right"><p>
                                TEACHLearn a través de un entorno de aprendizaje virtual facilita el acceso a una educación
                                para el desarrollo y el bienestar integral, con un modelo edcativo sustentable que promueve
                                el parendizaje y la mejora de concimientos de cada uno de sus estudiante mediante el uso de plataformas
                                web como ZOOM.
                            </p>
                            </TableCell>
                        </TableRow>

                </TableBody>
            </Table>
        </div>
            <footer className={styles.footer}>
                <Footer/>
            </footer>
        </div>
    )
};
export default Mision
