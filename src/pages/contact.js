import React from 'react';
import styles from '../styles/contact.module.css'
import {Button, Col, Form, Image, Input, message, Row} from "antd";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Contact= () =>{
    return (
        <div>
            <Navigation/>

            <div><h1 style={{textAlign: 'Center'}}>CONTÁCTANOS</h1></div>
                <div className={styles.container}>
                    <p style={{margin: '0px'}}>
                        Bienvenido a nuestro sitio web. Estamos contentos de atender tu requerimiento.
                    </p>
                    Contenido con Imagenes
                </div>
            <Footer/>
        </div>
    )
};
export default Contact