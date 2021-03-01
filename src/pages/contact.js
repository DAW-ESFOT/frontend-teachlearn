import React from 'react';
import {Button, Col, Form, Image, Input, message, Row} from "antd";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Contact= () =>{
    return (
        <div>
            <Navigation/>
            <div className='section' id='Contact-Form'>
                <h1 className='hFrm' style={{textAlign: 'Center'}}>CONTÁCTANOS</h1>
                <div id='content-parra'>
                    <p style={{margin: '0px'}}>
                        Bienvenido a nuestro sitio web. Estamos contentos de atender tu requerimiento.
                    </p>
                </div>
            </div>
            <div>
                Contenido con imagenes
            </div>
            <Footer/>
        </div>
    )
};
export default Contact